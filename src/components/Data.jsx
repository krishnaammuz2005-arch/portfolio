 import React, { useEffect, useState } from "react";
import axios from "axios";

function Data() {
  const [users, setUsers] = useState([]);

  async function fetchUsers() {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );

      setUsers(response.data);

    } catch (error) {
      console.log("Error:", error);
    }
  }

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <>
      <style>{`
        *{
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body{
          font-family: 'Poppins', sans-serif;
          background: linear-gradient(to right, #141e30, #243b55);
          min-height: 100vh;
        }

        .container{
          width: 90%;
          max-width: 1100px;
          margin: auto;
          padding: 40px 20px;
        }

        .title{
          text-align: center;
          color: white;
          font-size: 42px;
          margin-bottom: 40px;
          letter-spacing: 1px;
          text-transform: uppercase;
        }

        .user-grid{
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 25px;
        }

        .card{
          background: rgba(255,255,255,0.12);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255,255,255,0.2);
          border-radius: 18px;
          padding: 25px;
          color: white;
          transition: all 0.3s ease;
          box-shadow: 0 8px 20px rgba(0,0,0,0.25);
        }

        .card:hover{
          transform: translateY(-8px) scale(1.02);
          background: rgba(255,255,255,0.18);
        }

        .avatar{
          width: 70px;
          height: 70px;
          border-radius: 50%;
          background: linear-gradient(135deg, #00c6ff, #0072ff);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 28px;
          font-weight: bold;
          margin-bottom: 18px;
        }

        .card h2{
          font-size: 22px;
          margin-bottom: 10px;
        }

        .card p{
          color: #dcdcdc;
          font-size: 15px;
          word-break: break-word;
        }
      `}</style>

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
    </>
  );
}

export default Data;