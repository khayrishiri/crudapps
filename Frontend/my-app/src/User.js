import { useState } from 'react'
import React, { useEffect }  from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'


function User() {
    const [user,setUser] = useState([])
    useEffect (()=> {
        axios.get('http://localhost:8080/api/v1/users/')
        .then(res =>setUser(res.data))
        .catch(err => console.log(err));
        }, [])

    const handleDelete = async (id) => {
        try {
            await axios.delete('http://localhost:8080/user/'+id)
            window.location.reload()
        }catch(err) {
            console.log(err)
        }
    }
  
    return (
    <div className='d-flex vh-100 bg-dark justify-content-center align-items-center'>
        <div className='w-75 bg-white rounded'>
            <div class="text-center">
            <Link to='/create' className="btn btn-success">Add User</Link>
            </div>
            <table className= 'table'>
                <thead>
                    <tr>
                        <th>Email</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Update</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {user.map((data, i) => (
                        <tr key={i} >
                            <td>{data.Email}</td>
                            <td>{data.First_Name}</td>
                            <td>{data.Last_Name}</td>
                            <td> <Link to={`update/${data.id}`} className="btn btn-info">update</Link></td>
                            <td> <button className="btn btn-warning" onClick={e => handleDelete(data.id)} >delete</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default User