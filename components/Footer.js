export default function Footer(){
  return (
    <footer className="border-t mt-12">
      <div className="container mx-auto px-6 lg:px-20 py-8 flex items-center justify-between">
        <div>© {new Date().getFullYear()} NovraLab. All rights reserved.</div>
        <div className="text-muted text-sm">Home · Projects · Mission · Contact</div>
      </div>
    </footer>
  )
}
