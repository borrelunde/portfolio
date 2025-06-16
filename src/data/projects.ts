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
        title: 'Very High-Pressure Underwater Connectors',
        description:
            'Collaborated on the design, 3D modelled, technically drawn, statically stress analysed, ordered for manufacture, and real-world pressure tested electrical underwater cable and bulkhead connectors for very-high-pressure marine applications. Used on Argus Remote Systems\' ROVs (Remotely Operated Vehicles).',
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
        title: 'Very High-Pressure Cable Connector Moulds',
        description:
            'Designed, 3D modelled, technically drawn, and ordered for manufacture casting moulds for producing over-moulded joints between underwater electrical cables and connectors, used in very high-pressure marine environments.',
        category: 'mechanical',
        tags: [
            '3D Modelling',
            'Technical Drawing',
            'Mould Design',
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
            'Collaborated on the design, 3D modelled, technically drawn, and 3D printed a precision boring fixture used in the production of the CTD Models SD204 and SD208. Ensures accurate hole boring for the conductivity cell.',
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
            'Designed, 3D modelled, technically drawn, statically stress analysed, and ordered for manufacture a pressure vessel for liquid in-house pressure testing of high-pressure underwater connectors. Designed to withstand pressures of up to 1,200 bar. Conducted real-world testing to approximately 900 bar.',
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
            'Developed an alert system for the SAIV APB5 profiling stations. The system monitors the operational status of the stations and sends e-mail alerts when specific conditions are met — such as profiling inactivity or physical displacement beyond dynamic geographic bounds.',
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
            'Web-based dashboard for monitoring the activity status of the SAIV APB5 automatic profiling systems. Displays real-time information such as the current position, the last and next profile information, and other system status indicators.',
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
            'Designed, 3D modelled, technically drawn, statically stress analysed, and ordered for manufacture a robust enclosure for a satellite network communication terminal for the SAIV APB5 automatic profiling system. The enclosure is intended for deployment in marine environments — such as fjords, coastal seas, and inlets — mounted above the waterline on the buoy, and is built to withstand saltwater exposure and wave impact.',
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
            'Web-based dashboard for controlling the SAIV APB5 automatic profiling systems. Enables users to visualize data, start and stop profiles, set parameters, monitor system and subsystem status, and export data in CSV format.',
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
            'Developed a desktop application for internal use to bridge the gap between cloud-based data and existing pressure sensor calibration equipment. The application retrieves and parses pressure sensor data from the cloud and converts it into a format compatible with equipment used in the calibration of oceanographic instruments.',
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
            'Designed, 3D modelled, technically drawn, and ordered for manufacture enclosures for internal electronic equipment used in the SAIV APB5 profiling stations. These enclosures are not exposed to harsh marine conditions but are designed to withstand light saltwater exposure over time.',
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
            '3D modelled, technically drawn, and collaborated in manufacturing preparation of buoyancy rings for the SAIV APB5 profiling stations. Designed to increase overall buoyancy and improve the surface stability of the buoy in marine environments.',
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
            'Designed, technically drawn, and ordered for manufacture a deployment fixture for the Aanderaa Data Instruments (AADI) Doppler Current Profiler Sensor (DCPS) used in the SAIV APB5 automatic profiling system. It is used to deploy the DCPS from the profiling station in the engaged position and to transport it in the retracted position.',
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
            'Developed a backend service for the SAIV APB5 automatic profiling system to ensure persistent storage of real-world profiling data. The service retrieves raw data from an FTP server, parses and validates it to ensure data integrity, and inserts clean records into a database for use in downstream applications — such as monitoring, visualization, and reporting.',
        category: 'programming',
        tags: ['Java', 'Gradle', 'JUnit', 'Database', 'SQL', 'FTP', 'Data Parsing', 'Data Validation', 'Backend Service'],
        isOpenSource: false,
        belongsTo: 'SAIV AS',
    },
    {
        title: 'Winch Controller Unit',
        description:
            'Improved the controller software for a stand-alone brushless DC motor winch used in the SAIV APB5 profiling system. The winch deploys and retrieves the SAIV CTD (Conductivity, Temperature, and Depth) oceanographic sonde from the water during profiling operations.',
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
            'Developed a controller for managing batteries in the SAIV APB5 automatic profiling system. The controller monitors battery voltage, manages charging and discharging to ensure optimal performance and longevity, and logs operational data during and between profiles for analysis and monitoring.',
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
            'Improved the power controller for the SAIV APB5 automatic profiling system. The unit distributes power to other system components based on serial input from the main controller. Integrated watchdog functionality ensures the system is operating correctly and automatically resets it in the event of a fault.',
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
            'Designed, technically drawn, and ordered for manufacture a casting mould for an array of temperature sensors used in oceanographic instruments, such as the SAIV CTD Model SD204 and SD208. Used in the production of the sensor housings.',
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
            'Developed a controller for the Aanderaa Data Instruments (AADI) Doppler Current Profiler Sensor (DCPS) and Wave Sensor (WS) used in the SAIV APB5 automatic profiling system. The controller operates the sensors and communicates via serial interface with a data transmission unit, which forwards the data to an FTP server.',
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
            'Designed, technically drawn, and ordered for manufacture a set of casting mould parts for the SAIV Optional Sensor Unit 106 (OSU106) with improvements to the previous design. Used in the production of the OSU106.',
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
            'Redesigned, technically drawn, and ordered for manufacture casting moulds for the SAIV205 Oxygen Sensor.',
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
            'Refactored and improved a controller unit for measuring water conductivity in oceanographic instruments. The unit communicates readings to the main controller via serial interface.',
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
            'Developed a desktop application for managing an incubator used in the production of oceanographic instruments. The application allows users to define and modify temperature schedules, with real-time graphical visualization of temperature data and schedule timelines. Communicates with the incubator hardware via serial interface.',
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
            'Design and implementation of a unit that controls solar power charge to batteries, with a focus on battery life and energy efficiency. Includes electrical data logging for performance monitoring and battery life analysis.',
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
            'Design and implementation of a remote controller for the SAIV APB5 automatic profiling system.',
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
