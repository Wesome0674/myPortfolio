import Home from "./Components/Home";
import Nav from "./Components/Nav";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Work from "./Components/Work";
import Contact from "./Components/Contact";
import MobileNav from "./Components/MobileNav";

function App() {
  return (
    <div className="App font-body overflow-hidden selection:bg-button  bg-darkBg text-darkText dark:bg-lightBg dark:text-lightText transition-colors">
      <Nav />
      <MobileNav />
      <Home />
      <About />
      <Skills />
      <Work />
      <Contact />
    </div>
  );
}

export default App;
