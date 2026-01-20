"use client"
import Link from "next/link"

export default function OutfitsGenLanding() {
    return (
        <main className="min-h-screen bg-white text-black">
            <section className="max-w-6xl mx-auto px-6 py-24 text-center">
                <h1 className="text-5xl font-bold mb-6">OutfitsGen</h1>
                <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                    AI-powered personal styling. Generate perfect outfits from your digital wardrobe for any occasion.
                </p>
                <div className="mt-10 flex justify-center gap-4">
                    <Link href="https://outfitsgen.novralab.com" className="bg-black text-white px-8 py-3 rounded-xl font-semibold hover:bg-gray-800 transition">
                        Generate Outfits
                    </Link>
                </div>
            </section>

            <section className="max-w-5xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-12 text-gray-700">
                <div>
                    <h3 className="text-xl font-semibold mb-2 text-black">Digital Wardrobe</h3>
                    <p>Digitize your closet and organize your clothes effortlessly.</p>
                </div>
                <div>
                    <h3 className="text-xl font-semibold mb-2 text-black">AI Styling</h3>
                    <p>Get personalized outfit recommendations based on your style and weather.</p>
                </div>
                <div>
                    <h3 className="text-xl font-semibold mb-2 text-black">Smart Shopping</h3>
                    <p>Discover new pieces that complement your existing wardrobe.</p>
                </div>
            </section>
        </main>
    )
}
