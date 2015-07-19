define(['exports', 'module', 'react', 'react-bootstrap'], function (exports, module, _react, _reactBootstrap) {
    /**
     * Created by kyle on 2015/7/19.
     */
    'use strict';

    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

    var _React = _interopRequireDefault(_react);

    var ParameterListEdit = _React['default'].createClass({
        displayName: 'ParameterListEdit',

        getInitialState: function getInitialState() {
            'use strict';
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
            return _React['default'].createElement(
                _reactBootstrap.Row,
                null,
                _React['default'].createElement(
                    _reactBootstrap.Col,
                    { md: 12, id: 'fuck' },
                    'fuck'
                )
            );
        }

    });

    module.exports = ParameterListEdit;
});