"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _taggedTemplateLiteralLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteralLoose"));

var _react = _interopRequireDefault(require("react"));

var _commonTags = require("common-tags");

var _templateObject, _templateObject2, _templateObject3;

var COMPONENT_KEY = 'plugin-google-marketing-platform-optimize';
var ACTIVATION_METHODS = ['observer'];

var Optimize = /*#__PURE__*/function () {
  function Optimize(settings, tagmanager_id) {
    if (settings === void 0) {
      settings = {};
    }

    var _settings = settings,
        _settings$timeout = _settings.timeout,
        timeout = _settings$timeout === void 0 ? 500 : _settings$timeout,
        _settings$activateOn = _settings.activateOn,
        activateOn = _settings$activateOn === void 0 ? false : _settings$activateOn,
        _settings$id = _settings.id,
        id = _settings$id === void 0 ? null : _settings$id;
    this.optimize_id = id;
    this.tagmanager_id = tagmanager_id;
    this.timeout = timeout;
    this.activateOn = activateOn;
  }

  var _proto = Optimize.prototype;

  _proto.asyncHide = function asyncHide() {
    if (!this.tagmanager_id || !this.optimize_id) return null;
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: COMPONENT_KEY + "-asynchide"
    }, /*#__PURE__*/_react.default.createElement("style", {
      key: COMPONENT_KEY + "-asyncHide-style",
      dangerouslySetInnerHTML: {
        __html: (0, _commonTags.stripIndent)(_templateObject || (_templateObject = (0, _taggedTemplateLiteralLoose2.default)(["\n            .async-hide { opacity: 0 !important }\n          "])))
      }
    }), /*#__PURE__*/_react.default.createElement("script", {
      key: COMPONENT_KEY + "-asyncHide-script",
      dangerouslySetInnerHTML: {
        __html: (0, _commonTags.stripIndent)(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteralLoose2.default)(["\n              (function(a,s,y,n,c,h,i,d,e){s.className+=' '+y;h.start=1*new Date;\n              h.end=i=function(){s.className=s.className.replace(RegExp(' ?'+y),'')};\n              (a[n]=a[n]||[]).hide=h;setTimeout(function(){i();h.end=null},c);h.timeout=c;\n              })(window,document.documentElement,'async-hide','dataLayer',", ",{'", "':true});\n            "])), this.timeout, this.tagmanager_id)
      }
    }));
  };

  _proto.activation = function activation() {
    if (!this.activateOn || !ACTIVATION_METHODS.includes(this.activateOn)) return null;
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: COMPONENT_KEY + "-activation"
    }, this.activateOn === 'observer' && /*#__PURE__*/_react.default.createElement("script", {
      key: COMPONENT_KEY + "-activation-observer",
      dangerouslySetInnerHTML: {
        __html: (0, _commonTags.stripIndent)(_templateObject3 || (_templateObject3 = (0, _taggedTemplateLiteralLoose2.default)(["\n                (function () {\n                  if (typeof window.MutationObserver === 'undefined') return;\n\n                  function activateOptimize() {\n                    dataLayer.push({\n                      'event': 'optimize.activate'\n                    });\n                  }\n\n                  var gatsbyApp = document.getElementById('___gatsby');\n                  var observer = new MutationObserver(activateOptimize);\n\n                  observer.observe(gatsbyApp, {\n                    attributes: false,\n                    childList: true,\n                    characterData: true,\n                    subtree: true\n                  });\n                })();\n              "])))
      }
    }));
  };

  return Optimize;
}();

var _default = Optimize;
exports.default = _default;