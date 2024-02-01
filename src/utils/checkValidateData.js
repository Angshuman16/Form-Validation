export const checkValidateData= (email,firstname,lastname,phone,address,college,percentincollege,graduation,school,percentinschool,completeyear,company,ctc) =>{

    const errors={};

    const isEmailValid =/^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
//    const isfirstnameValid=/^([a-zA-Z]{2,}\s[a-zA-Z]{1,}'?-?[a-zA-Z]{2,}\s?([a-zA-Z]{1,})?)/.test(firstname);
//    const islastnameValid=/^([a-zA-Z]{2,}\s[a-zA-Z]{1,}'?-?[a-zA-Z]{2,}\s?([a-zA-Z]{1,})?)/.test(lastname);
      const isphonevalid=/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/.test(phone);



   if(firstname==='')
   {
       errors.firstname="Name is Required";
   }
   
  else if(lastname==='')
   {
       errors.lastname="Name is Required";
   }
    if(email=="") {
        errors.email="Email is Required";
    }

    else if(!isEmailValid) 
    {
        errors.email="Email is Wrong";
    }

    if(phone==='')
    {
        errors.phone="Phone number is required";
    }
   
    else if(!isphonevalid)
    {
        errors.phone="Phone number should be entered correctly";
    }
    if(address==='')
    {
        errors.address="Address is required";
    }

    if(college==='')
    {
        errors.college="College name is required";
    }

    if(percentincollege==='')
    {
        errors.percentincollege="Percentage should not be empty";
    }
    if(graduation==='')
    {
        errors.graduation="Graduation year should not be empty";
    }

    if(school==='')
    {
        errors.school="School name is required";
    }

    if(percentinschool==='')
    {
        errors.percentinschool="Percentage in school should not be empty";

    }

    if(completeyear==='')
    {
        errors.completeyear="School completion year is required";
    }

    if(company==='')
    {
        errors.company="Company name is required";
    }
   




   return errors;

};