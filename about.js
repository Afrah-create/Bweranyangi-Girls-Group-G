
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');

    // Toggle menu visibility when button is clicked
    menuToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
    });

    // Check screen size and adjust menu accordingly
    function checkScreenSize() {
        if (window.innerWidth <= 768) {
            menuToggle.style.display = 'block';
            navMenu.classList.remove('active');
        } else {
            menuToggle.style.display = 'none';
            navMenu.classList.add('active');
        }
    }

    // Initial check and event listener for resize
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
});