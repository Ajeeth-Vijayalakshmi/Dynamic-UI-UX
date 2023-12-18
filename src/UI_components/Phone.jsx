import React,{useState} from "react";
import CheckforMandatory from "./Mandatory";


function Phone(props)
{
    

//-------------------------------------Validation function-----------------------------------------------//

const[Message,setMessage]=useState("");
    
function handleValidation(event)
{
  if(props.IsMandatory==='true')
  {
      
       (event.target.value==="" )&&((props.Requiredmsg!=="")?setMessage(props.Requiredmsg):setMessage("Please fill out this field"));
       (event.target.value.length < 10&& event.target.value!=="")&&((props.Validatormsg!=="")?setMessage(props.Validatormsg):setMessage("Invalid Phone No."));
       (event.target.value.length===10)&&setMessage("");
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
        <input onBlur={handleValidation} type="tel"  placeholder="Enter 10 digits" pattern="[0-9]{10}" required={props.IsMandatory} />
        <p style={{color:"red"}}>{Message}</p>
        </div>
    
        </div>
    );
}

export default Phone;