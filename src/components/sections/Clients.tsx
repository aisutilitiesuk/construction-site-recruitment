// Removed framer-motion to fix navigation issues
import { Search, UserCheck, Handshake, HeadphonesIcon, Quote } from 'lucide-react'
import { useState } from 'react'
import Modal from '../ui/Modal'
import TallyEmbed from '../ui/TallyEmbed'
import aisLogo from '../../assets/Clients/ais-logo.png'
import energeyesLogo from '../../assets/Clients/energeyes.png'
import jamtodayLogo from '../../assets/Clients/jamtoday-company-logo-300x300-1.png'
import mandeconnectLogo from '../../assets/Clients/mandeconnectlogo-300x300-1.jpeg'
import unsLogo from '../../assets/Clients/uns-logo-andrew-300x300-1.png'
import businessImage from '../../assets/How it works/business-1.jpeg'
import jobApplicationImage from '../../assets/How it works/job-application.jpeg'
import jobListingImage from '../../assets/How it works/job-listing.jpeg'
import registerCvImage from '../../assets/How it works/register-cv-for-construction-site-job.jpeg'

const Clients = () => {
  const [showClientModal, setShowClientModal] = useState(false)

  const clientLogos = [
    { name: 'AIS Utilities', logo: aisLogo },
    { name: 'Energeyes', logo: energeyesLogo },
    { name: 'Jamtoday', logo: jamtodayLogo },
    { name: 'Mandeconnect', logo: mandeconnectLogo },
    { name: 'UNS', logo: unsLogo }
  ]

  const process = [
    {
      icon: Search,
      title: 'Deep Discovery',
      description: 'Understanding your needs, culture, and specific requirements for the perfect match.',
      step: '01',
      image: businessImage
    },
    {
      icon: UserCheck,
      title: 'Sourcing & Vetting',
      description: 'Industry-specific screening and comprehensive candidate evaluation.',
      step: '02',
      image: registerCvImage
    },
    {
      icon: Handshake,
      title: 'Placement & Onboarding',
      description: 'Managing coordination and ensuring smooth integration into your team.',
      step: '03',
      image: jobApplicationImage
    },
    {
      icon: HeadphonesIcon,
      title: 'Ongoing Support',
      description: 'Post-placement contact and continued partnership for long-term success.',
      step: '04',
      image: jobListingImage
    }
  ]

  const testimonials = [
    {
      quote: "CSR have been instrumental in helping us build our team... invaluable partner.",
      company: "Green Light Rail & Construction",
      role: "Project Director"
    },
    {
      quote: "The quality of candidates and speed of service... exceptional.",
      company: "AIS Utilities",
      role: "Operations Manager"
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-6">
            Building Your Team,{' '}
            <span className="text-primary">Securing Your Future</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our proven process ensures you get the right talent, at the right time, 
            for your critical infrastructure projects.
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {process.map((step, index) => (
            <div
              key={step.title}
              className="relative text-center"
            >
              {/* Process Image */}
              <div className="mb-6 rounded-xl overflow-hidden">
                <img 
                  src={step.image} 
                  alt={step.title}
                  className="w-full h-48 object-cover"
                />
              </div>
              
              <div className="relative mb-6">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-primary rounded-full mb-4">
                  <step.icon className="w-10 h-10 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 bg-secondary text-white text-sm font-bold w-8 h-8 rounded-full flex items-center justify-center">
                  {step.step}
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-secondary mb-3">
                {step.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {step.description}
              </p>

              {/* Connector Line */}
              {index < process.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-primary/20 transform -translate-y-1/2 z-0">
                  <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-3 h-3 bg-primary/40 rounded-full"></div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="bg-surface rounded-2xl p-8 md:p-12 mb-12">
          <h3 className="text-3xl font-bold text-secondary text-center mb-12">
            What Our Clients Say
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-lg relative"
              >
                <Quote className="w-8 h-8 text-primary mb-4" />
                <p className="text-gray-700 text-lg mb-6 italic">
                  "{testimonial.quote}"
                </p>
                <div>
                  <p className="font-semibold text-secondary">{testimonial.company}</p>
                  <p className="text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Client Logos */}
        <div className="bg-surface rounded-2xl p-8 md:p-12 mb-12">
          <h3 className="text-3xl font-bold text-secondary text-center mb-8">
            Trusted by Leading Companies
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center">
            {clientLogos.map((client, index) => (
              <div key={index} className="flex items-center justify-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                <img 
                  src={client.logo} 
                  alt={client.name}
                  className="max-h-16 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <button
            onClick={() => setShowClientModal(true)}
            className="bg-primary text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary/90 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Client Inquiry
          </button>
        </div>

        {/* Client Inquiry Modal */}
        <Modal 
          isOpen={showClientModal} 
          onClose={() => setShowClientModal(false)}
          title="Client Inquiry"
          size="lg"
        >
          <TallyEmbed formId="RGGlr4" height={600} />
        </Modal>
      </div>
    </section>
  )
}

export default Clients

