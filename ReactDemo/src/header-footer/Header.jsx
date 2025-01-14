import "./Header.css"

function Header() {
    return (
        <header className="Header">
            <h1><a href="#">MaloSunce</a></h1>
            <nav className="Nav">
                <a href="#">Home</a>
                <a href="#">Skills</a>
                <a href="#">About</a>
                <a href="#">Contact</a>
                <a href="#">LinkedIn</a>
            </nav>
        </header>
    );
}

export default Header