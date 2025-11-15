export default function Hero(){
  return (
    <div className="text-center py-16">
      <div className="inline-block text-sm mb-6">Digital Innovation Lab</div>
      <h1 className="text-3xl md:text-4xl font-semibold mb-4">Engineering the Future, <br/> One Project at a Time.</h1>
      <p className="text-muted max-w-2xl mx-auto mb-8">NovraLab is a technology lab dedicated to turning research into innovation.</p>
      <div className="flex justify-center gap-4">
        <a href="/projects" className="button-primary">Explore Our Projects →</a>
      </div>

      <div className="mt-12 grid grid-cols-3 gap-6 max-w-md mx-auto text-sm text-muted">
        <div className="text-center">
          <div className="flex justify-center items-center mb-2">
            <img 
                    src="/imgs/Research.svg" 
                    width="18" 
                    height="18" 
                    alt="Research"
                  /></div>
          <div>Research</div>
        </div>
        <div className="text-center">
          <div className="flex justify-center items-center mb-2">  <img 
          src="/imgs/Innovation.svg" 
          width="18" 
          height="18" 
          alt="Innovation"
        /></div>
          <div>Innovation</div>
        </div>
        <div className="text-center">
          <div className="flex justify-center items-center mb-2">  <img 
          src="/imgs/Bolt.svg" 
          width="18" 
          height="18" 
          alt="Product"
        /></div>
          <div>Product</div>
        </div>
      </div>
    </div>
  )
}
