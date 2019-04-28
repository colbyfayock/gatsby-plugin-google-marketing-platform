import React from 'react';

const IndexPage = () => {
  return (
    <div>
      <h1>Google Marketing Platform Gatsby Plugin</h1>
      <h2>Hi <span role="img" aria-label="wave">👋</span></h2>
      <h3>Install via Yarn or NPM:</h3>
      <pre>
        <code>
yarn add gatsby-plugin-google-marketing-platform
        </code>
      </pre>
      <h3>Add to gatsby-config.js:</h3>
      <pre>
        <code>
{ `module.exports = {
  plugins: [
    {
      resolve: './',
      options: {
        dataLayer: {
          // Preset dataLayer values
          gaPropertyId: 'TEST-1234',
        },
        tagmanager: {
          id: 'TESTASDF-12345678',
          params: {
            // GTM URL Parameters
            // Ex: https://www.googletagmanager.com/gtm.js?id=[ID]&gtm_cookies_win=x
            gtm_cookies_win: 'x'
          }
        },
        analytics: {
          id: 'TEST-1234',
        },
        optimize: {
          id: 'ASDF-4321',
        },
        includeInDevelopment: true,
      },
    }
  ]
}` }
        </code>
      </pre>
    </div>
  );
};

export default IndexPage;
