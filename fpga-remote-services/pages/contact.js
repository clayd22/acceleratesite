import Head from 'next/head'
import ContactForm from '../components/ContactForm'

export default function Contact() {
  return (
    <div>
      <Head>
        <title>Contact Us - FPGA Remote Services</title>
        <meta name="description" content="Get in touch with our team for support or inquiries" />
      </Head>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-12 text-center">Contact Us</h1>
          <div className="max-w-2xl mx-auto">
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  )
}