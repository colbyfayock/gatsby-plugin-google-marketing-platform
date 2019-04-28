import { onRenderBody } from 'gatsby-ssr';

describe('Gatsby SSR', () => {

  const googleAnalyticsId = 'TEST-1234';
  const googleOptimizeId = 'ASDF-4321';
  const googleTagManagerId = 'TESTASDF-12345678';

  const pluginOptions = {
    dataLayer: {
      gaPropertyId: googleAnalyticsId,
    },
    tagmanager: {
      id: googleTagManagerId,
      params: {
        gtm_cookies_win: 'x'
      }
    },
    analytics: {
      id: googleAnalyticsId,
    },
    optimize: {
      id: googleOptimizeId,
    },
    includeInDevelopment: true
  }

  let headComponents = [];
  let preBodyComponents = [];

  function setHeadComponents(components) {
    headComponents = headComponents.concat(components);
  }

  function setPreBodyComponents(components) {
    preBodyComponents = preBodyComponents.concat(components);
  }

  describe('Plugin Functionality', () => {

    it('should include the correct set of component keys in the head', async () => {

      const expectedComponentKeys = [
        'plugin-google-marketing-platform-tagmanager-script',
        'plugin-google-marketing-platform-analytics-setup',
        'plugin-google-marketing-platform-optimize-asynchide',
        'plugin-google-marketing-platform-analytics-script',
        'plugin-google-marketing-platform-tagmanager-script',
      ];

      await onRenderBody({
        setHeadComponents,
        setPreBodyComponents: () => {}
      }, pluginOptions);

      expect(headComponents.length).toEqual(expectedComponentKeys.length);

      headComponents.forEach((component, index) => {
        expect(component.key).toEqual(expectedComponentKeys[index]);
      });

    });

    it('should include the correct set of component keys in the head', async () => {

      const expectedComponentKeys = [
        'plugin-google-marketing-platform-tagmanager-noscript',
      ];

      await onRenderBody({
        setHeadComponents: () => {},
        setPreBodyComponents
      }, pluginOptions);

      expect(preBodyComponents.length).toEqual(expectedComponentKeys.length);

      preBodyComponents.forEach((component, index) => {
        expect(component.key).toEqual(expectedComponentKeys[index]);
      });

    });

  });

  describe('Non prod', () => {

    it('should return false when not in prod and not explicitly including it', () => {
      
      const invocation = onRenderBody({
        setHeadComponents: () => {},
        setPreBodyComponents
      }, {
        ...pluginOptions,
        includeInDevelopment: false
      });

      expect(invocation).toEqual(false);

    });

  });

});