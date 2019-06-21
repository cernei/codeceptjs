exports.config = {
  tests: '**/*_test.js',
  output: './output',
  helpers: {
    Puppeteer: {
      chrome: {
        args: ['--no-sandbox']
      },
      windowSize: "1920x1080",
      url: 'http://da1.org'
    }
  },
  include: {},
  bootstrap: null,
  mocha: {},
  name: 'test-frontend',
  plugins: {
    allure: {
        outputDir: 'output/allure',
        enabled: true
    },
  }
};