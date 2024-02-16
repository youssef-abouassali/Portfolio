import About from "./componts/About";
import Home from "./componts/Home";
import NavBar from "./componts/NavBar";
import Skills from "./componts/Skills";
import Work from "./componts/Work";
import Contact from "./componts/Contact";

const App = () => {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <Skills />
      <Work />
      <Contact />
    </div>
  );
};

export default App;
