import react from 'react'

import Footer from './Footer';
import Navbar from './Navbar';
import HeroSection from './HeroSection';
import AppSection from './AppSection';
import CardSection from './CardSection';

const App = () => {
  return(
    <div>
      <Navbar/>
      <AppSection/>
      <CardSection/>
      <HeroSection/>
      <Footer/>
    </div>
  )
}

export default App