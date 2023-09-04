var sidenav = document.getElementById("mySidenav");
var openBtn = document.getElementById("openBtn");
var closeBtn = document.getElementById("closeBtn");

openBtn.addEventListener('click', function (event) {
  console.log('cc tmr')
  openNav()
});

closeBtn.addEventListener('click', function (event) {
  event.stopPropagation();
  closeNav();
});

function openNav() {
  sidenav.classList.add("active");
}

function closeNav() {
  sidenav.classList.remove("active");
}

document.addEventListener('click', function (event) {
  var isActive = sidenav.classList.contains("active");
  var isClickInsideSidenav = sidenav.contains(event.target);
  var isClickOnBurger = openBtn.contains(event.target);

  if (isActive && !isClickInsideSidenav && !isClickOnBurger) {
    closeNav();
  }
});

document.querySelectorAll('#mySidenav a').forEach(link => {
  link.addEventListener('click', closeNav);
});

closeBtn.addEventListener('click', function (event) {
  event.preventDefault();
  event.stopPropagation();
  closeNav();
});

const fadeIns = document.querySelectorAll('.fade-in');

window.addEventListener('scroll', () => {
  const isSmallScreen = window.matchMedia("(max-width: 650px)").matches;

  fadeIns.forEach(fadeIn => {
    if (isSmallScreen && fadeIn.classList.contains('disable-section')) {
      return;
    }

    if (fadeIn.getBoundingClientRect().top < window.innerHeight / 1.3) {
      fadeIn.classList.add('active');
    }
  });
});