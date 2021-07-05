"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _taggedTemplateLiteralLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteralLoose"));

var _react = _interopRequireDefault(require("react"));

var _util = require("./util");

var _commonTags = require("common-tags");

var _templateObject, _templateObject2;

var COMPONENT_KEY = 'plugin-google-marketing-platform-analytics';

var Analytics = /*#__PURE__*/function () {
  function Analytics(_temp, optimize_id) {
    var _ref = _temp === void 0 ? {} : _temp,
        id = _ref.id,
        params = _ref.params,
        config = _ref.config;

    this.id = id;
    this.optimize_id = optimize_id;
    this.params = Object.assign({}, params);
    this.config = Object.assign({}, config);
  }

  var _proto = Analytics.prototype;

  _proto.paramsString = function paramsString() {
    return (0, _util.paramStringFromObject)(this.params);
  };

  _proto.setup = function setup() {
    return /*#__PURE__*/_react.default.createElement("script", {
      key: COMPONENT_KEY + "-setup",
      dangerouslySetInnerHTML: {
        __html: (0, _commonTags.stripIndent)(_templateObject || (_templateObject = (0, _taggedTemplateLiteralLoose2.default)(["\n            function gtag(){dataLayer.push(arguments);}\n            gtag('js', new Date());\n          "])))
      }
    });
  };

  _proto.script = function script() {
    if (!this.id) return null;
    var config = this.optimize_id ? {
      optimize_id: this.optimize_id
    } : {};
    config = (0, _extends2.default)({}, config, this.config);
    return /*#__PURE__*/_react.default.createElement("script", {
      key: COMPONENT_KEY + "-script",
      dangerouslySetInnerHTML: {
        __html: (0, _commonTags.stripIndent)(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteralLoose2.default)(["\n            gtag('config', '", "', ", ");\n          "])), this.id, JSON.stringify(config))
      }
    });
  };

  return Analytics;
}();

var _default = Analytics;
exports.default = _default;