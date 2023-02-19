import AboutMe from "./AboutMe/AboutMe";
import Experience from "./Experience/Experience";
import Contact from "./Contact/Contact";
import NavBar from "./NavBar/NavBar";
import Portfolio from "./Portfolio/Portfolio";
import Education from "./Education/Education";

const MainContent = () => {
    return (
        <div className="main-content">
            <NavBar></NavBar>
            <AboutMe></AboutMe>
            <Education></Education>
            <Experience></Experience>
            <Portfolio></Portfolio>
            <Contact></Contact>
        </div>
    )
}

export default MainContent;