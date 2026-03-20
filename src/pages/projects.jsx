
import { Navbar } from '../components/navbar.jsx'
import { ProjectsSection } from '../components/projectsSection.jsx';
import '../styles/projects.css'

function Projects() {
    const navLinks = [
        { name: "Home", path: "/" },
        { name: "Projects", path: "/projects" },
        { name: "Courses", path: "/courses" },
        { name: "Events", path: "/events" }
    ];

    return (
        <div className='project-container'>
            <div className='navbar-container'>
                <Navbar links={navLinks} />
            </div>
            <h1>Mis proyectos</h1>
            <ProjectsSection />
        </div>
    )
}

export default Projects