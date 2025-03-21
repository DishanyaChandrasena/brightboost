

import {useState} from 'react';

function Register() {
  const[name,setName]=useState('');
  const[email,setEmail]=useState('');
  const[password,setPassword]=useState('');

  async function registerUser(event){
    event.preventDefault()
    const response = await fetch('http://localhost:1337/api/register',{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify({
        name,
        email,
        password,
      })

    })
    const data = await response.json()
    console.log(data)

  }

  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={registerUser}>
       <label>Student name</label> <input value={name} onChange={(e)=>setName(e.target.value)} type="text" placeholder="Student Name"></input>
        <br/>
       
        <label>Student email</label><input value={email} onChange={(e)=>setEmail(e.target.value)}type="email" placeholder="Student email"></input>
      <br/>
       <label>Student password</label> <input value={password} onChange={(e)=>setPassword(e.target.value)} type="password" placeholder="password"></input>
      <br/>
      <input type="submit" value="Register"/>
      
      </form>
    </div>
  );
}

export default Register;
