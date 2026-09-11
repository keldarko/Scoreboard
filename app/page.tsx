'use client'

import { FormEvent, useState } from 'react'

const initialMessages = [
  { name: 'Family & Friends', message: 'Your kindness, wisdom, and warm smile will forever remain with us.', date: 'In loving memory' },
  { name: 'A grateful heart', message: 'Rest peacefully. Your legacy continues through everyone you touched.', date: 'Forever remembered' },
]

export default function Page() {
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')
  const [anonymous, setAnonymous] = useState(false)
  const [messages, setMessages] = useState(initialMessages)
  const [submitted, setSubmitted] = useState(false)

  function submitTribute(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (!message.trim()) return
    setMessages([{ name: anonymous ? 'Anonymous' : name.trim() || 'A friend', message: message.trim(), date: 'Just now' }, ...messages])
    setName('')
    setMessage('')
    setSubmitted(true)
    window.setTimeout(() => setSubmitted(false), 4000)
  }

  return (
    <main className="memorial-page">
      <header className="hero">
        <div className="hero-inner">
          <p className="eyebrow">In loving memory</p>
          <div className="portrait-frame"><img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/bio-pic-sp2jzdjnGpaEOH3V9VjF6aeHQU9MpM.png" alt="Portrait of Samuel Gyan-Ghansah" /></div>
          <div className="title-rule" aria-hidden="true" />
          <h1>Samuel Gyan-Ghansah</h1>
          <p className="dates">A life remembered · A legacy that lives on</p>
        </div>
      </header>

      <section className="intro section-shell">
        <p className="section-kicker">Remembering a remarkable soul</p>
        <h2>His story continues<br />in all of us.</h2>
        <p className="intro-copy">This memorial is a place to pause, remember, and celebrate the life of Samuel Gyan-Ghansah. Share a memory, a message, or a quiet word of love with those who hold him dear.</p>
        <a className="button button-dark" href="#tribute">Leave a tribute <span aria-hidden="true">→</span></a>
      </section>

      <section className="legacy section-shell">
        <div className="section-heading"><p className="section-kicker">A life of meaning</p><h2>A lasting legacy</h2></div>
        <div className="legacy-grid"><p>Some people leave footprints on the earth. Others leave them in the hearts of everyone they meet. Samuel&apos;s presence was a gift — generous, steady, and deeply human.</p><p>Though he is no longer with us, the lessons he shared, the love he gave, and the memories he made remain close. His life is a story still being told.</p></div>
      </section>

      <section id="tribute" className="tribute section-shell">
        <div className="section-heading"><p className="section-kicker">Share your remembrance</p><h2>Leave a tribute</h2><p>Words have a way of keeping love close. Add yours below.</p></div>
        <form onSubmit={submitTribute} className="tribute-form">
          <label htmlFor="name">Your name <span>(optional)</span></label>
          <input id="name" value={name} onChange={(event) => setName(event.target.value)} placeholder="How should we remember you?" />
          <label htmlFor="message">Your message</label>
          <textarea id="message" required maxLength={1000} value={message} onChange={(event) => setMessage(event.target.value)} placeholder="Share a memory, a thought, or a message of love..." rows={6} />
          <div className="form-meta"><span>{message.length} / 1000</span><label className="checkbox-label"><input type="checkbox" checked={anonymous} onChange={(event) => setAnonymous(event.target.checked)} /> Post anonymously</label></div>
          <button className="button button-gold" type="submit">Share tribute <span aria-hidden="true">→</span></button>
          {submitted && <p className="success" role="status">Your tribute has been added. Thank you for remembering.</p>}
        </form>
      </section>

      <section className="messages section-shell"><div className="section-heading"><p className="section-kicker">Words from the heart</p><h2>Tributes</h2></div><div className="message-list">{messages.map((item, index) => <article className="message" key={`${item.date}-${index}`}><p className="quote">“{item.message}”</p><p className="message-by">{item.name} <span>·</span> {item.date}</p></article>)}</div></section>

      <footer><p className="footer-mark">SG</p><p>Samuel Gyan-Ghansah</p><p className="footer-small">Always loved. Never forgotten.</p></footer>
    </main>
  )
}
