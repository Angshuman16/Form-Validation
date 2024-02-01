import React from 'react'

const Employment = ({formdata,setformdata,errors}) => {
  return (
    <div className='Employment-container'>
         <input  type="text" value={formdata.company}
      onChange={(e)=>setformdata({...formdata,company:e.target.value})}
         
         placeholder='Present Company' />
        <input  type="number" value={formdata.ctc}
      onChange={(e)=>setformdata({...formdata,ctc:e.target.value})}
         placeholder='Current CTC...' />

         {
          errors.firstname && <p style={{color:"red"}}>{errors.firstname}</p>
          
         }
         {
          errors.lastname && <p style={{color:"red"}}>{errors.lastname}</p>
         }
         {
          errors.email && <p style={{color:"red"}} >{errors.email}</p>
         }
          {
          errors.phone && <p style={{color:"red"}} >{errors.phone}</p>
         }
          {
          errors.address && <p style={{color:"red"}} >{errors.address}</p>
         }
          {
          errors.college && <p style={{color:"red"}} >{errors.college}</p>
         }
          {
          errors.percentincollege && <p style={{color:"red"}} >{errors.percentincollege}</p>
         }

       {
          errors.graduation && <p style={{color:"red"}} >{errors.graduation}</p>
         }
          {
          errors.school && <p style={{color:"red"}} >{errors.school}</p>
         }
          {
          errors.percentinschool && <p style={{color:"red"}} >{errors.percentinschool}</p>
         }
          {
          errors.completeyear && <p style={{color:"red"}} >{errors.completeyear}</p>
         }

        {
          errors.company && <p style={{color:"red"}} >{errors.company}</p>
         }
         
    </div>
  )
}

export default Employment