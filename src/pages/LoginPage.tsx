import {Container,Paper,Typography,TextField,Button} from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import Facebook  from "@mui/icons-material/Facebook";
import AppleIcon from "@mui/icons-material/Apple";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import authService from "../services/authService";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/;

const LoginPage = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");

    const handleGoogleLogin = async () => {
        const result = await authService.loginWithGoogle();

        if (result.success) {
            navigate("/token");
        } else {
            alert(result.error);
        }
    };

    const handleLogin = () => {
        let isValid = true;

        if (!email) {
            setEmailError("Email is required.");
            isValid = false;
        } else if (!emailPattern.test(email)) {
            setEmailError("Enter a valid email address.");
            isValid = false;
        } else {
            setEmailError("");
        }

        if (!password) {
            setPasswordError("Password is required.");
            isValid = false;
        } else if (!passwordPattern.test(password)) {
            setPasswordError(
                "Password must have 6 characters, one uppercase letter, one lowercase letter, and one number."
            );
            isValid = false;
        } else {
            setPasswordError("");
        }

        if (isValid) {
            alert("Email and password are valid.");
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
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    error={Boolean(emailError)}
                    helperText={emailError}
                />
                <TextField
                    label="Password"
                    type="password"
                    margin="normal"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    error={Boolean(passwordError)}
                    helperText={passwordError}
                />

                <Button onClick={handleLogin}>
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