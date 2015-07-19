/**
 * Created by kyle on 2015/6/29.
 */
import React from 'react';
import {ApiActions, ApiStore} from 'stores/api';
import {ProjectActions, ProjectStore} from 'stores/project';
import {
    Panel,
    Button,
    ButtonToolbar,
    Table
} from 'react-bootstrap';
import ProjectList from './project_list';
import ApiList from './api_list';

var IndexPage = React.createClass({
    getInitialState: function () {
        return {};
    },
    componentDidMount: function () {
        "use strict";
    },
    componentWillUnmount: function () {
        "use strict";
    },
    render: function () {
        "use strict";
        console.log('render')
        return <Panel header='Projects'>
            <ProjectList {...this.props}/>
            <br/>
            <ApiList {...this.props}/>
        </Panel>;
    }

});

export default IndexPage;