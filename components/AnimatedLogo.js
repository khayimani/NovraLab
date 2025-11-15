export default function AnimatedLogo({ className }) {
  return (
    <div className={className ? `${className} logo-wrap` : 'logo-wrap'}>
      <div className="logo" aria-hidden>
        <img 
          src="/imgs/logo.svg" 
          width="30" 
          height="30" 
          alt="Logo"
        />
      </div>
      <div className="logo-text" aria-label="NovraLab">
        <span className="reveal-inner">NovraLab</span>
      </div>
    </div>
  )
}