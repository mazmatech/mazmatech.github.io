/**
* Template Name: UpConstruction - v1.0.1
* Template URL: https://bootstrapmade.com/upconstruction-bootstrap-construction-website-template/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/
document.addEventListener('DOMContentLoaded', () => {
  "use strict";

  /**
   * Preloader
   */
  const preloader = document.querySelector('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove();
    });
  }

  /**
   * Mobile nav toggle
   */

  const mobileNavShow = document.querySelector('.mobile-nav-show');
  const mobileNavHide = document.querySelector('.mobile-nav-hide');

  document.querySelectorAll('.mobile-nav-toggle').forEach(el => {
    el.addEventListener('click', function(event) {
      event.preventDefault();
      mobileNavToogle();
    })
  });

  function mobileNavToogle() {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    mobileNavShow.classList.toggle('d-none');
    mobileNavHide.classList.toggle('d-none');
  }

  /**
   * Hide mobile nav on same-page/hash links
   */
  document.querySelectorAll('#navbar a').forEach(navbarlink => {

    if (!navbarlink.hash) return;

    let section = document.querySelector(navbarlink.hash);
    if (!section) return;

    navbarlink.addEventListener('click', () => {
      if (document.querySelector('.mobile-nav-active')) {
        mobileNavToogle();
      }
    });

  });

  /**
   * Toggle mobile nav dropdowns
   */
  const navDropdowns = document.querySelectorAll('.navbar .dropdown > a');

  navDropdowns.forEach(el => {
    el.addEventListener('click', function(event) {
      if (document.querySelector('.mobile-nav-active')) {
        event.preventDefault();
        this.classList.toggle('active');
        this.nextElementSibling.classList.toggle('dropdown-active');

        let dropDownIndicator = this.querySelector('.dropdown-indicator');
        dropDownIndicator.classList.toggle('bi-chevron-up');
        dropDownIndicator.classList.toggle('bi-chevron-down');
      }
    })
  });

  /**
   * Scroll top button
   */
  const scrollTop = document.querySelector('.scroll-top');
  if (scrollTop) {
    const togglescrollTop = function() {
      window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
    }
    window.addEventListener('load', togglescrollTop);
    document.addEventListener('scroll', togglescrollTop);
    scrollTop.addEventListener('click', window.scrollTo({
      top: 0,
      behavior: 'smooth'
    }));
  }

  /**
   * Initiate glightbox
   */
  const glightbox = GLightbox({
    selector: '.glightbox'
  });

  /**
   * Porfolio isotope and filter
   */
  let portfolionIsotope = document.querySelector('.portfolio-isotope');

  if (portfolionIsotope) {

    let portfolioFilter = portfolionIsotope.getAttribute('data-portfolio-filter') ? portfolionIsotope.getAttribute('data-portfolio-filter') : '*';
    let portfolioLayout = portfolionIsotope.getAttribute('data-portfolio-layout') ? portfolionIsotope.getAttribute('data-portfolio-layout') : 'masonry';
    let portfolioSort = portfolionIsotope.getAttribute('data-portfolio-sort') ? portfolionIsotope.getAttribute('data-portfolio-sort') : 'original-order';

    window.addEventListener('load', () => {
      let portfolioIsotope = new Isotope(document.querySelector('.portfolio-container'), {
        itemSelector: '.portfolio-item',
        layoutMode: portfolioLayout,
        filter: portfolioFilter,
        sortBy: portfolioSort
      });

      let menuFilters = document.querySelectorAll('.portfolio-isotope .portfolio-flters li');
      menuFilters.forEach(function(el) {
        el.addEventListener('click', function() {
          document.querySelector('.portfolio-isotope .portfolio-flters .filter-active').classList.remove('filter-active');
          this.classList.add('filter-active');
          portfolioIsotope.arrange({
            filter: this.getAttribute('data-filter')
          });
          if (typeof aos_init === 'function') {
            aos_init();
          }
        }, false);
      });

    });

  }

  /**
   * Init swiper slider with 1 slide at once in desktop view
   */
  new Swiper('.slides-1', {
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
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  });

  /**
   * Init swiper slider with 2 slides at once in desktop view
   */
  new Swiper('.slides-2', {
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
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20
      },

      1200: {
        slidesPerView: 2,
        spaceBetween: 20
      }
    }
  });

  /**
   * Initiate pURE cOUNTER
   */
  new PureCounter();

  /**
   * Animation on scroll function and init
   */
  function aos_init() {
    AOS.init({
      duration: 800,
      easing: 'slide',
      once: true,
      mirror: false
    });
  }
  window.addEventListener('load', () => {
    aos_init();
  });

});



am5.ready(function() {

// Data
  var groupData = [
    {
      "data": [
        { "id": "MA", "address": "122 Bd d'Anfa, ","city": "Casablanca"},
        { "id": "EH", "address": "122 Bd d'Anfa, ","city": "Casablanca"},
        { "id": "SN", "address": "3 RUE BERENGER FÉRAUD, ","city": "Dakar"},
        { "id": "TN", "address": "1, IMM TAMAYOUZ, ","city": "Tunis"},
        { "id": "AE", "address": "PLAZA TOWER 1, LEVEL 17, ","city": "Dubai"},
        { "id": "SA", "address": "EXT 6, ABU BAKER STREET, ","city": "Riyadh"},
        { "id": "FR", "address": "31, AVENUE DE SÉGUR, ","city": "Paris"}]}];


// Create root and chart
  var root = am5.Root.new("chartdiv");


// Set themes
  root.setThemes([
    am5themes_Animated.new(root)
  ]);


// Create chart
  var chart = root.container.children.push(am5map.MapChart.new(root, {
    homeZoomLevel: 4,
    homeGeoPoint: { longitude: 17, latitude: 35 },
    wheelX: "none",
    wheelY: "none",
    panX: "none",
    panY: "none"
  }));



// Create world polygon series
  var worldSeries = chart.series.push(am5map.MapPolygonSeries.new(root, {
    geoJSON: am5geodata_worldLow,
    exclude: ["AQ"]
  }));

  worldSeries.mapPolygons.template.setAll({
    fill: am5.color(0xaaaaaa),
    stroke: "#aaaaaa"
  });

  worldSeries.events.on("datavalidated", () => {
    chart.goHome();
  });




// Create series for each group
  var colors = am5.ColorSet.new(root, {
    step: 2
  });
  colors.next();

  am5.array.each(groupData, function(group) {
    var countries = [];
    var color = colors.next();

    am5.array.each(group.data, function(country) {
      if(country.id === "EH"){
        country.name = "Morocco";
      }
      countries.push(country.id)
    });

    var polygonSeries = chart.series.push(am5map.MapPolygonSeries.new(root, {
      geoJSON: am5geodata_worldLow,
      include: countries,
      name: group.name,
      fill: color,
      stroke: color
    }));

    polygonSeries.mapPolygons.template.setAll({
      tooltipText: "[bold]{name}[/]\n{address}[bold]{city}",
      interactive: true,
      fill: color,
      strokeWidth: 2
    });

    polygonSeries.mapPolygons.template.states.create("hover", {
      fill: am5.Color.brighten(color, -0.3),
      stroke: am5.Color.brighten(color, -0.3)
    });

    polygonSeries.mapPolygons.template.events.on("pointerover", function(ev) {
      ev.target.series.mapPolygons.each(function(polygon) {
        polygon.states.applyAnimate("hover");
      });
    });

    polygonSeries.mapPolygons.template.events.on("pointerout", function(ev) {
      ev.target.series.mapPolygons.each(function(polygon) {
        polygon.states.applyAnimate("default");
      });
    });
    polygonSeries.data.setAll(group.data);


}); // end am5.ready()


}); // end am5.ready()

