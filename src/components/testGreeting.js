import React, { useState, useEffect } from 'react'

export default function TestGreeting() {
    const name = useFormInput('Mary')
   const surname = useFormInput('poppins')
    
    useEffect(() => {
        document.title = name.value + '' + surname.value;
    })
  return (
    <div>
      <label>Name</label>
      <input {...name}/>
          <label>Surname</label>
          <input {...surname} />
    </div>
  )
}

function useFormInput(initialValue){
    const [value,setValue] = useState(initialValue)
    function handleChange(e){
        setValue(e.target.value)
    }
    return {
        value,
        onChange:handleChange
    }
}
