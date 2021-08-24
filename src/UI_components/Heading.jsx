import { props } from "bluebird";
import React from "react";


function Heading(props)
{
    return (
        <div className="row">

        <div className="col-lg-5">
        <h2>{props.label}</h2>
        </div>
        </div>
        );
}



export default Heading;