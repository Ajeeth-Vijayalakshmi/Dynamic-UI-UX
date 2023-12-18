import React, { useState } from "react";
import CheckforMandatory from "./Mandatory";


function Text(props)
{

//-------------------------------------Validation function-----------------------------------------------//

    const[Message,setMessage]=useState("");
    
    function handleValidation(event)
    {
      if(props.IsMandatory==='true' && event.target.value==="")
      {
          (props.Requiredmsg!="")?setMessage(props.Requiredmsg):setMessage("Please fill out this field");
      }
      else{
          setMessage("");
      }
    }


//-------------------------------------------------------------------------------------------------------//

    return(
    <div className="row">

    <div className="col-lg-5">
    <label for="Labelname">
    {props.label}
    <CheckforMandatory 
    mandatory={props.IsMandatory}
    />
    </label>
    </div>

    <div className="col-lg-5">
    <input onBlur={handleValidation} type={props.type}  placeholder={props.holder} required={props.IsMandatory} />
    <p style={{color:"red"}}>{Message}</p>
    </div>

    </div>

    );
}


export default Text;