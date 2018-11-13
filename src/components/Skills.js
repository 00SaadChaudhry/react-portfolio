import React from 'react';

import Skill from './Skill';

//FontAwesome icons
import {library} from '@fortawesome/fontawesome-svg-core';
import {fab} from '@fortawesome/free-brands-svg-icons';
library.add(fab);

const skillsArr = [
  {
    heading: 'ES6',
    icon: 'js',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  },
  {
    heading: 'React',
    icon: 'react',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  },
  {
    heading: 'Sass',
    icon: 'sass',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  },
];

function Skills() {
  const showSkills = skillsArr.map(item => {
    return <Skill heading={item.heading} icon={['fab', item.icon]} 
      text={item.text} key={item.heading} />
  })

  return (
   <div className="Skills">
    {showSkills}
   </div>
  )
}

export default Skills;