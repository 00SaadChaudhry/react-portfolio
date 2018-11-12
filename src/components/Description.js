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
      <h1>{props.heading}</h1>
      <ul>
        {
         techs[0].map(item => <li key={item}>{item}</li>)
        }
      </ul>
      <p>{props.text}</p>
    </div>
  )
}

export default Description;