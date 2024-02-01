import React, { useState } from 'react'
import PersonalInfo from './PersonalInfo';
import Eductaion from './Eductaion';
import Employment from './Employment';
import { checkValidateData } from '../utils/checkValidateData';


function Form() {
  const [page,setPage] = useState(0);
  const [errorMessage, seterrorMessage] = useState(null);
  const [formdata,setformData]= useState(
    {
      firstname:"",
      lastname:"",
      phone:'',
      email:"",
      address:"",
      college:"",
      percentincollege:'',
      graduation:'',
      school:"",
      percentinschool:'',
      completeyear:'',
      company:"",
      ctc:'',


    }
  )

  const navigation=["Personal Information","Educational Details","Employment Details"];


  const handleformsubmission = (event) =>{

     event.preventDefault();
   
     seterrorMessage(checkValidateData
      (formdata.email,formdata.firstname,formdata.lastname,formdata.phone,formdata.address,
        formdata.college,formdata.percentincollege,formdata.graduation,formdata.school,
        formdata.percentincollege,formdata.completeyear,formdata.company,formdata.ctc
        ));

  }


  const PageDisplay = () =>{
    if(page===0)
    {
      return <PersonalInfo formdata={formdata} setformdata={setformData}  />
    }
    else if(page===1)
    {
      return <Eductaion formdata={formdata} setformdata={setformData} />
    }
    else if(page===2)
    { 
      return <Employment formdata={formdata} setformdata={setformData}  errors={errorMessage}/>
    }
  }

  return (
    <form className='form' onSubmit={handleformsubmission} >
    <div className='progressbar'>
      <div style={{width: page ==0?"33.33%":page==1?"66.66%":"100%"}}></div>
    </div>
    <div className='form-container'>

      <div className='header'>
        <h1>{navigation[page]}</h1>
      </div>
      <div className='body'>
        {PageDisplay()}
      </div>
      <div className='footer'>
        <button 
        disabled={page==0}
        onClick={() => setPage((currpage) =>currpage-1)}>Prev</button>



        <button
         
      
        onClick={()=>{ 
          if(page==2)
          {  
            
          
            
            alert("FORM SUBMITTED");
            console.log(formdata);

           
            
           
           }
           
         
          
          else{
          
            setPage((currpage)=>currpage+1);
          }
        }}
       >
          {page==2?"Submit":"Next"}
         
          </button>
       
      </div>
    </div>
    
   </form>
  )
}

export default Form;