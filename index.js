(function () {
  document.getElementById('hamburger-menu').addEventListener('click', (e) => {
    const item = e.target.dataset.superhero;
    if (item) {
      const fileName = `styles/${item?.toLowerCase()}.css`;
      const fileRef = document.createElement('link');
      // Get existing stylesheet
      const hero = document.getElementById('hero');
      fileRef.setAttribute('rel', 'stylesheet');
      fileRef.setAttribute('type', 'text/css');
      fileRef.setAttribute('href', fileName);
      fileRef.setAttribute('id', 'hero');
      if (hero) {
        // Remove unused stylesheet
        hero.remove();
      }
      document.getElementsByTagName('head')[0].appendChild(fileRef);
      for (let superhero of document.querySelectorAll('[data-superhero]')) {
        if (item === superhero.getAttribute('data-superhero')) {
          superhero.classList.add('active-theme');
        } else {
          superhero.classList.remove('active-theme');
        }
      }
    }
  });
  const toggleHamburgerMenu = (arg) => {
    const menu = document.getElementById('hamburger-menu');
    if (arg) {
      menu.style.display = arg;
    } else {
      menu.style.display = menu.style.display === 'flex' ? 'none' : 'flex';
    }
  };
  document.addEventListener('click', (event) => {
    const id = event.target.id;
    const superhero = event.target.getAttribute('data-superhero');
    if (id === 'hamburger-icon') {
      // toggle when clicked on icon
      toggleHamburgerMenu();
    } else if (id === 'hamburger-menu' || superhero) {
      // Restrict close inside menu
      toggleHamburgerMenu('flex');
    } else {
      // close when clicked anywhere else on window
      toggleHamburgerMenu('none');
    }
  });
})();
