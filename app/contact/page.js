'use client'
import { useState } from 'react'

export default function ContactPage() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [sent, setSent] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    const subject = encodeURIComponent('NovraLab Contact — ' + name)
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`)
    window.location.href = `mailto:hello@novralab.com?subject=${subject}&body=${body}`
    setSent(true)
  }

  return (
    <div className="contact-page">
      <div className="contact-inner">

        {/* Sidebar */}
        <div>
          <h1 className="contact-sidebar-title">Get in touch</h1>
          <p className="contact-sidebar-sub">
            Have a project idea, research question, or just want to say hello?
            We read every message and reply within one business day.
          </p>

          <div className="contact-info-list">
            <div className="contact-info-item">
              <span className="contact-info-icon">✉️</span>
              <div>
                <div className="contact-info-label">General</div>
                <div className="contact-info-value">
                  <a href="mailto:hello@novralab.com">hello@novralab.com</a>
                </div>
              </div>
            </div>
            <div className="contact-info-item">
              <span className="contact-info-icon">⚖️</span>
              <div>
                <div className="contact-info-label">Legal</div>
                <div className="contact-info-value">
                  <a href="mailto:legal@novralab.com">legal@novralab.com</a>
                </div>
              </div>
            </div>
            <div className="contact-info-item">
              <span className="contact-info-icon">💳</span>
              <div>
                <div className="contact-info-label">Billing</div>
                <div className="contact-info-value">
                  <a href="mailto:billing@novralab.com">billing@novralab.com</a>
                </div>
              </div>
            </div>
            <div className="contact-info-item">
              <span className="contact-info-icon">🌐</span>
              <div>
                <div className="contact-info-label">Website</div>
                <div className="contact-info-value">
                  <a href="https://novralab.com" target="_blank" rel="noopener noreferrer">
                    novralab.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Form */}
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="contact-form-field">
            <label className="contact-form-label" htmlFor="contact-name">Your name</label>
            <input
              id="contact-name"
              className="contact-form-input"
              placeholder="Alex Smith"
              value={name}
              onChange={e => setName(e.target.value)}
              required
            />
          </div>
          <div className="contact-form-field">
            <label className="contact-form-label" htmlFor="contact-email">Email address</label>
            <input
              id="contact-email"
              type="email"
              className="contact-form-input"
              placeholder="alex@example.com"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="contact-form-field">
            <label className="contact-form-label" htmlFor="contact-message">Message</label>
            <textarea
              id="contact-message"
              className="contact-form-textarea"
              placeholder="Tell us what you have in mind…"
              value={message}
              onChange={e => setMessage(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="contact-form-btn">
            Send Message →
          </button>
          {sent && (
            <p className="contact-form-success">
              Your email client should open — if not, send your message directly to hello@novralab.com
            </p>
          )}
        </form>
      </div>
    </div>
  )
}
