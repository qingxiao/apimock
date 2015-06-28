define(['exports', 'module', 'react'], function (exports, module, _react) {
    /**
     * Created by kyle on 2015/6/28.
     */
    'use strict';

    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

    var _React = _interopRequireDefault(_react);

    var C = _React['default'].createClass({
        displayName: 'C',

        render: function render() {
            'use strict';

            return _React['default'].createElement(
                'a',
                { href: '#' + this.props.to, className: this.props.className },
                this.props.text
            );
        }
    });

    module.exports = C;
});