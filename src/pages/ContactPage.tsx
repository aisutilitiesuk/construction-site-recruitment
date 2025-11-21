import { Helmet } from 'react-helmet-async'
import Contact from '../components/sections/Contact'

const ContactPage = () => {
  return (
    <>
      <Helmet>
        <title>Contact Us - Construction Site Recruitment</title>
        <meta
          name="description"
          content="Get in touch with Construction Site Recruitment. Phone: 0292 002 8365 | Email: jobs@constructionsiterecruitment.co.uk"
        />
      </Helmet>
      
      <div className="pt-16">
        <Contact />
      </div>
    </>
  )
}

export default ContactPage

