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
/*-----------------------------------------------Blood Info------------------------------------------------------*/
document.querySelectorAll('.blood-info').forEach(link => {
  link.addEventListener('click', (e) => {
      e.preventDefault();
      document.querySelector('.active-section').classList.remove('active-section');
      document.getElementById(e.target.dataset.section).classList.add('active-section');
  });
});

/*--------------------------------------------------FAQs---------------------------------------------------------*/
document.querySelectorAll(".faq-question").forEach(question => {
    question.addEventListener("click", function() {
        // Close all other open answers
        document.querySelectorAll(".faq-answer").forEach(answer => {
            if (answer !== this.nextElementSibling) {
                answer.classList.remove("open");
                answer.previousElementSibling.classList.remove("active");
            }
        });
        
        // Toggle the selected answer
        this.nextElementSibling.classList.toggle("open");
        this.classList.toggle("active");
    });
});

//-------------------------------------------Gallery-------------------------------------------------------

const galleryContainer = document.querySelector(".gallery-container");
const gallery = document.querySelector(".gallery");
let images = document.querySelectorAll(".gallery img");
let index = 0;
const imageWidth = 565; // Image width (550px) + gap (15px)
let isDragging = false;
let startX, scrollLeft;

// Clone images for seamless infinite scrolling
images.forEach(img => {
    let clone = img.cloneNode(true);
    gallery.appendChild(clone);
});

function autoScroll() {
    index++;
    gallery.style.transform = `translateX(-${index * imageWidth}px)`;

    // When reaching the last original image, reset smoothly
    if (index >= images.length) {
        setTimeout(() => {
            gallery.style.transition = "none";
            index = 0;
            gallery.style.transform = `translateX(0px)`;
        }, 500);

        setTimeout(() => {
            gallery.style.transition = "transform 0.5s ease-in-out";
        }, 600);
    }
}


// Start auto-scrolling every 2 seconds
let autoScrollInterval = setInterval(autoScroll, 1000);

// Pause auto-scroll on hover
galleryContainer.addEventListener("mouseenter", () => clearInterval(autoScrollInterval));

// Resume auto-scroll when not hovered
galleryContainer.addEventListener("mouseleave", () => autoScrollInterval = setInterval(autoScroll, 2000));

// Drag scrolling functionality
galleryContainer.addEventListener("mousedown", (e) => {
    isDragging = true;
    startX = e.pageX - galleryContainer.offsetLeft;
    scrollLeft = galleryContainer.scrollLeft;
    galleryContainer.style.cursor = "grabbing";
});

galleryContainer.addEventListener("mouseleave", () => {
    isDragging = false;
    galleryContainer.style.cursor = "grab";
});

galleryContainer.addEventListener("mouseup", () => {
    isDragging = false;
    galleryContainer.style.cursor = "grab";
});

galleryContainer.addEventListener("mousemove", (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - galleryContainer.offsetLeft;
    const walk = (x - startX) * 2; // Adjust scroll speed
    galleryContainer.scrollLeft = scrollLeft - walk;
});

// Mouse wheel scrolling
galleryContainer.addEventListener("wheel", (e) => {
    e.preventDefault();
    galleryContainer.scrollLeft += e.deltaY * 2;
});







