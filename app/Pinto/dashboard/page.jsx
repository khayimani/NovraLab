"use client"
import { useState, useEffect } from "react"

// FIXED: Added https://
const API_BASE_URL = "https://pinto-production.up.railway.app"

export default function PintoDashboard() {
  // FIXED: Removed TypeScript generics like <string>
  const [apiKey, setApiKey] = useState(null)
  const [usage, setUsage] = useState(0)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch(`${API_BASE_URL}/v1/user/status`)
      .then(async (res) => {
        if (!res.ok) throw new Error("Failed to fetch status")
        return res.json()
      })
      .then((data) => {
         if(data.key) setApiKey(data.key)
         if(data.usage) setUsage(data.usage)
      })
      .catch((err) => {
        console.warn("Could not connect to Pinto backend:", err)
      })
  }, [])

  const handleGenerate = async () => {
    setLoading(true)
    setError(null)
    try {
      const res = await fetch(`${API_BASE_URL}/v1/auth/generate-key`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ userId: "demo_user" }) 
      })

      if (!res.ok) throw new Error(`Server error: ${res.statusText}`)

      const data = await res.json()
      setApiKey(data.apiKey || data.key)
    } catch (error) {
      console.error("Failed to generate key:", error)
      setError("Could not connect to server. Check your Railway URL.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="min-h-screen bg-white text-black px-6 py-20">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Pinto Dashboard</h1>
        
        {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">
                {error}
            </div>
        )}

        <div className="bg-white rounded-2xl p-6 mb-10 border border-neutral-800">
          <h2 className="text-2xl font-semibold mb-3">API Key</h2>
          {apiKey ? (
            <div className="flex justify-between items-center flex-wrap gap-4">
              <code className="bg-gray-100 border border-gray-300 px-3 py-2 rounded text-sm break-all font-mono">
                {apiKey}
              </code>
              <button
                onClick={() => navigator.clipboard.writeText(apiKey)}
                className="bg-black text-white px-4 py-2 rounded-lg text-sm hover:bg-gray-800 transition"
              >
                Copy Key
              </button>
            </div>
          ) : (
            <div className="text-center sm:text-left">
                <p className="text-gray-500 mb-4">You don't have an active API key yet.</p>
                <button
                onClick={handleGenerate}
                disabled={loading}
                className="bg-black text-white px-6 py-3 rounded-xl font-semibold hover:bg-gray-800 transition disabled:opacity-50"
                >
                {loading ? "Connecting to Railway..." : "Generate API Key"}
                </button>
            </div>
          )}
        </div>

        <div className="bg-white rounded-2xl p-6 border border-neutral-800">
          <h2 className="text-2xl font-semibold mb-4">Usage</h2>
          <p className="text-gray-600 mb-4">{usage} / 10,000 requests</p>
          <div className="w-full bg-gray-200 rounded-full h-3">
            <div
              className="bg-black h-3 rounded-full transition-all duration-300"
              style={{ width: `${(usage / 10000) * 100}%` }}
            ></div>
          </div>
        </div>
      </div>
    </main>
  )
}