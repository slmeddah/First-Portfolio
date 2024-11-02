import Header from "./components/Header"; // Make sure the path is correct (case-sensitive)
import Hero from './components/Hero'
import Services from "./components/Services";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import ContactForm from "./components/ContactForm";

function App() {
  return (
    <div className="flex flex-col gap-[130px] mb-8 overflow-hidden w-full items-center">
      <Header />
      <Hero />
      <Services />
      <Projects />
     <Skills/>
     <ContactForm/>
    </div>
  );
}

export default App;
