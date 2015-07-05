define(['exports', 'module', 'react', 'stores/project', 'react-bootstrap'], function (exports, module, _react, _storesProject, _reactBootstrap) {
    /**
     * Created by kyle on 2015/7/5.
     */
    'use strict';

    var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

    var _React = _interopRequireDefault(_react);

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
            router.setRoute(href.replace(/^#/, ''));
        }

    });
    module.exports = ProjcetList;
});