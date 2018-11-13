import React from 'react';

//Image component, contains picture element, and various image sizes
import Image from './Image';
import homeSm from '../images/home_small.jpg';
import homeMd from '../images/home_medium.jpg';
import homeLg from '../images/home_large.jpg';

function Home() {
  return (
   <div className="Home">
    <Image lgImg={homeLg} mdImg={homeMd} smImg={homeSm} alt="workbench" />
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus gravida, 
      ex ac fringilla pellentesque, orci dui pharetra tellus, 
      ac blandit ipsum felis ac nulla.
    </p>
   </div>
  )
}

export default Home;