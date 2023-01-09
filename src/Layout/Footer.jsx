function Footer() {
    return (
        <footer>
            <div className="navbar fixed-bottom bg-dark" data-bs-theme="dark">
                <div className="container container-fluid">
                    <h6>© {new Date().getFullYear()} EVANS HD</h6>
                </div>
            </div>
        </footer>
    );
}
export { Footer };
