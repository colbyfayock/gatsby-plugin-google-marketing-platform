import { onRenderBody } from 'gatsby-ssr';

const mockFunction = () => {};

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
      activateOn: 'observer'
    },
    includeInDevelopment: true
  }

  let headComponents = [];
  let preBodyComponents = [];
  let postBodyComponents = [];

  function setHeadComponents(components) {
    headComponents = headComponents.concat(components);
  }

  function setPreBodyComponents(components) {
    preBodyComponents = preBodyComponents.concat(components);
  }

  function setPostBodyComponents(components) {
    postBodyComponents = postBodyComponents.concat(components);
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
        setPreBodyComponents: mockFunction,
        setPostBodyComponents: mockFunction
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
        setHeadComponents: mockFunction,
        setPreBodyComponents,
        setPostBodyComponents: mockFunction
      }, pluginOptions);

      expect(preBodyComponents.length).toEqual(expectedComponentKeys.length);

      preBodyComponents.forEach((component, index) => {
        expect(component.key).toEqual(expectedComponentKeys[index]);
      });

    });

    it('should include the correct set of component keys in the body', async () => {

      const expectedComponentKeys = [
        'plugin-google-marketing-platform-optimize-activation',
      ];

      await onRenderBody({
        setHeadComponents: mockFunction,
        setPreBodyComponents: mockFunction,
        setPostBodyComponents
      }, pluginOptions);

      expect(postBodyComponents.length).toEqual(expectedComponentKeys.length);

      postBodyComponents.forEach((component, index) => {
        expect(component.key).toEqual(expectedComponentKeys[index]);
      });

    });

  });

  describe('Non prod', () => {

    it('should return false when not in prod and not explicitly including it', () => {

      const invocation = onRenderBody({
        setHeadComponents: mockFunction,
        setPreBodyComponents,
        setPostBodyComponents: mockFunction
      }, {
        ...pluginOptions,
        includeInDevelopment: false
      });

      expect(invocation).toEqual(false);

    });

  });

});