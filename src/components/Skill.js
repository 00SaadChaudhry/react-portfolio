import React from 'react';

//FontAwesome icons
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

function Skill(props) {
  return(
    <div className="Skill"  id={props.id} >
      <h2>{props.heading}</h2>
      <FontAwesomeIcon icon={props.icon} className="icon"/>
      <p>{props.text}</p>
    </div>
  )
}

export default Skill;