// if (window.screen.width > 720) {
    
//     ScrollReveal().reveal('.about-resume, .experiences-resume', {
//     duration: 700,
//     distance: '200px',
//       origin:'left',
//       reset: false,
//       useDelay:'always',
//     viewFactor: 1,
// });


// ScrollReveal().reveal('.landing-description', {
//     duration: 700,
//     distance: '300px',
//       origin:'left',
//       reset: false,
//       useDelay:'always',
//     viewFactor: 1,
// });

// ScrollReveal().reveal('.about-content, .experiences-title', {
//     duration: 700,
//     distance: '300px',
//       origin:'top',
//       reset: false,
//       useDelay:'always',
//     viewFactor: 1,
// });


// ScrollReveal().reveal('.skills-content', {
//     interval:1,
//     duration: 700,
//     distance: '70px',
//       origin:'right',
//       reset: false,
//       useDelay:'always',
//     viewFactor: 0.8,
// });
//   }



  if (window.matchMedia("(min-width: 720px)").matches) {
    ScrollReveal().reveal('.about-resume, .experiences-resume', {
        duration: 700,
        distance: '200px',
          origin:'left',
          reset: false,
          useDelay:'always',
        viewFactor: 1,
        viewOffset: {
          bottom: -300,
      }
    });
    
    
    ScrollReveal().reveal('.landing-description', {
        duration: 700,
        distance: '300px',
          origin:'left',
          reset: false,
          useDelay:'always',
        viewFactor: 1,
    });
    
    ScrollReveal().reveal('.about-content, .experiences-title', {
        duration: 700,
        distance: '300px',
          origin:'top',
          reset: false,
          useDelay:'always',
        viewFactor: 1,
        viewOffset: {
          bottom: -300,
      }
    });
    
    
    ScrollReveal().reveal('.skills-content', {
        interval:1,
        duration: 700,
        distance: '70px',
          origin:'right',
          reset: false,
          useDelay:'always',
        viewFactor: 0.8,
        
    });
  }