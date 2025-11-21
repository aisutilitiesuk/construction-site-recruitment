// Removed framer-motion to fix navigation issues
import { Building2, UserCheck, Zap, Upload } from 'lucide-react'
import { useState } from 'react'
import Modal from '../ui/Modal'
import TallyEmbed from '../ui/TallyEmbed'

const Candidates = () => {
  const [showCVModal, setShowCVModal] = useState(false)

  const benefits = [
    {
      icon: Building2,
      title: 'Access to Top Employers',
      description: 'Connect with leading infrastructure companies and major project contractors across the UK.'
    },
    {
      icon: UserCheck,
      title: 'Personalised Support',
      description: 'Dedicated consultants who understand your sector and career aspirations.'
    },
    {
      icon: Zap,
      title: 'Quick Placements',
      description: 'Efficient process that gets you in front of the right opportunities faster.'
    }
  ]

  return (
    <section className="py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-6">
            Your Next Opportunity{' '}
            <span className="text-primary">Awaits</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Find your ideal role with a specialist recruiter who understands your sector.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit) => (
            <div
              key={benefit.title} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
                <benefit.icon className="w-8 h-8 text-primary" />
              </div>
              
              <h3 className="text-xl font-bold text-secondary mb-4">
                {benefit.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* Career Sectors */}
        <div className="bg-white rounded-2xl p-8 md:p-12 mb-12"
        >
          <h3 className="text-3xl font-bold text-secondary text-center mb-8">
            Career Opportunities Across All Sectors
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 text-center">
            {['Utilities', 'Renewables', 'Rail', 'Construction', 'Civils', 'Finance'].map((sector) => (
              <div
                key={sector} className="bg-primary/10 rounded-lg p-4 hover:bg-primary/20 transition-colors duration-300"
              >
                <span className="text-primary font-semibold">{sector}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="text-center mb-12"
        >
          <h3 className="text-3xl font-bold text-secondary mb-6">
            Why Work With Us?
          </h3>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-700 mb-6">
              We're not just another recruitment agency. We're specialists who understand 
              the critical infrastructure sector inside and out. Our team has the industry 
              knowledge and connections to match you with opportunities that align with 
              your skills, experience, and career goals.
            </p>
            <p className="text-lg text-gray-700">
              From entry-level positions to senior management roles, we work with you 
              every step of the way to ensure your next career move is the right one.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <button
            onClick={() => setShowCVModal(true)}
            className="bg-primary text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary/90 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl inline-flex items-center gap-2"
          >
            <Upload className="w-5 h-5" />
            Register Your CV
          </button>
        </div>

        {/* CV Registration Modal */}
        <Modal 
          isOpen={showCVModal} 
          onClose={() => setShowCVModal(false)}
          title="Register Your CV"
          size="lg"
        >
          <TallyEmbed formId="ODDyEa" height={600} />
        </Modal>
      </div>
    </section>
  )
}

export default Candidates

