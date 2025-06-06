import { initMobileMenu } from './components/mobile-menu';

// Initialize the application when the DOM (Document Object Model) is fully loaded.
document.addEventListener('DOMContentLoaded', () => {
    initMobileMenu();
    initHeaderScroll();
    initProjectFilters();
});

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

/**
 * Project data interface
 */
interface Project {
    title: string;
    description: string;
    category: 'programming' | 'mechanical' | 'electronics';
    tags: string[];
    isOpenSource: boolean;
    githubLink?: string;
    belongsTo: string;
}

/**
 * Project Filters and Pagination
 *
 * Handles filtering of project cards and generates the HTML for each project.
 * Projects can be filtered by category (programming, mechanical, electronics).
 * Implements pagination to display a limited number of projects per page.
 */
function initProjectFilters(): void {
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

    // Project data
    const projects: Project[] = [
        // Programming Projects
        {
            title: 'Portfolio Website',
            description:
                'This personal portfolio website.',
            category: 'programming',
            tags: ['HTML', 'CSS', 'TypeScript', 'Vite', 'GitHub Pages', 'Open Source'],
            isOpenSource: true,
            githubLink: 'https://github.com/borrelunde/portfolio',
            belongsTo: 'Personal',
        },
        {
            title: 'Scipio',
            description:
                'A lightweight, open-source, Try/Catch monad for concise functional exception handling in Java.',
            category: 'programming',
            tags: ['Java', 'Maven', 'JUnit', 'Open Source'],
            isOpenSource: true,
            githubLink: 'https://github.com/borrelunde/scipio',
            belongsTo: 'Personal',
        },
        {
            title: 'High Pressure Underwater Connectors',
            description:
                'Cable and bulkhead underwater connectors for high pressure marine applications. Used on Argus Remote Systems ROVs.',
            category: 'mechanical',
            tags: [
                '3D Modelling',
                'Technical Drawing',
                'Static Stress Analysis',
                'Pressure Tests',
                'Ordering for Manufacture',
                'Autodesk Fusion 360',
                'Vacuum Casting',
                'CNC Machining',
            ],
            isOpenSource: false,
            belongsTo: 'SAIV AS',
        },
        {
            title: 'Pressure Vessel',
            description:
                'Designed, drew, statically stress analysed, and ordered for manufacture a pressure vessel for liquid in-house pressure testing of high pressure underwater connectors. Designed to withstand pressures of up to 1200 bar. Conducted real-world testing to approximately 900 bar.',
            category: 'mechanical',
            tags: [
                '3D Modelling',
                'Technical Drawing',
                'Static Stress Analysis',
                'Ordering for Manufacture',
                'CNC Machining',
                'Autodesk Fusion 360',
                'High Pressure',
                'Sealing',
                'Real-world Testing'
            ],
            isOpenSource: false,
            belongsTo: 'SAIV AS',
        },
        {
            title: 'Alert System',
            description:
                'Alert system for the APB5 automatic profiling system. The system monitors the status of the APB5 and sends e-mail alerts when certain conditions are met, such as profiling inactivity or if the station physically moves out of bounds.',
            category: 'programming',
            tags: [
                'Java',
                'Gradle',
                'JUnit',
                'Google Maps API',
                'Database',
                'SQL',
                'Angus Mail',
            ],
            isOpenSource: false,
            belongsTo: 'SAIV AS',
        },
        {
            title: 'Profiling System Station Activity Dashboard',
            description:
                'Web-based dashboard for monitoring the activity status of the APB5 automatic profiling systems. The dashboard displays real-time data from the profiling system, such as current position, last profile information, and more.',
            category: 'programming',
            tags: [
                'PHP',
                'HTML',
                'CSS',
                'JS',
                'SQL',
                'Database'
            ],
            isOpenSource: false,
            belongsTo: 'SAIV AS',
        },
        {
            title: 'Satellite Network Communication Terminal Enclosure',
            description:
                'Designed, and ordered for manufacture, a robust enclosure for a satellite network communication terminal for the APB5 automatic profiling system. The environment is marine and must withstand permanent deployment in the ocean.',
            category: 'mechanical',
            tags: [
                '3D Modelling',
                'Technical Drawing',
                'Static Stress Analysis',
                'Autodesk Fusion 360',
                'Ordering for Manufacture',
                'CNC Machining',
            ],
            isOpenSource: false,
            belongsTo: 'SAIV AS',
        },
        {
            title: 'Profiling System Station Control Dashboard',
            description:
                'Web-based dashboard for controlling the APB5 automatic profiling systems. The dashboard allows users to visualize data, start and stop profiles, set parameters, monitor the status of the profiling system and its subsystems, export data in CSV format, and more.',
            category: 'programming',
            tags: [
                'PHP',
                'HTML',
                'CSS',
                'JS',
                'SQL',
                'Database'
            ],
            isOpenSource: false,
            belongsTo: 'SAIV AS',
        },
        {
            title: 'Pressure Sensor Data Extractor and Converter',
            description:
                'Internal tool for extracting and converting pressure sensor data from the cloud to files that are used in pressure sensor calibration for oceanographic instruments.',
            category: 'programming',
            tags: [
                'C#',
                'WPF',
                'MVVM',
                'Cloud API',
                'Data Parsing',
                'Data Conversion',
            ],
            isOpenSource: false,
            belongsTo: 'SAIV AS',
        },
        {
            title: 'APB5 Internal Electronics Enclosure',
            description:
                'Designed, drew, and ordered for manufacture enclosures for internal electronic equipment used in the APB5 automatic profiling system. It is not exposed to heavy marine conditions, but must withstand light saltwater exposure over time.',
            category: 'mechanical',
            tags: [
                '3D Modelling',
                'Technical Drawing',
                'Ordering for Manufacture',
                'CNC Machining',
                'Autodesk Fusion 360',
                'Sealing'
            ],
            isOpenSource: false,
            belongsTo: 'SAIV AS',
        },
        {
            title: 'DCPS Deployment Fixture',
            description:
                'Designed, drew, and ordered for manufacture a deployment fixture for the Doppler Current Profiler Sensor (DCPS) used in the APB5 automatic profiling system. It is used to deploy the DCPS from the profiling station in the engaged position, and to transport it in the retracted position.',
            category: 'mechanical',
            tags: [
                '3D Modelling',
                'Technical Drawing',
                'Ordering for Manufacture',
                'CNC Machining',
                'Autodesk Fusion 360',
            ],
            isOpenSource: false,
            belongsTo: 'SAIV AS',
        },
        {
            title: 'Data Retention',
            description:
                'Data retention for the APB5 automatic profiling system. Real-world data is extracted from an FTP server and stored in a database. The data is then used for many purposes, such as monitoring and visualizing the data.',
            category: 'programming',
            tags: ['Java', 'Gradle', 'JUnit', 'Database', 'SQL', 'FTP', 'Parsing'],
            isOpenSource: false,
            belongsTo: 'SAIV AS',
        },
        {
            title: 'Winch Controller Unit',
            description:
                'Improved the winch controller for a stand-alone brushless DC motor winch. The winch is primarily used in the APB5 profiling system to deploy and retrieve the CTD (oceanography sonde) from the water.',
            category: 'programming',
            tags: [
                'C',
                'BoostC',
                'Embedded Systems',
                'Serial Communication',
                'Microcontroller',
            ],
            isOpenSource: false,
            belongsTo: 'SAIV AS',
        },
        {
            title: 'Battery Controller Unit',
            description:
                'Controller for batteries in the APB5 automatic profiling system. The controller monitors the battery voltage and controls the charging and discharging of the batteries to ensure optimal performance and longevity. Logs various data during and between profiles for  analysis and monitoring.',
            category: 'programming',
            tags: [
                'C',
                'Arduino',
                'PlatformIO',
                'Embedded Systems',
                'Serial Communication',
                'Microcontroller',
                'Data Logging',
                'Battery Management',
            ],
            isOpenSource: false,
            belongsTo: 'SAIV AS',
        },
        {
            title: 'Power Controller and Watchdog Unit',
            description:
                'Improved the power controller for the APB5 automatic profiling system that distributes power to other units in the system based on the serial input from the main controller. Watchdog functionality ensures the system is running correctly and to reset the system if it is not.',
            category: 'programming',
            tags: [
                'C',
                'Embedded Systems',
                'Watchdog',
                'Serial Communication',
                'Microcontroller',
            ],
            isOpenSource: false,
            belongsTo: 'SAIV AS',
        },
        {
            title: 'Temperature Sensor Array Casting Mold',
            description:
                'Designed, drew, and ordered for manufacture a casting mold for an array of temperature sensors used in oceanographic instruments, such as the CTD Model SD204 and SD208. It is used to produce the sensor housing.',
            category: 'mechanical',
            tags: [
                '3D Modelling',
                'Technical Drawing',
                'Ordering for Manufacture',
                'CNC Machining',
                'Autodesk Fusion 360',
                'Casting'
            ],
            isOpenSource: false,
            belongsTo: 'SAIV AS',
        },
        {
            title: 'DCPS and WS Controller Unit',
            description:
                'Controller for the Doppler Current Profiler Sensor (DCPS) and wave sensor (WS) in the APB5 automatic profiling system. It operates the sensors and communicates with serial communication to a data transmitter unit to send the data to an FTP server.',
            category: 'programming',
            tags: [
                'C/C++',
                'Embedded Systems',
                'Serial Communication',
                'Microcontroller'
            ],
            isOpenSource: false,
            belongsTo: 'SAIV AS',
        },
        {
            title: 'Optional Sensor Unit 106 Casting Mold',
            description:
                'Designed, drew, and ordered for manufacture a set of casting mold parts for the Optional Sensor Unit 106 (OSU106) with improvements to the previous design. Used in the production of the OSU106.',
            category: 'mechanical',
            tags: [
                '3D Modelling',
                'Technical Drawing',
                'Ordering for Manufacture',
                'CNC Machining',
                'Autodesk Fusion 360',
                'Press Fitting',
                'Casting'
            ],
            isOpenSource: false,
            belongsTo: 'SAIV AS',
        },
        {
            title: 'Conductivity Sensor Controller Unit',
            description:
                'Conductivity sensor controller unit for oceanographic instruments. The unit measures the conductivity of water and communicates the data to the main controller unit via serial communication.',
            category: 'programming',
            tags: [
                'C',
                'Embedded Systems',
                'Serial Communication',
                'Microcontroller'
            ],
            isOpenSource: false,
            belongsTo: 'SAIV AS',
        },
        {
            title: 'Incubator Controller',
            description:
                'A desktop application for managing an incubator used in the production of oceanographic instruments. Users can add or remove schedules to control the incubator\'s temperature over time, with real-time graphical visualization of temperature and schedule data. The communication with the incubator is done via serial communication.',
            category: 'programming',
            tags: [
                'Java',
                'JavaFX',
                'Embedded Systems',
                'Serial Communication',
                'Production Equipment'
            ],
            isOpenSource: false,
            belongsTo: 'SAIV AS',
        },
        {
            title: 'Battery Controller Unit Electronics',
            description:
                'Design and implementation of a unit that control solar power charge to batteries, with a focus on battery life and energy efficiency. Electrical data logging for overview of performance and battery life.',
            category: 'electronics',
            tags: [
                'Circuit Design',
                'PCB Design',
                'Prototyping',
                'Digital Electronics',
                'Embedded Systems Programming',
                'Serial Communication',
                'Batteries',
                'C/C++',
                'Arduino',
                'PlatformIO',
            ],
            isOpenSource: false,
            belongsTo: 'SAIV AS',
        },
        {
            title: 'Remote Controller Unit',
            description:
                'Design and implementation of a remote controller for the APB5 automatic profiling system.',
            category: 'electronics',
            tags: [
                'Circuit Design',
                'PCB Design',
                'Prototyping',
                'Digital Electronics',
                'Embedded Systems Programming',
                'Serial Communication',
                'Batteries',
                'C',
                'PIC Controller',
                '3D Printing',
                'Design Enclosure',
            ],
            isOpenSource: false,
            belongsTo: 'SAIV AS',
        }
    ];

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
