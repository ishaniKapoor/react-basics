import Homepage from "./components/Homepage";
import AboutMe from "./components/AboutMe";
import {Routes, Route, Link} from "react-router-dom";

function App() {
  return (
  <>
    <nav>
      <Link to="/" className="nav-item">Homepage</Link>
      <Link to="/AboutMe" className="nav-item">About Me</Link>
    </nav>
    <Routes>
      <Route path="/" element={<Homepage />}/>
      <Route path="/AboutMe" element={<AboutMe />}/>
    </Routes>
  </>
  );
}

export default App;
