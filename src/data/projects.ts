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
 * Array of project data
 */
export const projects: Project[] = [
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
            'Alert system for the SAIV APB5 automatic profiling system. The system monitors the status of the SAIV APB5 and sends e-mail alerts when certain conditions are met, such as profiling inactivity or if the station physically moves out of bounds.',
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
            'Web-based dashboard for monitoring the activity status of the SAIV APB5 automatic profiling systems. The dashboard displays real-time data from the profiling system, such as current position, last profile information, and more.',
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
            'Designed, and ordered for manufacture, a robust enclosure for a satellite network communication terminal for the SAIV APB5 automatic profiling system. The environment is marine and must withstand permanent deployment in the ocean.',
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
            'Web-based dashboard for controlling the SAIV APB5 automatic profiling systems. The dashboard allows users to visualize data, start and stop profiles, set parameters, monitor the status of the profiling system and its subsystems, export data in CSV format, and more.',
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
        title: 'SAIV APB5 Internal Electronics Enclosure',
        description:
            'Designed, drew, and ordered for manufacture enclosures for internal electronic equipment used in the SAIV APB5 automatic profiling system. It is not exposed to heavy marine conditions, but must withstand light saltwater exposure over time.',
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
        title: 'AADI DCPS Deployment Fixture',
        description:
            'Designed, drew, and ordered for manufacture a deployment fixture for the Aanderaa Data Instruments (AADI) Doppler Current Profiler Sensor (DCPS) used in the SAIV APB5 automatic profiling system. It is used to deploy the DCPS from the profiling station in the engaged position, and to transport it in the retracted position.',
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
            'Data retention for the SAIV APB5 automatic profiling system. Real-world data is extracted from an FTP server and stored in a database. The data is then used for many purposes, such as monitoring and visualizing the data.',
        category: 'programming',
        tags: ['Java', 'Gradle', 'JUnit', 'Database', 'SQL', 'FTP', 'Parsing'],
        isOpenSource: false,
        belongsTo: 'SAIV AS',
    },
    {
        title: 'Winch Controller Unit',
        description:
            'Improved the winch controller for a stand-alone brushless DC motor winch. The winch is primarily used in the SAIV APB5 profiling system to deploy and retrieve the SAIV CTD (Conductivity, Temperature, and Depth) oceanographic sonde from the water.',
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
            'Controller for batteries in the SAIV APB5 automatic profiling system. The controller monitors the battery voltage and controls the charging and discharging of the batteries to ensure optimal performance and longevity. Logs various data during and between profiles for  analysis and monitoring.',
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
            'Improved the power controller for the SAIV APB5 automatic profiling system that distributes power to other units in the system based on the serial input from the main controller. Watchdog functionality ensures the system is running correctly and to reset the system if it is not.',
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
            'Designed, drew, and ordered for manufacture a casting mold for an array of temperature sensors used in oceanographic instruments, such as the SAIV CTD Model SD204 and SD208. It is used to produce the sensor housing.',
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
            'Controller for the Aanderaa Data Instruments (AADI) Doppler Current Profiler Sensor (DCPS) and Aanderaa Data Instruments (AADI) Wave Sensor (WS) in the SAIV APB5 automatic profiling system. It operates the sensors and communicates with serial communication to a data transmitter unit to send the data to an FTP server.',
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
        title: 'SAIV OSU106 Casting Mold',
        description:
            'Designed, drew, and ordered for manufacture a set of casting mold parts for the SAIV Optional Sensor Unit 106 (OSU106) with improvements to the previous design. Used in the production of the OSU106.',
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