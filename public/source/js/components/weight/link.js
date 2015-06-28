/**
 * Created by kyle on 2015/6/28.
 */
import React from 'react';

var C = React.createClass({
    render:function(){
        "use strict";

        return <a href={'#'+this.props.to} className={this.props.className}>{this.props.text}</a>;
    }
});

export default C;