import React from "react";
// import DeleteAllUser from "./DeleteAllUser";
import "./User.css";
import { fakeUserData } from "../api";
import { removeusers } from "../Slices/UserSlice";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../Slices/UserSlice";
const UserDetails = () => {
  const data = useSelector((state) => {
    return state.users;
  });

  const dispatch = useDispatch();
  const addNewUser = (name) => {
    dispatch(addUser(name));
  };

  const cutUser =(name) =>{
    dispatch(removeusers(name))
    console.log(removeusers)
  }
  return (
    <>
      <div className="conntent">
        <div className="admin-table">
          <div className="uuuu">List of user Details</div>
          <button onClick={() => addNewUser(fakeUserData())}>
            {" "}
            Add New Users
          </button>
        </div>

        <ul>
          {data.map((users, id) => {
            return (
              <li key={id}>
                {users} <button onClick={()=>cutUser(removeusers())}> delete user</button>
              </li>
            );
          })}
        </ul>
        <hr />
        {/* <DeleteAllUser /> */}
      </div>
    </>
  );
};

export default UserDetails;











