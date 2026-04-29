import { useState } from 'react'
import { motion } from 'framer-motion'
import { Download } from 'lucide-react'

import { assetUrl } from '../utils/basePath.js'

export default function Home() {
  const profileSrc = assetUrl('images/profile.jpg')
  const bgSrc = assetUrl('images/ai_bg.png')

  const [imageOk, setImageOk] = useState(true)

  return (
    <section id="home" className="hero">
      <div className="container hero-grid">
        <motion.div
          className="hero-bg"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{
            backgroundImage: `linear-gradient(135deg, var(--hero-overlay-1) 0%, var(--hero-overlay-2) 55%, var(--hero-overlay-3) 100%), url(${bgSrc})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <motion.div 
            className="profile-photo-wrapper"
            whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(6, 182, 212, 0.4)" }}
            transition={{ type: "spring", stiffness: 300 }}
          >
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
                <circle cx="100" cy="100" r="100" fill="var(--hero-fallback-fill)" />
                <text
                  x="100"
                  y="118"
                  textAnchor="middle"
                  fill="var(--hero-fallback-text)"
                  fontSize="58"
                  fontFamily="system-ui, -apple-system, sans-serif"
                  fontWeight="700"
                >
                  DM
                </text>
              </svg>
            )}
          </motion.div>
        </motion.div>

        <motion.div 
          className="section-card hero-panel"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          <h1 className="section-title">Deep Mendha</h1>
          <p className="section-subtitle">
            Data Scientist | Data Analyst | Data Engineer
          </p>
          <p className="lead">
            Delivering data-driven solutions with a focus on scalable ETL, model
            deployment, and actionable analytics.
          </p>
          <div className="cta-row">
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="btn btn-primary"
              href={assetUrl('assets/resume.pdf')}
              download
            >
              <Download size={18} /> Download Resume (PDF)
            </motion.a>
            {/* <a className="btn btn-secondary" href="#contact">
              Contact Me
            </a> */}
          </div>
          <p className="muted" style={{ marginTop: 14, lineHeight: 1.5 }}>
            Prefer direct links? Use the navigation menu above.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

