const openButton = document.getElementById('open-sidebar-button')
const navbar = document.getElementById('navbar')

const media = window.matchMedia("(width < 700px)")

media.addEventListener('change', (e) => updateNavbar(e))

function updateNavbar(e){
  const isMobile = e.matches
  console.log(isMobile)
  if(isMobile){
    navbar.setAttribute('inert', '')
  }
  else{
    // desktop device
    navbar.removeAttribute('inert')
  }
}

function openSidebar(){
  navbar.classList.add('show')
  openButton.setAttribute('aria-expanded', 'true')
  navbar.removeAttribute('inert')
}

function closeSidebar(){
  navbar.classList.remove('show')
  openButton.setAttribute('aria-expanded', 'false')
  navbar.setAttribute('inert', '')
}

// For Bookmark Links
// const navLinks = document.querySelectorAll('nav a')
// navLinks.forEach(link => {
//   link.addEventListener('click', () => {
//     closeSidebar()
//   })
// })

document.querySelectorAll('.blood-info').forEach(link => {
  link.addEventListener('click', (e) => {
      e.preventDefault();
      document.querySelector('.active-section').classList.remove('active-section');
      document.getElementById(e.target.dataset.section).classList.add('active-section');
  });
});


updateNavbar(media)

document.addEventListener("DOMContentLoaded", function () {
  const counters = document.querySelectorAll(".stat-number");

  counters.forEach(counter => {
      let target = +counter.getAttribute("data-target");
      let count = 0;
      let speed = target / 100; // Adjust speed based on value

      const updateCount = () => {
          if (count < target) {
              count += speed;
              counter.textContent = Math.floor(count);
              setTimeout(updateCount, 20);
          } else {
              counter.textContent = target; // Ensure final value is exact
          }
      };

      updateCount();
  });
});

var TrandingSlider = new Swiper('.tranding-slider', {
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  loop: true,
  slidesPerView: 'auto',
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 2.5,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
});


