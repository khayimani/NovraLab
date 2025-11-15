export default function Mission() {
  return (
    <div className="text-center">
      <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
      <p className="text-muted max-w-2xl mx-auto mb-8">
        A technology lab where research, experiments, and software projects evolve into real-world products.
      </p>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="card text-left">
          <div className="text-3xl mb-4 [filter:grayscale(100%)] [opacity:0.7]">💡</div>
          <h3 className="font-semibold mb-2">Innovation First</h3>
          <p className="text-muted">
            We believe in pushing boundaries and exploring new frontiers in technology. Every experiment brings us
            closer to breakthrough solutions.
          </p>
        </div>

        <div className="card text-left">
          <div className="text-3xl mb-4 [filter:grayscale(100%)] [opacity:0.7]">⌨️</div>
          <h3 className="font-semibold mb-2">Research-Driven</h3>
          <p className="text-muted">
            Our projects are built on solid research and experimentation. We transform theoretical concepts into
            practical, high-impact digital products.
          </p>
        </div>

        <div className="card text-left">
          <div className="text-3xl mb-4 [filter:grayscale(100%)] [opacity:0.7]">🚀</div>
          <h3 className="font-semibold mb-2">Building the Future</h3>
          <p className="text-muted">
            From Pinto to future innovations, we focus on creating products that make a real difference in the digital
            landscape.
          </p>
        </div>
      </div>
    </div>
  );
}
