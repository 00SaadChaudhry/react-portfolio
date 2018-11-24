import React from 'react';

const techs = [
  [
    'react',
    'react-router-dom',
    'scss'
  ]
]

function Description(props) {
  return(
    <div className="Description">
      <h2>{props.heading}</h2>
      <ul>
        {techs[props.list].map(item => <li key={item}>{item}</li>)}
      </ul>
      <p>{props.children}</p>
    </div>
  )
}

export default Description;