import React,{useState} from "react";
import CheckforMandatory from "./Mandatory";


function Email(props)
{

//-------------------------------------Validation function-----------------------------------------------//

const[Message,setMessage]=useState("");
    
function handleValidation(event)
{
  if(props.IsMandatory=='true')
  {
      
       (event.target.value=="" )&&((props.Requiredmsg!="")?setMessage(props.Requiredmsg):setMessage("Please fill out this field"));
       (
           event.target.value.indexOf("@",1)<0
            && event.target.value.indexOf(".",1)<0
            && event.target.value!="")
            &&((props.Validatormsg!=""
       )?setMessage(props.Validatormsg):setMessage("Enter valid email address."));

       (event.target.value.length>=11 
        && event.target.value.indexOf("@",1)>0
        && event.target.value.indexOf(".",1)>0
       )&&setMessage("");
       
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
        <input onBlur={handleValidation} type={props.type}  placeholder="abc@abc.com" required={props.IsMandatory}/>
        <p style={{color:"red"}}>{Message}</p>
        </div>
    
        </div>
    );
}

export default Email;