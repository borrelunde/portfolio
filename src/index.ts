import { initMobileMenu } from './components/mobile-menu';
import { initHeaderScroll } from './components/header-scroll';
import { initProjectFilters } from './components/projects-section';

// Initialize the application when the DOM (Document Object Model) is fully loaded.
document.addEventListener('DOMContentLoaded', () => {
    initMobileMenu();
    initHeaderScroll();
    initProjectFilters();
});
