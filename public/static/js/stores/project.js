define(['exports', 'reflux', 'reqwest'], function (exports, _reflux, _reqwest) {
    /**
     * Created by kyle on 2015/6/30.
     */
    'use strict';

    Object.defineProperty(exports, '__esModule', {
        value: true
    });

    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

    var _Reflux = _interopRequireDefault(_reflux);

    var _reqwest2 = _interopRequireDefault(_reqwest);

    var ProjectActions = _Reflux['default'].createActions(['list', 'create', 'delete']);

    var ProjectStore = _Reflux['default'].createStore({
        listenables: ProjectActions,
        onList: function onList() {
            'use strict';
            (0, _reqwest2['default'])({
                url: '/projects',
                method: 'get',
                type: 'json',
                success: (function (res) {
                    this.trigger({ projects: res.data });
                }).bind(this)
            });
        },
        onCreate: function onCreate(name) {
            'use strict';
            (0, _reqwest2['default'])({
                url: '/projects',
                method: 'post',
                type: 'json',
                data: {
                    name: name
                },
                success: (function (res) {
                    if (res.status == 0) {
                        this.onList();
                    } else {
                        alert(res.msg);
                    }
                }).bind(this)
            });
        },
        onDelete: function onDelete(id) {
            'use strict';
            (0, _reqwest2['default'])({
                url: '/projects/' + id,
                method: 'delete',
                type: 'json',
                success: (function (res) {
                    if (res.status == 0) {
                        this.onList();
                    } else {
                        alert(res.msg);
                    }
                }).bind(this)
            });
        }
    });

    exports.ProjectActions = ProjectActions;
    exports.ProjectStore = ProjectStore;
});