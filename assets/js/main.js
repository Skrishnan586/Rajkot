/**
* Author: CDAC Noida
* License: 
*/
(function () {
  "use strict";

  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)
    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  }

  /**
   * Easy on scroll event listener 
   */
  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
  }

  $(document).ready(function () {
    $('table').dataTable({ searching: false, paging: false, info: false });
    $('#committee-table-1').DataTable();
    $('#committee-table-2').DataTable();
    $('#committee-table-3').DataTable();
    $('#committee-table-4').DataTable();
    $('#committee-table-5').DataTable();
    $('#committee-table-6').DataTable();
    $('#committee-table-7').DataTable();
    $('#committee-table-8').DataTable();
    $('#committee-table-9').DataTable();
    $('#committee-table-10').DataTable();
    $('#committee-table-11').DataTable();
    $('#committee-table-12').DataTable();
    $('#committee-table-13').DataTable();
  });

  /**
   * Navbar links active state on scroll
   */
  let navbarlinks = select('#navbar .scrollto', true)
  const navbarlinksActive = () => {
    let position = window.scrollY + 100
    navbarlinks.forEach(navbarlink => {
      if (!navbarlink.hash) return
      let section = select(navbarlink.hash)
      if (!section) return
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        navbarlink.classList.add('active')
      } else {
        navbarlink.classList.remove('active')
      }
    })
  }
  window.addEventListener('load', navbarlinksActive)
  onscroll(document, navbarlinksActive)

  /**
   * Scrolls to an element with header offset
   */
  const scrollto = (el) => {
    let header = select('#menu')
    let offset = header.offsetHeight

    let elementPos = select(el).offsetTop
    window.scrollTo({
      top: elementPos - offset,
      behavior: 'smooth'
    })
  }

  /**
   * Toggle .menu-scrolled class to #menu when page is scrolled
   */
  // let selectHeader = select('#menu')
  // let selectTopbar = select('#title-section')
  // if (selectHeader) {
  //   const headerScrolled = () => {
  //     if (window.scrollY > 120) {
  //       selectHeader.classList.add('menu-scrolled')
  //       if (selectTopbar) {
  //         selectTopbar.classList.add('title-section-scrolled')
  //       }
  //     } else {
  //       selectHeader.classList.remove('menu-scrolled')
  //       if (selectTopbar) {
  //         selectTopbar.classList.remove('title-section-scrolled')
  //       }
  //     }
  //   }
  //   window.addEventListener('load', headerScrolled)
  //   onscroll(document, headerScrolled)
  // }

  window.onscroll = function () { myFunction() };

  var navbar = document.getElementById("menu");
  var sticky = navbar.offsetTop;

  function myFunction() {
    if (window.pageYOffset >= sticky) {
      navbar.classList.add("sticky")
    } else {
      navbar.classList.remove("sticky");
    }
  }

  /**
   * Back to top button
   */
  let backtotop = select('.scroll-up')
  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY > 40) {
        backtotop.classList.add('active')
      } else {
        backtotop.classList.remove('active')
      }
    }
    window.addEventListener('load', toggleBacktotop)
    onscroll(document, toggleBacktotop)
  }

  /**
   * Mobile nav toggle
   */
  on('click', '.mobile-nav-toggle', function (e) {
    select('#menu-title').classList.toggle('menu-title-visible')
    select('#navbar').classList.toggle('navbar-mobile')
    this.classList.toggle('bi-list')
    this.classList.toggle('bi-x')
  })

  /**
   * Mobile nav dropdowns activate
   */
  on('click', '.navbar .dropdown > a', function (e) {
    if (select('#navbar').classList.contains('navbar-mobile')) {
      e.preventDefault()
      this.nextElementSibling.classList.toggle('dropdown-active')
    }
  }, true)

  /**
   * Scrool with ofset on links with a class name .scrollto
   */
  on('click', '.scrollto', function (e) {
    if (select(this.hash)) {
      e.preventDefault()

      let navbar = select('#navbar')
      if (navbar.classList.contains('navbar-mobile')) {
        navbar.classList.remove('navbar-mobile')
        let navbarToggle = select('.mobile-nav-toggle')
        navbarToggle.classList.toggle('bi-list')
        navbarToggle.classList.toggle('bi-x')
      }
      scrollto(this.hash)
    }
  }, true)

  /**
   * Scroll with ofset on page load with hash links in the url
   */
  window.addEventListener('load', () => {
    if (window.location.hash) {
      if (select(window.location.hash)) {
        scrollto(window.location.hash)
      }
    }
  });

  /**
   * Preloader
   */
  let preloader = select('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove()
    });
  }

  /**
   * Hero carousel indicators
   */
  let heroCarouselIndicators = select("#hero-carousel-indicators")
  let heroCarouselItems = select('#heroCarousel .carousel-item', true)

  heroCarouselItems.forEach((item, index) => {
    (index === 0) ?
      heroCarouselIndicators.innerHTML += "<li data-bs-target='#heroCarousel' data-bs-slide-to='" + index + "' class='active'></li>" :
      heroCarouselIndicators.innerHTML += "<li data-bs-target='#heroCarousel' data-bs-slide-to='" + index + "'></li>"
  });

  /**
   * News carousel indicators
   */
  let newsCarouselIndicators = select("#news-carousel-indicators")
  let newsCarouselItems = select('#newsCarousel .carousel-item', true)

  newsCarouselItems.forEach((item, index) => {
    (index === 0) ?
      newsCarouselIndicators.innerHTML += "<li data-bs-target='#newsCarousel' data-bs-slide-to='" + index + "' class='active'></li>" :
      newsCarouselIndicators.innerHTML += "<li data-bs-target='#newsCarousel' data-bs-slide-to='" + index + "'></li>"
  });


  /**
   * Testimonials slider
   */
  new Swiper('.testimonials-slider', {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20
      },

      1200: {
        slidesPerView: 3,
        spaceBetween: 20
      }
    }
  });

  /**
   * Clients Slider
   */
  new Swiper('.gallery-slider', {
    speed: 400,
    loop: true,
    centeredSlides: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20
      },
      640: {
        slidesPerView: 3,
        spaceBetween: 20
      },
      992: {
        slidesPerView: 5,
        spaceBetween: 20
      }
    }
  });

  /**
   * Initiate gallery lightbox 
   */
  const galleryLightbox = GLightbox({
    selector: '.gallery-lightbox'
  });

  /**
   * Animation on scroll
   */
  window.addEventListener('load', () => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    })
  });


  // Auto-Scroll Notice
  (function ($, undefined) {
    $.fn.loopScroll = function (scrollOptions) {
      var options = $.extend({
        direction: "upwards",
        speed: 60
      }, scrollOptions);

      return this.each(function () {
        var obj = $(this).find(".notices");
        var textHeight = obj.find(".notices-content").height() + 1000;
        var startY, endY;
        if (options.direction == "downwards") {
          startY = -textHeight;
          endY = 0;
        } else if (options.direction == "upwards") {
          startY = 0;
          endY = -textHeight;
        }

        var animate = function () {
          // setup animation of specified block "obj"
          // calculate distance of animation    
          var distance = Math.abs(endY - parseInt(obj.css("top")));

          //alert("animate " + obj.css("top") + "-> " + endY + " " + distance);

          //duration will be distance / speed
          obj.animate({
            top: endY
          }, //scroll upwards
            1000 * distance / options.speed,
            "linear",

            function () {
              // scroll to start position
              obj.css("top", startY);
              animate();
            });
        };

        //obj.find(".notices-content").clone().appendTo(obj);
        $(this).on("mouseover", function () {
          obj.stop();
        }).on("mouseout", function () {
          animate(); // resume animation
        });
        obj.css("top", startY);
        animate(); // start animation

      });
    };
  }(jQuery));

  $("#notices-scroller").loopScroll({
    speed: 20
  });



  fetch("https://60527c06-56a9-4466-8279-8a37206570ce.mock.pstmn.io/Aiims_Portal/service/notices/pdf",
    {
      method: "POST",
      body: new URLSearchParams({
        'hospitalcode': '24922',
        'doctype': '1'
      }),
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
      }
    }).then(function (res) { return res.json(); })
    .then(function (data) {
      for (var i = 0; i < data.length; i++) {
        $(".notices-content").append('<u><i>' + data[i].pdfname + '</i></u><br><br>');
      }
    })
})()
