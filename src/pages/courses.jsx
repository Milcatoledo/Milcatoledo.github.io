import { useState } from 'react';
import '../styles/courses.css';
import { Navbar } from '../components/navbar.jsx';
import { certificates } from '../data/certificatesData.jsx';
import { Footer } from '../components/footer.jsx';

function Courses() {
    const [selectedImage, setSelectedImage] = useState(null);

    const navLinks = [
        { name: "Home", path: "/" },
        { name: "Projects", path: "/projects" },
        { name: "Courses", path: "/courses" }
    ];

    const openModal = (imageStr) => setSelectedImage(imageStr);
    const closeModal = () => setSelectedImage(null);

    return (
        <div className="home-container">
            <div className="courses-container">
                <div className='navbar-container'>
                    <Navbar links={navLinks} />
                </div>
                <h1>Mis Certificados</h1>
                <div className="certificates-list">
                    {certificates.map((cert, idx) => {
                        return (
                            <div className="certificate-card" key={idx}>
                                <h3>{cert.title}</h3>
                                {cert.date && <p className="certificate-date"><strong>Fecha de obtención:</strong> {cert.date}</p>}
                                <p>{cert.description}</p>
                                <button onClick={() => openModal(cert.image)} className="certificate-link-btn">
                                    Ver certificado
                                </button>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Modal for viewing certificate image */}
            {selectedImage && (
                <div className="modal-overlay" onClick={closeModal}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <img src={selectedImage} alt="Certificado ampliado" className="modal-image" />
                    </div>
                </div>
            )}

            <Footer />
        </div>
    );
}

export default Courses;