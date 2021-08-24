import React from "react";

function CheckforMandatory(props)
{

    
    if(props.mandatory=='true')
    {
        
        return(
            <span className="mandatory"> *</span> 
        );
    }

    else{
        return(
            <span></span>
        )
    }
}


export default CheckforMandatory;