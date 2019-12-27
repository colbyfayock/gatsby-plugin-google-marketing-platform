module.exports = {
  plugins: [
    {
      resolve: '../',
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
          id: 'ASDF-4321'
        },
        includeInDevelopment: true,
      },
    }
  ]
}
