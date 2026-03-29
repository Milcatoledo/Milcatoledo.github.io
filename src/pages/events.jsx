import { Navbar } from '../components/navbar.jsx'
import { Footer } from '../components/footer.jsx'
function Events() {
    const navLinks = [
        { name: "Home", path: "/" },
        { name: "Projects", path: "/projects" },
        { name: "Courses", path: "/courses" },
        { name: "Events", path: "/events" }
    ];
    return (
        <div className="home-container">
            <div className="events-container">
                <div className='navbar-container'>
                    <Navbar links={navLinks} />
                </div>
                <h1>Eventos</h1>
            </div>
            <Footer />
        </div>
    )
}

export default Events