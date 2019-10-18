import React from 'react';
import { stripIndent } from 'common-tags';

const COMPONENT_KEY = 'plugin-google-marketing-platform-optimize';

class Optimize {

  constructor({ id = null, timeout = 500 } = {}) {
    this.id = id;
    this.timeout = timeout;
  }

  asyncHide() {

    if ( !this.id ) return null;

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
              })(window,document.documentElement,'async-hide','dataLayer',${this.timeout},{'${this.id}':true});
            `,
          }}
        />
      </React.Fragment>
    );

  }

}

export default Optimize;