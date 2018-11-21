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
      
     </Description>
   </div>
   </div>
  )
}

export default Development;