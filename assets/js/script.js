// Smooth scrolling for anchor links with header height compensation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        const header = document.querySelector('.header-container'); // Select the fixed header
        const headerHeight = header ? header.offsetHeight : 0; // Get the height of the header

        if (target) {
            const targetPosition = target.getBoundingClientRect().top + window.scrollY; // Get target position relative to the document
            const offsetPosition = targetPosition - headerHeight; // Adjust for header height

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
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