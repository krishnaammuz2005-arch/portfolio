import React from "react";

function Showdata({ users }) {
  return (
    <div className="container">
      <h1 className="title">User List</h1>

      <div className="user-grid">
        {users.map((user) => (
          <div className="card" key={user.id}>

            <div className="avatar">
              {user.name.charAt(0)}
            </div>

            <h2>{user.name}</h2>
            <p>{user.email}</p>

          </div>
        ))}
      </div>
    </div>
  );
}

export default Showdata;