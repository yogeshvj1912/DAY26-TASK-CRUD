import { Button } from 'bootstrap';
import React, { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import axios from "axios";

function Userlist() {
   
    const [userList,setUserlist]=useState([])
    const [isLoading,setLoading]=useState(true);

    useEffect(()=>{
     getUsers();
    }, []);
  
    let getUsers=async()=>{
      try{
        const users = await axios.get("https://64493cfab88a78a8f001da8a.mockapi.io/users")
      setUserlist(users.data);
      setLoading(false)
      }
      catch (error){
        console.log(error);
      }
};

//     useEffect(()=>{
       
//             console.log("timer up")
        
//     },[]);

//     useEffect(()=>{
// return ()=>{
//     console.log("Destroy...")
// }
//     },[]);

//     const data=[{
//         id : "1",
//         username : "User 1",
//         email   : "user1@gmail.com",
//         country : "India",
//         state  : "TN",
//         city  : "Chennai"
//     },
//     {
//         id : "2",
//         username : "User 2",
//         email   : "user2@gmail.com",
//         country : "India",
//         state  : "TN",
//         city  : "Chennai"
//     },
// ];
let handleDelete=async(id)=>{
    
    try {
        const confirmData=window.confirm("Are you sure do you want to delete this data");
       if (confirmData){
        await axios.delete(`https://64493cfab88a78a8f001da8a.mockapi.io/users/${id}`)
        
        getUsers();
       }
     }
     catch (error) {
        
        alert("Somthing went wrong");
       
     }

}

    return (
        <>
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">User List</h1>
                <Link to="/portal/user-create" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                    className="fas fa-download fa-sm text-white-50"></i> Create User</Link>
            </div>

            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">DataTables Example</h6>
                </div>
                <div className="card-body">
                    {
                        isLoading?<h1>Loading...</h1>: <div className="table-responsive">
                        <table className="table table-bordered" id="dataTable" width="100%" >
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Country</th>
                                    <th>State</th>
                                    <th>City</th>
                                    <th>Action</th>
                                   
                                </tr>
                            </thead>
                            <tbody>
                               {
                                userList.map((user,index)=>{
                                    return  <tr key={index}>
                                    <td>{user.id}</td>
                                    <td>{user.username}</td>
                                    <td>{user.email}</td>
                                    <td style={{width:"23%"}}>{user.country}</td>
                                    <td>{user.state}</td>
                                    <td>{user.city}</td>
                                    <th>
                                    <Link to={`/portal/user-view/${user.id}`} className='btn btn-success ml-1 btn-sm mr-1' >View</Link>
                                    <Link to={`/portal/user-edit/${user.id}`} className='btn btn-primary btn-sm mr-1 '>Edit</Link>
                                    <button onClick={()=>handleDelete(user.id)} className='btn btn-danger btn-sm ' >Delete</button>
                                    </th>
                                </tr>
                                })
                               }
                              
                            </tbody>
                        </table>
                    </div>
                    }
                   
                </div>
            </div>

        </>

    )
}

export default Userlist