define(['exports', 'module', 'react', 'stores/api', 'router', 'react-bootstrap'], function (exports, module, _react, _storesApi, _router, _reactBootstrap) {
    /**
     * Created by kyle on 2015/6/29.
     */
    'use strict';

    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

    function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

    var _React = _interopRequireDefault(_react);

    var _router2 = _interopRequireDefault(_router);

    var ApiEditPage = _React['default'].createClass({
        displayName: 'ApiEditPage',

        getInitialState: function getInitialState() {
            return { name: 'api name' };
        },
        componentDidMount: function componentDidMount() {
            'use strict';

            var _this = this;

            this.offApiStroe = _storesApi.ApiStore.listen(function (data) {
                if (data == 'saveSuccess') {
                    _this.onSaved();
                } else {
                    _this.setState(data);
                }
            });

            var apiId = this.props.apiId;
            var projectId = this.props.projectId;
            if (apiId) {
                this.getData(projectId, apiId);
            }
        },
        componentWillUnmount: function componentWillUnmount() {
            'use strict';
            this.offApiStroe();
        },
        render: function render() {
            'use strict';
            var header = this.props.apiId ? 'New Api' : 'Edit Api';
            var projectUrl = '#/project/' + this.props.projectId;
            this._projectUrl = projectUrl;
            return _React['default'].createElement(
                _reactBootstrap.Panel,
                { header: header },
                _React['default'].createElement(
                    'form',
                    { className: 'form-horizontal' },
                    _React['default'].createElement(_reactBootstrap.Input, { type: 'text', label: 'Api名称', labelClassName: 'col-md-2',
                        wrapperClassName: 'col-md-8', value: this.state.name, name: 'name', onChange: this.handleChange }),
                    _React['default'].createElement(_reactBootstrap.Input, { type: 'text', label: 'URL', labelClassName: 'col-md-2',
                        wrapperClassName: 'col-md-8', value: this.state.url, name: 'url', onChange: this.handleChange }),
                    _React['default'].createElement(_reactBootstrap.Input, { type: 'text', label: '开发者', labelClassName: 'col-md-2',
                        wrapperClassName: 'col-md-8', value: this.state.developer, name: 'developer',
                        onChange: this.handleChange }),
                    _React['default'].createElement(
                        _reactBootstrap.Row,
                        null,
                        _React['default'].createElement(
                            _reactBootstrap.Col,
                            { md: 4, mdOffset: 2 },
                            _React['default'].createElement(
                                _reactBootstrap.ButtonToolbar,
                                null,
                                _React['default'].createElement(
                                    _reactBootstrap.Button,
                                    { bsStyle: 'primary', bsSize: 'small', onClick: this.onSave },
                                    '保存'
                                ),
                                _React['default'].createElement(
                                    _reactBootstrap.Button,
                                    { bsStyle: 'warning', bsSize: 'small', href: projectUrl },
                                    '取消'
                                )
                            )
                        )
                    )
                )
            );
        },
        //获取已有api数据
        getData: function getData() {
            'use strict';
            var _props = this.props;
            var projectId = _props.projectId;
            var apiId = _props.apiId;

            _storesApi.ApiActions.edit(projectId, apiId);
        },
        onSave: function onSave() {
            'use strict';
            var _props2 = this.props;
            var projectId = _props2.projectId;
            var apiId = _props2.apiId;

            _storesApi.ApiActions.save(projectId, apiId, this.state);
        },
        //保存成功
        onSaved: function onSaved() {
            'use strict';
            _router2['default'].setRoute(this._projectUrl.replace(/^#/, ''));
        },
        //输入框改变之后修改state值
        handleChange: function handleChange(event) {
            'use strict';
            var target = event.target;
            this.setState(_defineProperty({}, target.name, target.value));
        }

    });

    module.exports = ApiEditPage;
});