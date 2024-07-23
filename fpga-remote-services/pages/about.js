import Head from 'next/head'

export default function About() {
  return (
    <div>
      <Head>
        <title>About Us - FPGA Remote Services</title>
        <meta name="description" content="Learn about our mission to revolutionize FPGA development" />
      </Head>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-8">About FPGA Remote Services</h1>
          <p className="text-xl mb-8">
            We are on a mission to revolutionize FPGA development by providing powerful, accessible, and collaborative tools for engineers worldwide.
          </p>
          {/* Add more content about your company, team, and vision */}
        </div>
      </section>
    </div>
  )
}