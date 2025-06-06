/**
 * Header Scroll Effect
 *
 * Applies the 'scrolled' class to the header when the page is scrolled down.
 */
export function initHeaderScroll(): void {
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