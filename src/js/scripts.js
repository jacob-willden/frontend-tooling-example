function toggleMenu() {
    document.querySelector('#menu-button').classList.toggle('open');
    document.querySelector('#main-menu').classList.toggle('open');
}

var menuButton = document.getElementById('menu-button');
menuButton.addEventListener('click', function() {
    toggleMenu();
});