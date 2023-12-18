import React, { useState } from "react";
import UIcomponent from "./RenderComponent";
import Product_name from "./Product_name";
import RenderComponent from "./RenderComponent";
import Heading from "../UI_components/Heading";
import Modal from "../UI_components/Modal";
import existingJSON from "../Response.json";

function App()
{

    const [IsFileSelected,setIsSelected]=useState('false');
    var   [Response,setResponse]=useState({});
    var   [ProductName,setProductName]=useState("");
    var   [SectionName,setSectionName]=useState("");
    var   [Questions,setQuestions]=useState([]);
    var   [Toggle,setToggle]=useState(0);
    var   [isViewJson,setIsViewJson] = useState(false);

    //--------------------------------IMPORTTING FUNCTIONS---------------------------//

    function handlechange(event)
    {
       const fileReader = new FileReader();
       fileReader.readAsText(event.target.files[0],"UTF-8");

       fileReader.onload= (event) => {
           Response=JSON.parse(event.target.result);
           (Toggle==0)?setToggle(1):setIsSelected('false');
           setProductName(Response.ApplicationDetail.ProductName);
           setSectionName(Response.ApplicationDetail.SubApplicationDetailList[0].ApplicationName);
           setQuestions(Response.ApplicationDetail.SubApplicationDetailList[0].AttributeDetailList);
           
       }



    }

    //------------------------------------IMPORTING EVENTS---------------------------//

    //-----------------------------------Handling Existing JSON---------------------//

    function handleExistingJson(){
        (Toggle==0)?setToggle(1):setIsSelected('false');
        setProductName(existingJSON.ApplicationDetail.ProductName);
        setSectionName(existingJSON.ApplicationDetail.SubApplicationDetailList[0].ApplicationName);
        setQuestions(existingJSON.ApplicationDetail.SubApplicationDetailList[0].AttributeDetailList);
        (ProductName!=null)?setIsSelected('true'):setIsSelected('false');
    }

    //------------------------------------------------------------------------------//

     function handleClick()
     {
         
        (ProductName!=null)?setIsSelected('true'):setIsSelected('false');
     }

    //-------------------------------------------------------------------------------//

    function handleModalClick(){
        setIsViewJson(false);
    }

    //-------------------------------------------------------------------------------//

    return(
        <div>

           <section id="importSection">
                <div className="importFile">
                     <label for="label_name"style={{display:"block"}}>Import Files from Local</label>
                     <br />
                     <input type="file" id="file" name="JSONfile" style={{display:"inline"}}  onChange={handlechange} />
                     <button className="btn btn-primary" style={{display:"inline",background:"#040094"}} onClick={handleClick}>Render UI</button>
                </div>
           </section>

           <section id="importSection">
                <div className="importFile">
                     <label for="label_name"style={{display:"block"}}>Use existing JSON to render UI</label>
                     <br />
                     <button style={{marginRight:"17%"}} onClick={()=>{setIsViewJson(true)}}>View JSON File</button>
                     <button className="btn btn-primary" style={{display:"inline",background:"#040094"}} onClick={handleExistingJson}>Render UI</button>
                </div>
           </section>


           {isViewJson && <Modal onClick={handleModalClick} />}


           {(IsFileSelected=='true')?(

        <div>

             
            <div className="heading">
                    <Product_name 
                     name={ProductName}
                    />
            </div>
            

            <div className="componenttab">

                   <Heading
                       style="heading"
                       label={SectionName}
                   />


                   <form action="/" onsubmit="" id="myform" method="post">

                   {Questions.map(  (Question)  =>  {

                      var name="";
                      var type=(Question.ComponentType).toLowerCase();
                      var values="";
                      var style="";
                      var mandatory="";

                      (Question.ComponentLabel!="")?(name=Question.ComponentLabel):(name=Question.AttributeName);
                      (type=="select")?(values=Question.SubApplicationAttributeValueList):(values="");
                      (Question.StyleClass!="")?(style=Question.StyleClass):(style="");
                      (Question.IsRequired=="Y")?(mandatory="true"):(mandatory="");
                     return (

                            <RenderComponent 
                             label={name}
                             type={type}
                             holder={Question.DefaultValue}
                             values={values}
                             id={Question.EntityHierarchyId}
                             style={style}
                             rows={Question.TextRows}
                             cols={Question.TextColumns}
                             IsMandatory={mandatory}
                             tootip={Question.Tooltip}
                             Requiredmsg={Question.RequiredMessage}
                             Validatormsg={Question.ValidatorMessage}
                            />
                            
                            );
                                                   }
                    )}
                    </form>
           
             </div>
             </div>):null}
       </div>
    );
}

export default App;