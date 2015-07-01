define(['exports', 'module', 'react', 'stores/project', 'router', 'react-bootstrap'], function (exports, module, _react, _storesProject, _router, _reactBootstrap) {
    /**
     * Created by kyle on 2015/6/29.
     */
    'use strict';

    var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

    var _React = _interopRequireDefault(_react);

    var _router2 = _interopRequireDefault(_router);

    var IndexPage = _React['default'].createClass({
        displayName: 'IndexPage',

        getInitialState: function getInitialState() {

            return {
                list: []
            };
        },
        componentDidMount: function componentDidMount() {
            'use strict';

            var _this = this;

            _storesProject.ProjectStore.listen(function (data) {
                return _this.setState(data);
            });
            this.getList();
        },
        render: function render() {
            'use strict';
            return _React['default'].createElement(
                _reactBootstrap.Panel,
                { header: 'Projects' },
                _React['default'].createElement(
                    _reactBootstrap.ButtonToolbar,
                    null,
                    _React['default'].createElement(
                        _reactBootstrap.Button,
                        { href: '#', bsSize: 'small' },
                        'All'
                    ),
                    _React['default'].createElement(
                        _reactBootstrap.ButtonToolbar,
                        null,
                        this.state.list.map(function (item) {
                            var projectUrl = '#/project/' + item.id;
                            var newProjectApiUrl = projectUrl + '/api';
                            var active = {};
                            if (this.props.projectId == item.id) {
                                active.active = true;
                            }
                            return _React['default'].createElement(
                                _reactBootstrap.SplitButton,
                                _extends({ title: item.name, bsSize: 'small', href: projectUrl }, active),
                                _React['default'].createElement(
                                    _reactBootstrap.MenuItem,
                                    { onSelect: this.addApi, href: newProjectApiUrl },
                                    'New API'
                                ),
                                _React['default'].createElement(_reactBootstrap.MenuItem, { divider: true }),
                                _React['default'].createElement(
                                    _reactBootstrap.MenuItem,
                                    {
                                        onClick: this.deleteProject.bind(this, item.id) },
                                    'Delete'
                                )
                            );
                        }, this)
                    ),
                    _React['default'].createElement(
                        _reactBootstrap.Button,
                        { bsStyle: 'primary', bsSize: 'small',
                            onClick: this.createProject },
                        'Create'
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
                            ),
                            _React['default'].createElement(
                                'td',
                                null,
                                _React['default'].createElement(
                                    _reactBootstrap.Button,
                                    { bsStyle: 'link', bsSize: 'xsmall', href: '#/api/edit' },
                                    'Edit'
                                )
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
                                null,
                                'Larry the Bird'
                            ),
                            _React['default'].createElement(
                                'td',
                                null,
                                '@twitter'
                            ),
                            _React['default'].createElement(
                                'td',
                                null,
                                '@twitter'
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
            var name = window.prompt('请输入项目名');
            _storesProject.ProjectActions.create(name);
        },
        deleteProject: function deleteProject(projectId) {
            'use strict';
            _storesProject.ProjectActions['delete'](projectId);
        },
        getList: function getList() {
            'use strict';
            _storesProject.ProjectActions.list();
        },
        addApi: function addApi(eventKey, href, target) {
            'use strict';
            _router2['default'].setRoute(href);
        }

    });

    module.exports = IndexPage;
});