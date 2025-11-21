import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

const FAQ = () => {
  const [openItems, setOpenItems] = useState<number[]>([])

  const faqs = [
    {
      question: "What is Construction Site Recruitment?",
      answer: "Construction Site Recruitment (CSR) is a specialist recruitment agency focused on critical infrastructure projects in the UK. We are RISQS verified and connect expert talent with leading projects in rail, utilities, construction, and civils sectors."
    },
    {
      question: "What sectors do you recruit for?",
      answer: "We specialise in recruitment for utilities, renewables, rail, construction, civils, and finance sectors within the critical infrastructure industry. Our expertise covers permanent, temporary, and contract positions."
    },
    {
      question: "Are you RISQS verified?",
      answer: "Yes, Construction Site Recruitment is fully RISQS verified and approved, ensuring compliance with railway industry safety and quality standards. This verification allows us to supply qualified personnel to rail infrastructure projects."
    },
    {
      question: "What types of roles do you recruit for?",
      answer: "We recruit for a wide range of positions including PTS operatives, COSS operatives, project managers, site managers, engineers, joiners, coordinators, and account managers across all levels from trainee to senior management."
    },
    {
      question: "How quickly can you fill positions?",
      answer: "We aim to respond to all client inquiries within 2 hours during business hours (Monday-Friday, 8:00am-5:30pm). Our extensive candidate database and industry connections enable rapid placement for urgent requirements."
    },
    {
      question: "Do you cover the whole UK?",
      answer: "Yes, Construction Site Recruitment provides nationwide coverage across the United Kingdom. We work with clients and candidates from Scotland to the South West, with particular strength in major infrastructure hubs."
    },
    {
      question: "What is PTS and COSS?",
      answer: "PTS (Personal Track Safety) is a qualification required to work on or near railway lines. COSS (Controller of Site Safety) is a higher-level qualification for managing safety on railway worksites. Both are essential for rail infrastructure work."
    },
    {
      question: "How do I register my CV?",
      answer: "You can register your CV by clicking the 'Register Your CV' button on our website, calling us on 0292 002 8365, or emailing jobs@constructionsiterecruitment.co.uk. We'll review your experience and match you with suitable opportunities."
    }
  ]

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    )
  }

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-6">
            Frequently Asked <span className="text-primary">Questions</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Common questions about Construction Site Recruitment and our specialist infrastructure recruitment services.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-200 rounded-lg">
              <button
                onClick={() => toggleItem(index)}
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
              >
                <h3 className="text-lg font-semibold text-secondary pr-4">
                  {faq.question}
                </h3>
                {openItems.includes(index) ? (
                  <ChevronUp className="w-5 h-5 text-primary flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-primary flex-shrink-0" />
                )}
              </button>
              
              {openItems.includes(index) && (
                <div className="px-6 pb-4">
                  <p className="text-gray-700 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="text-center mt-12 p-8 bg-surface rounded-xl">
          <h3 className="text-2xl font-bold text-secondary mb-4">
            Still Have Questions?
          </h3>
          <p className="text-gray-600 mb-6">
            Our specialist recruitment team is here to help with any queries about infrastructure recruitment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:02920028365"
              className="bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
            >
              Call: 0292 002 8365
            </a>
            <a
              href="mailto:jobs@constructionsiterecruitment.co.uk"
              className="bg-white border-2 border-primary text-primary px-6 py-3 rounded-lg font-semibold hover:bg-primary hover:text-white transition-colors"
            >
              Email Us
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FAQ
