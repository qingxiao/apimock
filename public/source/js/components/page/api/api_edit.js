/**
 * Created by kyle on 2015/6/29.
 */
import React from 'react';
import {ApiActions,ApiStore} from 'stores/api';
import router from 'router';
import ParameterListEdit from './param_edit';
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
        return {name: '', projectName:''};
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
    },
    render: function () {
        "use strict";
        var header = this.props.apiId ? 'Edit Api' : 'New Api';
        var projectUrl = '#/project/' + this.props.projectId;
        this._projectUrl = projectUrl;
        return <Panel header={header}>
            <form className="form-horizontal">
                <FormControls.Static type='text' label='项目名称' labelClassName='col-md-2'
                       wrapperClassName='col-md-8' value={this.state.projectName} />
                <Input type='text' label='接口名称' labelClassName='col-md-2'
                       wrapperClassName='col-md-8' value={this.state.name} name='name' onChange={this.handleChange}/>
                <Input type='text' label='接口URL' labelClassName='col-md-2'
                       wrapperClassName='col-md-8' value={this.state.url} name='url' onChange={this.handleChange}/>
                <Input type='text' label='开发者' labelClassName='col-md-2'
                       wrapperClassName='col-md-8' value={this.state.developer} name='developer'
                       onChange={this.handleChange}/>
                <Input type='textarea' label='接口描述' labelClassName='col-md-2'
                       wrapperClassName='col-md-8' value={this.state.description} name='description'
                       onChange={this.handleChange}/>
                <div className='form-group'>
                    <label className='control-label  col-md-2'>数据类型</label>
                    <div className='col-md-8'>
                        <label className='radio-inline'><input type='radio' name='dataType' value='json'/>json</label>
                        <label className='radio-inline'><input type='radio' name='dataType' value='text'/>text</label>
                    </div>
                </div>
                <Input type='select' label='接口类型'  labelClassName='col-md-2'
                       wrapperClassName='col-md-8' value={this.state.type} name='type'
                       onChange={this.handleChange}>
                    <option value='get'>get</option>
                    <option value='post'>post</option>
                    <option value='put'>put</option>
                    <option value='delete'>delete</option>
                    <option value='update'>update</option>
                </Input>
                <div className='form-group'>
                    <label className='control-label  col-md-2'>请求参数</label>
                    <div className='col-md-8'>
                        <ParameterListEdit/>
                    </div>
                </div>
                <Input type='textarea' label='返回字段' labelClassName='col-md-2'
                       wrapperClassName='col-md-8' value={this.state.response} name='description'
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
    }

});

export default ApiEditPage;