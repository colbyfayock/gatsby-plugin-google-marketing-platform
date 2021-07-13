"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _tagmanager = _interopRequireDefault(require("./lib/tagmanager"));

var _antiflicker = _interopRequireDefault(require("./lib/antiflicker"));

var _optimize = _interopRequireDefault(require("./lib/optimize"));

function plugin(_ref, pluginOptions) {
  var setHeadComponents = _ref.setHeadComponents,
      setPreBodyComponents = _ref.setPreBodyComponents,
      setPostBodyComponents = _ref.setPostBodyComponents;

  if (pluginOptions === void 0) {
    pluginOptions = {};
  }

  // TODO : Uncomment later
  // if ( process.env.NODE_ENV !== 'production' && !pluginOptions.includeInDevelopment ) return false;
  var tagmanager = new _tagmanager.default(pluginOptions.tagmanager, pluginOptions.dataLayer);
  var antiflicker = new _antiflicker.default(pluginOptions.analytics);
  var optimize = new _optimize.default(pluginOptions.optimize, pluginOptions.tagmanager && pluginOptions.tagmanager.id);
  var newHeadElements = [antiflicker.dataLayer(), antiflicker.asyncHide(), // antiflicker.script(),
  tagmanager.dataLayer(), optimize.asyncHide(), tagmanager.script()].filter(function (el) {
    return el !== null;
  }); // console.log("SSR newHeadElements",newHeadElements)

  setHeadComponents(newHeadElements);
  setPreBodyComponents([tagmanager.noscript()]);
  setPostBodyComponents([optimize.activation()]);
}

exports.onRenderBody = plugin;