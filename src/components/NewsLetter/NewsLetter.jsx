import React, { useState } from 'react'
import './NewsLetter.css'

const NewsLetter = () => {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)
  const [error, setError] = useState('')

  const handleSubscribe = () => {
    // Simple email validation pattern
    const emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/
    if (!emailPattern.test(email)) {
      setError('Please enter a valid email address.')
      setSubscribed(false)
      return
    }
    setError('')
    setSubscribed(true)
  }

  return (
    <div className='newsletter'>
      <h1>Get  Exclusive Offers On Your Email</h1>
      <p>Subscribe to our newsletter and stay updated</p>
      <div>
        <input
          type="email"
          placeholder='Your Email Id'
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={subscribed}
        />
        <button onClick={handleSubscribe} disabled={subscribed}> {subscribed ? 'Subscribed' : 'Subscribe'}</button>
      </div>
      {error && <p className="error-message">{error}</p>}
      {subscribed && (
        <p className="subscribed-message">
          <span className="tick-icon">&#10003;</span> You'll get notified.
        </p>
      )}
    </div>
  )
}

export default NewsLetter
