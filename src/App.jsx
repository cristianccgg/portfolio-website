import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import { useEffect } from "react"; // Importa useEffect para manejar el código de Analytics
import MainGallery from "./components/MainGallery.jsx";
import Navbar from "./components/Navbar.jsx";
import ArtworkDetail from "./components/ArtworkDetail.jsx";
import CommissionsForm from "./components/CommissionsForm.jsx";
import About from "./components/About.jsx";

function App() {
  const location = useLocation();

  useEffect(() => {
    // Inicializar Google Analytics si no está ya cargado
    const handleRouteChange = (url) => {
      window.gtag("config", "G-62SSL0CS57", {
        page_path: url,
      });
    };

    if (!window.gtag) {
      const script = document.createElement("script");
      script.src = "https://www.googletagmanager.com/gtag/js?id=G-62SSL0CS57";
      script.async = true;
      document.head.appendChild(script);

      window.dataLayer = window.dataLayer || [];
      function gtag() {
        window.dataLayer.push(arguments);
      }
      window.gtag = gtag;
      gtag("js", new Date());
      gtag("config", "G-62SSL0CS57");
    }

    // Ejecutar cuando la ruta cambia
    handleRouteChange(location.pathname);
  }, [location]); // Escuchar cambios en la ubicación (ruta)

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<MainGallery />} />
        <Route path="/artwork/:id" element={<ArtworkDetail />} />
        <Route path="/commissions" element={<CommissionsForm />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
