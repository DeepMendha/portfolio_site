const year = new Date().getFullYear()

export default function Footer() {
  return (
    <footer className="footer-section">
      <div className="container footer-inner">
        <div className="footer-social-icons" aria-label="Social links">
          <a
            className="btn btn-secondary"
            href="https://www.linkedin.com/in/deepmendha"
            target="_blank"
            rel="noreferrer"
          >
            <span className="nowrap">LinkedIn</span>
          </a>
          <a
            className="btn btn-secondary"
            href="https://www.github.com/DeepMendha"
            target="_blank"
            rel="noreferrer"
          >
            <span className="nowrap">GitHub</span>
          </a>
        </div>
        <p className="footer-text">© {year} Deep Mendha. All rights reserved.</p>
      </div>
    </footer>
  )
}

