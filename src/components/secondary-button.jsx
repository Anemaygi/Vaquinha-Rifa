import React from "react";

function SecondaryButton(props){

  return(
    <a className="text-secondary px-5 py-2 hover:scale-110 transition-all " href={props.href}> {props.name} </a>
  );

}

export default SecondaryButton;