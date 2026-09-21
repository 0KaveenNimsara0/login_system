import { Paper, Typography, TextField, Button, Link } from "@mui/material";
import Grid from "@mui/material/Grid";
import GoogleIcon from "@mui/icons-material/Google";
import Facebook from "@mui/icons-material/Facebook";
import AppleIcon from "@mui/icons-material/Apple";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import authService from "../services/authService";
import loginIllustration from "../assets/login-illustration.svg";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";

//email and password patten
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/;

const LoginPage = () => {
    // navigate to token page after successful login.
    const navigate = useNavigate();
    
    // Store the values entered in the email and password fields.
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // Store validation error messages for email and password.
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");

    // handle google sign in success time navigate TokenPage and wrong time show error
    const handleGoogleLogin = async () => {
        const result = await authService.loginWithGoogle();

        if (result.success) {
            navigate("/token");
        } else {
            alert(result.error);
        }
    };

    //validate email and password
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

    // main grid
    return (
        <Grid container sx={{ minHeight: "100vh" }}>
            {/* main login grid */}
            <Grid size={{ xs: 12, md: 6 }}>
                <Paper
                    elevation={0}
                    square
                    sx={{
                        minHeight: "100vh",
                        height: "100%",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        p: { xs: 3, sm: 6 },
                    }}
                >
                    <Box
                        sx={{
                            width: "100%",
                            maxWidth: 440,
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            textAlign: "center",
                        }}
                    >
                        <Typography variant="h2" sx={{ fontSize: { xs: "2.5rem", md: "3.5rem" }, fontWeight: 700, mb: 1.5 }}>
                            Welcome back
                        </Typography>
                        <Typography sx={{ color: "#777", fontSize: "0.94rem", lineHeight: 1.55, mb: { xs: 3.5, md: 5.25 } }}>
                            Simplify your workflow and boost your productivity
                            <br />
                            with Tuga&apos;s App. Get started for free.
                        </Typography>


                        <TextField
                            fullWidth
                            label="Email"
                            type="email"
                            margin="normal"
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}
                            error={Boolean(emailError)}
                            helperText={emailError}
                            sx={{
                                "& .MuiOutlinedInput-root": {
                                    borderRadius: "50px",
                                },
                            }}
                        />
                        <TextField
                            fullWidth
                            label="Password"
                            type="password"
                            margin="normal"
                            value={password}
                            onChange={(event) => setPassword(event.target.value)}
                            error={Boolean(passwordError)}
                            helperText={passwordError}
                            sx={{
                                "& .MuiOutlinedInput-root": {
                                    borderRadius: "50px",
                                },
                            }}
                        />
                        <Link
                            href="#"
                            underline="hover"
                            sx={{
                                alignSelf: "flex-end",
                                color: "#555",
                            }}
                        >
                            Forgot Password?
                        </Link>

                        <Button
                            fullWidth
                            variant="contained"
                            onClick={handleLogin}
                            sx={{
                                borderRadius: "50px",
                                backgroundColor: "#000",
                                color: "#fff",
                                textTransform: "none",
                                py: 1.5,
                                mt: 2,
                                "&:hover": {
                                    backgroundColor: "#222",
                                },
                            }}
                        >
                            Login
                        </Button>


                        <Divider sx={{ my: 3 }}>or continue with</Divider>

                        <Box
                            sx={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                gap: 2.5,
                            }}
                        >
                            <Button
                                onClick={handleGoogleLogin}
                                sx={{
                                    minWidth: 48,
                                    width: 48,
                                    height: 48,
                                    borderRadius: "50%",
                                    backgroundColor: "#000",
                                    color: "#fff",
                                    "&:hover": {
                                        backgroundColor: "#333",
                                    },
                                }}
                            >
                                <GoogleIcon />
                            </Button>

                            <Button
                                sx={{
                                    minWidth: 48,
                                    width: 48,
                                    height: 48,
                                    borderRadius: "50%",
                                    backgroundColor: "#000",
                                    color: "#fff",
                                    "&:hover": {
                                        backgroundColor: "#333",
                                    },
                                }}
                            >
                                <Facebook />
                            </Button>

                            <Button
                                sx={{
                                    minWidth: 48,
                                    width: 48,
                                    height: 48,
                                    borderRadius: "50%",
                                    backgroundColor: "#000",
                                    color: "#fff",
                                    "&:hover": {
                                        backgroundColor: "#333",
                                    },
                                }}
                            >
                                <AppleIcon />
                            </Button>
                        </Box>
                    </Box>
                </Paper>
            </Grid>


            {/* image grid */}
            <Grid
                size={{ xs: 12, md: 6 }}
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    p: 4,
                }}
            >
                <Box
                    component="img"
                    src={loginIllustration}
                    alt="Login illustration"
                    sx={{
                        width: "100%",
                        maxWidth: 450,
                        maxHeight: "80vh",
                        objectFit: "contain",
                    }}
                />
            </Grid>
        </Grid>
    );
};

export default LoginPage;