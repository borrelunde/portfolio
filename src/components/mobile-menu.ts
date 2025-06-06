/**
 * Mobile Menu Toggle
 *
 * Applies the 'active' class to the navigation element when the mobile menu
 * toggle button is clicked. Also removes the 'active' class when a navigation
 * link is clicked.
 */
export function initMobileMenu(): void {
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