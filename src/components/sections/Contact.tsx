// Removed framer-motion to fix navigation issues
import { Phone, Mail, Clock, MapPin } from 'lucide-react'
import TallyEmbed from '../ui/TallyEmbed'

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: '0292 002 8365',
      link: 'tel:02920028365'
    },
    {
      icon: Mail,
      title: 'Email',
      details: 'jobs@constructionsiterecruitment.co.uk',
      link: 'mailto:jobs@constructionsiterecruitment.co.uk'
    },
    {
      icon: Clock,
      title: 'Office Hours',
      details: 'Mon–Friday, 8:00am–5:30pm',
      link: null
    },
    {
      icon: MapPin,
      title: 'Location',
      details: 'Serving the UK',
      link: null
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-6">
            Get in <span className="text-primary">Touch</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to find your next opportunity or build your team? 
            We're here to help connect the right talent with the right roles.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold text-secondary mb-8">
              Contact Information
            </h3>
            
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div
                  key={info.title}
                  className="flex items-center space-x-4 p-4 rounded-lg hover:bg-surface transition-colors duration-300"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <info.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-secondary">{info.title}</h4>
                    {info.link ? (
                      <a
                        href={info.link}
                        className="text-gray-600 hover:text-primary transition-colors duration-300"
                      >
                        {info.details}
                      </a>
                    ) : (
                      <p className="text-gray-600">{info.details}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 bg-surface rounded-xl">
              <h4 className="text-lg font-semibold text-secondary mb-3">
                Quick Response Guarantee
              </h4>
              <p className="text-gray-600">
                We aim to respond to all inquiries within 2 hours during business hours. 
                For urgent requirements, please call us directly.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-surface rounded-xl p-8">
            <h3 className="text-2xl font-bold text-secondary mb-6">
              Send us a Message
            </h3>
            
            {/* Tally Form Embed */}
            <TallyEmbed formId="jaagrY" height={600} />
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-primary rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
              Whether you're a client looking to build your team or a candidate 
              seeking your next opportunity, we're here to make it happen.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:02920028365"
                className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
              >
                Call Now: 0292 002 8365
              </a>
              <a
                href="mailto:jobs@constructionsiterecruitment.co.uk"
                className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary transition-all duration-300"
              >
                Email Us Today
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact