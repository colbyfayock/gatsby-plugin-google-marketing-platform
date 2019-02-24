# Google Marketing Platform for Gatsby

Easily add Google Tag Manager, Google Analytics, and Google Optimize to your Gatsby site.

## Overview
An opinionated installation of Google Analytics, Google Tag Manager, and Google Optimize, based on Google recommendations.

### What this does
This provides the ability to configure the Google Marketing Platform base tools, including Google Analytics, Google Optimize, and Google Tag Manager.

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
