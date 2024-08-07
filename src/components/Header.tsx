import {Link} from "react-router-dom";
import {ReactElement} from "react";

export function Header(): ReactElement {
    return (
        <header className="header">
            <div className="nav-links">
                <Link to="/" className="link">
                    Home
                </Link>
                <Link to="/form" className="link">
                    Add a task
                </Link>
                <Link to="/about" className="link">
                    About
                </Link>
            </div>
        </header>
    );
}