/**
 * Created by kyle on 2015/6/29.
 */
import React from 'react';
import {ProjectActions, ProjectStore} from 'stores/project';
import {ApiActions, ApiStore} from 'stores/api';
import router from 'router';
import {
    Panel,
    Button,
    ButtonToolbar,
    Table,
    SplitButton,
    MenuItem
} from 'react-bootstrap';

var IndexPage = React.createClass({
    getInitialState: function () {

        return {
            projects: [],
            apis:[]
        };
    },
    componentDidMount: function () {
        "use strict";
        ProjectStore.listen(data => this.setState(data));
        ApiStore.listen(data => this.setState(data));
        this.getList();
        console.log('diMount')
    },
  /*  componentWillUpdate: function () {
        "use strict";
    },*/
    render: function () {
        "use strict";
        return <Panel header='Projects'>
            <ButtonToolbar>
                <Button href='#' bsSize='small'>All</Button>

                <ButtonToolbar>
                    {this.state.projects.map(function (item) {
                        var projectUrl = '#/project/' + item.id;
                        var newProjectApiUrl = projectUrl + '/api';
                        var active = {};
                        if(this.props.projectId == item.id){
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

            </ButtonToolbar>
            <br/>
            <Table striped bordered condensed hover>
                <thead>
                <tr>
                    <th>序号</th>
                    <th>名称</th>
                    <th>URL</th>
                    <th>开发者</th>
                    <th>操作</th>
                </tr>
                </thead>
                <tbody>
                {this.state.apis.map(function (item, idx) {
                    var apiEditUrl = '#/project/' + item.projectId + '/api/'+ item.id;
                    return (
                        <tr>
                            <td>{idx}</td>
                            <td>{item.name}</td>
                            <td>{item.url}</td>
                            <td>{item.developer}</td>
                            <td>
                                <Button bsStyle='link' bsSize='xsmall' href={apiEditUrl}>Edit</Button>
                            </td>
                        </tr>
                    );
                }, this)}

                </tbody>
            </Table>
        </Panel>;
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
        ApiActions.list(this.props.projectId);
    },
    addApi:function(eventKey, href, target){
        "use strict";
        router.setRoute(href.replace(/^#/, ''));
    }

});

export default IndexPage