/**
 * Created by kyle on 2015/7/5.
 */
import React from 'react';
import {ProjectActions, ProjectStore} from 'stores/project';
import router from '../../../router';
import {
    Panel,
    Button,
    ButtonToolbar,
    SplitButton,
    MenuItem
} from 'react-bootstrap';

var ProjcetList = React.createClass({
    getInitialState: function () {

        return {
            projects: []
        };
    },
    componentDidMount: function () {
        "use strict";
        this.offProjectStore = ProjectStore.listen(data => this.setState(data));
        this.getList();
    },
    componentWillUnmount: function () {
        "use strict";
        this.offProjectStore();
    },
    /* componentWillUpdate  : function () {
     "use strict";

     this.getList();
     },*/
    render: function () {
        "use strict";
        return <div>
            <ButtonToolbar>
                <Button href='#' bsSize='small'>总览</Button>
                <Button bsStyle='primary' bsSize='small'
                        onClick={this.createProject}>新建项目</Button>
            </ButtonToolbar>
            <hr/>
            <ButtonToolbar>
                {this.state.projects.map(function (item) {
                    var projectUrl = '#/project/' + item.id;
                    var newProjectApiUrl = projectUrl + '/api';
                    var active = {};
                    if (this.props.projectId == item.id) {
                        active.active = true;
                    }
                    return (
                        <SplitButton title={item.name} bsSize='small' href={projectUrl} {...active}>
                            <MenuItem onSelect={this.addApi} href={newProjectApiUrl}>新建接口</MenuItem>
                            <MenuItem divider/>
                            <MenuItem
                                onClick={this.deleteProject.bind(this, item.id)}>删除接口</MenuItem>
                        </SplitButton>
                    );
                }, this)}

            </ButtonToolbar>
        </div>;

    },
    createProject: function () {
        "use strict";
        var name = window.prompt('请输入项目名');
        name && ProjectActions.create(name);
    },
    deleteProject: function (projectId) {
        "use strict";
        ProjectActions.delete(projectId);
    },
    getList: function () {
        "use strict";
        ProjectActions.list();
    },
    addApi: function (eventKey, href, target) {
        "use strict";
        router.setRoute(href.replace(/^#/, ''));
    }

});
export default ProjcetList;