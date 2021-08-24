import React from "react";
import Heading from "../UI_components/Heading";
import Button from "../UI_components/Button";
import Calendar from "../UI_components/Calendar";
import Email from "../UI_components/Email"
import Hidden from "../UI_components/Hidden";
import Text from "../UI_components/Text";
import TextArea from "../UI_components/TextArea";
import Phone from "../UI_components/Phone"
import Radio from "../UI_components/Radio";
import Select from "../UI_components/Select"
import Subheading from "../UI_components/Subheading";
import CheckBox from "../UI_components/CheckBox";

function RenderComponent(props)
{


    //--------------Rendering Button component----------------//

     if(props.type=="button")
    {
        return(
        <Button
        label={props.label}
        />
        );
        
    }

  //-----------------Rendering Calendar component-------------//

    else if(props.type=="calendar"  || props.type=="date")
    {

    return(
       <Calendar
       label={props.label}
       holder={props.holder}
       IsMandatory={props.IsMandatory}
       Requiredmsg={props.Requiredmsg}
       Validatormsg={props.Validatormsg}
       />
    );

    }


    //----------------------Rendering Email components--------------//

      else if(props.type=="email")
      {
      
          return(
              <Email
              type={props.type}
              label={props.label}
              holder={props.holder}
              IsMandatory={props.IsMandatory}
              Requiredmsg={props.Requiredmsg}
              Validatormsg={props.Validatormsg}
              />
           );
      
      }

  //-------------------Rendering Hidden component--------------//

    else if(props.type=="hidden")
    {

    return(
       <Hidden
       type={props.type}
       label={props.label}
       holder={props.holder}
       />
    );

    }

  
  //----------------------Rendering Heading components-----------//

  else if(props.type=="heading")
  {
    
    return(
      <Heading
             style="heading"
             label={props.label}
             />
    )
  }

  //----------------------Rendering Text components--------------//

    else if(props.type=="text" || props.type=="outputtext")
    {
    
        return(
            <Text
            type="text"
            label={props.label}
            holder={props.holder}
            IsMandatory={props.IsMandatory}
            Requiredmsg={props.Requiredmsg}
            Validatormsg={props.Validatormsg}
            />
         );
    
    }
    
  //----------------------Rendering TextArea components--------------//

    else if(props.type=="textarea")
    {
        return(
           <TextArea
            label={props.label}
            rows={props.rows}
            cols={props.cols}
            IsMandatory={props.IsMandatory}
            Requiredmsg={props.Requiredmsg}
            Validatormsg={props.Validatormsg}
           />
    );

    }


      //----------------------Rendering Phone components--------------//

      else if(props.type=="phone")
      {
      
          return(
              <Phone
              type={props.type}
              label={props.label}
              holder={props.holder}
              IsMandatory={props.IsMandatory}
              Requiredmsg={props.Requiredmsg}
              Validatormsg={props.Validatormsg}
              />
           );
      
      }

  //----------------------Rendering Radio components--------------//
   
    else if (props.type=="radio")
    {
        return(
            <Radio
            type={props.type}
            label={props.label}
            holder={props.holder}
            IsMandatory={props.IsMandatory}
            Requiredmsg={props.Requiredmsg}
            />
            );
    
    }

  //----------------------Rendering Select components--------------//


    else if(props.type=="select")
    {
        
        return(

              <Select
              type={props.type}
              label={props.label}
              IsMandatory={props.IsMandatory}
              values={props.values}
              id={props.id}
              Requiredmsg={props.Requiredmsg}
              />

            );
    }
          
  //----------------------Rendering Subheading components--------------//

    else if(props.type=="subheading")
    {
        return (
            <Subheading
             style={props.style}
             label={props.label}
             />
             );
    }

    
  //----------------------Rendering CheckBox components--------------//
    
     else
     {
         return(
        <CheckBox
         label={props.label}
         holder={props.holder}
         IsMandatory={props.IsMandatory}
         Requiredmsg={props.Requiredmsg}
         />
        );

     }

    
    
}

export default RenderComponent;