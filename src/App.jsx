import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'
import Header from './componant/header'
import Footer from './componant/footer'
import Banner from './screens/banner/banner'
import PracticeAreas from './screens/sevices/parctices/practices'
import ContactForm from './screens/contact/form/form'
import Team from './screens/contact/contact'
import Location from './screens/location/location'

const App = () => {

  return (
    <>
      <Header />
      <Banner />
      <PracticeAreas />
      <ContactForm />
      <Location/>
      <Team />
      <Footer />
    </>
  )
}

export default App
