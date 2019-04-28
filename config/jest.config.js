module.exports = {
  
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.js'
  ],

  rootDir: '../',

  globals: {
    __PATH_PREFIX__: ''
  },

  modulePaths: [
    '<rootDir>/src',
    '<rootDir>/node_modules'
  ],

  testPathIgnorePatterns: [
    'node_modules',
    '.cache'
  ],

  setupFilesAfterEnv: [
    '<rootDir>/config/jest.setup.js'
  ]

};
