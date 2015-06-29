define(['exports', 'module', 'react', 'components/page/index'], function (exports, module, _react, _componentsPageIndex) {
    /**
     * Created by kyle on 2015/6/29.
     */
    'use strict';

    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

    var _React = _interopRequireDefault(_react);

    var _Index = _interopRequireDefault(_componentsPageIndex);

    var IndexPage = _React['default'].createClass({
        displayName: 'IndexPage',

        getInitialState: function getInitialState() {
            return { porjectId: 'abc' };
        },
        render: function render() {
            'use strict';
            return _React['default'].createElement(_Index['default'], { projectId: this.state.porjectId });
        }
    });

    module.exports = IndexPage;
});