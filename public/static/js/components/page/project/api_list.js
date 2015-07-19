define(['exports', 'module', 'react', 'stores/api', 'react-bootstrap'], function (exports, module, _react, _storesApi, _reactBootstrap) {
    /**
     * Created by kyle on 2015/7/5.
     */
    'use strict';

    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

    var _React = _interopRequireDefault(_react);

    var ApiList = _React['default'].createClass({
        displayName: 'ApiList',

        getInitialState: function getInitialState() {
            return {
                apis: []
            };
        },
        componentDidMount: function componentDidMount() {
            'use strict';

            var _this = this;

            this.offApiStore = _storesApi.ApiStore.listen(function (data) {
                return _this.setState(data);
            });
            this.getList();
        },
        componentWillUnmount: function componentWillUnmount() {
            'use strict';
            this.offApiStore();
        },
        //在组件接收到新的 props 的时候调用。在初始化渲染的时候，该方法不会调用。
        componentWillReceiveProps: function componentWillReceiveProps(props) {
            'use strict';
            this.props = props;
            this.getList();
        },
        render: function render() {
            'use strict';
            console.log('render apilist ', this.props);
            var inlineBlockStyle = { display: 'inline-block' };

            return _React['default'].createElement(
                _reactBootstrap.Table,
                { striped: true, bordered: true, condensed: true, hover: true, className: 'text-center' },
                _React['default'].createElement(
                    'thead',
                    null,
                    _React['default'].createElement(
                        'tr',
                        null,
                        _React['default'].createElement(
                            'th',
                            { className: 'text-center' },
                            '序号'
                        ),
                        _React['default'].createElement(
                            'th',
                            { className: 'text-center' },
                            '名称'
                        ),
                        _React['default'].createElement(
                            'th',
                            { className: 'text-center' },
                            '项目名'
                        ),
                        _React['default'].createElement(
                            'th',
                            { className: 'text-center' },
                            'URL'
                        ),
                        _React['default'].createElement(
                            'th',
                            { className: 'text-center' },
                            '开发者'
                        ),
                        _React['default'].createElement(
                            'th',
                            { className: 'text-center' },
                            '创建时间'
                        ),
                        _React['default'].createElement(
                            'th',
                            { className: 'text-center' },
                            '操作'
                        )
                    )
                ),
                _React['default'].createElement(
                    'tbody',
                    null,
                    this.state.apis.map(function (item, idx) {
                        var apiEditUrl = '#/project/' + item.projectId + '/api/' + item.id;
                        return _React['default'].createElement(
                            'tr',
                            null,
                            _React['default'].createElement(
                                'td',
                                null,
                                idx
                            ),
                            _React['default'].createElement(
                                'td',
                                null,
                                item.name
                            ),
                            _React['default'].createElement(
                                'td',
                                null,
                                item.projectName
                            ),
                            _React['default'].createElement(
                                'td',
                                null,
                                item.url
                            ),
                            _React['default'].createElement(
                                'td',
                                null,
                                item.developer
                            ),
                            _React['default'].createElement(
                                'td',
                                null,
                                item.createTime
                            ),
                            _React['default'].createElement(
                                'td',
                                null,
                                _React['default'].createElement(
                                    _reactBootstrap.ButtonToolbar,
                                    { className: 'text-center', style: inlineBlockStyle },
                                    _React['default'].createElement(
                                        _reactBootstrap.Button,
                                        { bsStyle: 'primary', bsSize: 'xsmall', href: apiEditUrl },
                                        'Edit'
                                    ),
                                    _React['default'].createElement(
                                        _reactBootstrap.Button,
                                        { bsStyle: 'warning', bsSize: 'xsmall',
                                            onClick: this.onDeleteItem.bind(this, item.id) },
                                        'Delete'
                                    )
                                )
                            )
                        );
                    }, this)
                )
            );
        },
        getList: function getList() {
            'use strict';
            console.log(this.props);
            _storesApi.ApiActions.list(this.props.projectId);
        },
        onDeleteItem: function onDeleteItem(apiId, e) {
            'use strict';
            _storesApi.ApiActions['delete'](this.props.projectId, apiId);
        }

    });

    module.exports = ApiList;
});