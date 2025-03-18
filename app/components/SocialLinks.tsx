import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa'

export default function SocialLinks({
  socialLinks,
  primaryColor
}: {
  socialLinks: {
    icon: any;
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
        Social Links
      </h2>

      <p className="text-center text-gray-700 mb-6">
        Stay connected with us on social media
      </p>

      <div className="space-y-4">
        {socialLinks.map((link, index) => (
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
              <link.icon className="text-white text-2xl" />
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
