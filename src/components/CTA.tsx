import Link from "next/link"

export default function CTA() {
  return (
    <section className="bg-blue-600 text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Streamline Your Business?</h2>
        <p className="text-xl mb-8">
          Join thousands of satisfied customers and take your productivity to the next level.
        </p>
        <Link
          href="#"
          className="bg-white text-blue-600 px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition duration-300"
        >
          Start Your Free Trial
        </Link>
      </div>
    </section>
  )
}

