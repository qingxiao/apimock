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
        return <ButtonToolbar>
            <Button href='#' bsSize='small'>All</Button>

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
                            <MenuItem onSelect={this.addApi} href={newProjectApiUrl}>New API</MenuItem>
                            <MenuItem divider/>
                            <MenuItem
                                onClick={this.deleteProject.bind(this, item.id)}>Delete</MenuItem>
                        </SplitButton>
                    );
                }, this)}
            </ButtonToolbar>
            <Button bsStyle='primary' bsSize='small'
                    onClick={this.createProject}>Create</Button>

        </ButtonToolbar>;

    },
    createProject: function () {
        "use strict";
        var name = window.prompt('请输入项目名');
        ProjectActions.create(name);
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