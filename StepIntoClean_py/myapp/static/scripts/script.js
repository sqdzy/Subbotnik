
window.addEventListener('DOMContentLoaded', function() {
  let isPressed = false;
  const menuButton = document.querySelector('.menu_button');
  const menuWrapper = document.querySelector('.header_menu_wrapper');
  const menuButtonPressed = document.getElementById('menu_icon')

  menuButton.addEventListener('click', function() {
    if (isPressed == false) {
      menuWrapper.classList.toggle('active');
      menuButtonPressed.src = "../imgs/arrow-down-svgrepo-com.svg"
      isPressed = true
    }
    else {
      menuWrapper.classList.remove('active');
      menuButtonPressed.src = "../imgs/menu-svgrepo-com.svg"
      isPressed = false
    }
  });

  document.body.addEventListener('click', function(event) {
    if (!menuWrapper.contains(event.target) && !menuButton.contains(event.target)) {
      menuWrapper.classList.remove('active');
      menuButtonPressed.src = "../imgs/menu-svgrepo-com.svg"
    }
  });
});