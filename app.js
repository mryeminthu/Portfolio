const toggleBtn = document.getElementsByClassName('toggle')[0];
const fourMenu = document.getElementsByClassName('four-menu')[0];
toggleBtn.addEventListener('click', () => {
  fourMenu.classList.toggle('active');
});
const crossBtn = document.getElementsByClassName('cross')[0];
crossBtn.addEventListener('click', () => {
  fourMenu.classList.remove('active');
});