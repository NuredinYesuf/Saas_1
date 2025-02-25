import Link from "next/link"
import HeroSlideshow from "./HeroSlideshow"

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <HeroSlideshow />
        <p className="text-xl mb-8">
          Boost productivity and streamline your business processes with our intuitive SaaS platform.
        </p>
        <Link
          href="#"
          className="bg-white text-blue-500 px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition duration-300"
        >
          Get Started Free
        </Link>
      </div>
    </section>
  )
}

