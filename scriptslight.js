document.addEventListener('DOMContentLoaded', function() {
    var menuButton = document.querySelector('.navbar_menu-button');
    var navMenu = document.querySelector('.navbar_menu');
    var bodyContent = document.querySelectorAll('body > *:not(.navbar_component)');
    
    menuButton.addEventListener('click', function() {
        if (navMenu.classList.contains('show')) {
            closeMenu();
        } else {
            openMenu();
        }
    });
    
    function openMenu() {
        menuButton.classList.add('is-active');
        navMenu.classList.add('show');
        bodyContent.forEach(function(element) {
            element.classList.add('blur');
        });
    }
    
    function closeMenu() {
        menuButton.classList.remove('is-active');
        navMenu.classList.remove('show');
        bodyContent.forEach(function(element) {
            element.classList.remove('blur');
        });
    }
    
    // Close menu when clicking on a link inside the menu
    var navLinks = navMenu.querySelectorAll('a');
    navLinks.forEach(function(link) {
        link.addEventListener('click', function() {
            closeMenu();
        });
    });
});