import '../styles/courses.css';
import { Navbar } from '../components/navbar.jsx';
import { certificates } from '../data/certificatesData.jsx';

function Courses() {
    const navLinks = [
        { name: "Home", path: "/" },
        { name: "Projects", path: "/projects" },
        { name: "Courses", path: "/courses" },
        { name: "Events", path: "/events" }
    ];
    return (
        <div className="courses-container">
            <div className='navbar-container'>
                <Navbar links={navLinks} />
            </div>
            <h1>Mis Certificados</h1>
            <div className="certificates-grid">
                {certificates.map((cert, idx) => {
                    // Si el link es de Google Drive, obtener el ID para previsualizar
                    let previewUrl = null;
                    const match = cert.link.match(/\/d\/([\w-]+)/);
                    if (match) {
                        previewUrl = `https://drive.google.com/file/d/${match[1]}/preview`;
                    }
                    return (
                        <div className="certificate-card" key={idx}>
                            {previewUrl && (
                                <iframe
                                    className="certificate-preview"
                                    src={previewUrl}
                                    allow="autoplay"
                                    title={cert.title}
                                />
                            )}
                            <div className="certificate-card-content">
                                <h3>{cert.title}</h3>
                                <p>{cert.description}</p>
                                <a href={cert.link} target="_blank" rel="noopener noreferrer" className="certificate-link-btn">
                                    Ver certificado
                                </a>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default Courses;