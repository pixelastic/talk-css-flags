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
    },
    jadePages: {
      destination: function (path) {
        console.info(path)
        path.replace(/^app[\/\\](.*)\.jade$/, "$1.html")
      },
      jade: {
        doctype: "html"
      },
      htmlmin: false
    }
  },
  server: {
    run: 'yes',
    port: 5012
  }
};
