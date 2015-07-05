/**
 * Created by kyle on 2015/6/29.
 */
import React from 'react';
import {ApiActions,ApiStore} from 'stores/api';
import router from 'router';
import {
    Panel,
    Button,
    ButtonToolbar,
    Grid,
    Row,
    Col,
    FormControls,
    Input
} from 'react-bootstrap';

var ApiEditPage = React.createClass({
    getInitialState: function () {
        return {name: 'api name'};
    },
    componentDidMount: function () {
        "use strict";
        this.offApiStroe = ApiStore.listen(data => {
            if (data == 'saveSuccess') {
                this.onSaved();
            } else {
                this.setState(data)

            }
        });

        var apiId = this.props.apiId;
        var projectId = this.props.projectId;
        if (apiId) {
            this.getData(projectId, apiId);
        }
    },
    componentWillUnmount: function () {
        "use strict";
        this.offApiStroe();
    },
    render: function () {
        "use strict";
        var header = this.props.apiId ? 'New Api' : 'Edit Api';
        var projectUrl = '#/project/' + this.props.projectId;
        this._projectUrl = projectUrl;
        return <Panel header={header}>
            <form className="form-horizontal">
                <Input type='text' label='Api名称' labelClassName='col-md-2'
                       wrapperClassName='col-md-8' value={this.state.name} name='name' onChange={this.handleChange}/>
                <Input type='text' label='URL' labelClassName='col-md-2'
                       wrapperClassName='col-md-8' value={this.state.url} name='url' onChange={this.handleChange}/>
                <Input type='text' label='开发者' labelClassName='col-md-2'
                       wrapperClassName='col-md-8' value={this.state.developer} name='developer'
                       onChange={this.handleChange}/>
                <Row>
                    <Col md={4} mdOffset={2}>
                        <ButtonToolbar>
                            <Button bsStyle='primary' bsSize='small' onClick={this.onSave}>保存</Button>
                            <Button bsStyle='warning' bsSize='small' href={projectUrl}>取消</Button>
                        </ButtonToolbar>
                    </Col>
                </Row>
            </form>
        </Panel>;
    },
    //获取已有api数据
    getData: function () {
        "use strict";
        var {projectId, apiId} = this.props;
        ApiActions.edit(projectId, apiId);
    },
    onSave: function () {
        "use strict";
        var {projectId, apiId} = this.props;
        ApiActions.save(projectId, apiId, this.state);
    },
    //保存成功
    onSaved: function () {
        "use strict";
        router.setRoute(this._projectUrl.replace(/^#/, ''));
    },
    //输入框改变之后修改state值
    handleChange: function (event) {
        "use strict";
        var target = event.target;
        this.setState({[target.name]: target.value});
    }

});

export default ApiEditPage;