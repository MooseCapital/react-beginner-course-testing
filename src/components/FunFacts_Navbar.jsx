import smallLogo from "/FunFacts_Assets/react_small_logo.svg"

export default function FunFacts_Navbar(props) {

    return (
         <nav
            className={props.darkMode ? "dark": ""}
        >
            <img
                className="nav--logo_icon"
                src={smallLogo}
             alt={"react-logo"}/>
            <h3 className="nav--logo_text">ReactFacts</h3>

            <div
                className="toggler"
            >
                <p className="toggler--light">Light</p>
                <div
                    className="toggler--slider"
                    onClick={props.toggleDarkMode}
                >
                    <div className="toggler--slider--circle"></div>
                </div>
                <p className="toggler--dark">Dark</p>
            </div>
        </nav>
    )
}