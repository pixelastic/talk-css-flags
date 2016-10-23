module.exports = {
  paths: {
    watched: ['app/assets', 'app/styles/', 'app/javascripts/']
  },
  files: {
    javascripts: {
      joinTo: {
        'app.js': /^app\/javascripts\//
      }
    },
    stylesheets: {joinTo: 'main.css'}
  },
  plugins: {
    sass: {
      mode: 'native'
    },
    babel: {
      presets: ['es2015'],
      ignore: [],
      pattern: /\.js$/
    }
  },
  server: {
    run: 'yes',
    port: 5012
  }
};
