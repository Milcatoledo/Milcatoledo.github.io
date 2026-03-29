import { useEffect, useState } from "react";
import { FiExternalLink } from 'react-icons/fi';
import { IoIosMore } from "react-icons/io";
import { PaginationControl } from './Pagination';

export function ProjectsSection() {
    const [repos, setRepos] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedProject, setSelectedProject] = useState(null);
    const [contributors, setContributors] = useState([]);
    const [loadingContributors, setLoadingContributors] = useState(false);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchRepos() {
            setLoading(true);
            setError(null);
            
            try {
                const user = "Milcatoledo";
                const res = await fetch(`https://api.github.com/users/${user}/repos?type=all&per_page=100`);
                
                if (!res.ok) throw new Error("Error al obtener los repositorios de GitHub");
                const data = await res.json();
                const filtered = data.filter(repo => 
                    repo.owner?.login !== "Samuelbriones" && 
                    repo.owner?.login !== "ariannaf4" && 
                    repo.name !== "LandingPage"
                );
                
                setRepos(filtered);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        }
        fetchRepos();
    }, []);

    useEffect(() => {
        if (!selectedProject) {
            setContributors([]);
            return;
        }
        async function fetchContributors() {
            setLoadingContributors(true);
            try {
                const res = await fetch(selectedProject.contributors_url);
                const data = await res.json();
                setContributors(data);
            } catch (error) {
                console.error(error);
            } finally {
                setLoadingContributors(false);
            }
        }
        fetchContributors();
    }, [selectedProject]);

    const ITEMS_PER_PAGE = 7; // Aquí controlas cuántos quieres ver por página
    const totalPages = Math.ceil(repos.length / ITEMS_PER_PAGE);
    // Esto recorta la lista grande para mostrar solo los 7 que tocan
    const currentRepos = repos.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);


    return (
        <section>
            {loading && <p>Cargando proyectos...</p>}
            {error && <p style={{color: 'red'}}>Error: {error}</p>}
            <div className="table-responsive-wrapper">
                <table>
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Lenguaje</th>
                            <th>Enlace</th>
                            <th>Ver detalle</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentRepos.map(repo => (
                            <tr key={repo.id}>
                                <td>{repo.name}</td>
                                <td>{repo.language || "N/A"}</td>
                                <td><a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="project-link-btn"><FiExternalLink /></a></td>
                                <td><button className="more-btn" onClick={() => setSelectedProject(repo)}>
                                    <IoIosMore />
                                </button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            {/* Componente de Paginación */}
            {totalPages > 1 && (
                <PaginationControl 
                    page={currentPage} 
                    totalPages={totalPages} 
                    onPageChange={setCurrentPage} 
                />
            )}

            {/* Modal */}
            {selectedProject && (
                <div className="popup-overlay">
                    <div className="popup-content">
                        <div className="modal-header">
                            <h3>{selectedProject.name}</h3>
                            <button className="close-icon-btn" onClick={() => setSelectedProject(null)}>
                                &times; 
                            </button>
                        </div>

                        <div className="modal-body-desc">
                            <p>{selectedProject.description || "Este proyecto no tiene descripción adicional."}</p>
                        </div>

                        <div className="modal-meta">
                            <p><b>Propietario:</b> {selectedProject.owner?.login}</p>
                        </div>
                        
                        <div className="modal-contributors-section">
                            <p><b>Equipo Colaborador:</b></p>
                            {loadingContributors ? (
                                <p className="loading-text">Cargando fotos del equipo...</p>
                            ) : (
                                <div className="contributors-list">
                                    {contributors.map(c => (
                                        <a href={c.html_url} target="_blank" rel="noopener noreferrer" className="contributor-card" key={c.id}>
                                            <img src={c.avatar_url} alt={c.login} className="contributor-avatar"/>
                                            <span className="contributor-name">{c.login}</span>
                                        </a>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}

        </section>
    );
}