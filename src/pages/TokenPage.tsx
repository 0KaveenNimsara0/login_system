import { Button, Container, Paper, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import authService from "../services/authService";

const TokenPage = () => {
  const navigate = useNavigate();
  const authState = useAuth();
  const user = authState?.user ?? null;
  const loading = authState?.loading ?? true;
  const [token, setToken] = useState("");

  useEffect(() => {
    const getUserToken = async () => {
      if (loading) {
        return;
      }

      if (!user) {
        navigate("/login", { replace: true });
        return;
      }

      const userToken = await user.getIdToken();
      sessionStorage.setItem("firebaseToken", userToken);
      setToken(userToken);
    };

    getUserToken();
  }, [loading, navigate, user]);

  const handleLogout = async () => {
    const result = await authService.logoutUser();

    if (result.success) {
      sessionStorage.removeItem("firebaseToken");
      navigate("/");
    } else {
      alert(result.error);
    }
  };

  return (
    <Container sx={{ mt: 6 }}>
      <Paper sx={{ p: 4 }}>
        <Typography variant="h4" gutterBottom>
          Login Successful
        </Typography>

        <Typography variant="body1" sx={{ mb: 3 }}>
          Your Firebase user is logged in.
        </Typography>

        <Typography variant="body1" sx={{ mb: 3 }}>
          Access token: {token || "Loading token..."}
        </Typography>

        <Button variant="contained" color="error" onClick={handleLogout}>
          Logout
        </Button>
      </Paper>
    </Container>
  );
};

export default TokenPage;