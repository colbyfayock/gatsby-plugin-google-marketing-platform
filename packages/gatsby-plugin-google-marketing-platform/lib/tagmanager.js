"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _taggedTemplateLiteralLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteralLoose"));

var _react = _interopRequireDefault(require("react"));

var _commonTags = require("common-tags");

var _util = require("./util");

var _jsxFileName = "/Users/colby/Code/gatsby-plugin-google-marketing-platform/packages/gatsby-plugin-google-marketing-platform/src/lib/tagmanager.js";

function _templateObject3() {
  var data = (0, _taggedTemplateLiteralLoose2.default)(["\n            <iframe\n              src=\"https://www.googletagmanager.com/ns.html?id=", "", "\"\n              height=\"0\"\n              width=\"0\"\n              style=\"display: none; visibility: hidden\"\n            ></iframe>"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = (0, _taggedTemplateLiteralLoose2.default)(["\n            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':\n            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],\n            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=\n            'https://www.googletagmanager.com/gtm.js?id='+i+dl+'", "';f.parentNode.insertBefore(j,f);\n            })(window,document,'script','dataLayer', '", "');"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteralLoose2.default)(["\n            window.dataLayer = window.dataLayer || [", "];\n          "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var COMPONENT_KEY = 'plugin-google-marketing-platform-tagmanager';

var TagManager =
/*#__PURE__*/
function () {
  function TagManager(_temp, dataLayer) {
    var _ref = _temp === void 0 ? {} : _temp,
        id = _ref.id,
        params = _ref.params;

    this.id = id;
    this.params = Object.assign({}, params);
    this.data = Object.assign({}, dataLayer);
  }

  var _proto = TagManager.prototype;

  _proto.paramsString = function paramsString() {
    if (!this.params || Object.keys(this.params).length === 0) return '';
    return (0, _util.paramStringFromObject)(this.params);
  };

  _proto.dataLayer = function dataLayer() {
    if (!this.id || !this.data) return null;
    var data = Object.keys(this.data).length > 0 ? JSON.stringify(this.data) : '';
    return _react.default.createElement("script", {
      key: COMPONENT_KEY + "-script",
      dangerouslySetInnerHTML: {
        __html: (0, _commonTags.stripIndent)(_templateObject(), data)
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    });
  };

  _proto.script = function script() {
    if (!this.id) return null;
    return _react.default.createElement("script", {
      key: COMPONENT_KEY + "-script",
      dangerouslySetInnerHTML: {
        __html: (0, _commonTags.stripIndent)(_templateObject2(), this.paramsString(), this.id)
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      __self: this
    });
  };

  _proto.noscript = function noscript() {
    if (!this.id) return null;
    return _react.default.createElement("noscript", {
      key: COMPONENT_KEY + "-noscript",
      dangerouslySetInnerHTML: {
        __html: (0, _commonTags.stripIndent)(_templateObject3(), this.id, this.paramsString())
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67
      },
      __self: this
    });
  };

  return TagManager;
}();

var _default = TagManager;
exports.default = _default;