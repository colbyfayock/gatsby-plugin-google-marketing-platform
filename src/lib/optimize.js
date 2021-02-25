import React from 'react';
import { stripIndent } from 'common-tags';

const COMPONENT_KEY = 'plugin-google-marketing-platform-optimize';

const ACTIVATION_METHODS = [
  'observer'
];

class Optimize {

  constructor(settings = {}, tagmanager_id) {
    const { timeout = 500, activateOn = false, id = null } = settings;
    this.optimize_id = id;
    this.tagmanager_id = tagmanager_id;
    this.timeout = timeout;
    this.activateOn = activateOn;
  }

  asyncHide() {

    if ( !this.tagmanager_id || !this.optimize_id ) return null;

    return (
      <React.Fragment key={`${COMPONENT_KEY}-asynchide`}>
        <style
          key={`${COMPONENT_KEY}-asyncHide-style`}
          dangerouslySetInnerHTML={{
          __html: stripIndent`
            .async-hide { opacity: 0 !important }
          `,
        }} />
        <script
          key={`${COMPONENT_KEY}-asyncHide-script`}
          dangerouslySetInnerHTML={{
            __html: stripIndent`
              (function(a,s,y,n,c,h,i,d,e){s.className+=' '+y;h.start=1*new Date;
              h.end=i=function(){s.className=s.className.replace(RegExp(' ?'+y),'')};
              (a[n]=a[n]||[]).hide=h;setTimeout(function(){i();h.end=null},c);h.timeout=c;
              })(window,document.documentElement,'async-hide','dataLayer',${this.timeout},{'${this.tagmanager_id}':true});
            `,
          }}
        />
      </React.Fragment>
    );

  }

  activation() {

    if ( !this.activateOn || !ACTIVATION_METHODS.includes(this.activateOn) ) return null;

    return (
      <React.Fragment key={`${COMPONENT_KEY}-activation`}>

        { this.activateOn === 'observer' && (
          <script
            key={`${COMPONENT_KEY}-activation-observer`}
            dangerouslySetInnerHTML={{
              __html: stripIndent`
                (function () {
                  if (typeof window.MutationObserver === 'undefined') return;

                  function activateOptimize() {
                    dataLayer.push({
                      'event': 'optimize.activate'
                    });
                  }

                  var gatsbyApp = document.getElementById('___gatsby');
                  var observer = new MutationObserver(activateOptimize);

                  observer.observe(gatsbyApp, {
                    attributes: false,
                    childList: true,
                    characterData: true,
                    subtree: true
                  });
                })();
              `,
            }}
          />
        ) }

      </React.Fragment>
    );

  }

}

export default Optimize;
