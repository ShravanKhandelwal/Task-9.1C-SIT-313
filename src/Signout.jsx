import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./Header.css";

function Signout() {
  const nav = useNavigate();

  const handleSignout = async () => {
    try {
      // Perform the signout logic here.
      // For example, if you are using Firebase authentication:
      // await firebaseSignOut(); // Replace with your actual signout function.

      // Redirect the user to the login page after signing out.
      nav("/Login");
    } catch (error) {
      console.error('Error during signout:', error);
    }
  };

  return (
    <div className="signout">
      <button onClick={handleSignout}>Sign Out</button>
    </div>
  );
}

export default Signout;
