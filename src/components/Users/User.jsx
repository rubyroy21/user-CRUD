import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link ,useParams } from "react-router-dom";

export const User = () => {
  const userDetails = {
    name: "",
    username: "",
    email: "",
    phone: "",
    website: "",
  };
  const [user, setUser] = useState(userDetails);

  const { id } = useParams();

  const loadUser = async () => {
      const res = await axios.get(`http://localhost:3001/users/${id}`)
      setUser(res.data)
  }

  useEffect(() => {
    loadUser()
  }, [])
  return (  
    <div className="container py-4">
      <Link className="btn btn-primary" to="/">
        back to Home
      </Link>
      <h1 className="display-4">User Id: {id}</h1>
      <hr />
      <ul className="list-group w-50 mx-auto">
        <li className="list-group-item">name: {user.name}</li>
        <li className="list-group-item">user name: {user.username}</li>
        <li className="list-group-item">email: {user.email}</li>
        <li className="list-group-item">phone: {user.phone}</li>
        <li className="list-group-item">website: {user.website}</li>
      </ul>
    </div>
  );
};
