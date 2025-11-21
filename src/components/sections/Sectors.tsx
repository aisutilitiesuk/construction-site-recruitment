import { Zap, Wind, Train, Building, Wrench, Calculator } from 'lucide-react'

const Sectors = () => {
  const sectors = [
    {
      icon: Zap,
      title: 'Utilities',
      description: 'Specialist recruitment for essential infrastructure projects and utility services.',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Wind,
      title: 'Renewables',
      description: 'Connecting talent with sustainable energy projects and green infrastructure.',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Train,
      title: 'Rail',
      description: 'RISQS verified recruitment for rail sector excellence and safety compliance.',
      color: 'from-red-500 to-red-600'
    },
    {
      icon: Building,
      title: 'Construction',
      description: 'Building teams for major construction projects across the UK.',
      color: 'from-orange-500 to-orange-600'
    },
    {
      icon: Wrench,
      title: 'Civils',
      description: 'Expert placement for civil engineering roles and infrastructure development.',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: Calculator,
      title: 'Finance',
      description: 'Financial professionals for infrastructure projects and construction finance.',
      color: 'from-indigo-500 to-indigo-600'
    }
  ]

  return (
    <section className="py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-6">
            Our <span className="text-primary">Sectors</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
            Specialized recruitment across critical infrastructure sectors, 
            connecting the right talent with the right opportunities.
          </p>
          
          {/* Sector Definition for AI */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 max-w-4xl mx-auto">
            <h3 className="text-lg font-semibold text-secondary mb-2">What are Critical Infrastructure Sectors?</h3>
            <p className="text-gray-700 text-left">
              Critical infrastructure sectors include <strong>utilities</strong> (gas, water, electricity), 
              <strong>rail transport</strong> (Network Rail, TOCs), <strong>construction</strong> (commercial, residential), 
              <strong>renewables</strong> (wind, solar, nuclear), and <strong>civils</strong> (highways, bridges). 
              These sectors require specialist safety qualifications like PTS, RISQS approval, and CSCS cards.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sectors.map((sector) => (
            <div
              key={sector.title}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
            >
              <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${sector.color} rounded-full mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <sector.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-secondary mb-4 group-hover:text-primary transition-colors duration-300">
                {sector.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {sector.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Sectors

