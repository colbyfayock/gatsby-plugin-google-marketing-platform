"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _taggedTemplateLiteralLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteralLoose"));

var _react = _interopRequireDefault(require("react"));

var _commonTags = require("common-tags");

var _util = require("./util");

var _jsxFileName = "/Users/colby/Code/gatsby-plugin-google-marketing-platform/packages/gatsby-plugin-google-marketing-platform/src/lib/analytics.js";

function _templateObject2() {
  var data = (0, _taggedTemplateLiteralLoose2.default)(["\n            gtag('config', '", "', ", ");\n          "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteralLoose2.default)(["\n            function gtag(){dataLayer.push(arguments);}\n            gtag('js', new Date());\n          "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var COMPONENT_KEY = 'plugin-google-marketing-platform-analytics';

var Analytics =
/*#__PURE__*/
function () {
  function Analytics(_temp, optimize_id) {
    var _ref = _temp === void 0 ? {} : _temp,
        id = _ref.id,
        params = _ref.params;

    this.id = id;
    this.optimize_id = optimize_id;
    this.params = Object.assign({}, params);
  }

  var _proto = Analytics.prototype;

  _proto.paramsString = function paramsString() {
    return (0, _util.paramStringFromObject)(this.params);
  };

  _proto.setup = function setup() {
    return _react.default.createElement("script", {
      key: COMPONENT_KEY + "-setup",
      dangerouslySetInnerHTML: {
        __html: (0, _commonTags.stripIndent)(_templateObject())
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: this
    });
  };

  _proto.script = function script() {
    if (!this.id) return null;
    var config = this.optimize_id ? {
      optimize_id: this.optimize_id
    } : {};
    return _react.default.createElement("script", {
      key: COMPONENT_KEY + "-script",
      dangerouslySetInnerHTML: {
        __html: (0, _commonTags.stripIndent)(_templateObject2(), this.id, JSON.stringify(config))
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: this
    });
  };

  return Analytics;
}();

var _default = Analytics;
exports.default = _default;