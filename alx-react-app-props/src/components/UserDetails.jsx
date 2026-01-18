import React, { useContext } from "react";
import UserContext from "../context/UserContext";

function UserDetails({ userData }) {
  const userData = useContext(UserContext);

  return (
    <div>
      <p>{userData.name}</p>
      <p>{userData.email}</p>
    </div>
  );
}

export default UserDetails;