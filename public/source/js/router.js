import Router from 'director';
import React from 'react';
import {ButtonToolbar,Button} from 'react-bootstrap';

var routes = {
    '/':function(){
        "use strict";
        pageTo('index');
    },
    '/project/:pid':function(projectId){
        "use strict";
        pageTo('project', projectId);
    }

};


function pageTo(...opt){
    var page = opt.shift();
    var pkg = 'components/page/'+page;
    requirejs([pkg], function(Page){
        "use strict";
        React.render(<Page/>, document.body);
    });
}


var router = Router(routes);
router.init();
router.setRoute('/');

export default router;
