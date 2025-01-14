import Header from './header-footer/Header.jsx'
import Footer from './header-footer/Footer.jsx'
import Skills from './content/Skills.jsx'
import Projects from "./content/Projects.jsx";
import "./index.css"

function App() {
    return (
        <div className="App">
            <Header/>
            <Skills/>
            <Projects/>
            <Footer/>
        </div>
    );
}

export default App
