"use client"

import { useState, type ChangeEvent } from "react"
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, type User } from "firebase/auth"
import { loadStripe } from "@stripe/stripe-js"
import firebaseApp from "@/lib/firebase"

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_KEY as string)
const auth = getAuth(firebaseApp)

export default function AuthPage() {
  const [email, setEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("")
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState<boolean>(false)
  const [subscribed, setSubscribed] = useState<boolean>(false)

  const signup = async () => {
    setLoading(true)
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password)
      setUser(res.user)
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  const login = async () => {
    setLoading(true)
    try {
      const res = await signInWithEmailAndPassword(auth, email, password)
      setUser(res.user)
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  const startCheckout = async () => {
    const stripe = await stripePromise
    if (!stripe) return

    // Cast to 'any' to bypass strict type checking for client-side checkout arguments
    await (stripe as any).redirectToCheckout({
      lineItems: [{ price: process.env.NEXT_PUBLIC_STRIPE_PRICE_ID as string, quantity: 1 }],
      mode: "subscription",
      successUrl: `${process.env.NEXT_PUBLIC_URL}/auth?success=true`,
      cancelUrl: `${process.env.NEXT_PUBLIC_URL}/auth?canceled=true`,
    })
  }

  return (
    <div className="max-w-md mx-auto mt-20 p-8 border rounded-lg">
      {!user && (
        <div>
          <h2 className="text-xl font-semibold mb-4">Access</h2>
          <input
            className="border w-full p-2 mb-2 text-black"
            placeholder="email"
            type="email"
            value={email}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
          />
          <input
            className="border w-full p-2 mb-4 text-black"
            placeholder="password"
            type="password"
            value={password}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
          />

          <button
            onClick={signup}
            className="w-full bg-black text-white p-2 mb-2"
            disabled={loading}
          >
            {loading ? "Processing..." : "Sign up"}
          </button>

          <button
            onClick={login}
            className="w-full border p-2 text-black"
            disabled={loading}
          >
            Login
          </button>
        </div>
      )}

      {user && !subscribed && (
        <div className="mt-8 border-t pt-8">
          <h2 className="text-xl font-semibold mb-4">Subscription Required</h2>
          <p className="text-sm mb-4">Your account is created. Unlock access by subscribing.</p>
          <button
            onClick={startCheckout}
            className="w-full bg-black text-white p-2"
          >
            Subscribe
          </button>
        </div>
      )}

      {user && subscribed && (
        <div className="mt-8 border-t pt-8">
          <h2 className="text-xl font-semibold mb-4">Unlocked</h2>
          <div className="p-4 border rounded">Protected content</div>
        </div>
      )}
    </div>
  )
}