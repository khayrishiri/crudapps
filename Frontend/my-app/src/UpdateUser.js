import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function UpdateUser() {
    const [Email, setEmail] = useState("")
    const [Fname, setFname] = useState("")
    const [Lname, setLname]= useState("")
    const {id} = useParams();
    const navigate = useNavigate()

    function handleSubmit(event) {
        event.preventDefault();
        axios.put('http://localhost:8080/update/'+id,{Email,Fname,Lname}).then(res => {
            console.log(Email)
            console.log(Fname)
            console.log(Lname)
            console.log(res);
            navigate('/')
        }).catch(err => console.log(err));
    }

  return (
    <div className='d-flex vh-100 bg-dark justify-content-center align-items-center'>
        <div className='w-75 bg-white rounded p-3'>
            <form onSubmit={handleSubmit}>
                <h2>Update User</h2>
                <div className= 'mb-2'>
                    <label htmlFor="">Email</label>
                    <input type="email" placeholder='Enter your Email' className='form-control' onChange={e => setEmail(e.target.value)} />
                </div>
                <div className= 'mb-2'>
                    <label htmlFor="">First Name</label>
                    <input type="text" placeholder='Enter your first Name' className="form-control" onChange={e => setFname(e.target.value)} />
                </div>
                <div className= 'mb-2'>
                    <label htmlFor="">Last Name</label>
                    <input type="text" placeholder='Enter your last Name' className="form-control" onChange={e => setLname(e.target.value)} />
                </div>
                <button className="btn btn-success">Update</button>
            </form>
        </div>
    </div>
  )
}

export default UpdateUser