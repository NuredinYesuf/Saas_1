export default function Testimonials() {
  const testimonials = [
    {
      name: "John Doe",
      company: "Tech Co",
      quote: "StreamLine has revolutionized how we manage our projects. It's a game-changer!",
    },
    {
      name: "Jane Smith",
      company: "Design Studio",
      quote: "The intuitive interface and powerful features have significantly boosted our productivity.",
    },
  ]

  return (
    <section id="testimonials" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">What Our Customers Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-600 mb-4">"{testimonial.quote}"</p>
              <p className="font-semibold">{testimonial.name}</p>
              <p className="text-sm text-gray-500">{testimonial.company}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

