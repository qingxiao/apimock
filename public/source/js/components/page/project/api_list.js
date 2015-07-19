/**
 * Created by kyle on 2015/7/5.
 */
import React from 'react';
import {ApiActions, ApiStore} from 'stores/api';
import {
    Panel,
    Button,
    ButtonToolbar,
    Table,
    SplitButton,
    MenuItem
} from 'react-bootstrap';

var ApiList = React.createClass({
    getInitialState: function () {
        return {
            apis: []
        };
    },
    componentDidMount: function () {
        "use strict";
        this.offApiStore = ApiStore.listen(data => this.setState(data));
        this.getList();
    },
    componentWillUnmount: function () {
        "use strict";
        this.offApiStore();
    },
    //在组件接收到新的 props 的时候调用。在初始化渲染的时候，该方法不会调用。
    componentWillReceiveProps: function (props) {
        "use strict";
        this.props = props;
        this.getList();
    },
    render: function () {
        "use strict";
        console.log('render apilist ', this.props)
        var inlineBlockStyle = {display:'inline-block'};

        return <Table striped bordered condensed hover className="text-center">
            <thead>
            <tr>
                <th className="text-center">序号</th>
                <th className="text-center">名称</th>
                <th className="text-center">项目名</th>
                <th className="text-center">URL</th>
                <th className="text-center">开发者</th>
                <th className="text-center">创建时间</th>
                <th className="text-center">操作</th>
            </tr>
            </thead>
            <tbody>
            {this.state.apis.map(function (item, idx) {
                var apiEditUrl = '#/project/' + item.projectId + '/api/' + item.id;
                return (
                    <tr>
                        <td>{idx}</td>
                        <td>{item.name}</td>
                        <td>{item.projectName}</td>
                        <td>{item.url}</td>
                        <td>{item.developer}</td>
                        <td>{item.createTime}</td>
                        <td>
                            <ButtonToolbar className='text-center' style={inlineBlockStyle}>
                                <Button bsStyle='primary' bsSize='xsmall' href={apiEditUrl}>Edit</Button>
                                <Button bsStyle='warning' bsSize='xsmall'
                                        onClick={this.onDeleteItem.bind(this, item.id)}>Delete</Button>
                            </ButtonToolbar>
                        </td>
                    </tr>
                );
            }, this)}

            </tbody>
        </Table>;
    },
    getList: function () {
        "use strict";
        console.log(this.props)
        ApiActions.list(this.props.projectId);
    },
    onDeleteItem: function (apiId, e) {
        "use strict";
        ApiActions.delete(this.props.projectId, apiId);
    }

});

export default ApiList;