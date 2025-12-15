
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

export const cseProjects = [
    {
        title: "TCP Congestion Control Simulator",
        subtitle: "Networking",
        description: "Custom implementation of TCP protocol features.",
        image: tcpImg,
        link: "/project/tcp",
        category: "CS"
    },
    {
        title: "Constraint Satisfaction",
        subtitle: "AI / Algorithms",
        description: "Visualizing CSP algorithms for complex problem solving.",
        image: cspImg,
        link: "/project/csp",
        category: "CS"
    },
    {
        title: "Human Activity Recognition",
        subtitle: "Machine Learning",
        description: "Classifying human activities using sensor data.",
        image: harImg,
        link: "/project/har",
        category: "CS"
    },
    {
        title: "Quiz Application",
        subtitle: "Web Development",
        description: "Interactive quiz platform with secure authentication.",
        image: quizImg,
        link: "/project/quiz-app",
        category: "CS"
    },
    {
        title: "Numerical Analysis of Car Breaking System",
        subtitle: "Computational Math",
        description: "Implementation of advanced numerical algorithms.",
        image: numericalImg,
        link: "/project/numerical-methods",
        category: "CS"
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
