import { Helmet } from 'react-helmet-async'
import Candidates from '../components/sections/Candidates'

const CandidatesPage = () => {
  return (
    <>
      <Helmet>
        <title>For Candidates - Construction Site Recruitment</title>
        <meta
          name="description"
          content="Your next opportunity awaits. Find your ideal role with a specialist recruiter who understands your sector."
        />
      </Helmet>
      
      <div className="pt-16">
        <Candidates />
      </div>
    </>
  )
}

export default CandidatesPage

