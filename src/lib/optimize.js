import React from 'react';
import { stripIndent } from 'common-tags';

const COMPONENT_KEY = 'plugin-google-marketing-platform-optimize';

class Optimize {

  constructor({ id = null, timeout = 500 } = {}, tagmanager_id) {
    this.tagmanager_id = tagmanager_id;
    this.timeout = timeout;
  }

  asyncHide() {

    if ( !this.tagmanager_id ) return null;

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
    return (
      <React.Fragment key={`${COMPONENT_KEY}-activation`}>
        <script
          key={`${COMPONENT_KEY}-activation-script`}
          dangerouslySetInnerHTML={{
            __html: stripIndent`
              (function () {
                function activateOptimize() {
                  dataLayer.push({
                    'event': 'optimize.activate'
                  });
                }

                activateOptimize();

                if ( typeof MutationObserver !== 'function' ) {
                  return;
                }

                var observer = new MutationObserver(activateOptimize);

                observer.observe(document.body, {
                  attributes: true,
                  childList: true,
                  characterData: true,
                  attributeFilter: ['style']
                });
              })();
            `
          }}
        />
      </React.Fragment>
    )
  }

}

export default Optimize;