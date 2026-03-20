import { useEffect, useState } from "react";

export function ProjectsSection() {
    const [repos, setRepos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchRepos() {
            setLoading(true);
            setError(null);
            try {
                const token = import.meta.env.VITE_GITHUB_TOKEN;
                if (!token) throw new Error("No se encontró el token de GitHub");
                const headers = { Authorization: `token ${token}` };
                const res = await fetch("https://api.github.com/user/repos?per_page=100", { headers });
                if (!res.ok) throw new Error("Error al obtener los repositorios colaborativos y propios");
                const data = await res.json();
                const filtered = data.filter(repo => repo.owner?.login !== "Samuelbriones" && repo.owner?.login !== "ariannaf4" && repo.name !== "LandingPage");
                setRepos(filtered);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        }
        fetchRepos();
    }, []);

    return (
        <section>
            {loading && <p>Cargando proyectos...</p>}
            {error && <p style={{color: 'red'}}>Error: {error}</p>}
            <div className="projects-grid">
                {repos.map(repo => (
                    <div className="project-card" key={repo.id}>
                        <h3>{repo.name}</h3>
                        <p>{repo.description || "Sin descripción"}</p>
                        <p><b>Propietario:</b> {repo.owner?.login}</p>
                        <p><b>Lenguaje:</b> {repo.language || "N/A"}</p>
                        <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="project-link-btn">Ir al proyecto</a>
                    </div>
                ))}
            </div>
        </section>
    );
}