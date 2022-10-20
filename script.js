const menu = document.getElementById('menu-list');
const hamburger = document.getElementById('hamburger');
const link1 = document.getElementById('link1');
const link2 = document.getElementById('link2');
const link3 = document.getElementById('link3');

let show = false;

if (window.innerWidth < 768) {
  const toggleMenu = () => {
    show = !show;
    if (show === true) {
      menu.style.transform = 'translateX(0%)';
      hamburger.className = 'fa-solid fa-xmark';
    } else {
      menu.style.transform = 'translateX(100%)';
      hamburger.className = 'fa-solid fa-bars';
    }
  };
  hamburger.addEventListener('click', toggleMenu);

  const removeModal = () => {
    menu.style.transform = 'translateX(100%)';
    hamburger.className = 'fa-solid fa-bars';
  };

  link1.addEventListener('click', removeModal);
  link2.addEventListener('click', removeModal);
  link3.addEventListener('click', removeModal);
}