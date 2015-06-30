/**
 * Created by kyle on 2015/6/29.
 */
import React from 'react';
import {ProjectActions, ProjectStore} from 'stores/project'
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
            list: []
        };
    },
    componentDidMount: function () {
        "use strict";
        ProjectStore.listen(data => this.setState(data));
        this.getList();
    },
    render: function () {
        "use strict";
        function preventDefault() {};
        return <Panel header='Projects'>
            <ButtonToolbar>
                <Button href='#' bsSize='small'>All</Button>

                <ButtonToolbar>
                    {this.state.list.map(function (item) {
                        var newProjectApiUrl = '#/project/' + item.id + '/api';
                        return (
                            <SplitButton title={item.name} bsSize='small'
                                         className={this.props.projectId == 'abc'?'active':''}>
                                <MenuItem onSelect={preventDefault} href={newProjectApiUrl}>New API</MenuItem>
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
                <tr>
                    <td>1</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td>
                        <Button bsStyle='link' bsSize='xsmall' href='#/api/edit'>Edit</Button>
                    </td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                    <td>@fat</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td >Larry the Bird</td>
                    <td>@twitter</td>
                    <td>@twitter</td>
                    <td>@twitter</td>
                </tr>
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
    }

});

export default IndexPage