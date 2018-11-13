import React from 'react';

//Image component, contains picture element, and various image sizes
import Image from './Image';
import aboutSm from '../images/about_small.jpg';
import aboutMd from '../images/about_medium.jpg';
import aboutLg from '../images/about_large.jpg';

function AboutMe() {
  return (
   <div className="AboutMe">
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
      Vivamus gravida, ex ac fringilla pellentesque, orci dui pharetra tellus, 
      ac blandit ipsum felis ac nulla. Aenean scelerisque varius est. 
      Etiam cursus dapibus convallis. Vivamus a augue dui. 
      Maecenas condimentum interdum sem ac consectetur. Vestibulum dolor nisl,
      consequat et sollicitudin sit amet, pretium in eros. 
      Fusce non urna et ante dictum egestas. Mauris vulputate placerat leo,
       id finibus ligula tincidunt ut.
    </p>
    <Image lgImg={aboutLg} mdImg={aboutMd} smImg={aboutSm} alt="landscape" />
   </div>
  )
}

export default AboutMe;