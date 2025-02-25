import Link from "next/link"
import { ArrowRight, Code, Globe, Zap } from "lucide-react"

export default function Home() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="text-center py-20 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg">
        <h1 className="text-5xl font-bold mb-4">Join the TechNova Engineering Team</h1>
        <p className="text-xl mb-8">Build innovative solutions that shape the future of technology</p>
        <Link
          href="/jobs"
          className="bg-white text-indigo-600 px-6 py-3 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center"
        >
          View Open Positions <ArrowRight className="ml-2" />
        </Link>
      </section>

      {/* Why Join Us Section */}
      <section>
        <h2 className="text-3xl font-bold mb-8 text-center">Why Join TechNova?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <Code className="text-indigo-600 w-12 h-12 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Cutting-edge Technology</h3>
            <p>Work with the latest technologies and contribute to groundbreaking projects.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <Globe className="text-indigo-600 w-12 h-12 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Global Impact</h3>
            <p>Develop solutions that are used by millions of people around the world.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <Zap className="text-indigo-600 w-12 h-12 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Rapid Growth</h3>
            <p>Accelerate your career in a fast-paced, innovative environment.</p>
          </div>
        </div>
      </section>

      {/* Current Openings Section */}
      <section>
        <h2 className="text-3xl font-bold mb-8 text-center">Current Openings</h2>
        <div className="space-y-4">
          {["Senior Full Stack Developer", "Machine Learning Engineer", "DevOps Specialist", "UI/UX Designer"].map(
            (position) => (
              <div key={position} className="bg-white p-6 rounded-lg shadow-md flex justify-between items-center">
                <h3 className="text-xl font-semibold">{position}</h3>
                <Link
                  href="/jobs"
                  className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors"
                >
                  Apply Now
                </Link>
              </div>
            ),
          )}
        </div>
      </section>

      {/* Employee Testimonial */}
      <section className="bg-gray-100 p-8 rounded-lg">
        <h2 className="text-3xl font-bold mb-8 text-center">What Our Engineers Say</h2>
        <blockquote className="text-center">
          <p className="text-xl italic mb-4">
            "Working at TechNova has been an incredible journey. The challenges are exciting, the team is supportive,
            and the impact we make is truly rewarding."
          </p>
          <cite className="text-gray-600">- Sarah Johnson, Senior Software Engineer</cite>
        </blockquote>
      </section>

      {/* Call to Action */}
      <section className="text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Take the Next Step?</h2>
        <p className="text-xl mb-8">Join our team and help build the technologies of tomorrow.</p>
        <Link
          href="/jobs"
          className="bg-indigo-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-indigo-700 transition-colors inline-flex items-center"
        >
          Explore Opportunities <ArrowRight className="ml-2" />
        </Link>
      </section>
    </div>
  )
}

