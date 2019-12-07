import React from 'react';

import TagManager from './lib/tagmanager';
import Analytics from './lib/analytics';
import Optimize from './lib/optimize';

function plugin({ setHeadComponents, setPreBodyComponents }, pluginOptions = {}) {

  if ( process.env.NODE_ENV !== 'production' && !pluginOptions.includeInDevelopment ) return false;

  const tagmanager = new TagManager(pluginOptions.tagmanager, pluginOptions.dataLayer);
  const analytics = new Analytics(pluginOptions.analytics, pluginOptions.optimize && pluginOptions.optimize.id);
  const optimize = new Optimize(pluginOptions.optimize, pluginOptions.tagmanager && pluginOptions.tagmanager.id);

  setHeadComponents([
    tagmanager.dataLayer(),
    analytics.setup(),
    optimize.asyncHide(),
    analytics.script(),
    tagmanager.script(),
  ]);

  setPreBodyComponents([
    tagmanager.noscript(),
  ]);

}

exports.onRenderBody = plugin;