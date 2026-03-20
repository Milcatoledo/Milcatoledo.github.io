import { Route, Routes } from "react-router-dom"
import Home from "./pages/home.jsx"
import Projects from "./pages/projects.jsx"
import Courses from "./pages/courses.jsx"
import Events from "./pages/events.jsx"

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/events" element={<Events />} />
        </Routes>
    )
}

export default App