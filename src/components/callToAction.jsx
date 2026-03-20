import '../styles/callToActionSection.css'
import milcaPhoto from '../images/milca.png';
import { SocialLink } from './socialLink.jsx';
import { socialLinksData } from '../data/socialLinksData.jsx';

export function CallToAction() {
    return (
        <section className="hero">
            <div className="hero-content">
                <img src={milcaPhoto} alt="Milca Toledo" className="foto-perfil" />
                <h1>¡Hola! Soy <span>Milca Toledo</span></h1>
                <h2>Desarrolladora de Software | Frontend & Backend</h2>
                <p>
                    Transformo ideas en soluciones digitales atractivas y funcionales.
                </p>
                <div className="redes">
                    {socialLinksData.map((socialLink) => (
                        <SocialLink
                            key={socialLink.id}
                            url={socialLink.url}
                            icon={socialLink.icon}
                            altText={socialLink.altText}
                        />
                    ))}
                </div>
                <div className="botones-cta">
                    <a href="#skills" className="btn-primario">Conóceme más</a>
                    <a href="mailto:toledmil@gmail.com" className="btn-secundario">Hablemos</a>
                </div>
            </div>
        </section>
    )
}