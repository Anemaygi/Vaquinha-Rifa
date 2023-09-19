import React from 'react';

function PrimaryButton(props){

  return(
    <a className="bg-secondary text-primary px-5 py-2 rounded-full" href={props.href}>{props.name}</a>
  );

}

export default PrimaryButton;