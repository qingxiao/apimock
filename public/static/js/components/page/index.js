define(['exports', 'module', 'react', 'stores/project', 'stores/api', 'router', 'react-bootstrap'], function (exports, module, _react, _storesProject, _storesApi, _router, _reactBootstrap) {
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
                projects: [],
                apis: []
            };
        },
        componentDidMount: function componentDidMount() {
            'use strict';

            var _this = this;

            //this.offProjectStore = ProjectStore.listen(data => this.setState(data));
            this.offApiStore = _storesApi.ApiStore.listen(function (data) {
                return _this.setState(data);
            });
            this.getList();
        },
        componentWillUnmount: function componentWillUnmount() {
            'use strict';
            this.offProjectStore();
            this.offApiStore();
        },
        componentWillUpdate: function componentWillUpdate() {
            'use strict';

            //this.getList();
        },
        render: function render() {
            'use strict';
            console.log('render');
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
                        this.state.projects.map(function (item) {
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
            console.log(this.props);
            _storesProject.ProjectActions.list();
            _storesApi.ApiActions.list(this.props.projectId);
        },
        addApi: function addApi(eventKey, href, target) {
            'use strict';
            _router2['default'].setRoute(href.replace(/^#/, ''));
        }

    });

    module.exports = IndexPage;
});