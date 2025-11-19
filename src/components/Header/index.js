import styles from "./Header.module.css";

function Header() {
    return (
        <header className={styles.header}>
            <span> No one sleeps in Tokyo </span>

            <a href="">Assista</a>
            <a href="">Sobre</a>
            <nav>
            </nav>
        </header>
    )
}
export default Header;
