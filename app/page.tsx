import Profile from './components/Profile'
import AboutMe from './components/AboutMe'
import ContactInfo from './components/ContactInfo'
import SocialLinks from './components/SocialLinks'
import WebLinks from './components/WebLinks'
import Logo from './components/Logo'
export default function Home() {
  return (
    <div className="container  mx-auto px-4 py-8 max-w-xl w-full">
      <div className="space-y-8 w-full">
        <Logo />
        <Profile />
        <AboutMe />
        <ContactInfo />
        <SocialLinks />
        <WebLinks />
      </div>
    </div>
  )
}