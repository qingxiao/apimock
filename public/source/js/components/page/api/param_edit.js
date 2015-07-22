/**
 * Created by kyle on 2015/7/19.
 */
"use strict";

import React from 'react';
import {
    Row,
    Col,
    FormControls,
    Input
} from 'react-bootstrap';
import JSONEditor from 'plugins/jsoneditor/jsoneditor';

var ParameterListEdit = React.createClass({
    getInitialState: function () {
        return {};
    },
    componentDidMount: function () {
        this.initCodeEditor();
        this.initTreeEditor();
    },
    componentWillUnmount: function () {
    },
    //dom 更新完成后do this
    componentDidUpdate :function( nextProps,  nextState){
    },
    render:function(){
        return <Row>
            <Col md={6} id='treeEditor'></Col>
            <Col md={6} id='codeEditor'></Col>
        </Row>;
    },
    initCodeEditor:function(){
        var options = {
            "mode": "text",
            "search": true,
            change : function(){
                var text = this.codeEditor.getText();
                try{
                    var data = JSON.parse(text);
                    this.props.parentHandler(data);
                    this.treeEditor.set(data);
                }catch(e){

                }
            }.bind(this)
        };
        this.codeEditor = this.initJSONEditor('codeEditor', options);
    },
    initTreeEditor:function(){
        var options = {
            "mode": "tree",
            change : function(){
                var text = this.treeEditor.getText();
                try{
                    var data = JSON.parse(text);
                    this.props.parentHandler(data);
                    this.codeEditor.set(data);
                }catch(e){

                }
            }.bind(this)
        };
        this.treeEditor = this.initJSONEditor('treeEditor', options);
    },
    initJSONEditor:function(domId, options){
        var container = document.getElementById(domId);
        var editor = new JSONEditor(container, options, this.props.defaultJSON);
        return editor;
    }

});

export default ParameterListEdit;