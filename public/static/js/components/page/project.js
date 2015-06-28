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
            return _React['default'].createElement(
                _reactBootstrap.Panel,
                { header: 'APi' },
                _React['default'].createElement(
                    _reactBootstrap.ButtonToolbar,
                    null,
                    _React['default'].createElement(
                        _reactBootstrap.Button,
                        { href: '#' },
                        'Default'
                    )
                )
            );
        }
    });

    module.exports = IndexPage;
});