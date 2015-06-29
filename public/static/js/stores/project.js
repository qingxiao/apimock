define(["exports", "reflux"], function (exports, _reflux) {
    /**
     * Created by kyle on 2015/6/30.
     */
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

    var _Reflux = _interopRequireDefault(_reflux);

    var ProjectActions = _Reflux["default"].createActions(["list", "create", "delete"]);

    var ProjectStore = _Reflux["default"].createStore({
        listenables: ProjectActions,
        onList: function onList() {
            "use strict";
            console.log("onList");
            var data = { list: [{ name: "p1", id: "xfasd" }] };
            this.trigger(data);
        },
        onCreate: function onCreate() {},
        onDelete: function onDelete() {}
    });

    exports.ProjectActions = ProjectActions;
    exports.ProjectStore = ProjectStore;
});