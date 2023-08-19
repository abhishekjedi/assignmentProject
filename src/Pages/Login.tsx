import { useLocation, useNavigate } from "react-router";
import InputForm from "../Components/InputForm";
import { useEffect, useState } from "react";
import { Typography } from "@mui/material";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const errorMessage = useLocation().state?.errorMessage || "";
  const [error, setError] = useState("");
  useEffect(() => {
    if (errorMessage !== "") {
      setError(errorMessage);
    }

    if (errorMessage !== "") {
      setTimeout(() => {
        setError("");
      }, 3000);
    }

    if (errorMessage !== "") {
      navigate(location.pathname, { state: "" });
    }
  }, []);

  useEffect(() => {
    if (localStorage.getItem("user") !== null) {
      navigate("/home", {
        state: { errorMessage: "you are already logged in" },
      });
    }
  }, []);

  const handleSubmit = (name: string, phone: string, email: string) => {
    if (name && phone && email) {
      const userDetails = {
        name,
        phone,
        email,
      };
      localStorage.setItem("user", JSON.stringify(userDetails));
      navigate("/home");
    }
  };

  return (
    <>
      {error && (
        <Typography style={{ paddingLeft: "20px", paddingTop: "10px" }}>
          {error}
        </Typography>
      )}
      <InputForm handleSubmit={handleSubmit} />
    </>
  );
};

export default Login;
