define(['exports', 'module', 'react', 'stores/api', 'stores/project', 'react-bootstrap', './project_list', './api_list'], function (exports, module, _react, _storesApi, _storesProject, _reactBootstrap, _project_list, _api_list) {
    /**
     * Created by kyle on 2015/6/29.
     */
    'use strict';

    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

    var _React = _interopRequireDefault(_react);

    var _ProjectList = _interopRequireDefault(_project_list);

    var _ApiList = _interopRequireDefault(_api_list);

    var IndexPage = _React['default'].createClass({
        displayName: 'IndexPage',

        getInitialState: function getInitialState() {
            return {};
        },
        componentDidMount: function componentDidMount() {
            'use strict';
        },
        componentWillUnmount: function componentWillUnmount() {
            'use strict';
        },
        render: function render() {
            'use strict';
            console.log('render');
            return _React['default'].createElement(
                _reactBootstrap.Panel,
                { header: 'Projects' },
                _React['default'].createElement(_ProjectList['default'], this.props),
                _React['default'].createElement('br', null),
                _React['default'].createElement(_ApiList['default'], this.props)
            );
        }

    });

    module.exports = IndexPage;
});