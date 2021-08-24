import React from "react";


function Subheading(props)
{
  return(
    <div className="row">
    
    <div className="col-lg-5">
    <h3 className={props.style}>{props.label}</h3>
    </div>
    </div>
  );
}

export default Subheading; 