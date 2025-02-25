import Link from "next/link"

export default function Pricing() {
  const plans = [
    { name: "Basic", price: "$9", features: ["5 Users", "Basic Features", "Email Support"] },
    { name: "Pro", price: "$29", features: ["Unlimited Users", "Advanced Features", "24/7 Support"] },
    {
      name: "Enterprise",
      price: "Custom",
      features: ["Custom Solutions", "Dedicated Account Manager", "On-premise Option"],
    },
  ]

  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Choose Your Plan</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md text-center transform hover:scale-105 transition duration-300"
            >
              <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
              <p className="text-3xl font-bold mb-4">
                {plan.price}
                <span className="text-sm font-normal">{plan.name !== "Enterprise" ? "/month" : ""}</span>
              </p>
              <ul className="mb-6">
                {plan.features.map((feature, i) => (
                  <li key={i} className="mb-2">
                    {feature}
                  </li>
                ))}
              </ul>
              <Link
                href="#"
                className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition duration-300"
              >
                Choose Plan
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

