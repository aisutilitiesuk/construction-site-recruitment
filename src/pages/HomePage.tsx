import { Helmet } from 'react-helmet-async'
import Hero from '../components/sections/Hero'
import About from '../components/sections/About'
import Sectors from '../components/sections/Sectors'
import Clients from '../components/sections/Clients'
import Candidates from '../components/sections/Candidates'
import JobsPreview from '../components/sections/JobsPreview'
import Team from '../components/sections/Team'
import FAQ from '../components/sections/FAQ'
import Contact from '../components/sections/Contact'

const HomePage = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://constructionsiterecruitment.co.uk/#organization",
        "name": "Construction Site Recruitment",
        "alternateName": "CSR",
        "url": "https://constructionsiterecruitment.co.uk",
        "logo": {
          "@type": "ImageObject",
          "url": "https://constructionsiterecruitment.co.uk/src/assets/Logo/csr-logo.png"
        },
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+44-292-002-8365",
          "contactType": "customer service",
          "areaServed": "GB",
          "availableLanguage": "English"
        },
        "sameAs": [
          "https://www.linkedin.com/company/construction-site-recruitment/",
          "https://www.facebook.com/people/Construction-Site-Recruitment/61578921133056/"
        ]
      },
      {
        "@type": "WebSite",
        "@id": "https://constructionsiterecruitment.co.uk/#website",
        "url": "https://constructionsiterecruitment.co.uk",
        "name": "Construction Site Recruitment",
        "description": "UK's leading specialist recruitment agency for critical infrastructure projects",
        "publisher": {
          "@id": "https://constructionsiterecruitment.co.uk/#organization"
        }
      },
      {
        "@type": "WebPage",
        "@id": "https://constructionsiterecruitment.co.uk/#webpage",
        "url": "https://constructionsiterecruitment.co.uk",
        "name": "Construction Site Recruitment | UK's Leading Infrastructure Recruitment Agency",
        "isPartOf": {
          "@id": "https://constructionsiterecruitment.co.uk/#website"
        },
        "about": {
          "@id": "https://constructionsiterecruitment.co.uk/#organization"
        },
        "description": "RISQS verified recruitment specialists connecting expert talent with UK's leading infrastructure projects in rail, utilities, construction and civils."
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://constructionsiterecruitment.co.uk/#localbusiness",
        "name": "Construction Site Recruitment",
        "image": "https://constructionsiterecruitment.co.uk/src/assets/Logo/csr-logo.png",
        "telephone": "+44-292-002-8365",
        "email": "jobs@constructionsiterecruitment.co.uk",
        "url": "https://constructionsiterecruitment.co.uk",
        "areaServed": {
          "@type": "Country",
          "name": "United Kingdom"
        },
        "serviceArea": {
          "@type": "Country",
          "name": "United Kingdom"
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is Construction Site Recruitment?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Construction Site Recruitment (CSR) is a specialist recruitment agency focused on critical infrastructure projects in the UK. We are RISQS verified and connect expert talent with leading projects in rail, utilities, construction, and civils sectors."
            }
          },
          {
            "@type": "Question", 
            "name": "What sectors do you recruit for?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We specialise in recruitment for utilities, renewables, rail, construction, civils, and finance sectors within the critical infrastructure industry."
            }
          },
          {
            "@type": "Question",
            "name": "Are you RISQS verified?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, Construction Site Recruitment is fully RISQS verified and approved, ensuring compliance with railway industry safety and quality standards."
            }
          }
        ]
      }
    ]
  }

  return (
    <>
      <Helmet>
        <title>Construction Site Recruitment | UK's Leading Infrastructure Recruitment Agency</title>
        <meta
          name="description"
          content="Construction Site Recruitment (CSR) is the UK's specialist recruitment agency for critical infrastructure. RISQS verified. Expert placement in rail, utilities, construction & civils. Call 0292 002 8365."
        />
        <script type="application/ld+json">
          {JSON.stringify(schemaData)}
        </script>
      </Helmet>
      
      {/* Entity Definition Block */}
      <div className="sr-only">
        <h1>Construction Site Recruitment - UK's Leading Infrastructure Recruitment Agency</h1>
        <p>Construction Site Recruitment (CSR) is a RISQS verified specialist recruitment agency that connects expert talent with the UK's leading critical infrastructure projects across rail, utilities, construction, and civils sectors.</p>
      </div>
      
      <Hero />
      <About />
      <Sectors />
      <Clients />
      <Candidates />
      <JobsPreview />
      <Team />
      <FAQ />
      <Contact />
    </>
  )
}

export default HomePage

