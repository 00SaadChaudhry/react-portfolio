//node packages
import React from 'react';
import {CircleArrow as ScrollUpButton} from "react-scroll-up-button"; 

function TopBtn() {

  const invisible = 'rgba(255, 255, 255, 0)';
  const color = 'gray'

  return (
    <ScrollUpButton 
    
      //inline style because default style not being overridden
      style={
        {
          backgroundColor: invisible,
          fill: color,
          borderColor: color,
          zIndex: 1
        }
      }
    />
  )
}

export default TopBtn;