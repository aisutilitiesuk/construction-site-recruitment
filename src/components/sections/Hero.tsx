import { Link } from 'react-router-dom'
import heroBackground from '../../assets/Hero Section/construction-site-data.jpeg'

const Hero = () => {
  return (
    <section className="relative text-white overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={heroBackground} 
          alt="Construction Site Background" 
          className="w-full h-full object-cover" 
          {...({ fetchPriority: "high" } as any)}
          loading="eager"
        />
      </div>
      
      {/* Modern Clean Overlay */}
      <div className="absolute inset-0 bg-black/40 z-10"></div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            Construction Site{' '}
            <span className="text-primary">Recruitment</span>
          </h1>
          
          <div className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            <p className="mb-4">
              <strong>UK's Leading Specialist Recruitment Agency</strong> for Critical Infrastructure
            </p>
            <p>
              RISQS verified recruitment specialists connecting expert talent with the UK's leading projects in{' '}
              <span className="text-primary font-semibold">Rail</span>,{' '}
              <span className="text-primary font-semibold">Utilities</span>,{' '}
              <span className="text-primary font-semibold">Construction</span>, and{' '}
              <span className="text-primary font-semibold">Civils</span>.
            </p>
          </div>
          

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/clients"
              className="bg-primary text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary/90 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              I'm a Client
            </Link>
            <Link
              to="/candidates"
              className="bg-primary text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary/90 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              I'm a Candidate
            </Link>
          </div>
        </div>
      </div>

      {/* Modern Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white/90 to-transparent z-10"></div>
    </section>
  )
}

export default Hero

