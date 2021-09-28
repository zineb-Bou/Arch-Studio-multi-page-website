let hamburger_icon = document.querySelector(' #hamburger-icon ');
let close_icon = document.querySelector(' #close-icon ');
let nav = document.querySelector('.nav');

// When clicking on the menu button

document.querySelector('.menu_btn').addEventListener('click', () => {
  nav.classList.toggle('show');
  if (window.getComputedStyle(hamburger_icon).visibility == 'visible') {
    hamburger_icon.style.visibility = 'hidden';
  } else if (window.getComputedStyle(hamburger_icon).visibility == 'hidden') {
    hamburger_icon.style.visibility = 'visible';
  }
  if (window.getComputedStyle(close_icon).visibility == 'hidden') {
    close_icon.style.visibility = 'visible';
  } else if (window.getComputedStyle(close_icon).visibility == 'visible') {
    close_icon.style.visibility = 'hidden';
  }
});
