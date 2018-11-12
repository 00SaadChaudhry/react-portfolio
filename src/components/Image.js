import React from 'react';

function Image(props) {
  return(
    <div className="Image">
      <picture>
        <source media="(min-width: 1200px)" srcSet={props.lgImg}/>
        <source media="(min-width: 600px)" srcSet={props.mdImg}/>
        <img src={props.smImg} alt={props.alt}/>
      </picture>
    </div>
  )
}

export default Image;