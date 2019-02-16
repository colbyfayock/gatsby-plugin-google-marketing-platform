# Google Marketing Platform for Gatsby

Easily add Google Tag Manager, Google Analytics, and Google Optimize to your Gatsby site.

## Install

```
yarn install gatsby-plugin-google-marketing-platform
```
or
```
npm install gatsby-plugin-google-marketing-platform
```

## Setup

```javascript
// In your gatsby-config.js
plugins: [
  {
    resolve: 'gatsby-plugin-google-marketing-platform',
    options: {
      dataLayer: {
        // Preset dataLayer values
        gaPropertyId: '[Google Analytics ID]',
      },
      tagmanager: {
        id: '[Google Tag Manager ID]',
        params: {
          // GTM URL Parameters
          // Ex: https://www.googletagmanager.com/gtm.js?id=[ID]&gtm_cookies_win=x
          gtm_cookies_win: 'x'
        }
      },
      analytics: {
        id: '[Google Analytics ID]',
      },
      optimize: {
        id: '[Google Optimize ID]',
      },
      includeInDevelopment: true,
    },
  }
]
```
