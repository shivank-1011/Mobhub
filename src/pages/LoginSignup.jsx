import React, { useRef, useState, useEffect } from 'react'
import { useAuth } from '../context/useAuth.jsx'
import { useNavigate } from 'react-router-dom'
import GoogleButton from '../components/GoogleButton.jsx'
import googleIcon from '../components/Assets/google.svg'
import appleIcon from '../components/Assets/apple.svg'
import '../pages/CSS/LoginSignup.css'

const LoginSignup = () => {
  const nameRef = useRef()
  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()
  const { login, signup, signInWithGoogle, currentUser, updateUserProfile } = useAuth()
  const [error, setError] = useState("")
  const [success, setSuccess] = useState("")
  const [loading, setLoading] = useState(false)
  const [isLogin, setIsLogin] = useState(true) // Toggle between login and signup
  const [showPassword, setShowPassword] = useState(false) // State to toggle password visibility
  const navigate = useNavigate()

  useEffect(() => {
    if (currentUser) {
      navigate("/profile")
    }
  }, [currentUser, navigate])

  // Handle switching between login and signup modes
  const toggleMode = () => {
    setIsLogin(!isLogin)
    setError("")
    setSuccess("")
  }

  // Toggle password visibility
  const toggleShowPassword = () => {
    setShowPassword(prev => !prev)
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setError("")
    setSuccess("")

    try {
      setLoading(true)
      
      if (isLogin) {
        await login(emailRef.current.value, passwordRef.current.value)
        setSuccess("Login successful! Redirecting...")
      } else {
        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
          return setError("Passwords do not match")
        }
        if (!nameRef.current.value.trim()) {
          return setError("Please enter your name")
        }
        await signup(emailRef.current.value, passwordRef.current.value)
        await updateUserProfile({
          displayName: nameRef.current.value.trim()
        })
        setSuccess("Account created successfully! Redirecting...")
      }
      
      setTimeout(() => {
        navigate("/profile")
      }, 1500)
    } catch (error) {
      if (error.code === 'auth/user-not-found' || error.code === 'auth/wrong-password') {
        setError("Incorrect email or password")
      } else if (error.code === 'auth/invalid-email') {
        setError("Email address is not valid")
      } else if (error.code === 'auth/email-already-in-use') {
        setError("Email is already in use")
      } else if (error.code === 'auth/weak-password') {
        setError("Password is too weak")
      } else if (error.code === 'auth/user-disabled') {
        setError("This account has been disabled")
      } else if (error.code === 'auth/too-many-requests') {
        setError("Too many failed login attempts. Please try again later")
      } else if (error.code === 'auth/network-request-failed') {
        setError("Network error. Please check your internet connection")
      } else {
        setError(`Failed to ${isLogin ? 'sign in' : 'sign up'}. Please try again`)
      }
    } finally {
      setLoading(false)
    }
  }

  async function handleGoogleSignIn() {
    setError("")
    setSuccess("")

    try {
      setLoading(true)
      await signInWithGoogle()
      setSuccess("Google login successful! Redirecting...")
      setTimeout(() => {
        navigate("/profile")
      }, 500)
    } catch (error) {
      if (error.code === 'auth/popup-closed-by-user') {
        setError("Sign-in cancelled by user")
      } else if (error.code === 'auth/network-request-failed') {
        setError("Network error. Please check your internet connection")
      } else if (error.code === 'auth/internal-error') {
        setError("An internal error occurred. Please try again")
      } else if (error.code === 'auth/popup-blocked') {
        setError("Popup was blocked by your browser. Please enable popups for this site")
      } else {
        setError("Failed to sign in with Google. Please try again")
      }
    } finally {
      setLoading(false)
    }
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      {!isLogin && (
        <>
          <div className="flex-column">
            <label>Full Name</label>
          </div>
          <div className="inputForm">
            <svg height="20" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
            </svg>
            <input type="text" className="input" placeholder="Enter your full name" ref={nameRef} required={!isLogin} />
          </div>
        </>
      )}

      <div className="flex-column">
        <label>Email</label>
      </div>
      <div className="inputForm">
        <svg height="20" viewBox="0 0 32 32" width="20" xmlns="http://www.w3.org/2000/svg">
          <g id="Layer_3" data-name="Layer 3">
            <path d="m30.853 13.87a15 15 0 0 0 -29.729 4.082 15.1 15.1 0 0 0 12.876 12.918 15.6 15.6 0 0 0 2.016.13 14.85 14.85 0 0 0 7.715-2.145 1 1 0 1 0 -1.031-1.711 13.007 13.007 0 1 1 5.458-6.529 2.149 2.149 0 0 1 -4.158-.759v-10.856a1 1 0 0 0 -2 0v1.726a8 8 0 1 0 .2 10.325 4.135 4.135 0 0 0 7.83.274 15.2 15.2 0 0 0 .823-7.455zm-14.853 8.13a6 6 0 1 1 6-6 6.006 6.006 0 0 1 -6 6z" />
          </g>
        </svg>
        <input type="text" className="input" placeholder="Enter your Email" ref={emailRef} required pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"/>
      </div>

      <div className="flex-column">
        <label>Password</label>
      </div>
      <div className="inputForm" style={{ position: 'relative' }}>
        <svg height="20" viewBox="-64 0 512 512" width="20" xmlns="http://www.w3.org/2000/svg">
          <path d="m336 512h-288c-26.453125 0-48-21.523438-48-48v-224c0-26.476562 21.546875-48 48-48h288c26.453125 0 48 21.523438 48 48v224c0 26.476562-21.546875 48-48 48zm-288-288c-8.8125 0-16 7.167969-16 16v224c0 8.832031 7.1875 16 16 16h288c8.8125 0 16-7.167969 16-16v-224c0-8.832031-7.1875-16-16-16zm0 0" />
          <path d="m304 224c-8.832031 0-16-7.167969-16-16v-80c0-52.929688-43.070312-96-96-96s-96 43.070312-96 96v80c0 8.832031-7.167969 16-16 16s-16-7.167969-16-16v-80c0-70.59375 57.40625-128 128-128s128 57.40625 128 128v80c0 8.832031-7.167969 16-16 16zm0 0" />
        </svg>
        <input
          type={showPassword ? "text" : "password"}
          className="input"
          placeholder="Enter your Password"
          ref={passwordRef}
          required
          style={{ paddingRight: '30px' }}
        />
        <svg
          viewBox="0 0 576 512"
          height="16"
          width="16"
          xmlns="http://www.w3.org/2000/svg"
          onClick={toggleShowPassword}
          style={{ cursor: 'pointer', position: 'absolute', right: '8px', top: '50%', transform: 'translateY(-50%)' }}
          aria-label={showPassword ? "Hide password" : "Show password"}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') toggleShowPassword() }}
        >
          <path d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z" />
        </svg>
      </div>

      {!isLogin && (
        <>
          <div className="flex-column">
            <label>Confirm Password</label>
          </div>
          <div className="inputForm" style={{ position: 'relative' }}>
            <svg height="20" viewBox="-64 0 512 512" width="20" xmlns="http://www.w3.org/2000/svg">
              <path d="m336 512h-288c-26.453125 0-48-21.523438-48-48v-224c0-26.476562 21.546875-48 48-48h288c26.453125 0 48 21.523438 48 48v224c0 26.476562-21.546875 48-48 48zm-288-288c-8.8125 0-16 7.167969-16 16v224c0 8.832031 7.1875 16 16 16h288c8.8125 0 16-7.167969 16-16v-224c0-8.832031-7.1875-16-16-16zm0 0" />
              <path d="m304 224c-8.832031 0-16-7.167969-16-16v-80c0-52.929688-43.070312-96-96-96s-96 43.070312-96 96v80c0 8.832031-7.167969 16-16 16s-16-7.167969-16-16v-80c0-70.59375 57.40625-128 128-128s128 57.40625 128 128v80c0 8.832031-7.167969 16-16 16zm0 0" />
            </svg>
            <input
              type={showPassword ? "text" : "password"}
              className="input"
              placeholder="Confirm your Password"
              ref={passwordConfirmRef}
              required={!isLogin}
              style={{ paddingRight: '30px' }}
            />
            <svg
              viewBox="0 0 576 512"
              height="16"
              width="16"
              xmlns="http://www.w3.org/2000/svg"
              onClick={toggleShowPassword}
              style={{ cursor: 'pointer', position: 'absolute', right: '8px', top: '50%', transform: 'translateY(-50%)' }}
              aria-label={showPassword ? "Hide password" : "Show password"}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') toggleShowPassword() }}
            >
              <path d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z" />
            </svg>
          </div>
        </>
      )}

      {error && <div className="error-message" style={{ color: 'red', marginTop: '10px' }}>{error}</div>}
      {success && <div className="success-message" style={{ color: 'green', marginTop: '10px' }}>{success}</div>}

      <div className="flex-row">
        <div>
          <input type="checkbox" />
          <label>Remember me</label>
        </div>
        {isLogin && <span className="span">Forgot password?</span>}
      </div>

      <button type="submit" className="button-submit" disabled={loading}>
        {isLogin ? "Sign In" : "Sign Up"}
      </button>

      <p className="p">
        {isLogin ? "Don't have an account? " : "Already have an account? "}
        <span className="span" onClick={toggleMode} style={{cursor: 'pointer'}}>
          {isLogin ? "Sign Up" : "Sign In"}
        </span>
      </p>

      <p className="p line">Or With</p>

      <div className="flex-row">
        <button type="button" className="btn google" onClick={handleGoogleSignIn} disabled={loading}>
          <img src={googleIcon} alt="Google" width="20" height="20" />
          Google
        </button>

        <button type="button" className="btn apple" disabled={loading}>
          <img src={appleIcon} alt="Apple" width="20" height="20" />
          Apple
        </button>
      </div>
    </form>
  );
}

export default LoginSignup
