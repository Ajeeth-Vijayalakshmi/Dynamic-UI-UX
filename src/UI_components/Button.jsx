import React from "react";

function Button(props)
{
    return(
        <div className="row">
    
        <div className="col-lg-5">
        <button type="submit" className="btn btn-primary" data-tip="Click here to perform some action.">{props.label}</button>
        </div>

        </div>);
}

export default Button;