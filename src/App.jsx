import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LandingPage from "./pages/landingpage";
import ContactPage from "./pages/contactpage";
import Navbar from "./components/navbar";


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
  )
}

export default App
