let config = {
  // Only listen for changes in assets, styles and javascripts. It excludes all
  // the pug files so we only reload when the final html file is generated
  paths: {
    watched: ['app/assets', 'app/styles/', 'app/javascripts/']
  },
  files: {
    javascripts: {
      joinTo: {
        // ⇓ This line is a mystery. Without it pug throws a runtime exception
        // in the browser, even if not explicitly loaded.
        'vendor.js': /^(?!app)/,
        'app.js': /^app\/javascripts/
      }
    },
    stylesheets: {
      joinTo: 'main.css'
    }
  },
  plugins: {
    babel: {
      presets: ['env']
    }
  },
  server: {
    port: 4014
  }
}

module.exports = config
