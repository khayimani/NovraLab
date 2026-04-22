import '../styles/globals.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import PaddleInit from '../components/PaddleInit'

export const metadata = {
  title: 'NovraLab — CySEC & MiFID II Compliance Automation',
  description: 'NovraLab builds NovraComp, a compliance automation platform for CySEC-regulated investment firms. AI-powered call analysis, violation detection, and audit-ready reporting.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Paddle Classic JS — required for overlay checkout */}
        <script src="https://cdn.paddle.com/paddle/paddle.js" async />
      </head>
      <body>
        <PaddleInit />
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
