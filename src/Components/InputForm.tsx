import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

const InputForm: React.FC<{
  handleSubmit: (name: string, email: string, number: string) => void;
}> = ({ handleSubmit }) => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "primary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Box
          component="form"
          onSubmit={(event: React.FormEvent) => {
            event?.preventDefault();
            console.log(name, email, number);
            if (name !== "" && email !== "" && number !== "") {
              handleSubmit(name, email, number);
            }
            if (name === "" || email === "" || number == "") {
              setError("please Enter all fields to login");
            }
          }}
          noValidate
          sx={{ mt: 1 }}
        >
          <TextField
            margin="normal"
            required
            fullWidth
            id="name"
            label="Name"
            name="Name"
            autoFocus
            onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) => {
              setName(event.currentTarget.value);
            }}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) => {
              setEmail(event.currentTarget.value);
            }}
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="Number"
            label="Number"
            type="input"
            onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) => {
              setNumber(event.currentTarget.value);
            }}
            id="number"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
        </Box>
      </Box>
      {error !== "" && <Typography>{error}</Typography>}
    </Container>
  );
};
export default InputForm;
