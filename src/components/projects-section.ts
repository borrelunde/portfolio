import { Project, projects } from '../data/projects';

/**
 * Project Filters and Pagination
 *
 * Handles filtering of project cards and generates the HTML for each project.
 * Projects can be filtered by category (programming, mechanical, electronics).
 * Implements pagination to display a limited number of projects per page.
 */
export function initProjectFilters(): void {
    // Select the filter buttons, projects container, and no results message
    const filterButtons = document.querySelectorAll<HTMLButtonElement>('.projects__filter-btn');
    const projectsContainer = document.querySelector<HTMLDivElement>('.projects__content');
    const noResultsMessage = document.querySelector<HTMLDivElement>('.projects__no-results');
    const paginationContainer = document.querySelector<HTMLDivElement>('.projects__pagination') ||
        createPaginationContainer();

    // Pagination state
    const projectsPerPage = 6; // Number of projects to display per page
    let currentPage = 1;
    let currentFilter = 'all';
    let filteredProjects: Project[] = [];

    // If any of the required elements are not found, exit the function early
    if (!filterButtons.length || !projectsContainer || !noResultsMessage) {
        console.error('Required elements for project filters not found');
        return;
    }

    /**
     * Creates the pagination container if it doesn't exist
     */
    function createPaginationContainer(): HTMLDivElement {
        const container = document.createElement('div');
        container.className = 'projects__pagination';

        // Find the projects section container to append the pagination
        const projectsSection = document.querySelector('.projects .container');
        if (projectsSection) {
            projectsSection.appendChild(container);
        }

        return container;
    }


    /**
     * Update project counts in filter buttons
     */
    function updateProjectCounts(): void {
        // Count projects by category
        const counts = {
            all: projects.length,
            programming: projects.filter(p => p.category === 'programming').length,
            mechanical: projects.filter(p => p.category === 'mechanical').length,
            electronics: projects.filter(p => p.category === 'electronics').length
        };

        // Update count in each filter button
        filterButtons.forEach(button => {
            const filter = button.getAttribute('data-filter');
            if (filter) {
                const countSpan = button.querySelector('.projects__count');
                if (countSpan) {
                    countSpan.textContent = `(${counts[filter as keyof typeof counts]})`;
                }
            }
        });
    }

    /**
     * Generate HTML for project cards with pagination
     * @param projectsToShow - Array of all filtered projects
     */
    function generateProjectCards(projectsToShow: Project[]): void {
        // Check if projectsContainer or noResultsMessage exists and quit early if not
        if (!projectsContainer || !noResultsMessage) {
            return;
        }

        // Store the filtered projects for pagination
        filteredProjects = projectsToShow;

        // Calculate pagination
        const totalPages = Math.ceil(projectsToShow.length / projectsPerPage);

        // Adjust the current page if it's out of bounds after filtering
        if (currentPage > totalPages && totalPages > 0) {
            currentPage = totalPages;
        }

        // Get projects for the current page
        const startIndex = (currentPage - 1) * projectsPerPage;
        const endIndex = startIndex + projectsPerPage;
        const projectsForCurrentPage = projectsToShow.slice(startIndex, endIndex);

        // Add a fade-out effect
        projectsContainer.style.opacity = '0';

        setTimeout(() => {
            // Clear the projects-container
            projectsContainer.innerHTML = '';

            // Show/hide "no results"-message
            if (projectsToShow.length === 0) {
                noResultsMessage.style.display = 'block';
                paginationContainer.style.display = 'none';
            } else {
                noResultsMessage.style.display = 'none';
                paginationContainer.style.display = 'flex';

                // Update pagination controls
                renderPagination(totalPages);
            }

            // Generate HTML for each project on the current page
            projectsForCurrentPage.forEach((project, index) => {
                // Create the project card element
                const projectCard = document.createElement('div');
                projectCard.className = 'projects__card';
                projectCard.setAttribute('data-category', project.category);
                projectCard.setAttribute('role', 'article');
                projectCard.setAttribute('aria-labelledby', `project-title-${index}`);

                // Add a subtle entrance animation delay based on the index
                projectCard.style.animationDelay = `${index * 0.05}s`;

                // Create the card header
                const cardHeader = document.createElement('div');
                cardHeader.className = 'projects__card-header';

                // Create the project title
                const title = document.createElement('h3');
                title.className = 'projects__title';
                title.id = `project-title-${index}`;
                title.textContent = project.title;
                cardHeader.appendChild(title);

                // Create belongs to
                const belongsTo = document.createElement('p');
                belongsTo.className = 'projects__belongs-to';
                belongsTo.textContent = project.belongsTo;
                cardHeader.appendChild(belongsTo);

                // Add card header to card
                projectCard.appendChild(cardHeader);

                // Create project description
                const description = document.createElement('p');
                description.className = 'projects__description';
                description.textContent = project.description;
                projectCard.appendChild(description);

                // Create tags container
                const tagsContainer = document.createElement('div');
                tagsContainer.className = 'projects__tags';
                tagsContainer.setAttribute('aria-label', 'Project tags');

                // Add tags
                project.tags.forEach((tag) => {
                    const tagElement = document.createElement('span');
                    tagElement.className = 'projects__tag';
                    tagElement.textContent = tag;
                    tagsContainer.appendChild(tagElement);
                });

                // Add the tags-container to the card
                projectCard.appendChild(tagsContainer);

                // Create the links-container if the project is open source
                if (project.isOpenSource && project.githubLink) {
                    const linksContainer = document.createElement('div');
                    linksContainer.className = 'projects__links';

                    // Create GitHub link
                    const githubLink = document.createElement('a');
                    githubLink.className = 'projects__link';
                    githubLink.href = project.githubLink;
                    githubLink.target = '_blank';
                    githubLink.rel = 'noopener noreferrer';

                    // Add GitHub icon
                    const githubIcon = document.createElement('i');
                    githubIcon.className = 'fab fa-github';
                    githubLink.appendChild(githubIcon);

                    // Add link text
                    const linkText = document.createTextNode(' View on GitHub');
                    githubLink.appendChild(linkText);

                    // Add the link to the container
                    linksContainer.appendChild(githubLink);

                    // Add the links' container to the card
                    projectCard.appendChild(linksContainer);
                }

                // Add the project card to the projects-container
                projectsContainer.appendChild(projectCard);
            });

            // Fade in the projects-container
            setTimeout(() => {
                projectsContainer.style.opacity = '1';
            }, 50);
        }, 300); // Wait for fade-out to complete
    }

    /**
     * Renders pagination controls
     * @param totalPages - Total number of pages
     */
    function renderPagination(totalPages: number): void {
        if (!paginationContainer) return;

        paginationContainer.innerHTML = '';

        // Don't show pagination if there's only one page
        if (totalPages <= 1) {
            paginationContainer.style.display = 'none';
            return;
        }

        // Previous button
        const prevButton = document.createElement('button');
        prevButton.className = 'projects__pagination-btn projects__pagination-prev';
        prevButton.innerHTML = '<i class="fas fa-chevron-left"></i>';
        prevButton.setAttribute('aria-label', 'Previous page');
        prevButton.disabled = currentPage === 1;
        prevButton.addEventListener('click', () => {
            if (currentPage > 1) {
                currentPage--;
                generateProjectCards(filteredProjects);
            }
        });
        paginationContainer.appendChild(prevButton);

        // Page numbers
        const maxVisiblePages = 5; // Maximum number of page buttons to show
        let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
        let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

        // Adjust the start page if we're near the end
        if (endPage - startPage + 1 < maxVisiblePages) {
            startPage = Math.max(1, endPage - maxVisiblePages + 1);
        }

        // First page button (if not visible in the current range)
        if (startPage > 1) {
            const firstPageBtn = document.createElement('button');
            firstPageBtn.className = 'projects__pagination-btn';
            firstPageBtn.textContent = '1';
            firstPageBtn.addEventListener('click', () => {
                currentPage = 1;
                generateProjectCards(filteredProjects);
            });
            paginationContainer.appendChild(firstPageBtn);

            // Ellipsis if there's a gap
            if (startPage > 2) {
                const ellipsis = document.createElement('span');
                ellipsis.className = 'projects__pagination-ellipsis';
                ellipsis.textContent = '...';
                paginationContainer.appendChild(ellipsis);
            }
        }

        // Page buttons
        for (let i = startPage; i <= endPage; i++) {
            const pageBtn = document.createElement('button');
            pageBtn.className = 'projects__pagination-btn';
            if (i === currentPage) {
                pageBtn.classList.add('active');
            }
            pageBtn.textContent = i.toString();
            pageBtn.addEventListener('click', () => {
                currentPage = i;
                generateProjectCards(filteredProjects);
            });
            paginationContainer.appendChild(pageBtn);
        }

        // Last page button (if not visible in the current range)
        if (endPage < totalPages) {
            // Ellipsis if there's a gap
            if (endPage < totalPages - 1) {
                const ellipsis = document.createElement('span');
                ellipsis.className = 'projects__pagination-ellipsis';
                ellipsis.textContent = '...';
                paginationContainer.appendChild(ellipsis);
            }

            const lastPageBtn = document.createElement('button');
            lastPageBtn.className = 'projects__pagination-btn';
            lastPageBtn.textContent = totalPages.toString();
            lastPageBtn.addEventListener('click', () => {
                currentPage = totalPages;
                generateProjectCards(filteredProjects);
            });
            paginationContainer.appendChild(lastPageBtn);
        }

        // Next button
        const nextButton = document.createElement('button');
        nextButton.className = 'projects__pagination-btn projects__pagination-next';
        nextButton.innerHTML = '<i class="fas fa-chevron-right"></i>';
        nextButton.setAttribute('aria-label', 'Next page');
        nextButton.disabled = currentPage === totalPages;
        nextButton.addEventListener('click', () => {
            if (currentPage < totalPages) {
                currentPage++;
                generateProjectCards(filteredProjects);
            }
        });
        paginationContainer.appendChild(nextButton);
    }

    // Update project counts
    updateProjectCounts();

    // Generate project cards initially (show all projects)
    filteredProjects = projects;
    generateProjectCards(projects);

    // Add event listeners to filter buttons
    filterButtons.forEach((button) => {
        button.addEventListener('click', () => {
            // Remove the active class from all buttons
            filterButtons.forEach((btn) => btn.classList.remove('active'));

            // Add the active class to the clicked button
            button.classList.add('active');

            // Get filter value
            const filter = button.getAttribute('data-filter');
            currentFilter = filter || 'all';

            // Reset to the first page when changing filters
            currentPage = 1;

            // Filter projects
            if (filter === 'all') {
                generateProjectCards(projects);
            } else {
                const newFilteredProjects = projects.filter(
                    (project) => project.category === filter,
                );
                generateProjectCards(newFilteredProjects);
            }
        });
    });
}
