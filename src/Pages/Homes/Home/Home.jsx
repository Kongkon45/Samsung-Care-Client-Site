import React from 'react'
import Banner from '../Banner/Banner'
import About from '../About/About'
import Award from '../Award/Award'
import Convenience from '../Convenience/Convenience'
import Quality from '../Quality/Quality'
import Competitive from '../Competitive/Competitive'
import SamsungAccount from '../SamsungAccount/SamsungAccount'
import PremiumSupport from '../PremiumSupport/PremiumSupport'
import Service from '../Service/Service'
import ServicesCar from '../ServicesCar/ServicesCar'
import Mail_service from '../Mail_service/Mail_service'
import PartneringLocations from '../PartneringLocations/PartneringLocations'
import SelfRepair from '../SelfRepair/SelfRepair'
import Greener_Future from '../Greener_Future/Greener_Future'
import Contact_Banner from '../Contact_Banner/Contact_Banner'
import SamsungCare from '../SamsungCare/SamsungCare'

const Home = () => {
  return (
    <div>
      <Banner/>
      <About/>
      <Award/>
      <Convenience/>
      <Quality/>
      <Competitive/>
      <SamsungAccount/>
      <PremiumSupport/>
      <Service/>
      <ServicesCar/>
      <Mail_service/>
      <PartneringLocations/>
      <SelfRepair/>
      <Greener_Future/>
      <SamsungCare/>
      <Contact_Banner/>
      
    </div>
  )
}

export default Home