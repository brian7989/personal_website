import { useEffect } from "react";
import { navbar_data } from "./NavBar.data";

const NavBar = () => {

    const {titles} = navbar_data;

    useEffect(() => {
        const navigationLinks = document.querySelectorAll("[data-nav-link]");
        const pages = document.querySelectorAll("[data-page]");

        for (let i = 0; i < navigationLinks.length; i++) {
            navigationLinks[i].addEventListener("click", function () {

                for (let i = 0; i < pages.length; i++) {
                    if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
                        pages[i].classList.add("active");
                        navigationLinks[i].classList.add("active");
                        window.scrollTo(0, 0);
                    } else {
                        pages[i].classList.remove("active");
                        navigationLinks[i].classList.remove("active");
                    }
                }

            });
        }
    }, []);

    return (

        <nav className="navbar">
            <ul className="navbar-list">
                {titles.map((t,i) =>
                    <li key={i} className="navbar-item">
                        <button className="navbar-link" data-nav-link >{t}</button>
                    </li>
                )}
            </ul>
        </nav>
    )
}
export default NavBar;