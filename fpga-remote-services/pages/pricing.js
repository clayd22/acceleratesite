import Head from 'next/head'
import PricingCard from '../components/PricingCard'

export default function Pricing() {
  const plans = [
    {
      name: "Basic",
      price: "$49",
      period: "per month",
      features: [
        "Remote FPGA development environment",
        "1 concurrent project",
        "5GB cloud storage",
        "Community support"
      ]
    },
    {
      name: "Pro",
      price: "$149",
      period: "per month",
      features: [
        "All Basic features",
        "5 concurrent projects",
        "25GB cloud storage",
        "Priority cloud synthesis",
        "Email support"
      ]
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "contact us",
      features: [
        "All Pro features",
        "Unlimited concurrent projects",
        "Unlimited cloud storage",
        "Dedicated cloud resources",
        "24/7 phone & email support"
      ]
    }
  ]

  return (
    <div>
      <Head>
        <title>Pricing - FPGA Remote Services</title>
        <meta name="description" content="Choose the perfect plan for your FPGA development needs" />
      </Head>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-12 text-center">Pricing Plans</h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <PricingCard
                key={index}
                name={plan.name}
                price={plan.price}
                period={plan.period}
                features={plan.features}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}