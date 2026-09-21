import {Container,Paper,Typography,TextField,Button} from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import Facebook  from "@mui/icons-material/Facebook";
import AppleIcon from "@mui/icons-material/Apple";
import { useNavigate } from "react-router-dom";
import authService from "../services/authService";

const LoginPage = () => {
    const navigate = useNavigate();

    const handleGoogleLogin = async () => {
        const result = await authService.loginWithGoogle();

        if (result.success) {
            navigate("/token");
        } else {
            alert(result.error);
        }
    };

    return (
        <Container>
            <Paper>
                <Typography>
                    Login
                </Typography>

                <TextField
                    label="Email"
                    type="email"
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
                    <Button onClick={handleGoogleLogin}>
                        <GoogleIcon />
                    </Button>

                    <Button>
                        <Facebook />
                    </Button>

                    <Button>
                        <AppleIcon />
                    </Button>
                </div>

            </Paper>
        </Container>
    );
};

export default LoginPage;