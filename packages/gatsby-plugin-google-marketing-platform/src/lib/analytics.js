import React from 'react';
import { stripIndent } from 'common-tags';
import { paramStringFromObject } from './util';

const COMPONENT_KEY = 'plugin-google-marketing-platform-analytics';

class Analytics {

  constructor({ id, params } = {}, optimize_id) {
    this.id = id;
    this.optimize_id = optimize_id;
    this.params = Object.assign({}, params);
  }

  paramsString() {
    return paramStringFromObject(this.params);
  }

  setup() {
    return (
      <script
        key={`${COMPONENT_KEY}-setup`}
        dangerouslySetInnerHTML={{
          __html: stripIndent`
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
          `,
        }}
      />
    );
  }

  script() {

    if ( !this.id ) return null;

    const config = this.optimize_id ? {
      optimize_id: this.optimize_id
    } : {};

    return (
      <script
        key={`${COMPONENT_KEY}-script`}
        dangerouslySetInnerHTML={{
          __html: stripIndent`
            gtag('config', '${this.id}', ${JSON.stringify(config)});
          `,
        }}
      />
    );

  }

}

export default Analytics;