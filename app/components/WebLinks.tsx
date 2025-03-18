import { FaGlobe } from 'react-icons/fa'

export default function WebLinks({
  primaryColor,
  webLinks,
}: {
  webLinks: {
    url: string;
    title: string;
    subtitle: string;
  }[];
  primaryColor: string;
}) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-lg">
      <h2
        className="text-2xl font-medium text-center mb-6"
        style={{ color: primaryColor }}
      >
        Web Links
      </h2>

      <div className="space-y-4">
        {webLinks.map((link, index) => (
          <a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <div
              className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
              style={{ backgroundColor: primaryColor }}
            >
              <FaGlobe className="text-white text-2xl" />
            </div>
            <div>
              <h3 className="font-medium" style={{ color: primaryColor }}>
                {link.title}
              </h3>
              <p className="text-gray-600 text-sm">{link.subtitle}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  )
}
