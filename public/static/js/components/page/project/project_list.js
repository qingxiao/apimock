define(['exports', 'module', 'react', 'stores/project', '../../../router', 'react-bootstrap'], function (exports, module, _react, _storesProject, _router, _reactBootstrap) {
    /**
     * Created by kyle on 2015/7/5.
     */
    'use strict';

    var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

    var _React = _interopRequireDefault(_react);

    var _router2 = _interopRequireDefault(_router);

    var ProjcetList = _React['default'].createClass({
        displayName: 'ProjcetList',

        getInitialState: function getInitialState() {

            return {
                projects: []
            };
        },
        componentDidMount: function componentDidMount() {
            'use strict';

            var _this = this;

            this.offProjectStore = _storesProject.ProjectStore.listen(function (data) {
                return _this.setState(data);
            });
            this.getList();
        },
        componentWillUnmount: function componentWillUnmount() {
            'use strict';
            this.offProjectStore();
        },
        /* componentWillUpdate  : function () {
         "use strict";
           this.getList();
         },*/
        render: function render() {
            'use strict';
            return _React['default'].createElement(
                'div',
                null,
                _React['default'].createElement(
                    _reactBootstrap.ButtonToolbar,
                    null,
                    _React['default'].createElement(
                        _reactBootstrap.Button,
                        { href: '#', bsSize: 'small' },
                        '总览'
                    ),
                    _React['default'].createElement(
                        _reactBootstrap.Button,
                        { bsStyle: 'primary', bsSize: 'small',
                            onClick: this.createProject },
                        '新建项目'
                    )
                ),
                _React['default'].createElement('hr', null),
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
                                '新建接口'
                            ),
                            _React['default'].createElement(_reactBootstrap.MenuItem, { divider: true }),
                            _React['default'].createElement(
                                _reactBootstrap.MenuItem,
                                {
                                    onClick: this.deleteProject.bind(this, item.id) },
                                '删除接口'
                            )
                        );
                    }, this)
                )
            );
        },
        createProject: function createProject() {
            'use strict';
            var name = window.prompt('请输入项目名');
            name && _storesProject.ProjectActions.create(name);
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
            _router2['default'].setRoute(href.replace(/^#/, ''));
        }

    });
    module.exports = ProjcetList;
});