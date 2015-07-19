define(['exports', 'module', 'director', 'react', 'react-bootstrap'], function (exports, module, _director, _react, _reactBootstrap) {
    'use strict';

    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

    var _Router = _interopRequireDefault(_director);

    var _React = _interopRequireDefault(_react);

    var routes = {
        //首页
        '/': function _() {
            'use strict';
            pageTo('project/index');
        },
        //当前选中项目下的api列表
        '/project/:pid': function projectPid(projectId) {
            'use strict';
            pageTo('project/index', { projectId: projectId });
        },
        //新增api
        '/project/:pid/api': function projectPidApi(projectId) {
            'use strict';
            pageTo('api/api_edit', { projectId: projectId });
        },
        //编辑api
        '/project/:pid/api/:apiId': function projectPidApiApiId(projectId, apiId) {
            'use strict';
            pageTo('api/api_edit', { projectId: projectId, apiId: apiId });
        }
    };

    function pageTo(page, options) {
        var pkg = 'components/page/' + page;
        requirejs([pkg], function (Page) {
            'use strict';
            console.log(options);
            //todo
            // React.unmountComponentAtNode(document.body);
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