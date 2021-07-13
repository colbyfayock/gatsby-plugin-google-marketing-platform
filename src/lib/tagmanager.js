import React from "react";
import { stripIndent } from "common-tags";
import { paramStringFromObject } from "./util";

const COMPONENT_KEY = "plugin-google-marketing-platform-tagmanager";

class TagManager {
  constructor({ id, params, container_id } = {}, dataLayer) {
    this.id = id;
    this.container_id = container_id || "OPT-NCRMF3H";
    this.params = Object.assign({}, params);
    this.data = Object.assign({}, dataLayer);
  }

  paramsString() {
    if (!this.params || Object.keys(this.params).length === 0) return "";

    return paramStringFromObject(this.params);
  }

  dataLayer() {
    if (!this.id || !this.data) return null;

    const data =
      Object.keys(this.data).length > 0 ? JSON.stringify(this.data) : "";

    return (
      <script
        key={`${COMPONENT_KEY}-script`}
        dangerouslySetInnerHTML={{
          __html: stripIndent`
            window.dataLayer = window.dataLayer || [${data}];
          `,
        }}
      />
    );
  }

  script() {
    if (!this.id) return null;

    return (
      <script
        key={`${COMPONENT_KEY}-script`}
        dangerouslySetInnerHTML={{
          __html: stripIndent`
          (function(a, s, y, n, c, h, i, d, e) {
            s.className += ' ' + y;
            h.start = 1 * new Date;
            h.end = i = function() {
                s.className = s.className.replace(RegExp(' ?' + y), '')
            };
            (a[n] = a[n] || []).hide = h;
            setTimeout(function() {
                i();
                h.end = null
            }, c);
            h.timeout = c;
        })(window, document.documentElement, 'async-hide', 'dataLayer', 4000, {
            ${this.container_id}: true
        }); 
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl+'${this.paramsString()}';f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer', '${this.id}');`,
        }}
      />
    );
  }

  noscript() {
    console.log("TagManager Noscript");
    if (!this.id) return null;

    return (
      <noscript
        key={`${COMPONENT_KEY}-noscript`}
        dangerouslySetInnerHTML={{
          __html: stripIndent`
            <iframe
              src="https://www.googletagmanager.com/ns.html?id=${
                this.id
              }${this.paramsString()}"
              height="0"
              width="0"
              style="display: none; visibility: hidden"
            ></iframe>`,
        }}
      />
    );
  }
}

export default TagManager;
