import './Footer.css'

function Footer() {
    return (
        <footer className="Footer" id="Footer">

            <h2 className="Title">Contact</h2>
            <div className="ContactInfo">
                <div>
                    <h3>E-mail</h3>
                    <p>sa.djoo@yahoo.com</p>
                </div>
                <div>
                    <h3>Phone</h3>
                    <p>+47 94 19 79 77</p>
                </div>
                <div>
                    <h3>GitHub</h3>
                    <p><a href="https://github.com/MaloSunce?tab=repositories" target="_blank">/MaloSunce</a></p>
                </div>
                <div>
                    <h3>LinkedIn</h3>
                    <p><a href="https://www.linkedin.com/in/sara-djordjevic-2b0ab925b/"
                          target="_blank">/Sara-Djordjevic</a></p>
                </div>
            </div>

            <hr className="solid"/>

            <p style={{paddingBottom: '40px'}}> &copy; {new Date().getFullYear()} MaloSunce </p>
        </footer>
    );
}

export default Footer
