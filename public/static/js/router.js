define(['exports', 'module', 'director', 'react', 'react-bootstrap'], function (exports, module, _director, _react, _reactBootstrap) {
    'use strict';

    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

    var _Router = _interopRequireDefault(_director);

    var _React = _interopRequireDefault(_react);

    var routes = {
        '/': function _() {
            'use strict';
            pageTo('index');
        },
        '/project/:pid': function projectPid(projectId) {
            'use strict';
            pageTo('index', { projectId: projectId });
        }

    };

    function pageTo(page, options) {
        var pkg = 'components/page/' + page;
        requirejs([pkg], function (Page) {
            'use strict';
            _React['default'].render(_React['default'].createElement(Page, options), document.body);
        });
    }

    var router = new _Router['default'](routes);
    router.configure({

        notfound: function notfound() {
            'use strict';
            pageTo('index');
        }
    });
    router.init('/');

    module.exports = router;
});