import '../index.css'
import '../styles/skills.css'
import { SkillsSection } from '../components/skillsSection.jsx'
import { Navbar } from '../components/navbar.jsx'
import { CallToAction } from '../components/callToAction.jsx'
import { AsideSection } from '../components/asideSection.jsx'
import { Footer } from '../components/footer.jsx'

function Home() {
    const navLinks = [
        { name: "Projects", path: "/projects" },
        { name: "Courses", path: "/courses" },
        { name: "Events", path: "/events" }
    ];
    return (
        <div className="home-container">
            <Navbar links={navLinks} />
            <CallToAction />
            <span id="skills"></span>
            <div>
                <div className="skills-section-container">
                    <div className="skills-wrapper">
                        <h2 className='title-section-skill'>Mis habilidades</h2>
                        <SkillsSection />
                    </div>
                    <div className="aside-wrapper">
                        <h2>Sobre mí</h2>
                        <AsideSection />
                    </div>
                </div>
            </div>
            <Footer 
                extraText={
                    <p>Fondo de CTA inspirado en <strong>Dancing Frogs</strong> by <em>Abi Toads</em></p>
                } 
            />
        </div>
    )
}

export default Home