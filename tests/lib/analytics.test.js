import Analytics from 'lib/analytics';
import { shallow } from 'enzyme';

describe('Analytics', () => {

  const googleAnalyticsId = 'TEST-1234';
  const googleOptimizeId = 'ASDF-4321';

  describe('Only With Parameters', () => {

    const googleAnalytics = {
      id: googleAnalyticsId,
      params: {
        test: 1,
        asdf: 'fdsa'
      },
      config: {
        linker: ['myDomain.com']
      }
    };

    const analytics = new Analytics(googleAnalytics);

    it('should return a script that sets up the gtag function and initializes it', () => {

      const script = shallow(analytics.setup());
      const html = script.prop('dangerouslySetInnerHTML').__html;

      const gtagFunction = 'function gtag(){dataLayer.push(arguments);}';
      const gtagInvocation = `gtag('js', new Date());`;
      
      expect(html.includes(gtagFunction)).toBe(true);
      expect(html.includes(gtagInvocation)).toBe(true);

    });
    
    it('should return a script tag that includes the GA configuration setup', () => {

      const script = shallow(analytics.script());
      const html = script.prop('dangerouslySetInnerHTML').__html;

      const gtagInvocation = `gtag('config', '${googleAnalyticsId}', {"linker":["myDomain.com"]});`;

      expect(html.includes(gtagInvocation)).toBe(true);

    });

    it('should return a param string from the GA options obejct', () => {

      const expected = '&test=1&asdf=fdsa';

      expect(analytics.paramsString()).toBe(expected);

    });

  });

  describe('With Google Optimize ID', () => {

    const googleAnalytics = {
      id: googleAnalyticsId,
      config: {
        linker: ['myDomain.com']
      }
    };

    const analytics = new Analytics(googleAnalytics, googleOptimizeId);

    it('should return a script that configures Google Optimize along with GA', () => {

      const script = shallow(analytics.script());
      const html = script.prop('dangerouslySetInnerHTML').__html;

      const gtagInvocation = `gtag('config', '${googleAnalyticsId}', {"optimize_id":"${googleOptimizeId}","linker":["myDomain.com"]});`;

      expect(html.includes(gtagInvocation)).toBe(true);

    });

  });

  describe('No ID', () => {

    const analytics = new Analytics();

    it('should return null when no ID present', () => {
      expect(analytics.script()).toBe(null);
    });

  })

});