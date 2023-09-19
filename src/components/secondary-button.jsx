import React from "react";

function SecondaryButton(props){

  return(
    <a className="text-secondary px-5 py-2" href={props.href}> {props.name} </a>
  );

}

export default SecondaryButton;