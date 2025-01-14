import "./Header.css"

function Header() {
    return (
        <header className="Header">
            <h1>MaloSunce</h1>
            <nav className="Nav">
                <a href="#">Services</a>
                <a href="#">Home</a>
                <a href="#">About</a>
                <a href="#">Contact</a>
            </nav>
        </header>
    );
}

export default Header