import { Link } from 'react-router-dom'
import { Linkedin, Phone, Mail, Clock, Facebook } from 'lucide-react'

const Footer = () => {
  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'Clients', href: '/clients' },
    { name: 'Candidates', href: '/candidates' },
    { name: 'Jobs', href: '/jobs' },
    { name: 'Contact', href: '/contact' },
  ]

  return (
    <footer className="bg-secondary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center mb-4">
              <span className="text-2xl font-bold text-primary">
                Construction Site Recruitment
              </span>
            </Link>
            <p className="text-gray-300 mb-4 max-w-md">
              Your Specialist Recruitment Partner in Critical Infrastructure. 
              Connecting expert talent with the UK's leading projects in Rail, 
              Utilities, and Construction.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/company/construction-site-recruitment/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-primary transition-colors"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="https://www.facebook.com/people/Construction-Site-Recruitment/61578921133056/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-primary transition-colors"
              >
                <Facebook size={24} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-gray-300 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone size={18} className="text-primary" />
                <a
                  href="tel:02920028365"
                  className="text-gray-300 hover:text-primary transition-colors"
                >
                  0292 002 8365
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={18} className="text-primary" />
                <a
                  href="mailto:jobs@constructionsiterecruitment.co.uk"
                  className="text-gray-300 hover:text-primary transition-colors"
                >
                  jobs@constructionsiterecruitment.co.uk
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Clock size={18} className="text-primary" />
                <span className="text-gray-300">
                  Mon–Friday, 8:00am–5:30pm
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-300">
            © {new Date().getFullYear()} Construction Site Recruitment. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

