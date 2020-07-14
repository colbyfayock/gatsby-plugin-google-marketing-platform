module.exports = {
  plugins: [
    {
      resolve: '../',
      options: {
        dataLayer: {
          // Preset dataLayer values
          gaPropertyId: 'UA-172637559-1',
        },
        tagmanager: {
          id: 'GTM-M6WKJVD',
          params: {
            // GTM URL Parameters
            // Ex: https://www.googletagmanager.com/gtm.js?id=[ID]&gtm_cookies_win=x
            gtm_cookies_win: 'x'
          }
        },
        analytics: {
          id: 'UA-172637559-1',
        },
        optimize: {
          id: 'TEST-12345'
        },
        includeInDevelopment: true,
      },
    }
  ]
}
