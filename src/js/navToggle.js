import animations from './animations';

function navToggle() {
  const navBtn = document.querySelector('.c-nav__hamburger');
  const exitBtn = document.querySelector('.c-nav__exit');
  const navLinks = document.querySelector('.c-nav__links');
  const body = document.querySelector('body');
  const overlay = document.createElement('div');
  overlay.className = 'l-overlay';
  function openMobileNav(event) {
    event.preventDefault();
    body.appendChild(overlay);
    body.classList.add('l-no-scroll');
    navLinks.classList.add('c-nav__links--open');
    const navLinksOpen = document.querySelector('.c-nav__links--open');
    animations.initNavSlide(navLinksOpen);
    animations.playNavSlide();
  }
  function closeMobileNav(event) {
    event.preventDefault();
    body.removeChild(overlay);
    body.classList.remove('l-no-scroll');
    navLinks.classList.remove('c-nav__links--open');
    animations.restartNavSlide();
  }

  navBtn.addEventListener('click', openMobileNav);
  exitBtn.addEventListener('click', closeMobileNav);
}

export default navToggle;
