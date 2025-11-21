import { CheckCircle, Shield, Users, Clock } from 'lucide-react'
import aboutImage from '../../assets/About Section/about-construction-site-recruitment.jpeg'
import risqsBadge from '../../assets/Certified/risqs-verified.png'

const About = () => {

  const features = [
    {
      icon: Users,
      title: 'Permanent Placement',
      description: 'Long-term impact with the right talent for your team'
    },
    {
      icon: Clock,
      title: 'Flexible Temporary Hires',
      description: 'Cover peaks and urgent requirements efficiently'
    },
    {
      icon: CheckCircle,
      title: 'Labour-Only Teams',
      description: 'Keep your sites moving with skilled workforce'
    },
    {
      icon: Shield,
      title: 'RISQS Verified',
      description: 'Fully approved and compliant recruitment services'
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Content - Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Column - Text Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-6">
              Building Strong Teams,{' '}
              <span className="text-primary">Reliably and Quickly</span>
            </h2>
            
            <div className="bg-blue-50 border-l-4 border-primary p-4 mb-6">
              <p className="text-lg font-semibold text-secondary">
                What is Construction Site Recruitment?
              </p>
              <p className="text-gray-700">
                Construction Site Recruitment (CSR) is a specialist recruitment agency focused exclusively on critical infrastructure projects across the UK. We are RISQS verified and connect skilled professionals with leading employers in rail, utilities, construction, and civils sectors.
              </p>
            </div>
            
            <h3 className="text-xl font-semibold text-secondary mb-4">Our Recruitment Services</h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              We offer <strong>permanent placement</strong> for long-term impact, <strong>flexible temporary hires</strong> 
              to cover peaks, and <strong>labour-only teams</strong> to keep sites moving. We are proud to 
              be fully <strong>RISQS verified and approved</strong> for railway industry compliance.
            </p>
            
            <div className="bg-gray-50 rounded-lg p-4 mb-6">
              <h4 className="font-semibold text-secondary mb-2">Key Facts:</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• <strong>RISQS Verified:</strong> Fully approved for rail sector recruitment</li>
                <li>• <strong>UK Coverage:</strong> Nationwide recruitment services</li>
                <li>• <strong>Specialisation:</strong> Critical infrastructure projects only</li>
                <li>• <strong>Response Time:</strong> 2 hours during business hours</li>
              </ul>
            </div>

            {/* RISQS Certification */}
            <div className="flex items-center">
              <div className="bg-surface rounded-xl p-4 shadow-sm">
                <img 
                  src={risqsBadge} 
                  alt="RISQS Verified" 
                  className="h-16 w-auto"
                />
              </div>
              <div className="ml-4">
                <p className="text-sm font-semibold text-secondary">RISQS Verified</p>
                <p className="text-xs text-gray-600">Fully approved and compliant</p>
              </div>
            </div>
          </div>

          {/* Right Column - Portrait Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="rounded-2xl overflow-hidden shadow-lg max-w-md">
              <img 
                src={aboutImage} 
                alt="Construction Site Recruitment Team" 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow duration-300"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                <feature.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-secondary mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-surface rounded-2xl p-8 md:p-12 text-center">
          <h3 className="text-3xl font-bold text-secondary mb-4">
            Transparent, Efficient, Human
          </h3>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            We believe recruitment should be transparent, efficient, and human. 
            Our approach ensures the right fit for both clients and candidates, 
            building lasting partnerships in the critical infrastructure sector.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About

