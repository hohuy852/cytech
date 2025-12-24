



// Project Slider
var swiper = new Swiper(".project-slider", {
    spaceBetween: 18,
    slidesPerView: 3,
    speed: 1500,
    loop: false,
    navigation: {
        nextEl: ".project-button-next",
        prevEl: ".project-button-prev",
    },
    breakpoints: {
      809: {
        slidesPerView: 1
      },
      1200: {
        slidesPerView: 3
      }
    }
});



// Testimonial
var swiper2 = new Swiper(".testimonial-slider", {
    spaceBetween: 18,
    slidesPerView: 2,
    loop: false,
    speed: 1500,
    slidesPerGroup: 2,
    grabCursor: false,
    mousewheelControl: false,
    pauseOnMouseEnter: false,
    navigation: {
        nextEl: ".testimonial-button-next",
        prevEl: ".testimonial-button-prev",
    },
    breakpoints: {
      525: {
        slidesPerView: 1
      },
      809: {
        slidesPerView: 1
      },
      1200: {
        slidesPerView: 2
      }
    }
});


// Gallery
// var swiper2 = new Swiper(".gallery-slider", {
//     spaceBetween: 18,
//     slidesPerView: 4,
//     loop: true,
//     speed: 1500,
//     slidesPerGroup: 1,
//     grabCursor: false,
//     mousewheelControl: false,
//     pauseOnMouseEnter: false,
//     navigation: {
//         nextEl: ".gallery-button-next",
//         prevEl: ".gallery-button-prev",
//     },
//     breakpoints: {
//       525: {
//         slidesPerView: 1
//       },
//       768: {
//         slidesPerView: 3
//       },
//       1200: {
//         slidesPerView: 4
//       }
//     }
// });


if ($('#datetime').length) {
  // set a variable
  var today = moment().format('dddd, D MMMM, YYYY');
  
  document.querySelector('#datetime').textContent = today;
}


if ($('#current-time').length) {
  // set a variable
  var currentTime = moment().format("HH:mm");
  
  document.querySelector('#current-time').textContent = currentTime;
}
const humbergMenu = document.querySelector('.humberg-menu');
const sidebarMenu = document.querySelector('.sticky-sidebar');

humbergMenu.addEventListener('click', function() {
  sidebarMenu.classList.toggle('active-nav');
});

       gsap.registerPlugin(TextPlugin, ScrollTrigger);

        document.addEventListener("DOMContentLoaded", () => {
            
            // 1. Text Decoding Effect for Main Title
            const heroTitle = document.getElementById("hero-title");
            if (heroTitle) {
                gsap.to(heroTitle, {
                    duration: 2,
                    text: {
                        value: "Ho Sy Huy 👋🏽",
                        scrambleText: {
                            text: "Ho Sy Huy 👋🏽",
                            chars: "CYBER_01X",
                            revealDelay: 0.5,
                            speed: 0.3
                        }
                    },
                    ease: "power2.inOut"
                });
            }

            // 2. Reveal Animations on Scroll
            gsap.utils.toArray('.gs-reveal').forEach(elem => {
                gsap.from(elem, {
                    scrollTrigger: {
                        trigger: elem,
                        start: "top 85%",
                        toggleActions: "play none none reverse"
                    },
                    y: 30,
                    opacity: 0,
                    duration: 0.8,
                    ease: "power3.out"
                });
            });

            // 3. Staggered Reveal for Items
            gsap.utils.toArray('.gs-item').forEach((item, i) => {
                gsap.from(item, {
                    scrollTrigger: {
                        trigger: item,
                        start: "top 90%",
                    },
                    y: 20,
                    opacity: 0,
                    duration: 0.5,
                    delay: 0.1, // small delay just for effect
                    ease: "back.out(1.7)"
                });
            });

        });
