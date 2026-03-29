import { Route, Routes } from "react-router-dom"
import Home from "./pages/home.jsx"
import Projects from "./pages/projects.jsx"
import Courses from "./pages/courses.jsx"
import Events from "./pages/events.jsx"
import Loader from "./components/loader.jsx"

function App() {
    return (
        <>
        <Loader />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/events" element={<Events />} />
        </Routes>
        </>
    )
}

export default App