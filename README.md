# Google Marketing Platform for Gatsby

Easily add these GMP products in a cohesive way to your Gatsby site:
* Google Tag Manager
* Google Analytics
* Google Optimize

The installation is based on Google's recommendations and best practices.

### What This Does
This provides the ability to configure the Google Marketing Platform base tools, including Google Analytics, Google Optimize, and Google Tag Manager.

This plugin also allows the ability to preset `dataLayer` variables. This is useful in cases where you need GA, configured within GTM, to fire with particular variables on the initial pageview, such as dynamically setting your Google Analytics Property ID, instead of requiring to maintain it in multiple locations.

### What this does NOT do
This will not provide any functionality around specific tracking or conversion tags. **These responsibilities should be handled in Google Tag Manager**.


## Getting Started

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
