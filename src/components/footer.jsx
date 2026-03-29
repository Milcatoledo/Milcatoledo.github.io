import '../styles/footer.css'

export const Footer = ({extraText}) => {
    return (
        <footer className="footer-container">
            <div className="footer-content" style={{ justifyContent: extraText ? 'space-between' : 'center' }}>
                {extraText && (
                    <div className="footer-credits">
                        {extraText}
                    </div>
                )}
                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} Milca Toledo. Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
    );
};