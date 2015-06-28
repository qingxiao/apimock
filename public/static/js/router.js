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
            pageTo('project', projectId);
        }

    };

    function pageTo() {
        for (var _len = arguments.length, opt = Array(_len), _key = 0; _key < _len; _key++) {
            opt[_key] = arguments[_key];
        }

        var page = opt.shift();
        var pkg = 'components/page/' + page;
        requirejs([pkg], function (Page) {
            'use strict';
            _React['default'].render(_React['default'].createElement(Page, null), document.body);
        });
    }

    var router = (0, _Router['default'])(routes);
    router.init();
    router.setRoute('/');

    module.exports = router;
});