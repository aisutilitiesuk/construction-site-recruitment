import { Helmet } from 'react-helmet-async'
import Clients from '../components/sections/Clients'

const ClientsPage = () => {
  return (
    <>
      <Helmet>
        <title>For Clients - Construction Site Recruitment</title>
        <meta
          name="description"
          content="Building your team, securing your future. Expert recruitment services for construction, rail, and utilities projects."
        />
      </Helmet>
      
      <div className="pt-16">
        <Clients />
      </div>
    </>
  )
}

export default ClientsPage


