import Head from 'next/head'
import Hero from '../components/Hero'
import FeatureCard from '../components/FeatureCard'

export default function Home() {
  return (
    <div>
      <Head>
        <title>FPGA Remote Services - Empowering FPGA Development</title>
        <meta name="description" content="Remote FPGA tools and services for efficient development and deployment" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Hero
        title="Empower Your FPGA Development"
        subtitle="Access powerful FPGA tools and services from anywhere, anytime. Streamline your workflow and accelerate your projects."
        cta="Get Started"
        ctaLink="/signup"
      />

      <section className="section bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              title="Remote FPGA Development"
              description="Access our powerful FPGA development environment from any device, anywhere in the world."
              icon="/images/feature-1.svg"
            />
            <FeatureCard
              title="Cloud Synthesis & Place-and-Route"
              description="Harness the power of the cloud for faster synthesis and place-and-route operations."
              icon="/images/feature-2.svg"
            />
            <FeatureCard
              title="Collaborative Design"
              description="Work seamlessly with your team on FPGA projects using our collaborative tools."
              icon="/images/feature-3.svg"
            />
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card p-6">
              <h3 className="text-xl font-semibold mb-4">Increased Productivity</h3>
              <p className="text-gray-600">Our remote tools and cloud-based services allow you to work more efficiently, reducing development time and costs.</p>
            </div>
            <div className="card p-6">
              <h3 className="text-xl font-semibold mb-4">Scalable Resources</h3>
              <p className="text-gray-600">Access powerful computing resources on-demand, scaling up or down based on your project needs.</p>
            </div>
            <div className="card p-6">
              <h3 className="text-xl font-semibold mb-4">Seamless Collaboration</h3>
              <p className="text-gray-600">Work together with your team in real-time, regardless of location, using our collaborative design tools.</p>
            </div>
            <div className="card p-6">
              <h3 className="text-xl font-semibold mb-4">Cutting-edge Technology</h3>
              <p className="text-gray-600">Stay ahead of the curve with our constantly updated tools and services, leveraging the latest FPGA technologies.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}