import React from 'react';

import Skill from './Skill';

import {library} from '@fortawesome/fontawesome-svg-core';
import {fab} from '@fortawesome/free-brands-svg-icons';
library.add(fab);

function Skills() {
  return (
   <div className="Skills">
    <Skill heading='ES6' icon={['fab', 'js']} 
      text='Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    />
    <Skill heading='React' icon={['fab', 'react']} 
      text='Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    />
    <Skill heading='Sass' icon={['fab', 'sass']} 
      text='Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    />
   </div>
  )
}

export default Skills;