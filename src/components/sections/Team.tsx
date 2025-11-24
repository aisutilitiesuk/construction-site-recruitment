// Removed framer-motion to fix navigation issues
import craigPhoto from '../../assets/Team/Craig-Davies.jpg'
import danielPhoto from '../../assets/Team/daniel-forth-rumley.jpg'
import soniePhoto from '../../assets/Team/sonie.png'

const Team = () => {
  const team = [
    {
      name: 'Craig Davies',
      role: 'Director',
      bio: 'Fully Accredited ICP specialist leading CSR\'s infrastructure connections division. Expert in New Connections, Disconnections, Diversions, and Civil Engineering projects across the UK\'s critical infrastructure networks.',
      image: craigPhoto,
    },
    {
      name: 'Daniel Forth-Rumley',
      role: 'Recruitment & Sales Consultant',
      bio: 'Specialist in rail and utilities recruitment with a focus on technical and operational roles.',
      image: danielPhoto,
    },
    {
      name: 'Sonnie Wardell',
      role: 'Recruitment & Sales Consultant',
      bio: 'Expert in construction and civil engineering recruitment with strong industry connections.',
      image: soniePhoto,
    }
  ]

  return (
    <section className="py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-6"
          >
            Meet Our <span className="text-primary">Team</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Our experienced team of recruitment specialists are dedicated to connecting 
            the right talent with the right opportunities in critical infrastructure.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member) => (
            <div
              key={member.name}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
            >
              {/* Profile Image */}
              <div className="h-64 overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-secondary mb-2 group-hover:text-primary transition-colors duration-300">
                  {member.name}
                </h3>
                
                <p className="text-primary font-semibold mb-3">
                  {member.role}
                </p>
                
                <p className="text-gray-600 text-sm leading-relaxed">
                  {member.bio}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg">
            <h3 className="text-3xl font-bold text-secondary mb-4">
              Ready to Work With Us?
            </h3>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Whether you're looking for your next career opportunity or need to build 
              your team, our experienced consultants are here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:02920028365"
                className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors duration-300"
              >
                Call: 0292 002 8365
              </a>
              <a
                href="mailto:jobs@constructionsiterecruitment.co.uk"
                className="bg-transparent border-2 border-primary text-primary px-8 py-3 rounded-lg font-semibold hover:bg-primary hover:text-white transition-all duration-300"
              >
                Email Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Team

