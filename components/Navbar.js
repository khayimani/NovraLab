import Link from 'next/link'
import AnimatedLogo from './AnimatedLogo'

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="container mx-auto px-6 lg:px-20 flex items-center justify-between py-4">
        <div className="flex items-center gap-3">
          <Link href="/">
            <AnimatedLogo />
          </Link>
        </div>

        <nav className="hidden md:flex items-center gap-6 text-sm text-muted">
          <Link href="/" className="nav-link">Home</Link>
          <Link href="/novracomp" className="nav-link">NovraComp</Link>
          <Link href="/terms" className="nav-link">Terms</Link>
          <Link href="/contact" className="nav-link">Contact</Link>
          <Link
            href="/auth"
            className="nav-cta"
          >
            Sign In
          </Link>
        </nav>

        <div className="md:hidden">
          <MobileMenu />
        </div>
      </div>
    </header>
  )
}

function MobileMenu() {
  return (
    <details className="relative">
      <summary className="cursor-pointer px-3 py-2 border rounded-md text-sm select-none">Menu</summary>
      <div className="absolute right-0 mt-2 bg-white border rounded-md p-4 w-52 shadow-lg z-50">
        <ul className="space-y-3 text-sm">
          <li><a href="/" className="nav-link block">Home</a></li>
          <li><a href="/novracomp" className="nav-link block">NovraComp</a></li>
          <li><a href="/terms" className="nav-link block">Terms</a></li>
          <li><a href="/contact" className="nav-link block">Contact</a></li>
          <li><a href="/auth" className="nav-link block font-semibold">Sign In →</a></li>
        </ul>
      </div>
    </details>
  )
}
