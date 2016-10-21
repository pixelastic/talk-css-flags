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


    // Vertical progress bar
    let progressContainer = document.querySelectorAll('.reveal .progress')[0];
    let progressBar = progressContainer.querySelectorAll('span')[0];
    let slidesMax = document.querySelectorAll('.reveal section').length;

    function updateProgressBar(currentSlide) {
      let percent = Math.ceil(currentSlide / slidesMax * 100);
      let pageHeight = document.querySelectorAll('.reveal .progress')[0].offsetHeight;
      let progressHeight = pageHeight * percent / 100;
      progressBar.style.height = `${progressHeight}px`;
    }

    Reveal.addEventListener('ready', (event) => {
      updateProgressBar(event.indexh + 1);
      progressBar.classList.add('ready');
      progressBar.classList.add('shadow-1');
      progressBar.classList.add('bg-white-70');
    });

    Reveal.addEventListener('slidechanged', (event) => {
      updateProgressBar(event.indexh + 1);
    });
  }
};

export default Talk;
