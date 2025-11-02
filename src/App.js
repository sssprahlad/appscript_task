import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/HeaderSection/Navbar/Navbar";
import Shop from "./Components/HeaderSection/Shop/Shop";
import Skills from "./Components/HeaderSection/Skills/Skills";
import Contact from "./Components/HeaderSection/Contact/Contact";
import Stories from "./Components/HeaderSection/Stories/Stories";
import About from "./Components/HeaderSection/About/About";
import Cart from "./Components/Cart/Cart";
import FavouriteItems from "./Components/FavouriteItems/FavouriteItems";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />

        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/stories" element={<Stories />} />
          <Route path="/about" element={<About />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/favourites" element={<FavouriteItems />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
