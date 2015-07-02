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

    var ApiActions = _Reflux['default'].createActions(['list', 'edit', 'save', 'create', 'delete']);

    var ApiStore = _Reflux['default'].createStore({
        listenables: ApiActions,
        onList: function onList(projectId) {
            'use strict';
            (0, _reqwest2['default'])({
                url: '/projects/' + projectId + '/api',
                method: 'get',
                type: 'json',
                success: (function (res) {
                    if (res.status == 0) {
                        this.trigger({ apis: res.data });
                    }
                }).bind(this)
            });
        },
        onEdit: function onEdit(projectId, apiId) {
            'use strict';
            (0, _reqwest2['default'])({
                url: '/projects/' + projectId + '/api/' + apiId,
                method: 'get',
                type: 'json',
                success: (function (res) {
                    if (res.status == 0) {
                        this.trigger(res.data);
                    }
                }).bind(this)
            });
        },
        onCreate: function onCreate(projectId, data) {
            'use strict';
            (0, _reqwest2['default'])({
                url: '/projects/' + projectId + '/api',
                method: 'post',
                type: 'json',
                data: data,
                success: (function (res) {
                    if (res.status == 0) {
                        alert('success');
                        this.trigger('saveSuccess');
                    } else {
                        alert(res.msg);
                    }
                }).bind(this)
            });
        },
        onSave: function onSave(projectId, apiId, data) {
            if (projectId && !apiId) {
                this.onCreate(projectId, data);
                return;
            }
            'use strict';
            (0, _reqwest2['default'])({
                url: '/projects/' + projectId + '/api/' + apiId,
                method: 'post',
                type: 'json',
                data: data,
                success: (function (res) {
                    if (res.status == 0) {
                        alert('success');
                        this.trigger('saveSuccess');
                    } else {
                        alert(res.msg);
                    }
                }).bind(this)
            });
        },
        onDelete: function onDelete() {
            'use strict';
            (0, _reqwest2['default'])({
                url: '/projects/' + projectId + '/api/' + apiId,
                method: 'post',
                type: 'json',
                data: {
                    name: name
                },
                success: (function (res) {
                    if (res.status == 0) {} else {
                        alert(res.msg);
                    }
                }).bind(this)
            });
        }
    });

    exports.ApiActions = ApiActions;
    exports.ApiStore = ApiStore;
});