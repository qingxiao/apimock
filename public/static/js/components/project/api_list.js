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
        },
        componentWillUnmount: function componentWillUnmount() {
            'use strict';
            this.offApiStore();
        },
        /* componentWillUpdate  : function () {
         "use strict";
           this.getList();
         },*/
        render: function render() {
            'use strict';
            console.log('render');
            return _React['default'].createElement(
                _reactBootstrap.Table,
                { striped: true, bordered: true, condensed: true, hover: true },
                _React['default'].createElement(
                    'thead',
                    null,
                    _React['default'].createElement(
                        'tr',
                        null,
                        _React['default'].createElement(
                            'th',
                            null,
                            '序号'
                        ),
                        _React['default'].createElement(
                            'th',
                            null,
                            '名称'
                        ),
                        _React['default'].createElement(
                            'th',
                            null,
                            'URL'
                        ),
                        _React['default'].createElement(
                            'th',
                            null,
                            '开发者'
                        ),
                        _React['default'].createElement(
                            'th',
                            null,
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
                                _React['default'].createElement(
                                    _reactBootstrap.Button,
                                    { bsStyle: 'link', bsSize: 'xsmall', href: apiEditUrl },
                                    'Edit'
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
        }

    });

    module.exports = ApiList;
});