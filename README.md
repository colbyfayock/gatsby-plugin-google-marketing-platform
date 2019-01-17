# gatsby-plugin-google-marketing-platform

Easily add Google Tag Manager, Google Analytics, and Google Optimize to your Gatsby site.

## Install



## How to use

```javascript
// In your gatsby-config.js
plugins: [
  {
    resolve: 'gatsby-plugin-google-marketing-platform',
    options: {
      dataLayer: {
        gaPropertyId: 'analyticsID',
      },
      tagmanager: {
        id: 'tagmanagerID',
        params: {
          gtm_auth: 'asdf',
          gtm_preview: 'asdf',
          gtm_cookies_win: 'x'
        }
      },
      analytics: {
        id: 'analyticsID',
      },
      optimize: {
        id: 'optimizeID',
      },
      includeInDevelopment: true,
    },
  }
]
```