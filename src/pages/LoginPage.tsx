import {Container,Paper,Typography,TextField,Button,Link} from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import Facebook  from "@mui/icons-material/Facebook";
import AppleIcon from "@mui/icons-material/Apple";

const LoginPage = () => {
  return (
    <Container>
      <Paper>
        <Typography>
          Login
        </Typography>

        <TextField
          label="UserName"
          type="text"
          margin="normal"
        />
        <TextField
          label="Password"
          type="password"
          margin="normal"
        />

        <Button >
          Login
        </Button>
        
        <div>
          <Link href="#">
            <GoogleIcon />
          </Link>
          <Link href="#">
            <Facebook />
          </Link>
          <Link href="#">
            <AppleIcon />
          </Link>
        </div>
        
      </Paper>
    </Container>
  );
};

export default LoginPage;