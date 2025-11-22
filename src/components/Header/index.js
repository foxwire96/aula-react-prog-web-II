import styles from "./Header.module.css";
import { Link } from "react-router-dom";

function Header() {
    return (
        <header className={styles.header}>
            <span>No one sleeps in Tokyo</span>

            <nav>
              <Link to="/">Home</Link>
              <Link to="/watch">Watch</Link>
            </nav>

        </header>
    )
}
export default Header;
