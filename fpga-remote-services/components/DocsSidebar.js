import Link from 'next/link'

export default function DocsSidebar() {
  const sections = [
    {
      title: 'Getting Started',
      links: [
        { title: 'Introduction', href: '/docs/introduction' },
        { title: 'Quick Start Guide', href: '/docs/quick-start' },
      ]
    },
    {
      title: 'Core Concepts',
      links: [
        { title: 'Remote Development', href: '/docs/remote-development' },
        { title: 'Cloud Synthesis', href: '/docs/cloud-synthesis' },
        { title: 'Collaborative Design', href: '/docs/collaborative-design' },
      ]
    },
    {
      title: 'API Reference',
      links: [
        { title: 'REST API', href: '/docs/api/rest' },
        { title: 'WebSocket API', href: '/docs/api/websocket' },
      ]
    },
  ]

  return (
    <nav className="space-y-8">
      {sections.map((section, index) => (
        <div key={index}>
          <h3 className="font-semibold text-gray-900">{section.title}</h3>
          <ul className="mt-2 space-y-2">
            {section.links.map((link, linkIndex) => (
              <li key={linkIndex}>
                <Link href={link.href} className="text-gray-600 hover:text-gray-900">
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </nav>
  )
}