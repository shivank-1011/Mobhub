import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext.jsx';
import { useNavigate } from 'react-router-dom';
import profilePic from '../components/Assets/profile.jpg';
import '../pages/CSS/Profile.css';

const Profile = () => {
  const { currentUser, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  if (!currentUser) {
    return <div className="profile-container">Please log in to view your profile.</div>;
  }

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/login');
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  return (
    <div className="profile-container">
      <h1>Your Profile</h1>
      {currentUser.displayName && <p className="profile-item"><strong>Name:</strong> {currentUser.displayName}</p>}
      <p className="profile-item"><strong>Email:</strong> {currentUser.email}</p>
      
      <img className="profile-picture" src={profilePic} alt="Profile" />
      {/* Add more profile details here as needed */}
      <button className="logout-button" onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Profile;
