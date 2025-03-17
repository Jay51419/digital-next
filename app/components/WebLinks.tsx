import { FaGlobe } from 'react-icons/fa'

export default function WebLinks() {
  const webLinks = [
    {
      url: 'https://www.a3b.in/',
      title: 'a3b.in',
      subtitle: 'Visit our official website',
    },
    // {
    //   url: 'https://blog.example.com',
    //   title: 'Company Blog',
    //   subtitle: 'Read our latest articles',
    // },
  ]

  return (
    <div className="bg-white rounded-2xl p-6 shadow-lg">
      <h2 className="text-[#2e3192] text-2xl font-medium text-center mb-6">Web Links</h2>
      
      <div className="space-y-4">
        {webLinks.map((link, index) => (
          <a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <div className="w-12 h-12 rounded-full bg-[#2e3192] flex items-center justify-center flex-shrink-0">
              <FaGlobe className="text-white text-2xl" />
            </div>
            <div>
              <h3 className="text-[#2e3192] font-medium">{link.title}</h3>
              <p className="text-gray-600 text-sm">{link.subtitle}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  )
} 