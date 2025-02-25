export default function Features() {
  const features = [
    { title: "Automated Workflows", description: "Create and manage complex workflows with ease." },
    { title: "Real-time Analytics", description: "Get insights into your business processes instantly." },
    { title: "Team Collaboration", description: "Work seamlessly with your team, anywhere, anytime." },
  ]

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md transform hover:scale-105 transition duration-300"
            >
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

