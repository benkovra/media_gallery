
Function navToggle() {
  Let siteNav = document.getElementById(‘site-nav’);
  Let trigram = document.getElementById(‘trigram’);
  If (siteNav.className === ‘nav-wrap’) {
    //then execute
    siteNav.classList.add(‘mobile’);
    trigram.classList.add('tri-mobile');
  }
  else {
  siteNav.classList = (‘nav-wrap’);
  trigram.classList = (‘nav_link’);
  }
  }
  