import "./App.css";
import Analytics from "./Components/Analytics/Analytics";
import Cards from "./Components/Cards/Cards";
import Footer from "./Components/Footer/Footer";
import Hero from "./Components/Hero/Hero";
import Navbar from "./Components/Navbar/Navbar";
import Newsletter from "./Components/Newsletter/Newsletter";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Analytics />
      <Newsletter />
      <Cards />
      <Footer />
    </>
  );
}

export default App;
