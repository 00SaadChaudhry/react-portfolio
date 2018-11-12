import React from 'react';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

function Skill(props) {
  return(
    <div className="Skill">
      <h1>{props.heading}</h1>
      <FontAwesomeIcon icon={props.icon} />
      <p>{props.text}</p>
    </div>
  )
}

export default Skill;