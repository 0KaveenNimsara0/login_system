import { Button, Container, Paper, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <Container sx={{ mt: 6 }}>
      <Paper sx={{ p: 4, textAlign: "center" }}>
        <Typography variant="h4" gutterBottom>
          Welcome Home
        </Typography>

        <Button
          variant="contained"
          size="large"
          onClick={() => navigate("/login")}
        >
          Login
        </Button>
      </Paper>
    </Container>
  );
};

export default HomePage;
