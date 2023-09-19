import React from 'react';

function PrimaryButton(props){

  return(
    <a className="bg-secondary text-primary px-5 py-2 rounded-full hover:shadow-number hover:-rotate-2 transition-all" href={props.href}>{props.name}</a>
  );

}

export default PrimaryButton;