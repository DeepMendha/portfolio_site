import { useMemo, useState } from 'react'

function buildMailto(to, name, email, message) {
  const subject = encodeURIComponent(
    'Portfolio contact' + (name ? ` from ${name}` : '')
  )
  const body = encodeURIComponent(
    (name ? `Name: ${name}\n` : '') +
      (email ? `Reply-to: ${email}\n\n` : '\n') +
      (message || '')
  )

  // If `to` already has query params, append with `&`.
  const join = to.includes('?') ? '&' : '?'
  return `${to}${join}subject=${subject}&body=${body}`
}

export default function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const to = useMemo(() => 'mailto:mendhadeep@gmail.com', [])

  function onSubmit(e) {
    e.preventDefault()
    window.location.href = buildMailto(to, name.trim(), email.trim(), message.trim())
  }

  return (
    <section className="page">
      <div className="container">
        <div className="section-card content-block">
          <h2 className="section-title">Contact Me</h2>
          <p className="section-subtitle">
            GitHub Pages is static, so this form opens your email app with a
            pre-filled message.
          </p>

          <form onSubmit={onSubmit}>
            <div className="form-row">
              <label htmlFor="name">Name</label>
              <input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                required
                autoComplete="name"
              />
            </div>

            <div className="form-row">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                required
                autoComplete="email"
              />
            </div>

            <div className="form-row">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />
            </div>

            <button className="btn btn-primary" type="submit">
              Send via email app
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

