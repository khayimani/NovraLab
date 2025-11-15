import Link from 'next/link'
import AnimatedLogo from './AnimatedLogo'

export default function Navbar(){
  return (
    <header className="border-b">
      <div className="container mx-auto px-6 lg:px-20 flex items-center justify-between py-4">
        <div className="flex items-center gap-3">
          <Link href="/">
              <AnimatedLogo />
          </Link>
        </div>

        <nav className="hidden md:flex items-center gap-6 text-sm text-muted">
           <Link href="/">Home</Link>
  <Link href="/mission">Mission</Link>
  <Link href="/projects">Projects</Link>
  <Link href="/research">Research</Link>
  <Link
    href="/contact"
    className="ml-3 bg-foreground text-white px-4 py-2 rounded-full"
  >
    Contact
  </Link>
  </nav>

        <div className="md:hidden">{/* small screens: simple menu button */}
          <MobileMenu />
        </div>
      </div>
    </header>
  )
}

function MobileMenu(){
  return (
    <details className="relative">
      <summary className="cursor-pointer px-3 py-2 border rounded-md">Menu</summary>
      <div className="absolute right-0 mt-2 bg-white border rounded-md p-4 w-48 shadow-lg">
        <ul className="space-y-2 text-sm">
          <li><a href="/">Home</a></li>
          <li><a href="/mission">Mission</a></li>
          <li><a href="/projects">Projects</a></li>
          <li><a href="/research">Research</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </div>
    </details>
  )
}
