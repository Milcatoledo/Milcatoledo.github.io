import imgAm from '../images/am.jpg';
import imgFigma from '../images/figma.png';
import imgBack from '../images/back.jpg';
import imgElectron from '../images/electron.png';
import imgGit from '../images/git.png';
import iconHtml from '../icons/html.png';
import iconCss from '../icons/css.png';
import iconJs from '../icons/js.png';
import iconBootstrap from '../icons/bootstrap.png';
import iconReact from '../icons/react.png';
import iconFigma from '../icons/Figma.png';
import iconDjango from '../icons/django.png';
import iconSql from '../icons/sql.png';
import iconPython from '../icons/python.png';
import iconElectron from '../icons/electron.png';
import iconGit from '../icons/git.png';
import iconGithub from '../icons/github-icon.png';
import iconRailway from '../icons/Railway.jpg';
import iconJira from '../icons/jira.png';

export const skillsData = [
    {
        skillName: "Habilidades Blandas",
        skillImage: imgAm,
        skillDescriptions: [
            "Comunicación efectiva y asertiva.",
            "Trabajo en equipo y colaboración.",
            "Liderazgo y toma de decisiones.",
            "Adaptabilidad y pensamiento crítico.",
            "Resolución de conflictos y problemas."
        ]
    },
    {
        skillName: "Frontend Development",
        skillImage: imgFigma,
        skillIcons: [
            { src: iconHtml, alt: "HTML5" },
            { src: iconCss, alt: "CSS3" },
            { src: iconJs, alt: "JavaScript" },
            { src: iconBootstrap, alt: "Bootstrap" },
            { src: iconReact, alt: "React" },
            { src: iconFigma, alt: "Figma" }
        ],
        skillDescriptions: [
            "Diseño e implementación de interfaces modernas y responsivas.",
            "Optimización para mejorar la experiencia de usuario.",
            "Integración de maquetación y diseño UI/UX.",
            "Desarrollo de componentes interactivos con React.",
            "Visualización de datos con D3.js."
        ]
    },
    {
        skillName: "Backend Development",
        skillImage: imgBack,
        skillIcons: [
            { src: iconDjango, alt: "Django" },
            { src: iconSql, alt: "SQL Server" },
            { src: iconJs, alt: "JavaScript" },
            { src: iconPython, alt: "Python" }
        ],
        skillDescriptions: [
            "Desarrollo de aplicaciones robustas con bases de datos.",
            "Creación e integración de APIs personalizadas.",
            "Optimización de consultas y seguridad en backend."
        ]
    },
    {
        skillName: "Desktop Apps",
        skillImage: imgElectron,
        skillIcons: [
            { src: iconElectron, alt: "Electron" }
        ],
        skillDescriptions: [
            "Creación de aplicaciones de escritorio multiplataforma.",
            "Uso de tecnologías web para apps nativas."
        ]
    },
    {
        skillName: "Tools & Deployment",
        skillImage: imgGit,
        skillIcons: [
            { src: iconGit, alt: "Git" },
            { src: iconGithub, alt: "GitHub" },
            { src: iconRailway, alt: "Railway" },
            { src: iconJira, alt: "Jira" }
        ],
        skillDescriptions: [
            "Control de versiones y colaboración en equipo.",
            "Despliegue en la nube y hosting de proyectos.",
            "Gestión de proyectos en entornos ágiles.",
            "Implementación de metodologías Scrum."
        ]
    }
];