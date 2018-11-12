import React from 'react';

import Image from './Image';
import Description from './Description';

import designSm from '../images/design_small.jpg';
import designMd from '../images/design_medium.jpg';
import designLg from '../images/design_large.jpg';

function Development() {
  return (
   <div className="Development">
    <Image lgImg={designLg} mdImg={designMd} smImg={designSm} alt="html code" />
    <Description heading="Portfolio" 
      text='Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
     />
   </div>
  )
}

export default Development;