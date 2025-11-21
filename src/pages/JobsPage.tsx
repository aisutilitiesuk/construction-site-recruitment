import { Helmet } from 'react-helmet-async'
import JobsPreview from '../components/sections/JobsPreview'

const JobsPage = () => {
  return (
    <>
      <Helmet>
        <title>Current Opportunities - Construction Site Recruitment</title>
        <meta
          name="description"
          content="Explore current job opportunities in construction, rail, utilities, and infrastructure projects across the UK."
        />
      </Helmet>
      
      <div className="pt-16">
        <JobsPreview />
      </div>
    </>
  )
}

export default JobsPage

