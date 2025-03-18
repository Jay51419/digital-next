import Profile from "../components/Profile";
import AboutMe from "../components/AboutMe";
import ContactInfo from "../components/ContactInfo";
import SocialLinks from "../components/SocialLinks";
import WebLinks from "../components/WebLinks";
import Logo from "../components/Logo";
import FloatingButtons from "../components/FloatingButtons";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "A3B Digital Business Card",
  description: "A3B Digital Business Card",
};

export default function A3B() {
  const socialLinks = [
    {
      icon: FaFacebook,
      url: "https://www.facebook.com/A3BProjectsPvtLtd/",
      title: "Facebook",
      subtitle: "Follow us on Facebook",
    },
    {
      icon: FaInstagram,
      url: "https://www.instagram.com/a3bprojects/",
      title: "Instagram",
      subtitle: "Follow us on Instagram",
    },
    // {
    //   icon: FaTwitter,
    //   url: 'https://twitter.com',
    //   title: 'Twitter',
    //   subtitle: 'Follow us on Twitter',
    // },
    {
      icon: FaLinkedin,
      url: "https://www.linkedin.com/company/a3b-projects-p-limited/?originalSubdomain=in",
      title: "LinkedIn",
      subtitle: "Connect on LinkedIn",
    },
  ];
  const webLinks = [
    {
      url: "https://www.a3b.in/",
      title: "a3b.in",
      subtitle: "Visit our official website",
    },
    // {
    //   url: 'https://blog.example.com',
    //   title: 'Company Blog',
    //   subtitle: 'Read our latest articles',
    // },
  ];
  return (
    <div>
      <div className="container  mx-auto px-4 py-8 max-w-xl w-full">
        <div className="space-y-8 w-full">
          <Logo url="/A3B-new-logo.png" />
          <Profile
            name="Bipen Tiwari"
            company="A3B Design Studio"
            email="enquiry@a3b.in"
            whatsapp="+919320012999"
            phone="+919320012999"
            title="Founder and Director"
            profileImage="/400x400.svg"
            primaryColor="#2e3192"
          />
          <AboutMe
            primaryColor="#2e3192"
            content=" Experienced Architect and Designer with over 19 years of expertise in
        space design and turnkey projects. Co-founder and Director of A3B
        Project Pvt Limited, renowned for delivering innovative architectural
        solutions that are both aesthetically pleasing and highly personalized.
        Passionate about fostering teamwork, discipline, and respect within the
        organization to consistently achieve excellence in every project."
          />
          <ContactInfo
            primaryColor="#2e3192"
            phone="+91 9320012999"
            email="enquiry@a3b.in"
            address="A 504, Universal Business Park, Chandivali Farm Road, Off Saki
              Vihar Road, Andheri (East), Mumbai – 400072."
            mapUrl="https://maps.app.goo.gl/XCMgSDafcvEEJ56Z9"
          />
          <SocialLinks primaryColor="#2e3192" socialLinks={socialLinks} />
          <WebLinks primaryColor="#2e3192" webLinks={webLinks} />
        </div>
      </div>
      <FloatingButtons
        vcfUrl="/Bipen-Tiwari.vcf"
        primaryColor="#2e3192"
        title="Founder and Director"
        name="Bipen Tiwari"
        company="A3B Design Studio"
        logoUrl="/A3B-new-logo.png"
      />
    </div>
  );
}
