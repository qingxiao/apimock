/**
 * Created by kyle on 2015/6/29.
 */
import React from 'react';
import {
    Panel,
    Button,
    ButtonToolbar,
    Table
} from 'react-bootstrap';

var IndexPage = React.createClass({
    render:function(){
        "use strict";
        console.log(this.props);
        return <Panel header='APi'>

            <ButtonToolbar>
                <Button href='#' bsSize='small'>All</Button>
                <Button bsStyle='primary' bsSize='small' className='pull-right' onClick={this.createProject}>New</Button>

                <ButtonToolbar>
                    <Button bsStyle='primary' bsSize='small' href='#/project/project1'
                            className={this.props.projectId == 'abc'?'active':''}>Project1</Button>
                    <Button bsStyle='primary' bsSize='small' href='#/project/project2'>Project2</Button>
                </ButtonToolbar>
            </ButtonToolbar>
            <br/>
            <Table striped bordered condensed hover>
                <thead>
                <tr>
                    <th>#</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Username</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>1</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td colSpan="2">Larry the Bird</td>
                    <td>@twitter</td>
                </tr>
                </tbody>
            </Table>
        </Panel>;
    },
    createProject:function(){
        "use strict";

    }

});

export default IndexPage