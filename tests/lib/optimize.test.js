import Optimize from 'lib/optimize';
import { mount } from 'enzyme';

describe('Optimize', () => {

  const googleOptimizeId = 'ASDF-4321';
  const googleTagManagerId = 'TESTASDF-12345678';

  describe('With ID', () => {

    const googleOptimize = {
      id: googleOptimizeId
    };

    const optimize = new Optimize(googleOptimize, googleTagManagerId);

    it('should return a script and a style tag for Google Optimize async hide', () => {

      const component = mount(optimize.asyncHide());
      const style = component.find('style');
      const styleHtml = style.prop('dangerouslySetInnerHTML').__html;
      const script = component.find('script');
      const scriptHtml = script.prop('dangerouslySetInnerHTML').__html;
      const scriptHtmlStripWhitespace = scriptHtml.replace(/\s+/g, '');

      const asyncHideStyles = '.async-hide { opacity: 0 !important }';
      const asyncHideScript = `(function(a,s,y,n,c,h,i,d,e){s.className+=''+y;h.start=1*newDate;h.end=i=function(){s.className=s.className.replace(RegExp('?'+y),'')};(a[n]=a[n]||[]).hide=h;setTimeout(function(){i();h.end=null},c);h.timeout=c;})(window,document.documentElement,'async-hide','dataLayer',500,{'${googleTagManagerId}':true});`;

      expect(styleHtml.includes(asyncHideStyles)).toBe(true);
      expect(scriptHtmlStripWhitespace).toBe(asyncHideScript);

    });

  });

  describe('No ID', () => {

    const optimize = new Optimize();

    it('should return null if no ID is present', () => {
      expect(optimize.asyncHide()).toEqual(null);
    });

  });

  describe('Custom Timeout', () => {

    const googleOptimize = {
      id: googleOptimizeId,
      timeout: 1000000
    };

    const optimize = new Optimize(googleOptimize, googleTagManagerId);

    it('should return a script and a style tag with a custom timeout', () => {

      const component = mount(optimize.asyncHide());
      const script = component.find('script');
      const scriptHtml = script.prop('dangerouslySetInnerHTML').__html;
      const scriptHtmlStripWhitespace = scriptHtml.replace(/\s+/g, '');

      const asyncHideScript = `(function(a,s,y,n,c,h,i,d,e){s.className+=''+y;h.start=1*newDate;h.end=i=function(){s.className=s.className.replace(RegExp('?'+y),'')};(a[n]=a[n]||[]).hide=h;setTimeout(function(){i();h.end=null},c);h.timeout=c;})(window,document.documentElement,'async-hide','dataLayer',${googleOptimize.timeout},{'${googleTagManagerId}':true});`;

      expect(scriptHtmlStripWhitespace).toBe(asyncHideScript);

    });

  });

  describe('Activation', () => {

    describe('None', () => {

      it('should include the observer activation script', () => {
        const googleOptimize = {
          id: googleOptimizeId
        };

        const optimize = new Optimize(googleOptimize, googleTagManagerId);
        const component = optimize.activation()

        expect(component).toBe(null);
      });

    });
    describe('On Observe', () => {

      it('should include the observer activation script', () => {
        const googleOptimize = {
          id: googleOptimizeId,
          activateOn: 'observer'
        };

        const optimize = new Optimize(googleOptimize, googleTagManagerId);
        const component = mount(optimize.activation());
        const script = component.find('script');
        const scriptHtml = script.prop('dangerouslySetInnerHTML').__html;
        const scriptHtmlStripWhitespace = scriptHtml.replace(/\s+/g, '');

        const activationScript = `(function(){if(typeofwindow.MutationObserver==='undefined')return;functionactivateOptimize(){dataLayer.push({'event':'optimize.activate'});}vargatsbyApp=document.getElementById('___gatsby');varobserver=newMutationObserver(activateOptimize);observer.observe(gatsbyApp,{attributes:false,childList:true,characterData:true,subtree:true});})();`;

        expect(scriptHtmlStripWhitespace).toBe(activationScript);
      });

    });

  })

});