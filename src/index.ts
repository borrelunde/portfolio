// Initialize the application when the DOM (Document Object Model) is fully loaded.
document.addEventListener('DOMContentLoaded', () => {
    initMobileMenu();
    initHeaderScroll();
});

/**
 * Mobile Menu Toggle
 *
 * Applies the 'active' class to the navigation element when the mobile menu
 * toggle button is clicked. Also removes the 'active' class when a navigation
 * link is clicked.
 */
function initMobileMenu(): void {
    // Select the mobile menu toggle button and the navigation element.
    const menuToggle = document.querySelector(
        '.header__nav__mobile-toggle',
    ) as HTMLButtonElement;
    const navigation = document.querySelector('.header__nav') as HTMLElement;

    // If either the menu toggle button or the navigation
    // element is not found, exit the function early.
    if (!menuToggle || !navigation) {
        return;
    }

    // Add an event listener to the menu toggle button which toggles the
    // 'active' class on the navigation element when clicked.
    menuToggle.addEventListener('click', () => {
        navigation.classList.toggle('active');
    });

    // Close the menu when clicking on a nav link
    const navLinks = document.querySelectorAll('.header__nav a');
    navLinks.forEach((link) => {
        link.addEventListener('click', () => {
            navigation.classList.remove('active');
        });
    });
}

/**
 * Header Scroll Effect
 *
 * Applies the 'scrolled' class to the header when the page is scrolled down.
 */
function initHeaderScroll(): void {
    // Select the header element from the document.
    const header = document.querySelector('.header') as HTMLElement;

    // If the header element is not found, exit the function early.
    if (!header) {
        return;
    }

    // In case the page is already scrolled down when the script runs,
    // add the 'scrolled' class to the header.
    if (window.scrollY > 0) {
        header.classList.add('scrolled');
    }

    // Add the scroll event listener to the window which toggles the 'scrolled'
    // class based on the scroll position. If the page is scrolled down,
    // the 'scrolled' class is added to the header; otherwise, it is removed.
    window.addEventListener('scroll', () => {
        if (window.scrollY > 0) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
}
