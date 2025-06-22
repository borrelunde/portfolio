/**
 * Project data interface
 */
export interface Project {
    title: string;
    description: string;
    category: 'programming' | 'mechanical' | 'electronics';
    tags: string[];
    isOpenSource: boolean;
    githubLink?: string;
    belongsTo: string;
}

/**
 * Array of project data, a mix of personal and work projects across various
 * categories over time. More or less in chronological order from oldest to
 * newest, but not strictly.
 */
export const projects: Project[] = [
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
        title: 'Very High Pressure Underwater Connectors',
        description:
            'Electrical underwater cable and bulkhead connectors for very high pressure marine applications.',
        category: 'mechanical',
        tags: [
            '3D Modelling',
            'Technical Drawing',
            'Static Stress Analysis',
            'Pressure Testing',
            'Ordering for Manufacture',
            'Autodesk Fusion 360',
            'Vacuum Casting',
            'CNC Machining',
        ],
        isOpenSource: false,
        belongsTo: 'SAIV AS',
    },
    {
        title: 'Very High Pressure Cable Connector Moulds',
        description:
            'Casting moulds for over-moulded joints between underwater electrical cables and connectors.',
        category: 'mechanical',
        tags: [
            '3D Modelling',
            'Technical Drawing',
            'Over-moulding',
            'Ordering for Manufacture',
            'Autodesk Fusion 360',
            'Vacuum Casting',
            'CNC Machining'
        ],
        isOpenSource: false,
        belongsTo: 'SAIV AS',
    },
    {
        title: 'CTD Model SD204/SD208 Conductivity Cell Hole Boring Fixture',
        description:
            'Boring fixture used in the production of the SAIV CTD Models SD204 and SD208. Ensures accurate hole boring for the conductivity cell.',
        category: 'mechanical',
        tags: [
            '3D Modelling',
            'Technical Drawing',
            '3D Printing',
            'Autodesk Fusion 360'
        ],
        isOpenSource: false,
        belongsTo: 'SAIV AS',
    },
    {
        title: 'Pressure Vessel',
        description:
            'Pressure vessel for liquid in-house pressure testing of high-pressure underwater connectors. Designed to withstand pressures of up to 1,200 bar.',
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
            'Alert system for the SAIV APB5 profiling stations. Monitors the operational status of the stations and sends alerts when specific conditions are met.',
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
            'Web-based dashboard for monitoring the activity status of the SAIV APB5 automatic profiling systems. Displays real-time information such as the current position, the last and next profile information, and more.',
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
            'Robust enclosure for a satellite network communication terminal for the SAIV APB5 automatic profiling system.',
        category: 'mechanical',
        tags: [
            '3D Modelling',
            'Technical Drawing',
            'Static Stress Analysis',
            'Autodesk Fusion 360',
            'Ordering for Manufacture',
            'CNC Machining',
            'Sealing'
        ],
        isOpenSource: false,
        belongsTo: 'SAIV AS',
    },
    {
        title: 'Profiling System Station Control Dashboard',
        description:
            'Web-based dashboard for controlling the SAIV APB5 automatic profiling systems. Enables users to visualize data, start and stop profiles, set parameters, monitor system and subsystem status, and export data.',
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
            'Desktop application for internal use to bridge the gap between cloud-based data and existing pressure sensor calibration equipment.',
        category: 'programming',
        tags: [
            'C#',
            'WPF',
            'MVVM',
            'Desktop Application',
            'Cloud API',
            'Data Parsing',
            'Data Conversion',
            'JSON'
        ],
        isOpenSource: false,
        belongsTo: 'SAIV AS',
    },
    {
        title: 'SAIV APB5 Internal Electronics Enclosure',
        description:
            'Enclosures for internal electronic equipment used in the SAIV APB5 profiling stations.',
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
        title: 'SAIV APB5 Buoyancy Ring',
        description:
            'Buoyancy rings for the SAIV APB5 profiling stations. Designed to increase buoyancy and improve the surface stability.',
        category: 'mechanical',
        tags: [
            '3D Modelling',
            'Technical Drawing',
            'Autodesk Fusion 360'
        ],
        isOpenSource: false,
        belongsTo: 'SAIV AS',
    },
    {
        title: 'AADI DCPS Deployment Fixture',
        description:
            'Deployment fixture for the Aanderaa Data Instruments (AADI) Doppler Current Profiler Sensor (DCPS) used in the SAIV APB5 automatic profiling system.',
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
            'Backend service for the SAIV APB5 automatic profiling system to ensure persistent storage of real-world profiling data. Retrieves data from an FTP server, parses and validates it, and inserts records into a database for use in downstream applications.',
        category: 'programming',
        tags: [
            'Java',
            'Gradle',
            'JUnit',
            'Database',
            'SQL',
            'FTP',
            'Data Parsing',
            'Data Validation',
            'Backend Service'
        ],
        isOpenSource: false,
        belongsTo: 'SAIV AS',
    },
    {
        title: 'Winch Controller Unit',
        description:
            'Controller software for a stand-alone brushless DC motor winch used in the SAIV APB5 profiling system. Deploys and retrieves the SAIV CTD (Conductivity, Temperature, and Depth) oceanographic sonde from the water during profiling operations.',
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
            'Controller for managing batteries in the SAIV APB5 automatic profiling system. Monitors battery voltage, manages charging and discharging, and logs data during and between profiles.',
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
            'Power controller for the SAIV APB5 automatic profiling system. Distributes power to other system components based on serial input from the main controller. Watchdog functionality ensures the system automatically resets upon fault.',
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
        title: 'Temperature Sensor Array Casting Mould',
        description:
            'Casting mould for an array of temperature sensors used in oceanographic instruments, such as the SAIV CTD Model SD204 and SD208.',
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
        title: 'AADI DCPS and AADI WS Controller Unit',
        description:
            'Controller for the Aanderaa Data Instruments (AADI) Doppler Current Profiler Sensor (DCPS) and Wave Sensor (WS) used in the SAIV APB5 automatic profiling system. Operates the sensors and communicates with a data transmission unit.',
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
        title: 'SAIV OSU106 Casting Mould',
        description:
            'A set of casting mould parts for the SAIV Optional Sensor Unit 106 (OSU106) with improvements to the previous design.',
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
        title: 'SAIV205 Oxygen Sensor Casting Mould',
        description:
            'Casting moulds for the SAIV205 Oxygen Sensor.',
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
        title: 'Conductivity Sensor Controller Unit',
        description:
            'Controller unit for measuring water conductivity in oceanographic instruments. The unit communicates readings to the main controller via serial interface.',
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
            'Application for managing an incubator used in the production of oceanographic instruments. Control temperature schedules, with real-time graphical visualization.',
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
        title: 'Battery Controller Unit',
        description:
            'Unit that controls solar power charge to batteries. Includes electrical data logging for monitoring and analysis.',
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
            'Remote controller for the SAIV APB5 automatic profiling system.',
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
