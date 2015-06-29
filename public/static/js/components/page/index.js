define(['exports', 'module', 'react', 'react-bootstrap'], function (exports, module, _react, _reactBootstrap) {
    /**
     * Created by kyle on 2015/6/29.
     */
    'use strict';

    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

    var _React = _interopRequireDefault(_react);

    var IndexPage = _React['default'].createClass({
        displayName: 'IndexPage',

        render: function render() {
            'use strict';
            console.log(this.props);
            return _React['default'].createElement(
                _reactBootstrap.Panel,
                { header: 'APi' },
                _React['default'].createElement(
                    _reactBootstrap.ButtonToolbar,
                    null,
                    _React['default'].createElement(
                        _reactBootstrap.Button,
                        { href: '#', bsSize: 'small' },
                        'All'
                    ),
                    _React['default'].createElement(
                        _reactBootstrap.Button,
                        { bsStyle: 'primary', bsSize: 'small', className: 'pull-right', onClick: this.createProject },
                        'New'
                    ),
                    _React['default'].createElement(
                        _reactBootstrap.ButtonToolbar,
                        null,
                        _React['default'].createElement(
                            _reactBootstrap.Button,
                            { bsStyle: 'primary', bsSize: 'small', href: '#/project/project1',
                                className: this.props.projectId == 'abc' ? 'active' : '' },
                            'Project1'
                        ),
                        _React['default'].createElement(
                            _reactBootstrap.Button,
                            { bsStyle: 'primary', bsSize: 'small', href: '#/project/project2' },
                            'Project2'
                        )
                    )
                ),
                _React['default'].createElement('br', null),
                _React['default'].createElement(
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
                                '#'
                            ),
                            _React['default'].createElement(
                                'th',
                                null,
                                'First Name'
                            ),
                            _React['default'].createElement(
                                'th',
                                null,
                                'Last Name'
                            ),
                            _React['default'].createElement(
                                'th',
                                null,
                                'Username'
                            )
                        )
                    ),
                    _React['default'].createElement(
                        'tbody',
                        null,
                        _React['default'].createElement(
                            'tr',
                            null,
                            _React['default'].createElement(
                                'td',
                                null,
                                '1'
                            ),
                            _React['default'].createElement(
                                'td',
                                null,
                                'Mark'
                            ),
                            _React['default'].createElement(
                                'td',
                                null,
                                'Otto'
                            ),
                            _React['default'].createElement(
                                'td',
                                null,
                                '@mdo'
                            )
                        ),
                        _React['default'].createElement(
                            'tr',
                            null,
                            _React['default'].createElement(
                                'td',
                                null,
                                '2'
                            ),
                            _React['default'].createElement(
                                'td',
                                null,
                                'Jacob'
                            ),
                            _React['default'].createElement(
                                'td',
                                null,
                                'Thornton'
                            ),
                            _React['default'].createElement(
                                'td',
                                null,
                                '@fat'
                            )
                        ),
                        _React['default'].createElement(
                            'tr',
                            null,
                            _React['default'].createElement(
                                'td',
                                null,
                                '3'
                            ),
                            _React['default'].createElement(
                                'td',
                                { colSpan: '2' },
                                'Larry the Bird'
                            ),
                            _React['default'].createElement(
                                'td',
                                null,
                                '@twitter'
                            )
                        )
                    )
                )
            );
        },
        createProject: function createProject() {
            'use strict';
        }

    });

    module.exports = IndexPage;
});