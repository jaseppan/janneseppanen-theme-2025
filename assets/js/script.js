// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Toggle mobile menu
document.addEventListener('DOMContentLoaded', () => {
    const menuLinks = document.querySelectorAll('.wp-block-navigation__responsive-container-content a');
    const closeButton = document.querySelector('.wp-block-navigation__responsive-container-close');
    const menuContainer = document.querySelector('.wp-block-navigation__responsive-container');

    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            // Close the menu dialog
            if (menuContainer) {
                menuContainer.classList.remove('is-menu-open');
            }
        });
    });

    if (closeButton) {
        closeButton.addEventListener('click', () => {
            // Close the menu dialog when the close button is clicked
            if (menuContainer) {
                menuContainer.classList.remove('is-menu-open');
            }
        });
    }
});