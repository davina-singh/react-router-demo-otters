import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import OtterGallery from "./pages/OtterGallery";
import OtterDetails from "./pages/OtterDetails";
import ConservationInfo from "./pages/ConservationInfo";

export default function App() {
  return (
    <div>
      <nav>
        <h1 className="navHeading">I 🤍 Otters!</h1>
        <Link className="ibm-plex-sans-light-italic" to="/home">
          Home
        </Link>
        <Link className="ibm-plex-sans-light-italic" to="/about">
          About
        </Link>
        <Link className="ibm-plex-sans-light-italic" to="/otters">
          Otters
        </Link>
      </nav>
      <Routes>
        <Route path="/otters" element={<OtterGallery />}></Route>
        <Route path="/otters/:otter" element={<OtterDetails />}>
          <Route path="conservation" element={<ConservationInfo />} />
        </Route>

        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <footer className="footer">
        <h3>&copy; Made by Tech Ed</h3>
      </footer>
    </div>
  );
}
