import React from 'react';
import { stripIndent } from 'common-tags';
import { paramStringFromObject } from './util';

const COMPONENT_KEY = 'plugin-google-marketing-platform-tagmanager';

class TagManager {

  constructor({ id, params }, dataLayer) {
    this.id = id;
    this.params = Object.assign({}, params);
    this.data = Object.assign({}, dataLayer);
  }

  paramsString() {

    if ( !this.params || Object.keys(this.params).length === 0 ) return '';

    return paramStringFromObject(this.params);

  }

  dataLayer() {

    if ( !this.id || !this.data ) return null;

    const data = Object.keys(this.data).length > 0 ? JSON.stringify(this.data) : '';

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

    if ( !this.id ) return null;

    return (
      <script
        key={`${COMPONENT_KEY}-script`}
        dangerouslySetInnerHTML={{
          __html: stripIndent`
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

    if ( !this.id ) return null;

    return (
      <noscript
        key={`${COMPONENT_KEY}-noscript`}
        dangerouslySetInnerHTML={{
          __html: stripIndent`
            <iframe
              src="https://www.googletagmanager.com/ns.html?id=${this.id}${this.paramsString()}"
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