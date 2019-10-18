"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _taggedTemplateLiteralLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteralLoose"));

var _react = _interopRequireDefault(require("react"));

var _commonTags = require("common-tags");

var _jsxFileName = "/Users/colby/Code/gatsby-plugin-google-marketing-platform/packages/gatsby-plugin-google-marketing-platform/src/lib/optimize.js";

function _templateObject2() {
  var data = (0, _taggedTemplateLiteralLoose2.default)(["\n              (function(a,s,y,n,c,h,i,d,e){s.className+=' '+y;h.start=1*new Date;\n              h.end=i=function(){s.className=s.className.replace(RegExp(' ?'+y),'')};\n              (a[n]=a[n]||[]).hide=h;setTimeout(function(){i();h.end=null},c);h.timeout=c;\n              })(window,document.documentElement,'async-hide','dataLayer',", ",{'", "':true});\n            "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteralLoose2.default)(["\n            .async-hide { opacity: 0 !important }\n          "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var COMPONENT_KEY = 'plugin-google-marketing-platform-optimize';

var Optimize =
/*#__PURE__*/
function () {
  function Optimize(_temp) {
    var _ref = _temp === void 0 ? {} : _temp,
        _ref$id = _ref.id,
        id = _ref$id === void 0 ? null : _ref$id,
        _ref$timeout = _ref.timeout,
        timeout = _ref$timeout === void 0 ? 500 : _ref$timeout;

    this.id = id;
    this.timeout = timeout;
  }

  var _proto = Optimize.prototype;

  _proto.asyncHide = function asyncHide() {
    if (!this.id) return null;
    return _react.default.createElement(_react.default.Fragment, {
      key: COMPONENT_KEY + "-asynchide",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      __self: this
    }, _react.default.createElement("style", {
      key: COMPONENT_KEY + "-asyncHide-style",
      dangerouslySetInnerHTML: {
        __html: (0, _commonTags.stripIndent)(_templateObject())
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: this
    }), _react.default.createElement("script", {
      key: COMPONENT_KEY + "-asyncHide-script",
      dangerouslySetInnerHTML: {
        __html: (0, _commonTags.stripIndent)(_templateObject2(), this.timeout, this.id)
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: this
    }));
  };

  return Optimize;
}();

var _default = Optimize;
exports.default = _default;