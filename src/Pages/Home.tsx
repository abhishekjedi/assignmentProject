import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import FetchDatafromApi from "../Components/FetchDatafromApi";
import { useLocation } from "react-router";
import DepartmentList from "../Components/DepartmentList";
import { Container, Typography } from "@mui/material";
const Home = () => {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const errorMessage = useLocation().state?.errorMessage || "";
  useEffect(() => {
    if (localStorage.getItem("user") == null) {
      navigate("/", {
        state: { errorMessage: "please provide your details first" },
      });
    }
  }, [navigate]);

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
  return (
    <Container>
      {error !== "" && (
        <Typography style={{ paddingLeft: "20px", paddingTop: "10px" }}>
          {error}
        </Typography>
      )}
      <FetchDatafromApi />
      <DepartmentList />
    </Container>
  );
};

export default Home;
