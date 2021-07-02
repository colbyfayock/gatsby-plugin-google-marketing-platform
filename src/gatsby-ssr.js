import TagManager from './lib/tagmanager';
// import Analytics from './lib/analytics';
import Optimize from './lib/optimize';

function plugin({ setHeadComponents, setPreBodyComponents, setPostBodyComponents }, pluginOptions = {}) {

  if ( process.env.NODE_ENV !== 'production' && !pluginOptions.includeInDevelopment ) return false;

  const tagmanager = new TagManager(pluginOptions.tagmanager, pluginOptions.dataLayer);
  // const analytics = new Analytics(pluginOptions.analytics, pluginOptions.optimize && pluginOptions.optimize.id);
  const optimize = new Optimize(pluginOptions.optimize, pluginOptions.tagmanager && pluginOptions.tagmanager.id);

  const newHeadElements = [
    tagmanager.dataLayer(),
    // analytics.setup(),
    optimize.asyncHide(),
   // analytics.script(),
    tagmanager.script(),
  ].filter(el => el !== null);
  setHeadComponents(newHeadElements);

  setPreBodyComponents([
    tagmanager.noscript(),
  ]);

  setPostBodyComponents([
    optimize.activation(),
  ]);

}

exports.onRenderBody = plugin;
