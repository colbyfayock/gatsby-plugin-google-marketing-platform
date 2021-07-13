"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _taggedTemplateLiteralLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteralLoose"));

var _react = _interopRequireDefault(require("react"));

var _util = require("gatsby-plugin-google-marketing-platform/src/lib/util");

var _commonTags = require("common-tags");

var _templateObject, _templateObject2;

var COMPONENT_KEY = 'plugin-google-marketing-platform-antiflicker';

var Antiflicker = /*#__PURE__*/function () {
  function Antiflicker(_temp, container_id) {
    var _ref = _temp === void 0 ? {} : _temp,
        id = _ref.id,
        params = _ref.params,
        config = _ref.config;

    this.id = id;
    this.container_id = container_id || 'OPT-NCRMF3H';
    this.params = Object.assign({}, params);
    this.config = Object.assign({}, config);
  }

  var _proto = Antiflicker.prototype;

  _proto.paramsString = function paramsString() {
    return (0, _util.paramStringFromObject)(this.params);
  };

  _proto.dataLayer = function dataLayer() {
    console.log("Antiflicker DataLayer");
    return /*#__PURE__*/_react.default.createElement("script", {
      key: COMPONENT_KEY + "-script",
      dangerouslySetInnerHTML: {
        __html: (0, _commonTags.stripIndent)(_templateObject || (_templateObject = (0, _taggedTemplateLiteralLoose2.default)(["\n            window.dataLayer = window.dataLayer || [];\n          "])))
      }
    });
  };

  _proto.asyncHide = function asyncHide() {
    console.log("Antiflicker AsyncHide");
    return /*#__PURE__*/_react.default.createElement("script", {
      key: COMPONENT_KEY + "-script",
      dangerouslySetInnerHTML: {
        __html: (0, _commonTags.stripIndent)(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteralLoose2.default)(["\n          .async-hide { opacity: 0 !important}\n          "])))
      }
    });
  } // script() {
  //   // Moved under Tagmanager code
  //   console.log("Antiflicker Script");
  //   return (
  //     <script
  //       key={`${COMPONENT_KEY}-script`}
  //       dangerouslySetInnerHTML={{
  //         __html: stripIndent`
  //         (function(a, s, y, n, c, h, i, d, e) {
  //           s.className += ' ' + y;
  //           h.start = 1 * new Date;
  //           h.end = i = function() {
  //               s.className = s.className.replace(RegExp(' ?' + y), '')
  //           };
  //           (a[n] = a[n] || []).hide = h;
  //           setTimeout(function() {
  //               i();
  //               h.end = null
  //           }, c);
  //           h.timeout = c;
  //       })(window, document.documentElement, 'async-hide', 'dataLayer', 4000, {
  //           ${this.container_id}: true
  //       });
  //         `,
  //       }}
  //     />
  //   );
  // }
  // setup() {
  //   // const createDataLayer = () => ({
  //   //   __html: 'window.dataLayer = window.dataLayer || []',
  //   // });
  //   // const optimizeAntiFlickerStyle = () => ({
  //   //   __html: '.async-hide { opacity: 0 !important}',
  //   // });
  //   const optimizeAntiFlickerScript = (container_id) => ({
  //     __html: ``,
  //   });
  //   console.log("Fragment")
  //   return (
  //     <React.Fragment key={`${COMPONENT_KEY}-asynchide`}>
  //       <script
  //         key={`${COMPONENT_KEY}-antiflicker-setup`}
  //         dangerouslySetInnerHTML={createDataLayer()}
  //       />
  //       <script
  //         key={`${COMPONENT_KEY}-antiflicker-setup`}
  //         dangerouslySetInnerHTML={optimizeAntiFlickerStyle()}
  //       />
  //       <script
  //         key={`${COMPONENT_KEY}-antiflicker-setup`}
  //         dangerouslySetInnerHTML={optimizeAntiFlickerScript(this.container_id)}
  //       />
  //   </React.Fragment>
  //   );
  // }
  ;

  return Antiflicker;
}();

var _default = Antiflicker;
exports.default = _default;