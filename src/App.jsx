import "./App.css";
import Analytics from "./Components/Analytics/Analytics";
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
    </>
  );
}

export default App;
