import React from 'react';

//Image component, contains picture element, and various image sizes
import Image from './Image';
import aboutSm from '../images/about_small.jpg';
import aboutMd from '../images/about_medium.jpg';
import aboutLg from '../images/about_large.jpg';

function AboutMe(props) {
  return (
   <div className="AboutMe" id="aboutme">
    {props.header}
    <div>  
      <p>
        While there's a 00 in front of my name, 
        I'm not a secret-agent, just a React Developer (play the theme).
        <br /> 
        <br /> 

        I love the existence of React, it makes building a project that much easier. 
        As long as you understand HTML, CSS, and JavaScript (ES6+ especially), 
        run the NPX command and get started. 
        It's already taken care of the prep work: webpack is configured, 
        the node packages are installed, and a local git repository is created. 
        If you need greater functionality, 
        you're likely to find a package you can import as a React component using JSX.
      </p>
      <Image lgImg={aboutLg} mdImg={aboutMd} smImg={aboutSm} alt="landscape" />
      </div>
   </div>
  )
}

export default AboutMe;