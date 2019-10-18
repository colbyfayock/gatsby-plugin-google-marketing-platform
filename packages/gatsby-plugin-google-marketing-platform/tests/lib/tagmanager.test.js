import TagManager from 'lib/tagmanager';
import { shallow } from 'enzyme';

describe('TagManager', () => {

  const googleTagManagerId = 'TESTASDF-12345678';
  
  const testParams = {
    test: 1,
    asdf: 'fdsa'
  };

  describe('No params or dataLayer', () => {

    const googleTagManager = {
      id: googleTagManagerId,
    };

    const tagmanager = new TagManager(googleTagManager);

    it('should return an empty string when no params present', () => {
      expect(tagmanager.paramsString()).toBe('');
    });

    it('should return a script with an empty datalayer', () => {

      const script = shallow(tagmanager.dataLayer());
      const html = script.prop('dangerouslySetInnerHTML').__html;

      const datalayerHtml = 'window.dataLayer = window.dataLayer || [];';
      
      expect(html).toBe(datalayerHtml);

    });

    it('should return a script tag that initializes GTM', () => {

      const component = shallow(tagmanager.script());
      const script = component.find('script');
      const html = script.prop('dangerouslySetInnerHTML').__html;
      const htmlStripWhitespace = html.replace(/\s+/g, '');

      const gtmScriptHtml = `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':newDate().getTime(),event:'gtm.js'});varf=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl+'';f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${googleTagManagerId}');`;

      expect(htmlStripWhitespace).toBe(gtmScriptHtml);

    });
    
    it('should return a noscript tag that initializes GTM when there is no javascript', () => {

      const component = shallow(tagmanager.noscript());
      const noscript = component.find('noscript');
      const html = noscript.prop('dangerouslySetInnerHTML').__html;
      const htmlStripWhitespace = html.replace(/\s+/g, '');

      const noscriptIframeHtml = `<iframesrc=\"https://www.googletagmanager.com/ns.html?id=${googleTagManagerId}\"height=\"0\"width=\"0\"style=\"display:none;visibility:hidden\"></iframe>`;

      expect(htmlStripWhitespace).toBe(noscriptIframeHtml);

    });

  });

  describe('With params', () => {

    const googleTagManager = {
      id: googleTagManagerId,
      params: testParams
    };

    const tagmanager = new TagManager(googleTagManager);

    it('should return an params string', () => {

      const expected = '&test=1&asdf=fdsa';

      expect(tagmanager.paramsString()).toBe(expected);

    });

  });

  describe('With dataLayer', () => {

    const googleTagManager = {
      id: googleTagManagerId,
    };

    const tagmanager = new TagManager(googleTagManager, testParams);

    it('should return a script with an empty datalayer', () => {

      const script = shallow(tagmanager.dataLayer());
      const html = script.prop('dangerouslySetInnerHTML').__html;

      const datalayerHtml = 'window.dataLayer = window.dataLayer || [{\"test\":1,\"asdf\":\"fdsa\"}];';
      
      expect(html).toBe(datalayerHtml);

    });

  });

  describe('No ID', () => {

    const tagmanager = new TagManager();

    it('should return a null dataLayer', () => {
      expect(tagmanager.dataLayer()).toBe(null);
    });

    it('should return a null script', () => {
      expect(tagmanager.script()).toBe(null);
    });

    it('should return a null noscript', () => {
      expect(tagmanager.noscript()).toBe(null);
    });

  });

});