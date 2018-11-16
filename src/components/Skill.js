import React from 'react';

//FontAwesome icons
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

function Skill(props) {
  return(
    <div className="Skill">
      <h1>{props.heading}</h1>
      <FontAwesomeIcon icon={props.icon} className="icon" id={props.id} />
      <p>{props.text}</p>
    </div>
  )
}

export default Skill;