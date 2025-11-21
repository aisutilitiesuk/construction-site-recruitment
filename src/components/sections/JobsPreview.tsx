// Removed framer-motion to fix navigation issues
import { MapPin, Clock, Briefcase, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import Modal from '../ui/Modal'
import TallyEmbed from '../ui/TallyEmbed'

const JobsPreview = () => {
  const [showCVModal, setShowCVModal] = useState(false)

  const jobs = [
    {
      title: 'Utilities Coordinator',
      location: 'Remote',
      type: 'Permanent',
      sector: 'Utilities',
      description: 'Lead utility coordination projects remotely across major infrastructure developments. Manage stakeholder relationships and ensure project delivery.',
      salary: 'Competitive'
    },
    {
      title: 'PTS COSS (Controller of Site Safety) Operatives',
      location: 'Doncaster / Huddersfield / Leeds',
      type: 'Contract',
      sector: 'Rail',
      description: 'RISQS approved PTS COSS operatives for rail infrastructure projects. Ensure site safety compliance and manage operational activities.',
      salary: 'Competitive'
    },
    {
      title: 'PTS Operatives',
      location: 'South Wales',
      type: 'Contract',
      sector: 'Rail',
      description: 'Experienced PTS operatives for rail maintenance and construction work. Work on critical rail infrastructure projects.',
      salary: 'Competitive'
    },
    {
      title: 'Multi Utilities Project Manager',
      location: 'Remote with travel',
      type: 'Permanent',
      sector: 'Utilities',
      description: 'Manage multiple utility projects across various locations. Coordinate teams and ensure successful project delivery.',
      salary: 'Competitive'
    },
    {
      title: 'ICP Electrical Project Manager',
      location: 'London (Hybrid)',
      type: 'Permanent',
      sector: 'Utilities',
      description: 'Lead electrical projects for Independent Connection Provider. Hybrid working with London base.',
      salary: 'Competitive'
    },
    {
      title: 'Utilities Account Manager',
      location: 'Remote',
      type: 'Permanent',
      sector: 'Utilities',
      description: 'Manage key utility client accounts remotely. Build relationships and drive business growth.',
      salary: 'Competitive'
    },
    {
      title: 'SSE Approved Trainee Joiner',
      location: 'Midlands / Kettering',
      type: 'Permanent',
      sector: 'Utilities',
      description: 'SSE approved trainee position for aspiring joiners. Comprehensive training program in the Midlands area.',
      salary: 'Competitive'
    }
  ]

  const getSectorColor = (sector: string) => {
    const colors = {
      'Utilities': 'bg-blue-100 text-blue-800',
      'Rail': 'bg-red-100 text-red-800',
      'Construction': 'bg-orange-100 text-orange-800',
      'Civils': 'bg-purple-100 text-purple-800',
      'Renewables': 'bg-green-100 text-green-800',
      'Finance': 'bg-indigo-100 text-indigo-800'
    }
    return colors[sector as keyof typeof colors] || 'bg-gray-100 text-gray-800'
  }

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-6"
          >
            Current <span className="text-primary">Opportunities</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Explore our latest job opportunities across critical infrastructure sectors. 
            New positions added regularly.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {jobs.map((job, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 group"
            >
              <div className="flex justify-between items-start mb-4">
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${getSectorColor(job.sector)}`}>
                  {job.sector}
                </span>
                <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded">
                  {job.type}
                </span>
              </div>

              <h3 className="text-xl font-bold text-secondary mb-3 group-hover:text-primary transition-colors duration-300">
                {job.title}
              </h3>

              <div className="space-y-2 mb-4">
                <div className="flex items-center text-gray-600">
                  <MapPin className="w-4 h-4 mr-2 text-primary" />
                  <span className="text-sm">{job.location}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Briefcase className="w-4 h-4 mr-2 text-primary" />
                  <span className="text-sm">{job.salary}</span>
                </div>
              </div>

              <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                {job.description}
              </p>

              <button 
                onClick={() => setShowCVModal(true)}
                className="w-full bg-primary/10 text-primary py-2 px-4 rounded-lg font-medium hover:bg-primary hover:text-white transition-all duration-300 flex items-center justify-center gap-2 group-hover:bg-primary group-hover:text-white"
              >
                Apply Now
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            to="/jobs"
            className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary/90 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            View All Jobs
            <ArrowRight className="w-5 h-5" />
          </Link>
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

export default JobsPreview

