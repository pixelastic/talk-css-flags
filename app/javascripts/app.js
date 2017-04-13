let Talk = {
  $slides: null,
  init() {
    Reveal.initialize({
      width: "100%",
      height: "100%",
      margin: 0,
      minScale: 1,
      maxScale:1,

      controls: false,
      progress: true,
      history: true,
      center: true,
      transition: 'linear',

      dependencies: [{
        src: 'js/vendors/classList.js',
        condition: () => {
          return !document.body.classList;
        }
      }, {
        src: 'js/vendors/prism.js',
        callback: () => {
          Prism.highlightAll();
        }
      }]
    });

    Talk.$slides = $('.slides').first();

    // Resizing slides to fit the whole screen
    Reveal.addEventListener('ready', Talk.onSlideChange);
    Reveal.addEventListener('slidechanged', Talk.onSlideChange);
    $(window).on('resize', _.throttle(() => {
      Talk.forceFullScreen('section.present');
    }, 500));

    // // Vertical progress bar
    // let progressContainer = document.querySelectorAll('.reveal .progress')[0];
    // let progressBar = progressContainer.querySelectorAll('span')[0];
    // let slidesMax = document.querySelectorAll('.reveal section').length;
    //
    // function updateProgressBar(currentSlide) {
    //   let percent = Math.ceil(currentSlide / slidesMax * 100);
    //   let pageHeight = document.querySelectorAll('.reveal .progress')[0].offsetHeight;
    //   let progressHeight = pageHeight * percent / 100;
    //   progressBar.style.height = `${progressHeight}px`;
    // }
    //
    // Reveal.addEventListener('ready', (event) => {
    //   updateProgressBar(event.indexh + 1);
    //   progressBar.classList.add('ready');
    //   progressBar.classList.add('shadow-1');
    //   progressBar.classList.add('bg-white-70');
    // });
    //
    // Reveal.addEventListener('slidechanged', (event) => {
    //   updateProgressBar(event.indexh + 1);
    // });
  },
  onSlideChange(event) {
    Talk.forceFullScreen(event.currentSlide);
    if (event.previousSlide) {
      Talk.forceFullScreen(event.previousSlide);
    }
  },
  // Cancel Reveal positioning of slides
  forceFullScreen(slide) {
    Talk.$slides.attr('style', null);
    $(slide).css('top', 0);
  },
};

export default Talk;
