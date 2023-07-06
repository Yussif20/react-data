import "./App.css";
import Analytics from "./Components/Analytics/Analytics";
import Cards from "./Components/Cards/Cards";
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
    </>
  );
}

export default App;
