let Talk = {
  init() {
    // Full list of configuration options available here:
    // https://github.com/hakimel/reveal.js#configuration
    Reveal.initialize({
      width: 1080,
      controls: false,
      progress: true,
      history: true,
      center: true,

      transition: 'linear',

      dependencies: [{
        src: 'js/classList.js',
        condition: () => {
          return !document.body.classList;
        }
      }, {
        src: 'js/prism.js',
        async: true,
        callback: () => {
          Prism.highlightAll();
        }
      }]
    });
  }
};

export default Talk;
