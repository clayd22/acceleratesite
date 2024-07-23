import Head from 'next/head'
import DocsSidebar from '../fpga-remote-services/components/DocsSidebar'

export default function Docs() {
  return (
    <div>
      <Head>
        <title>Documentation - FPGA Remote Services</title>
        <meta name="description" content="Learn how to use our remote FPGA tools and services" />
      </Head>

      <div className="container mx-auto px-4 py-20">
        <div className="flex flex-col md:flex-row">
          <DocsSidebar />
          <main className="flex-grow">
            <h1 className="text-4xl font-bold mb-8">Documentation</h1>
            <p className="text-xl mb-8">
              Welcome to the FPGA Remote Services documentation. Here you'll find guides, tutorials, and API references to help you make the most of our platform.
            </p>
            {/* Add more documentation content */}
          </main>
        </div>
      </div>
    </div>
  )
}