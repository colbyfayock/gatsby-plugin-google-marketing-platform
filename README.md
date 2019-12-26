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
yarn add gatsby-plugin-google-marketing-platform
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
## What That Will Add
Note: the below will be minified along with the rest of the code and not include comments
```
...
<head>
  ...

  <!-- Set up dataLayer with data if provided -->
  <script>
  window.dataLayer = window.dataLayer || [{"gaPropertyId":"TEST-1234"}];
  </script>

  <!-- Initialized GTM via gtag -->
  <script>
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  </script>

  <!-- Google Optimize async hide class -->
  <style>.async-hide { opacity: 0 !important }</style>

  <!-- Google Optimize async hide script -->
  <script>
  (function(a,s,y,n,c,h,i,d,e){s.className+=' '+y;h.start=1*new Date;
  h.end=i=function(){s.className=s.className.replace(RegExp(' ?'+y),'')};
  (a[n]=a[n]||[]).hide=h;setTimeout(function(){i();h.end=null},c);h.timeout=c;
  })(window,document.documentElement,'async-hide','dataLayer',500,{'ASDF-4321':true});
  </script>

  <!-- Configure GTM given GA and GO IDs -->
  <script>
  gtag('config', 'TEST-1234', {"optimize_id":"ASDF-4321"});
  </script>

  <!-- Configure and initialize GTM -->
  <script>
  (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
  new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
  j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
  'https://www.googletagmanager.com/gtm.js?id='+i+dl+'&gtm_cookies_win=x';f.parentNode.insertBefore(j,f);
  })(window,document,'script','dataLayer', 'TESTASDF-12345678');
  </script>
  ...
</head>
...
<body>
  <!-- GTM noscript for when JS isn't available -->
  <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=TESTASDF-12345678&gtm_cookies_win=x" height="0" width="0" style="display: none; visibility: hidden ></iframe></noscript>
```
