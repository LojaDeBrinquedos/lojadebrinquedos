import "./Footer.css";

export default function Footer() {
    return (
        <footer className="footer">
            <p>© 2026 Loja de Brinquedos. Todos os direitos reservados.</p>

            <nav className="footer-links" aria-label="Links do rodapé">
                <a href="#">Contato</a>
                <a href="#">Política de privacidade</a>
                <a href="#">Termos de uso</a>
            </nav>
        </footer>
    );
}