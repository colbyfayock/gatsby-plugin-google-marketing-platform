"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _tagmanager = _interopRequireDefault(require("./lib/tagmanager"));

var _analytics = _interopRequireDefault(require("./lib/analytics"));

var _optimize = _interopRequireDefault(require("./lib/optimize"));

function plugin(_ref, pluginOptions) {
  var setHeadComponents = _ref.setHeadComponents,
      setPreBodyComponents = _ref.setPreBodyComponents;

  if (pluginOptions === void 0) {
    pluginOptions = {};
  }

  if (process.env.NODE_ENV !== 'production' && !pluginOptions.includeInDevelopment) return false;
  var tagmanager = new _tagmanager.default(pluginOptions.tagmanager, pluginOptions.dataLayer);
  var analytics = new _analytics.default(pluginOptions.analytics, pluginOptions.optimize && pluginOptions.optimize.id);
  var optimize = new _optimize.default(pluginOptions.optimize);
  setHeadComponents([tagmanager.dataLayer(), analytics.setup(), optimize.asyncHide(), analytics.script(), tagmanager.script()]);
  setPreBodyComponents([tagmanager.noscript()]);
}

exports.onRenderBody = plugin;