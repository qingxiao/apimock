define(['exports', 'module', 'react', 'stores/api', 'router', './param_edit', 'react-bootstrap'], function (exports, module, _react, _storesApi, _router, _param_edit, _reactBootstrap) {
    /**
     * Created by kyle on 2015/6/29.
     */
    'use strict';

    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

    function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

    var _React = _interopRequireDefault(_react);

    var _router2 = _interopRequireDefault(_router);

    var _ParameterListEdit = _interopRequireDefault(_param_edit);

    var ApiEditPage = _React['default'].createClass({
        displayName: 'ApiEditPage',

        getInitialState: function getInitialState() {
            return { name: '', projectName: '' };
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
        },
        render: function render() {
            'use strict';
            var header = this.props.apiId ? 'Edit Api' : 'New Api';
            var projectUrl = '#/project/' + this.props.projectId;
            this._projectUrl = projectUrl;
            return _React['default'].createElement(
                _reactBootstrap.Panel,
                { header: header },
                _React['default'].createElement(
                    'form',
                    { className: 'form-horizontal' },
                    _React['default'].createElement(_reactBootstrap.FormControls.Static, { type: 'text', label: '项目名称', labelClassName: 'col-md-2',
                        wrapperClassName: 'col-md-8', value: this.state.projectName }),
                    _React['default'].createElement(_reactBootstrap.Input, { type: 'text', label: '接口名称', labelClassName: 'col-md-2',
                        wrapperClassName: 'col-md-8', value: this.state.name, name: 'name', onChange: this.handleChange }),
                    _React['default'].createElement(_reactBootstrap.Input, { type: 'text', label: '接口URL', labelClassName: 'col-md-2',
                        wrapperClassName: 'col-md-8', value: this.state.url, name: 'url', onChange: this.handleChange }),
                    _React['default'].createElement(_reactBootstrap.Input, { type: 'text', label: '开发者', labelClassName: 'col-md-2',
                        wrapperClassName: 'col-md-8', value: this.state.developer, name: 'developer',
                        onChange: this.handleChange }),
                    _React['default'].createElement(_reactBootstrap.Input, { type: 'textarea', label: '接口描述', labelClassName: 'col-md-2',
                        wrapperClassName: 'col-md-8', value: this.state.description, name: 'description',
                        onChange: this.handleChange }),
                    _React['default'].createElement(
                        'div',
                        { className: 'form-group' },
                        _React['default'].createElement(
                            'label',
                            { className: 'control-label  col-md-2' },
                            '数据类型'
                        ),
                        _React['default'].createElement(
                            'div',
                            { className: 'col-md-8' },
                            _React['default'].createElement(
                                'label',
                                { className: 'radio-inline' },
                                _React['default'].createElement('input', { type: 'radio', name: 'dataType', value: 'json' }),
                                'json'
                            ),
                            _React['default'].createElement(
                                'label',
                                { className: 'radio-inline' },
                                _React['default'].createElement('input', { type: 'radio', name: 'dataType', value: 'text' }),
                                'text'
                            )
                        )
                    ),
                    _React['default'].createElement(
                        _reactBootstrap.Input,
                        { type: 'select', label: '接口类型', labelClassName: 'col-md-2',
                            wrapperClassName: 'col-md-8', value: this.state.type, name: 'type',
                            onChange: this.handleChange },
                        _React['default'].createElement(
                            'option',
                            { value: 'get' },
                            'get'
                        ),
                        _React['default'].createElement(
                            'option',
                            { value: 'post' },
                            'post'
                        ),
                        _React['default'].createElement(
                            'option',
                            { value: 'put' },
                            'put'
                        ),
                        _React['default'].createElement(
                            'option',
                            { value: 'delete' },
                            'delete'
                        ),
                        _React['default'].createElement(
                            'option',
                            { value: 'update' },
                            'update'
                        )
                    ),
                    _React['default'].createElement(
                        'div',
                        { className: 'form-group' },
                        _React['default'].createElement(
                            'label',
                            { className: 'control-label  col-md-2' },
                            '请求参数'
                        ),
                        _React['default'].createElement(
                            'div',
                            { className: 'col-md-8' },
                            _React['default'].createElement(_ParameterListEdit['default'], null)
                        )
                    ),
                    _React['default'].createElement(_reactBootstrap.Input, { type: 'textarea', label: '返回字段', labelClassName: 'col-md-2',
                        wrapperClassName: 'col-md-8', value: this.state.response, name: 'description',
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
        }

    });

    module.exports = ApiEditPage;
});