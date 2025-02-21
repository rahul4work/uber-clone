import { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CaptainLogout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const logoutCaptain = async () => {
      // Use the correct token key for captains
      const captainToken = localStorage.getItem("captainToken");

      if (!captainToken) {
        navigate("/captain-login", { replace: true });
        return;
      }

      try {
        await axios.get(`${import.meta.env.VITE_BASE_URL}/captains/logout`, {
          headers: {
            Authorization: `Bearer ${captainToken}`,
          },
          withCredentials: true,
        });
        console.log("Captain Logout successful");
      } catch (error) {
        // If the error status is 401, consider logout successful
        if (error.response && error.response.status === 401) {
          console.warn("Captain logout received 401, treating as logged out");
        } else {
          console.error("Captain Logout failed:", error);
        }
      } finally {
        localStorage.removeItem("captainToken");
        navigate("/captain-login", { replace: true });
      }
    };

    logoutCaptain();
  }, [navigate]);

  return null;
};

export default CaptainLogout;
