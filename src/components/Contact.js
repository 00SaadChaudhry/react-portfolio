import React from 'react';

function Contact(props) {
  return (
   <div className="Contact" id="contact">
    {props.header}
    <div>  
      <dl>
        <dt>Name: </dt>
        <dd>Saad Chaudhry</dd>
        <dt>Email:</dt>
        <dd>00saadchaudhry@gmail.com</dd>
        <dt>Location:</dt>
        <dd>Jersey City, NJ</dd>
      </dl>
    </div>
   </div>
  )
}

export default Contact;