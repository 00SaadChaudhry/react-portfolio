import React from 'react';

//individual skill component
import Skill from './Skill';

//FontAwesome icons
import {library} from '@fortawesome/fontawesome-svg-core';
import {fab} from '@fortawesome/free-brands-svg-icons';
library.add(fab);

const skillsArr = [
  {
    heading: 'ES6',
    icon: 'js',
    text: "ES6 has features to enhance JavaScript, and I like to use what's necessary. If all you use is const, you're already making a great stride because having an immutable variable is wonderful. On top of that, there are fat arrow functions, which have a shorter syntax and alter this binding. But don't forget the Class keyword, which you'll use in React."
  },
  {
    heading: 'React',
    icon: 'react',
    text: "If all you need are stateless components, you don't need to worry about creating a Class. You'll still be able to use props  to transfer data between components. But if stateful components are part of your project, you'll become well-acquainted with Class extending React.Component to create your default state while setState deals with the changes."
  },
  {
    heading: 'Sass',
    icon: 'sass',
    text: "Speaking of changes, the newest version of React allows SASS support right out of the box (though you might need to install node-sass). No more tinkering around with node-sass-chokidar or ejecting and playing with Webpack, just create your scss files and enjoy all the benefits of this css preprocessor (partials, imports, nesting, variables, mixins)."
  },
];

function Skills(props) {
  const showSkills = skillsArr.map(item => {
    return <Skill heading={item.heading} icon={['fab', item.icon]} 
      text={item.text} key={item.icon} id={item.icon} />
  })

  return (
   <div className="Skills" id="skills">
    {props.header}
    <div>  
      {showSkills}
    </div>
   </div>
  )
}

export default Skills;