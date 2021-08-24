import React,{useState} from "react"
import CheckforMandatory from "./Mandatory";

function Select(props)
{

    
//-------------------------------------Validation function-----------------------------------------------//

const[Message,setMessage]=useState("");
    
function handleValidation(event)
{
  if(props.IsMandatory=='true' && event.target.selectedIndex<1)
  {
      (props.Requiredmsg!="")?setMessage(props.Requiredmsg):setMessage("Please select a value");
  }
  else{
      setMessage("");
  }
}


//-------------------------------------------------------------------------------------------------------//

    var values=props.values;
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
    <select  onBlur={handleValidation} name={props.label} id={props.id} required>

         {values.map( (value) => {
             return <option value={value.DisplayValue}>{value.DisplayValue}</option>
             }
        )}
         
         
    </select>
    <p style={{color:"red"}}>{Message}</p>
    </div>

    </div>
    );
}


export default Select;