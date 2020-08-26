"use strict";

var _vue = _interopRequireDefault(require("vue"));

var _vuelidate = _interopRequireDefault(require("vuelidate"));

var _bootstrapVue = _interopRequireDefault(require("bootstrap-vue"));

require("bootstrap/dist/css/bootstrap.css");

require("bootstrap-vue/dist/bootstrap-vue.css");

require("./assets/style.sass");

var _App = _interopRequireDefault(require("./App.vue"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_vue["default"].use(_vuelidate["default"]);

_vue["default"].use(_bootstrapVue["default"]);

_vue["default"].config.productionTip = false;
_vue["default"].config.devtools = true;
new _vue["default"]({
  render: function render(h) {
    return h(_App["default"]);
  }
}).$mount('#app');