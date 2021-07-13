import TagManager from './lib/tagmanager';
import Antiflicker from './lib/antiflicker';
import Optimize from './lib/optimize';

function plugin({ setHeadComponents, setPreBodyComponents, setPostBodyComponents }, pluginOptions = {}) {
  // TODO : Uncomment later
  // if ( process.env.NODE_ENV !== 'production' && !pluginOptions.includeInDevelopment ) return false;

  const tagmanager = new TagManager(pluginOptions.tagmanager, pluginOptions.dataLayer);
  const antiflicker = new Antiflicker(pluginOptions.analytics);
  const optimize = new Optimize(pluginOptions.optimize, pluginOptions.tagmanager && pluginOptions.tagmanager.id);

  const newHeadElements = [
    antiflicker.dataLayer(),
    antiflicker.asyncHide(),
    // antiflicker.script(),
    tagmanager.dataLayer(),
    optimize.asyncHide(),
    tagmanager.script(),
  ].filter(el => el !== null);
  // console.log("SSR newHeadElements",newHeadElements)
  setHeadComponents(newHeadElements);

  setPreBodyComponents([
    tagmanager.noscript(),
  ]);

  setPostBodyComponents([
    optimize.activation(),
  ]);

}

exports.onRenderBody = plugin;
