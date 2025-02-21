import React, { useContext, useEffect, useState } from 'react';
import { UserDataContext } from '../context/UserContext';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Cookies from 'js-cookie';

const UserProtectWrapper = ({ children }) => {
  const navigate = useNavigate();
  const { user, setUser } = useContext(UserDataContext);
  const [isLoading, setIsLoading] = useState(true);
  const [retry, setRetry] = useState(false);

  useEffect(() => {
    // Use the specific key for users: 'userToken'
    const token = localStorage.getItem('userToken') || Cookies.get('userToken');

    if (!token) {
      navigate('/login', { replace: true });
      return;
    }

    const fetchUserProfile = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/users/profile`, {
          withCredentials: true,
          headers: {
            Authorization: `Bearer ${token}`
          }
        });

        if (response.status === 200) {
          setUser(response.data);
        }
      } catch (error) {
        console.error("Profile fetch failed:", error);
        if (error.response && [401, 403].includes(error.response.status)) {
          // Remove the user token specifically
          localStorage.removeItem('userToken');
          Cookies.remove('userToken');

          if (!retry) {
            setRetry(true);
            navigate('/login', { replace: true });
          }
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchUserProfile();
  }, [navigate, setUser, retry]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return <>{children}</>;
};

export default UserProtectWrapper;
