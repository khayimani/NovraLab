"use client"
import Link from "next/link"

export default function UXUILanding() {
    return (
        <main className="min-h-screen bg-white text-black">
            <section className="max-w-6xl mx-auto px-6 py-24 text-center">
                <h1 className="text-5xl font-bold mb-6">UX/UI Design</h1>
                <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                    Crafting intuitive and beautiful user experiences. We transform complex ideas into elegant, user-friendly interfaces.
                </p>
                <div className="mt-10 flex justify-center gap-4">
                    <Link href="https://uxui.novralab.com" className="bg-black text-white px-8 py-3 rounded-xl font-semibold hover:bg-gray-800 transition">
                        View Portfolio
                    </Link>
                </div>
            </section>

            <section className="max-w-5xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-12 text-gray-700">
                <div>
                    <h3 className="text-xl font-semibold mb-2 text-black">User Research</h3>
                    <p>Deep dive into user needs and behaviors to inform design decisions.</p>
                </div>
                <div>
                    <h3 className="text-xl font-semibold mb-2 text-black">Interface Design</h3>
                    <p>Pixel-perfect visual designs that align with your brand identity.</p>
                </div>
                <div>
                    <h3 className="text-xl font-semibold mb-2 text-black">Prototyping</h3>
                    <p>Interactive prototypes to test and validate flows before development.</p>
                </div>
            </section>
        </main>
    )
}
