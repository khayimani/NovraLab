'use client';
import { useState } from 'react'

export default function ContactPage(){
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [sent, setSent] = useState(false)

  function handleSubmit(e){
    e.preventDefault()
    // fallback: open user's mail client with prefilled content
    const subject = encodeURIComponent('NovraLab Contact Form — ' + name)
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`)
    window.location.href = `mailto:hello@novralab.com?subject=${subject}&body=${body}`
    setSent(true)
  }

  return (
    <div className="py-20">
      <div className="container mx-auto px-6 lg:px-20 max-w-3xl">
        <h1 className="text-3xl font-semibold mb-4">Contact</h1>
        <p className="text-muted mb-6">Have a project or research idea? Send us a message.</p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input className="w-full border rounded-md p-3" placeholder="Your name" value={name} onChange={e=>setName(e.target.value)} required />
          <input className="w-full border rounded-md p-3" placeholder="Your email" type="email" value={email} onChange={e=>setEmail(e.target.value)} required />
          <textarea className="w-full border rounded-md p-3 h-40" placeholder="Message" value={message} onChange={e=>setMessage(e.target.value)} required />
          <div>
            <button type="submit" className="button-primary">Send Message</button>
          </div>
          {sent && <p className="text-sm text-muted">Your email client should open — if not, send your message to hello@novralab.com</p>}
        </form>
      </div>
    </div>
  )
}
