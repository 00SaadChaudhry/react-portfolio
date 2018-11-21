import React from 'react';

import Description from './Description';

//Image component, contains picture element, and various image sizes
import Image from './Image';
import designSm from '../images/design_small.jpg';
import designMd from '../images/design_medium.jpg';
import designLg from '../images/design_large.jpg';


function Development() {
  return (
   <div className="Development" id="development">
   <div>  
     <Image lgImg={designLg} mdImg={designMd} smImg={designSm} alt="html code" />
     <Description heading="Portfolio" list={0}>
      I'm using react packages for smooth-scroll, scroll-to-top-button, and font-awesome-icons. React-router-dom with HashRouter is used for internal hash links. My styling is done with SCSS. 
     </Description>
   </div>
   </div>
  )
}

export default Development;