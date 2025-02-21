import { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const UserLogout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const logoutUser = async () => {
      // Use the correct token key for users
      const userToken = localStorage.getItem("userToken");

      if (!userToken) {
        navigate("/login", { replace: true });
        return;
      }

      try {
        await axios.get(`${import.meta.env.VITE_BASE_URL}/users/logout`, {
          headers: {
            Authorization: `Bearer ${userToken}`,
          },
          withCredentials: true,
        });
        console.log("User Logout successful");
      } catch (error) {
        // If the error status is 401, consider logout successful since token is invalid/expired
        if (error.response && error.response.status === 401) {
          console.warn("User logout received 401, treating as logged out");
        } else {
          console.error("User Logout failed:", error);
        }
      } finally {
        localStorage.removeItem("userToken");
        navigate("/login", { replace: true });
      }
    };

    logoutUser();
  }, [navigate]);

  return null;
};

export default UserLogout;
