import Head from 'next/head'
import FeatureCard from '../fpga-remote-services/components/FeatureCard'

export default function Services() {
  const services = [
    {
      title: "Remote FPGA Development",
      description: "Access our powerful FPGA development environment from any device, anywhere in the world.",
      icon: "/images/feature-1.svg"
    },
    {
      title: "Cloud Synthesis & Place-and-Route",
      description: "Harness the power of the cloud for faster synthesis and place-and-route operations.",
      icon: "/images/feature-2.svg"
    },
    {
      title: "Collaborative Design",
      description: "Work seamlessly with your team on FPGA projects using our collaborative tools.",
      icon: "/images/feature-3.svg"
    },
    // Add more services here
  ]

  return (
    <div>
      <Head>
        <title>Our Services - FPGA Remote Services</title>
        <meta name="description" content="Explore our range of remote FPGA tools and services" />
      </Head>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-12 text-center">Our Services</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <FeatureCard
                key={index}
                title={service.title}
                description={service.description}
                icon={service.icon}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}