import React from 'react'

const Eductaion = ({formdata,setformdata}) => {
  return (
    <div className='Education-container'>

        <input  type="text" value={formdata.college}
      onChange={(e)=>setformdata({...formdata,college:e.target.value})}
        
        placeholder='College..*' />

        <input  type="number" value={formdata.percentincollege}
      onChange={(e)=>setformdata({...formdata,percentincollege:e.target.value})}
        
        placeholder='Percentage..*' />

        <input  type="number" value={formdata.graduation}
      onChange={(e)=>setformdata({...formdata,graduation:e.target.value})}
        
        placeholder='Graduation Year..*' />
        <input  type="text" value={formdata.school}
      onChange={(e)=>setformdata({...formdata,school:e.target.value})}
        
        placeholder='Enter the School name*' />
        <input  type="number" value={formdata.percentinschool}
      onChange={(e)=>setformdata({...formdata,percentinschool:e.target.value})}
        
        placeholder='Percentage..*' />
        <input  type="number" value={formdata.completeyear}
      onChange={(e)=>setformdata({...formdata,completeyear:e.target.value})}
        
        placeholder='Completion Year...*' />
    </div>
  )
}

export default Eductaion