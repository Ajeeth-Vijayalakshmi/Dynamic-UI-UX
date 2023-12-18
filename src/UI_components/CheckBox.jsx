import React,{useState} from "react";
import CheckforMandatory from "./Mandatory";

function CheckBox(props)
{

    
//-------------------------------------Validation function-----------------------------------------------//

const[Message,setMessage]=useState("");
    
function handleValidation(event)
{
  (
      (props.IsMandatory==='true')
            &&
     (event.target.checked===false )
  )?(
      (props.Requiredmsg!="")?setMessage(props.Requiredmsg):setMessage("Please check the box")
    ):setMessage("");
    
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
        <input onBlur={handleValidation} type="checkbox"  placeholder={props.holder} required={props.IsMandatory}/>
        <p style={{color:"red"}}>{Message}</p>
        </div>
    
        </div>
    );
}

export default CheckBox;