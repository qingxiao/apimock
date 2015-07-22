define(['exports', 'module', 'react', 'react-bootstrap', 'plugins/jsoneditor/jsoneditor'], function (exports, module, _react, _reactBootstrap, _pluginsJsoneditorJsoneditor) {
    /**
     * Created by kyle on 2015/7/19.
     */
    'use strict';

    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

    var _React = _interopRequireDefault(_react);

    var _JSONEditor = _interopRequireDefault(_pluginsJsoneditorJsoneditor);

    var ParameterListEdit = _React['default'].createClass({
        displayName: 'ParameterListEdit',

        getInitialState: function getInitialState() {
            return {};
        },
        componentDidMount: function componentDidMount() {
            this.initCodeEditor();
            this.initTreeEditor();
        },
        componentWillUnmount: function componentWillUnmount() {},
        //dom 更新完成后do this
        componentDidUpdate: function componentDidUpdate(nextProps, nextState) {},
        render: function render() {
            return _React['default'].createElement(
                _reactBootstrap.Row,
                null,
                _React['default'].createElement(_reactBootstrap.Col, { md: 6, id: 'treeEditor' }),
                _React['default'].createElement(_reactBootstrap.Col, { md: 6, id: 'codeEditor' })
            );
        },
        initCodeEditor: function initCodeEditor() {
            var options = {
                'mode': 'text',
                'search': true,
                change: (function () {
                    var text = this.codeEditor.getText();
                    try {
                        var data = JSON.parse(text);
                        this.props.parentHandler(data);
                        this.treeEditor.set(data);
                    } catch (e) {}
                }).bind(this)
            };
            this.codeEditor = this.initJSONEditor('codeEditor', options);
        },
        initTreeEditor: function initTreeEditor() {
            var options = {
                'mode': 'tree',
                change: (function () {
                    var text = this.treeEditor.getText();
                    try {
                        var data = JSON.parse(text);
                        this.props.parentHandler(data);
                        this.codeEditor.set(data);
                    } catch (e) {}
                }).bind(this)
            };
            this.treeEditor = this.initJSONEditor('treeEditor', options);
        },
        initJSONEditor: function initJSONEditor(domId, options) {
            var container = document.getElementById(domId);
            var editor = new _JSONEditor['default'](container, options, this.props.defaultJSON);
            return editor;
        }

    });

    module.exports = ParameterListEdit;
});