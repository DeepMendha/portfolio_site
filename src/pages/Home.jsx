import { useState } from 'react'
import { Link } from 'react-router-dom'
import { assetUrl } from '../utils/basePath.js'

export default function Home() {
  const profileSrc = assetUrl('images/profile.jpg')
  const bgSrc = assetUrl('images/background.jpg')

  const [imageOk, setImageOk] = useState(true)

  return (
    <section className="hero">
      <div className="container hero-grid">
        <div
          className="hero-bg"
          style={{
            backgroundImage: `linear-gradient(135deg, rgba(11,18,32,0.92) 0%, rgba(8,18,32,0.78) 55%, rgba(37,99,235,0.35) 100%), url(${bgSrc})`,
          }}
        >
          <div className="profile-photo-wrapper">
            {imageOk ? (
              <img
                className="profile-photo"
                src={profileSrc}
                alt="Deep Mendha"
                onError={() => setImageOk(false)}
              />
            ) : (
              <svg
                className="profile-photo-svg"
                viewBox="0 0 200 200"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <circle cx="100" cy="100" r="100" fill="rgba(37,99,235,0.35)" />
                <text
                  x="100"
                  y="118"
                  textAnchor="middle"
                  fill="rgba(255,255,255,0.92)"
                  fontSize="58"
                  fontFamily="system-ui, -apple-system, sans-serif"
                  fontWeight="700"
                >
                  DM
                </text>
              </svg>
            )}
          </div>
        </div>

        <div className="section-card hero-panel">
          <h1 className="section-title">Deep Mendha</h1>
          <p className="section-subtitle">
            Data Scientist | Data Analyst | Data Engineer
          </p>
          <p className="lead">
            Delivering data-driven solutions with a focus on scalable ETL, model
            deployment, and actionable analytics.
          </p>
          <div className="cta-row">
            <a
              className="btn btn-primary"
              href={assetUrl('assets/resume.pdf')}
              download
            >
              Download Resume (PDF)
            </a>
            <Link className="btn btn-secondary" to="/contact">
              Contact Me
            </Link>
          </div>
          <p className="muted" style={{ marginTop: 14, lineHeight: 1.5 }}>
            Prefer direct links? Use the navigation menu above.
          </p>
        </div>
      </div>
    </section>
  )
}

