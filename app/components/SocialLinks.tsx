import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa'

export default function SocialLinks() {
  const socialLinks = [
    {
      icon: FaFacebook,
      url: 'https://www.facebook.com/A3BProjectsPvtLtd/',
      title: 'Facebook',
      subtitle: 'Follow us on Facebook',
    },
    {
      icon: FaInstagram,
      url: 'https://www.instagram.com/a3bprojects/',
      title: 'Instagram',
      subtitle: 'Follow us on Instagram',
    },
    // {
    //   icon: FaTwitter,
    //   url: 'https://twitter.com',
    //   title: 'Twitter',
    //   subtitle: 'Follow us on Twitter',
    // },
    {
      icon: FaLinkedin,
      url: 'https://www.linkedin.com/company/a3b-projects-p-limited/?originalSubdomain=in',
      title: 'LinkedIn',
      subtitle: 'Connect on LinkedIn',
    },
  ]

  return (
    <div className="bg-white rounded-2xl p-6 shadow-lg">
      <h2 className="text-[#2e3192] text-2xl font-medium text-center mb-6">Social Links</h2>
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
            <div className="w-12 h-12 rounded-full bg-[#2e3192] flex items-center justify-center flex-shrink-0">
              <link.icon className="text-white text-2xl" />
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