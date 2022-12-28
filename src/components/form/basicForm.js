import React, { useState } from 'react'

const BasicForm = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [allEntry, setAllEntry] = useState([])

    const submitForm =(e)=>{
        e.preventDefault()
        const newEntry = {id:new Date().getTime().toString(), email,password};
        setAllEntry([...allEntry,newEntry])

        setEmail("");
        setPassword("");
    }
  return (
    <>
    <div className='login-wrapper'>
  
      <form action='' className='form' onSubmit={submitForm}>
    
      <div className='input-group'>  
        <label htmlFor='email'>
            Email
        </label>

        <input name='email' type='text' id='email' autoComplete='off'
        value={email}
        onChange={(e) =>{setEmail(e.target.value)}}
        />
      </div>  

      <div className='input-group'>  
        <label htmlFor='password'>
            Password
        </label>

        <input name='password' type='password' id='password'  
        value={password}
        onChange ={(e) =>{setPassword(e.target.value)}}
       />
      </div>  
      <button type='submit' className='submit-btn'>Login</button>
      <div>{
        allEntry.map((curElem)=>{
            const {id,email,password} = curElem;
            return(
                <div key={id}>
                    <p>{email}</p>
                    <p>{password}</p>
                </div>
            )

        })
      }
      </div>
      
      </form>
      
      </div>
    </>
  )
}

export default BasicForm
