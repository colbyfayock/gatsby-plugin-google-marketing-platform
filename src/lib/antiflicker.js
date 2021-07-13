import React from 'react';
import { paramStringFromObject } from 'gatsby-plugin-google-marketing-platform/src/lib/util';
import { stripIndent } from 'common-tags';

const COMPONENT_KEY = 'plugin-google-marketing-platform-antiflicker';

class Antiflicker {

  constructor({ id, params, config } = {}, container_id) {
    this.id = id;
    this.container_id = container_id || 'OPT-NCRMF3H';
    this.params = Object.assign({}, params);
    this.config = Object.assign({}, config)
  }

  paramsString() {
    return paramStringFromObject(this.params);
  }

  dataLayer() {
    console.log("Antiflicker DataLayer");
    return (
      <script
        key={`${COMPONENT_KEY}-script`}
        dangerouslySetInnerHTML={{
          __html: stripIndent`
            window.dataLayer = window.dataLayer || [];
          `,
        }}
      />
    );
  }
  asyncHide() {
    console.log("Antiflicker AsyncHide");
    return (
      <script
        key={`${COMPONENT_KEY}-script`}
        dangerouslySetInnerHTML={{
          __html: stripIndent`
          .async-hide { opacity: 0 !important}
          `,
        }}
      />
    );
  }
  // script() {
  //   // Moved under Tagmanager code
  //   console.log("Antiflicker Script");
  //   return (
  //     <script
  //       key={`${COMPONENT_KEY}-script`}
  //       dangerouslySetInnerHTML={{
  //         __html: stripIndent`
  //         (function(a, s, y, n, c, h, i, d, e) {
  //           s.className += ' ' + y;
  //           h.start = 1 * new Date;
  //           h.end = i = function() {
  //               s.className = s.className.replace(RegExp(' ?' + y), '')
  //           };
  //           (a[n] = a[n] || []).hide = h;
  //           setTimeout(function() {
  //               i();
  //               h.end = null
  //           }, c);
  //           h.timeout = c;
  //       })(window, document.documentElement, 'async-hide', 'dataLayer', 4000, {
  //           ${this.container_id}: true
  //       });
  //         `,
  //       }}
  //     />
  //   );
  // }


  // setup() {
  //   // const createDataLayer = () => ({
  //   //   __html: 'window.dataLayer = window.dataLayer || []',
  //   // });
  //   // const optimizeAntiFlickerStyle = () => ({
  //   //   __html: '.async-hide { opacity: 0 !important}',
  //   // });
  //   const optimizeAntiFlickerScript = (container_id) => ({

  //     __html: ``,
  //   });

  //   console.log("Fragment")
  //   return (
  //     <React.Fragment key={`${COMPONENT_KEY}-asynchide`}>
  //       <script
  //         key={`${COMPONENT_KEY}-antiflicker-setup`}
  //         dangerouslySetInnerHTML={createDataLayer()}
  //       />
  //       <script
  //         key={`${COMPONENT_KEY}-antiflicker-setup`}
  //         dangerouslySetInnerHTML={optimizeAntiFlickerStyle()}
  //       />
  //       <script
  //         key={`${COMPONENT_KEY}-antiflicker-setup`}
  //         dangerouslySetInnerHTML={optimizeAntiFlickerScript(this.container_id)}
  //       />
  //   </React.Fragment>
  //   );
  // }

}

export default Antiflicker;