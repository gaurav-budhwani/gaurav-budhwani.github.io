
import cspImg from '../assets/cse/CSP.png';
import harImg from '../assets/cse/HAR.png';
import numericalImg from '../assets/cse/Numerical methods.png';
import quizImg from '../assets/cse/Quizz-app.png';
import tcpImg from '../assets/cse/TCP.png';

import cumeneImg from '../assets/core/Cumene.png';
import optimisationImg from '../assets/core/Optimisation.png';
import saffmanImg from '../assets/core/Saffman.png';
import thermoImg from '../assets/core/Thermodynamics.png';
import heatImg from '../assets/core/heat transfer.png';
import pyrolysisImg from '../assets/core/pyrolysis.png';

import tcpReport from '../assets/reports/CN_Project.pdf';
import cspReport from '../assets/reports/CSP_Report.pdf';
import numericalReport from '../assets/reports/MA203_Project.pdf';

import harNotebook from './HAR_Analysis.json';

export const cseProjects = [
    {
        title: "TCP Congestion Control Simulator",
        subtitle: "Networking",
        description: "Custom implementation of TCP protocol features.",
        image: tcpImg,
        link: "/project/tcp",
        category: "Networking",
        slug: "tcp",
        longDescription: "Interactive simulation platform that demonstrates how different TCP congestion control algorithms work under varying network conditions, such as bandwidth, delay, and packet loss. It provides visualization of throughput, congestion window changes, and retransmission behavior.",
        features: [
            "Interactive Simulation of network conditions",
            "Real-time Visualization of throughput & congestion",
            "Congestion Window Analysis",
            "Packet Loss & Retransmission Simulation"
        ],
        techStack: ["Python", "JavaScript", "React", "Matplotlib", "ns-3"],
        repoUrl: "https://github.com/gaurav-budhwani/TCP-Congestion-Control-Algorithms",
        reportUrl: tcpReport
    },
    {
        title: "Constraint Satisfaction",
        subtitle: "AI / Algorithms",
        description: "Visualizing CSP algorithms for complex problem solving.",
        image: cspImg,
        link: "/project/csp",
        category: "AI / Algorithms",
        slug: "csp",
        longDescription: "This project is an interactive Constraint Satisfaction Problem (CSP) Visualizer built with React and TypeScript. It demonstrates how AI algorithms solve complex constraint problems like N-Queens and KenKen puzzles. The application features a premium UI with real-time visualization of solver steps, allowing users to understand algorithms like Backtracking, Forward Checking, and Arc Consistency.",
        features: [
            "N-Queens Solver (4x4 to 12x12)",
            "KenKen Puzzle Generator & Solver",
            "Visualized Algorithms: Backtracking, Forward Checking, MAC",
            "Interactive User Play Mode with Validation"
        ],
        techStack: ["React", "TypeScript", "Vite", "CSS3"],
        repoUrl: "https://github.com/gaurav-budhwani/CSP-Visualizer",
        reportUrl: cspReport
    },
    {
        title: "Human Activity Recognition",
        subtitle: "Machine Learning",
        description: "ML model interpreting accelerometer data.",
        image: harImg,
        link: "/project/har",
        category: "Machine Learning",
        slug: "har",
        longDescription: "Machine learning model that can identify different human activities like walking, sitting, and running using data from an accelerometer. This project involves Exploratory Data Analysis (EDA), Feature Engineering using the TSFEL library, and training Decision Trees to classify activities with high accuracy.",
        features: [
            "Accelerometer Data Analysis",
            "Time Series Feature Extraction (TSFEL)",
            "PCA Dimensionality Reduction",
            "Decision Tree Classification",
            "Real-world Data Validation"
        ],
        techStack: ["Python", "Scikit-Learn", "Pandas", "Seaborn"],
        repoUrl: "https://github.com/gaurav-budhwani/HAR-Human-Activity-Recognizer-ML",
        notebookData: harNotebook,
        fullWidth: true
    },
    {
        title: "Quiz Application",
        subtitle: "Web Development",
        description: "Interactive quiz platform with secure authentication.",
        image: quizImg,
        link: "/project/quiz-app",
        category: "Web Dev / Databases",
        slug: "quiz-app",
        techStack: ["Flask", "SQLite3", "Python", "HTML/CSS"],
        repoUrl: "https://github.com/Hit2737/Quiz_App",
        features: [
            "User Authentication (Login, Signup, Forgot Password)",
            "Admin Dashboard for creating and managing quizzes",
            "Student Dashboard for taking quizzes",
            "Secure environment with basic verification",
            "Responsive Design"
        ],
        longDescription: `This repo provides the code for the quiz app that I built with my friends ([Ruchit Jagodara](https://github.com/ruchitjagodara), [Bhavik Patel](https://github.com/bp0609/), [Gaurav Budhwani](https://github.com/gaurav-budhwani)) under the guidance of [Prof. Balagopal Komarath](https://github.com/balu).

The app is built using **Flask** and **SQLite3** and is designed to be lightweight, allowing it to be hosted on any machine with Python installed.

### Key Capabilities
- **Authentication**: Includes secure login, signup, and password recovery.
- **Classroom Utility**: Can be used for attendance and secure quiz-taking with verification features.
- **Admin Role**: Admins can create quizzes, add questions (text or MCQ), set options, and manage the quiz lifecycle (start/stop/lock).
- **Student Role**: Students can join quizzes via code, verify their identity, and attempt questions in a controlled environment.

### How it Works
The application separates roles into **Admin** and **Student**. Admins have full control over the quiz creation process, including supporting latex for math equations in questions. Students experience a streamlined interface to take the quiz and view their results.`
    },
    {
        title: "Numerical Analysis of Car Breaking System",
        subtitle: "Computational Math",
        description: "Implementation of advanced numerical algorithms.",
        image: numericalImg,
        link: "/project/numerical-methods",
        category: "Computational Math",
        slug: "numerical-methods",
        techStack: ["Python", "NumPy", "Matplotlib"],
        repoUrl: "https://github.com/gaurav-budhwani/MA-203-Project",
        reportUrl: numericalReport,
        features: [
            "Transient Thermal Analysis of Brake Systems",
            "Numerical Modeling of Heat Dissipation",
            "Simulation of Braking Scenarios",
            "Algorithm Implementation from Scratch"
        ],
        longDescription: "This project focuses on the **Transient Thermal Analysis of a Car Brake System**. It involves the mathematical modeling and numerical simulation of heat generation and dissipation in brake discs during braking. The project implements advanced numerical methods to solve differential equations governing heat transfer, allowing for the prediction of temperature profiles and thermal behavior under various conditions."
    }
];

export const coreProjects = [
    {
        title: "Pyrolysis Modeling",
        subtitle: "Research / Simulation",
        description: "Parameter estimation for wood particle pyrolysis.",
        image: pyrolysisImg,
        link: "/project/pyrolysis",
        category: "Separation process"
    },
    {
        title: "Cumene Process Design",
        subtitle: "Plant Design",
        description: "Energy-efficient plant design and optimization.",
        image: cumeneImg,
        link: "/project/cumene",
        category: "Process Design"
    },
    {
        title: "Laminar Airflow Optimization",
        subtitle: "CFD Analysis",
        description: "Minimizing heat loss via CFD analysis.",
        image: optimisationImg,
        link: "/project/airflow",
        category: "Optimisation"
    },
    {
        title: "Saffman-Taylor Instability",
        subtitle: "Fluid Dynamics",
        description: "Experimental study of Hele-Shaw instability.",
        image: saffmanImg,
        link: "/project/saffman",
        category: "Modelling"
    },
    {
        title: "Thermodynamics Analysis",
        subtitle: "Research",
        description: "Thermodynamic cycle analysis and efficiency study.",
        image: thermoImg,
        link: "/project/thermo",
        category: "Thermodynamics"
    },
    {
        title: "Heat Transfer Efficiency",
        subtitle: "Engineering",
        description: "Analysis of circular fin heat transfer efficiency.",
        image: heatImg,
        link: "/project/heat-transfer",
        category: "Heat Transfer"
    }
];

export const allProjects = [...cseProjects, ...coreProjects];
