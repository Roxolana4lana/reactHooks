import React, { useState, useEffect} from 'react'
import useWindowWidth from './useWindowWidth';

export default function Greeting() {
    const [name, setName] = useState('Marry')
    const [surname, setSurname] = useState('Poppyns')
    const width = useWindowWidth()

    const handleChange = e =>{
        setName(e.target.value)
    }

    const handleChangeSurname =e =>{
        setSurname(e.target.value)
    }
    useEffect(()=>{
        document.title = name;
    })

   

  return (
    <div>
 <label>Name</label>
    <input value={name}
    onChange = {handleChange}>
    </input>
   
        <label>Surname</label>
              <input value={surname}
                  onChange={handleChangeSurname}>
              </input>
              <h1>The width of the window is {width}</h1>
  
    </div>
  )
}
