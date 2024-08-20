import { Link, useLocation } from 'react-router-dom';

function Header() {
    const currentPage = useLocation().pathname;
    
    return (
        <header>
            <h1>John Kihm</h1>
            <nav>
                <ul className="nav-links">
                    <li>
                        <Link
                            to="/"
                            className={currentPage === '/' ? 'nav-link active' : 'nav-link'}
                        >
                            <h3>About Me</h3>
                        </Link>
                    </li>
                    <li>
                        <h3>֍</h3>
                    </li>
                    <li>
                        <Link
                            to="/Portfolio"
                            className={currentPage === '/Portfolio' ? 'nav-link active' : 'nav-link'}
                        >
                            <h3>Portfolio</h3>
                        </Link>
                    </li>
                    <li>
                        <h3>֍</h3>
                    </li>
                    <li>
                        <Link
                            to="/Contact"
                            className={currentPage === '/Contact' ? 'nav-link active' : 'nav-link'}
                        >
                            <h3>Contact</h3>
                        </Link>
                    </li>
                    <li>
                        <h3>֍</h3>
                    </li>
                    <li>
                        <Link
                            to="/Resume"
                            className={currentPage === '/Resume' ? 'nav-link active' : 'nav-link'}
                        >
                            <h3>Resume</h3>
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
