import { useState } from "react";
import { message } from "antd";
import { useAuth } from "../contexts/AuthContext";

const useLogin = () => {
    const { login } = useAuth();
  console.log(login);
  
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);

  const loginUser = async (values) => {
    try {
      setError(null);
      setLoading(true);  // Set loading to true when starting the request
      const res = await fetch("http://localhost:3000/api/auth/login", {
        method: "POST",
        body: JSON.stringify(values),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await res.json();
      if (res.status === 200) {
        message.success(data.message);
        login(data.token, data.user);  // Pass token and user data to login
      } else if (res.status === 404) {
        setError(data.message);
      } else {
        message.error("Registration failed!");
      }
    } catch (error) {
      message.error("An error occurred: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  return { loading, error, loginUser };
};

export default useLogin;
