import React from 'react';

//Image component, contains picture element, and various image sizes
import Image from './Image';
import homeSm from '../images/home_small.jpg';
import homeMd from '../images/home_medium.jpg';
import homeLg from '../images/home_large.jpg';

function Home() {
  return (
   <div className="Home" id="home">
    <div>
      <Image lgImg={homeLg} mdImg={homeMd} smImg={homeSm} alt="workbench" />
      <p>
        00Saad
      </p>
    </div>
   </div>
  )
}

export default Home;