"use client";
import { useState } from "react";

export default function PintoDashboard() {
  const [apiKey, setApiKey] = useState(null);
  const [usage, setUsage] = useState(0);

  const handleGenerate = () => {
    const key = "pk_" + Math.random().toString(36).substring(2, 15);
    setApiKey(key);
  };

  return (
    <main className="min-h-screen bg-white text-black px-6 py-20">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Pinto Dashboard</h1>
        <p className="text-gray-700 mb-12">
          Manage your API key, monitor usage, and access developer tools.
        </p>

        <div className="bg-white rounded-2xl p-6 mb-10 border border-neutral-800">
          <h2 className="text-2xl font-semibold mb-3">API Key</h2>
          {apiKey ? (
            <div className="flex justify-between items-center">
              <code className="bg-gray-300 px-3 py-2 rounded">{apiKey}</code>
              <button
                onClick={() => navigator.clipboard.writeText(apiKey)}
                className="bg-gray-300 text-black px-4 py-2 rounded-lg"
              >
                Copy
              </button>
            </div>
          ) : (
            <button
              onClick={handleGenerate}
              className="bg-black text-white px-6 py-3 rounded-xl font-semibold hover:bg-white hover:text-black transition"
            >
              Generate API Key
            </button>
          )}
        </div>

        <div className="bg-white rounded-2xl p-6 border border-neutral-800">
          <h2 className="text-2xl font-semibold mb-4">Usage</h2>
          <p className="text-gray-600 mb-4">{usage} / 10,000 requests this month</p>
          <div className="w-full bg-gray-400 rounded-full h-3">
            <div
              className="bg-white h-3 rounded-full transition-all duration-300"
              style={{ width: `${(usage / 10000) * 100}%` }}
            ></div>
          </div>
        </div>
      </div>
    </main>
  );
}
