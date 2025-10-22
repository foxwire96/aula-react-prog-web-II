import styles from "./Header.module.css";

function Header() {
    return (
        // Conteudo a ser exibido
        // JSX = html + xml (html com css dentro do javascript)
        <header className={styles.Header}>
            <span> Aula Senac </span>
            <nav>
                <a href="#"> Home</a>
                <a href="#"> Senac</a>
            </nav>
        </header>
    )
}
export default Header;
