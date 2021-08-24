import React from "react";
import CheckforMandatory from "./Mandatory";

function Radio(props)
{
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
        <input type={props.type}  placeholder={props.holder} required={props.IsMandatory} />
        </div>
    
        </div>
    );
}

export default Radio;