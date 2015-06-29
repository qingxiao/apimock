/**
 * Created by kyle on 2015/6/29.
 */
import React from 'react';
import Index from 'components/page/index';

var IndexPage = React.createClass({
    getInitialState: function() {
        return {porjectId:'abc'};
    },
    render:function(){
        "use strict";
        return <Index projectId={this.state.porjectId}/>;
    }
});

export default IndexPage