// App.jsx
import Menu from "./Components/NavBar/navbar";
import Home from "./Components/Home/home";
import QuiSommesNous from "./Components/QuiSommesNous/quiSommesNous";
import Realisations from "./Components/Realisations/realisations";
import Devis from "./Components/Devis/devis";
import Contact from "./Components/Contact/contact";
import NotFoundPage from "./Components/NotFoundPage/notFoundPage";
import Footer from "./Components/Footer/footer";
import { Route, Routes } from "react-router-dom";
import "./styles/main.scss";

function App() {
  return (
    <>
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiSommesNous" element={<QuiSommesNous />} />
        <Route path="/realisations" element={<Realisations />} />
        <Route path="/devis" element={<Devis />} />
        <Route path="/contact" element={<Contact />} />

        {/* Route 404 avec element */}
        <Route path="*" element={<NotFoundPage />} /> 
      </Routes>
      <Footer />
    </>
  );
}

export default App;
