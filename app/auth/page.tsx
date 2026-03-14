"use client"

import { useState, useEffect, type ChangeEvent } from "react"
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  sendEmailVerification,
  type User,
} from "firebase/auth"
import firebaseApp from "@/lib/firebase"

const auth = getAuth(firebaseApp)
const googleProvider = new GoogleAuthProvider()

declare global {
  interface Window {
    Paddle: any
  }
}

export default function AuthPage() {
  const [email, setEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("")
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState<boolean>(false)
  const [subscribed, setSubscribed] = useState<boolean>(false)
  const [mode, setMode] = useState<"login" | "signup">("signup")
  const [error, setError] = useState<string>("")
  const [verificationSent, setVerificationSent] = useState<boolean>(false)

  // Check URL params for Paddle success/cancel callbacks
  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    if (params.get("success") === "true") setSubscribed(true)
  }, [])

  const signup = async () => {
    setLoading(true)
    setError("")
    setVerificationSent(false)
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password)
      await sendEmailVerification(res.user)
      setVerificationSent(true)
      // We don't set user here yet since they need to verify
      auth.signOut()
    } catch (err: any) {
      setError(err.message ?? "Sign up failed. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  const login = async () => {
    setLoading(true)
    setError("")
    try {
      const res = await signInWithEmailAndPassword(auth, email, password)
      if (!res.user.emailVerified) {
        setError("Please verify your email before logging in. Check your inbox.")
        auth.signOut()
        return
      }
      setUser(res.user)
    } catch (err: any) {
      setError(err.message ?? "Login failed. Please check your credentials.")
    } finally {
      setLoading(false)
    }
  }

  const continueWithGoogle = async () => {
    setLoading(true)
    setError("")
    try {
      const res = await signInWithPopup(auth, googleProvider)
      setUser(res.user)
    } catch (err: any) {
      setError(err.message ?? "Google Sign-In failed. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  const startCheckout = () => {
    if (typeof window === "undefined" || !window.Paddle) {
      setError("Billing is not available at the moment. Please try again shortly.")
      return
    }

    window.Paddle.Checkout.open({
      product: parseInt(process.env.NEXT_PUBLIC_PADDLE_PRODUCT_ID || "0", 10),
      email: user?.email ?? undefined,
      successCallback: () => setSubscribed(true),
      closeCallback: () => { },
    })
  }

  const handleEnter = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") mode === "signup" ? signup() : login()
  }

  return (
    <div className="auth-page">
      <div className="auth-card">
        {/* Logo / brand mark */}
        <div className="auth-brand">
          <span className="auth-brand-mark">NL</span>
          <span className="auth-brand-name">NovraLab</span>
        </div>

        {!user && (
          <div>
            {/* Tab toggle */}
            <div className="auth-tabs">
              <button
                className={`auth-tab${mode === "signup" ? " auth-tab--active" : ""}`}
                onClick={() => { setMode("signup"); setError("") }}
              >
                Create account
              </button>
              <button
                className={`auth-tab${mode === "login" ? " auth-tab--active" : ""}`}
                onClick={() => { setMode("login"); setError("") }}
              >
                Sign in
              </button>
            </div>

            <div className="auth-fields">
              <input
                className="auth-input"
                placeholder="you@example.com"
                type="email"
                value={email}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                onKeyDown={handleEnter}
                autoComplete="email"
              />
              <input
                className="auth-input"
                placeholder="Password"
                type="password"
                value={password}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
                onKeyDown={handleEnter}
                autoComplete={mode === "signup" ? "new-password" : "current-password"}
              />
            </div>

            {error && <p className="auth-error">{error}</p>}
            {verificationSent && (
              <p className="auth-success" style={{ color: "#059669", fontSize: "0.85rem", marginBottom: "0.75rem", padding: "0.6rem", background: "#ecfdf5", borderRadius: "8px", border: "1px solid #a7f3d0" }}>
                A verification email has been sent to {email}. Please check your inbox and verify before logging in.
              </p>
            )}

            <button
              onClick={mode === "signup" ? signup : login}
              className="auth-btn-primary"
              disabled={loading}
            >
              {loading ? "Processing…" : mode === "signup" ? "Create account" : "Sign in"}
            </button>

            <div className="auth-divider">
              <div className="auth-divider-line"></div>
              <span className="auth-divider-text">OR</span>
              <div className="auth-divider-line"></div>
            </div>

            <button
              onClick={continueWithGoogle}
              className="auth-btn-secondary"
              disabled={loading}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
              </svg>
              Continue with Google
            </button>

            <p className="auth-legal">
              By continuing, you agree to our{" "}
              <a href="/terms" target="_blank" rel="noopener noreferrer">
                Terms & Conditions
              </a>.
            </p>
          </div>
        )}

        {/* Step 2 — subscription required */}
        {user && !subscribed && (
          <div className="auth-subscription">
            <div className="auth-step-badge">Step 2 of 2</div>
            <h2 className="auth-section-title">Choose a plan</h2>
            <p className="auth-section-sub">
              Your account is ready. Unlock full access to NovraLab tools by subscribing.
            </p>

            <div className="auth-plan-card">
              <div className="auth-plan-header">
                <span className="auth-plan-name">NovraLab Pro</span>
                <span className="auth-plan-badge">Monthly</span>
              </div>
              <ul className="auth-plan-features">
                <li>✓ Full access to all lab tools</li>
                <li>✓ Priority updates &amp; new releases</li>
                <li>✓ Private community access</li>
                <li>✓ Cancel anytime</li>
              </ul>
              <button onClick={startCheckout} className="auth-btn-primary">
                Subscribe with Paddle →
              </button>
            </div>

            <p className="auth-legal">
              Payments are processed securely by{" "}
              <a href="https://www.paddle.com" target="_blank" rel="noopener noreferrer">
                Paddle.com
              </a>
              . See our{" "}
              <a href="/terms" target="_blank" rel="noopener noreferrer">
                Terms & Conditions
              </a>.
            </p>
          </div>
        )}

        {/* Step 3 — subscribed / unlocked */}
        {user && subscribed && (
          <div className="auth-unlocked">
            <div className="auth-unlocked-icon">✓</div>
            <h2 className="auth-section-title">You&apos;re in!</h2>
            <p className="auth-section-sub">
              Your NovraLab Pro subscription is active. Explore our tools below.
            </p>
            <a href="/projects" className="auth-btn-primary" style={{ display: "inline-block", textAlign: "center" }}>
              Go to Projects →
            </a>
          </div>
        )}
      </div>
    </div>
  )
}