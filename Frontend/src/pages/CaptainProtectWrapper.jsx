import React, { useContext, useEffect, useState } from 'react';
import { CaptainDataContext } from '../context/CaptainContext';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Cookies from 'js-cookie';

const CaptainProtectWrapper = ({ children }) => {
  const navigate = useNavigate();
  const { captain, setCaptain } = useContext(CaptainDataContext);
  const [isLoading, setIsLoading] = useState(true);
  const [retry, setRetry] = useState(false);

  useEffect(() => {
    // Retrieve the captain token specifically
    const token = localStorage.getItem('captainToken') || Cookies.get('captainToken');

    if (!token) {
      navigate('/captain-login', { replace: true });
      return;
    }

    const fetchCaptainProfile = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/captains/profile`, {
          withCredentials: true,
          headers: {
            Authorization: `Bearer ${token}`
          }
        });

        if (response.status === 200) {
          setCaptain(response.data);
        }
      } catch (error) {
        console.error("Captain profile fetch failed:", error);
        if (error.response && [401, 403].includes(error.response.status)) {
          // Remove the captain token specifically
          localStorage.removeItem('captainToken');
          Cookies.remove('captainToken');
          if (!retry) {
            setRetry(true);
            navigate('/captain-login', { replace: true });
          }
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchCaptainProfile();
  }, [navigate, setCaptain, retry]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return <>{children}</>;
};

export default CaptainProtectWrapper;
