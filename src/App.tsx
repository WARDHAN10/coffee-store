import React from 'react';
import Navbar from './components/navbar/navbar';
import HideawayCoffee from './components/hero/HideawayCoffee';
import Carousel from './components/carousal/carousal';
import AboutUs from './components/aboutUs/aboutUS';
import Footer from './components/footer/footer';

const App: React.FC = () => {
  const links = [
    { text: 'About Us', url: '/about' },
    { text: 'Find Us', url: '/find' },
  ];

  return (
    <div>
      <Navbar links={links} />
      <HideawayCoffee onContactUsClick={()=>{return }}></HideawayCoffee>
      <Carousel provider="google_maps" username="your_location_name" apiKey="your_api_key" />
      <AboutUs></AboutUs>
      <Footer />
      </div>
  );
};

export default App;