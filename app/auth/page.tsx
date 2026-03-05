"use client"

import { useState, useEffect, type ChangeEvent } from "react"
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  type User,
} from "firebase/auth"
import firebaseApp from "@/lib/firebase"

const auth = getAuth(firebaseApp)

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

  // Check URL params for Paddle success/cancel callbacks
  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    if (params.get("success") === "true") setSubscribed(true)
  }, [])

  const signup = async () => {
    setLoading(true)
    setError("")
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password)
      setUser(res.user)
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
      setUser(res.user)
    } catch (err: any) {
      setError(err.message ?? "Login failed. Please check your credentials.")
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

            <button
              onClick={mode === "signup" ? signup : login}
              className="auth-btn-primary"
              disabled={loading}
            >
              {loading ? "Processing…" : mode === "signup" ? "Create account" : "Sign in"}
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