var swiper = new Swiper(".swiper-case-studies", {
  loop: true,
  freeMode: true,
  spaceBetween: 20,
  grabCursor: true,
  slidesPerView: 7,
  loop: true,
  autoplay: {
    delay: 1,
    disableOnInteraction: false,

    // reverseDirection: true
  },
  freeMode: true,
  speed: 20000,
  freeModeMomentum: false,

  breakpoints: {
    // when window width is >= 320px
    100: {
      slidesPerView: 1,

    },
    320: {
      slidesPerView: 1,
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 3,
    }
  },
});

var swiper = new Swiper(".swiper-case-studies2", {
  loop: true,
  freeMode: true,
  spaceBetween: 20,
  grabCursor: true,
  slidesPerView: 7,
  loop: true,
  autoplay: {
    delay: 1,
    disableOnInteraction: false,

    reverseDirection: true
  },
  freeMode: true,
  speed: 20000,
  freeModeMomentum: false,

  breakpoints: {
    // when window width is >= 320px
    100: {
      slidesPerView: 1,

    },
    320: {
      slidesPerView: 1,
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 3,
    }
  },
});

var swiper = new Swiper(".swiper-testimonials", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  loop: false,
});

var swiper = new Swiper(".swiper-client", {
  loop: true,
freeMode: true,
spaceBetween: 20,
grabCursor: true,
slidesPerView: 7,
loop: true,
autoplay: {
delay: 1,
disableOnInteraction: false,

// reverseDirection: true
},
freeMode: true,
speed: 15000,
freeModeMomentum: false,
  breakpoints: {
    // when window width is >= 320px
    300: {
      slidesPerView: 2,
    },
    400: {
      slidesPerView: 3,
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 4,
    },
    768: {
      slidesPerView: 5,
    },
    1024: {
      slidesPerView: 7,
    },
  },
});


var swiper = new Swiper(".demo-swiper", {
  loop: true,
  // freeMode: true,
  spaceBetween: 20,
  grabCursor: true,
  slidesPerView: 7,
  loop: true,
  // autoplay: {
  //   delay: 1,
  //   disableOnInteraction: false,

  //   reverseDirection: true
  // },
  speed: 2000,
  freeModeMomentum: false,

  breakpoints: {
    // when window width is >= 320px
    100: {
      slidesPerView: 1,

    },
    320: {
      slidesPerView: 1,
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 3.5,
    }
  },
});

const mediaQuery = window.matchMedia("(min-width: 1024px)");

if (mediaQuery.matches) {
  gsap.registerPlugin(ScrollTrigger);

  const cardsWrappers = gsap.utils.toArray(".card-wrapper");
  const cards = gsap.utils.toArray(".cardd");

  cardsWrappers.forEach((wrapper, i) => {
    const card = cards[i];
    let scale = 1,
      rotation = 0;
    if (i !== cards.length - 1) {
      scale = 0.7 + 0.025 * i;
      rotation = -10;
    }
    gsap.to(card, {
      scale: scale,
      rotationX: rotation,
      transformOrigin: "center center",
      ease: "none",
      scrollTrigger: {
        trigger: wrapper,
        start: "top " + (0 + 16 * i),
        end: "bottom 550",
        endTrigger: ".wrapper",
        scrub: true,
        pin: wrapper,
        pinSpacing: false,
        // markers: {
        //   indent: 150 * i,
        // },
        id: i + 1,
      },
    });
  });
}

const faqContents = document.querySelectorAll(".faq-content");

faqContents[0].classList.add("active");

faqContents.forEach((faqContent) => {
  faqContent.addEventListener("click", (e) => {
    if (
      e.target.classList.contains("faq-top") ||
      e.target.classList.contains("faq-txt") ||
      e.target.classList.contains("faq-icon")
    ) {
      const faqBtm = faqContent.querySelector(".faq-btm");

      faqContent.classList.toggle("active");

      faqContents.forEach((faqContent2) => {
        if (faqContent2 != faqContent) {
          faqContent2.classList.remove("active");
        }
      });
    } else {
      console.log("ee");
    }
  });
});

$(document).ready(function () {
  $(".counter").counterUp({
    delay: 1,
    time: 1000,
  });
});






