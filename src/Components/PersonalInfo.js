import React from 'react'

const PersonalInfo = ({formdata,setformdata,errors}) => {
  return (
    <div className='personal-info-container'>
      
      <input  type="text" value={formdata.firstname}
        onChange={(e) => setformdata({...formdata,firstname:e.target.value})}

       placeholder='FirstName..*'/>


     


      <input  type="text" value={formdata.lastname}
      onChange={(e)=>setformdata({...formdata,lastname:e.target.value})}
      
      placeholder='LastName..*' />
     
      <input  type="number" value={formdata.phone}
      onChange={(e)=>setformdata({...formdata,phone:e.target.value})}
      

      
      placeholder='Phone...' />

      <input  type="text" value={formdata.email}
      onChange={(e)=>setformdata({...formdata, email:e.target.value})}
      placeholder='Email...*' />
      
     
      <input  type="text" value={formdata.address}
      onChange={(e)=>setformdata({...formdata,address:e.target.value})}
      placeholder='Address...*' />
      
    </div>
  )
}

export default PersonalInfo