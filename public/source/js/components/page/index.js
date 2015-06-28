/**
 * Created by kyle on 2015/6/29.
 */
import React from 'react';
import {
    Panel,
    Button,
    ButtonToolbar
} from 'react-bootstrap';

var IndexPage = React.createClass({
    render:function(){
        "use strict";
        return <Panel header='APi'>
            <ButtonToolbar>
                <Button href='#'>Default</Button>
                <Button bsStyle='primary' href='#/project/project1'>Project1</Button>
            </ButtonToolbar>
        </Panel>;
    }

});

export default IndexPage