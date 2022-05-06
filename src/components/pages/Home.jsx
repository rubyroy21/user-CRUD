import axios from "axios";
import React, { useEffect, useState } from "react";
import {Link} from 'react-router-dom'

export const Home = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:3001/users");
    setUsers(result.data);
  };

  const deleteUser = async (id) => {
      await axios.delete(`http://localhost:3001/users/${id}`)
      loadUsers()
  }
  return (
    <div className="container">
      <div className="py-4">
        <h1>Users</h1>
        <table className="table mt- 3 border shadow">
          <thead>
            <tr className="table-dark">
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Username</th>
              <th scope="col">Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody className="table-light">
            {
              users.map((el, i) => (
                <tr key={i}>
                  <th scope="row">{i + 1}</th>
                  <td>{el.name}</td>
                  <td>{el.username}</td>
                  <td>{el.email}</td>
                  <td>
                    <Link className="btn btn-primary mr-2" to={`/users/${el.id}`}>View</Link>
                    <Link className="btn btn-outline-secondary" to={`/users/edit/${el.id}`}>Edit</Link>
                    <Link className="btn btn-danger" to="" onClick={() => {deleteUser(el.id)}}>Delete</Link>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};
