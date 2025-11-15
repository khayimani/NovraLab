export default function PintoDocs() {
  return (
    <main className="min-h-screen bg-white text-black px-6 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold mb-8">Pinto API Documentation</h1>
        <p className="text-gray-600 mb-12 text-lg">
          The Pinto API lets you connect your app to Notion, Google, Slack, and more using a unified schema and authentication model.
        </p>

        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-4">Authentication</h2>
          <p className="text-gray-400 mb-2">
            Every request to the Pinto API requires your API key in the header:
          </p>
          <pre className="bg-gray-900 p-4 rounded-lg text-sm">
{`curl -X GET "https://api.pinto.dev/v1/user"
-H "Authorization: Bearer YOUR_API_KEY"`}</pre>
          <p className="text-gray-400 mt-2">You can generate your key from the dashboard.</p>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-4">Endpoints</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-medium mb-2 text-white">GET /v1/user</h3>
              <p className="text-gray-400 mb-2">Retrieve account information for the current API key.</p>
              <pre className="bg-white p-4 rounded-lg text-sm">
{`Response:
{
  "id": "usr_123",
  "email": "dev@pinto.dev",
  "plan": "pro"
}`}
              </pre>
            </div>

            <div>
              <h3 className="text-xl font-medium mb-2 text-white">POST /v1/connect</h3>
              <p className="text-gray-400 mb-2">Initiate a new connection to an external service (e.g. Notion, Slack).</p>
              <pre className="bg-white p-4 rounded-lg text-sm">
{`Body:
{
  "provider": "notion",
  "access_token": "user-access-token"
}

Response:
{
  "connection_id": "conn_abc123",
  "status": "connected"
}`}
              </pre>
            </div>

            <div>
              <h3 className="text-xl font-medium mb-2 text-white">GET /v1/data/:connection_id</h3>
              <p className="text-gray-400 mb-2">Fetch data from a connected service through Pinto.</p>
              <pre className="bg-gray-900 p-4 rounded-lg text-sm">
{`Response:
{
  "data": [
    {
      "id": "item_1",
      "title": "Design Docs",
      "updated_at": "2025-11-10T10:00:00Z"
    }
  ]
}`}
              </pre>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Error Handling</h2>
          <pre className="bg-white p-4 rounded-lg text-sm mb-4">
{`{
  "error": {
    "code": "invalid_api_key",
    "message": "The API key provided is invalid."
  }
}`}
          </pre>
          <p className="text-gray-400">
            All errors follow this format. Check your key and parameters before retrying.
          </p>
        </section>
      </div>
    </main>
  )
}
