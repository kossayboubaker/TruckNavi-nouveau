/**
 * Premium Login Page
 * Modern authentication with glassmorphism and truck background
 * Inspired by premium dashboard designs
 */

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Box,
  Card,
  TextField,
  Button,
  Typography,
  IconButton,
  InputAdornment,
  Divider,
  Checkbox,
  FormControlLabel,
  Alert,
  CircularProgress,
} from "@mui/material";
import { styled } from "@mui/material/styles";

// Icons
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import GoogleIcon from "@mui/icons-material/Google";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";

// Premium colors
import premiumColors from "assets/theme/base/premiumColors";

const AuthContainer = styled(Box)(({ theme }) => ({
  minHeight: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "24px",
  position: "relative",
  background: premiumColors.background.gradient,
  overflow: "hidden",
}));

const BackgroundImage = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundImage: `url("https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80")`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  filter: "brightness(0.3) blur(2px)",
  zIndex: 0,
}));

const GlassCard = styled(Card)(({ theme }) => ({
  background: "rgba(255, 255, 255, 0.1)",
  backdropFilter: "blur(20px)",
  border: `1px solid ${premiumColors.components.card.border}`,
  borderRadius: "24px",
  padding: "40px",
  maxWidth: "450px",
  width: "100%",
  position: "relative",
  zIndex: 1,
  boxShadow: "0 20px 60px rgba(0, 0, 0, 0.3)",
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: "2px",
    background: premiumColors.primary.gradient,
    borderRadius: "24px 24px 0 0",
  },
}));

const StyledTextField = styled(TextField)(({ theme }) => ({
  "& .MuiOutlinedInput-root": {
    backgroundColor: "rgba(255, 255, 255, 0.08)",
    borderRadius: "12px",
    backdropFilter: "blur(10px)",
    "& fieldset": {
      borderColor: "rgba(255, 255, 255, 0.15)",
    },
    "&:hover fieldset": {
      borderColor: "rgba(255, 255, 255, 0.25)",
    },
    "&.Mui-focused fieldset": {
      borderColor: premiumColors.primary.main,
      boxShadow: `0 0 0 2px ${premiumColors.primary.main}20`,
    },
  },
  "& .MuiInputLabel-root": {
    color: premiumColors.text.secondary,
  },
  "& .MuiInputBase-input": {
    color: premiumColors.text.primary,
  },
}));

const PremiumButton = styled(Button)(({ theme }) => ({
  background: premiumColors.primary.gradient,
  borderRadius: "12px",
  padding: "12px 24px",
  fontSize: "16px",
  fontWeight: 600,
  textTransform: "none",
  boxShadow: "0 4px 16px rgba(123, 66, 246, 0.3)",
  transition: "all 0.3s ease",
  "&:hover": {
    background: premiumColors.primary.gradient,
    transform: "translateY(-2px)",
    boxShadow: "0 8px 25px rgba(123, 66, 246, 0.4)",
  },
}));

const SocialButton = styled(Button)(({ theme }) => ({
  backgroundColor: "rgba(255, 255, 255, 0.08)",
  backdropFilter: "blur(10px)",
  border: `1px solid ${premiumColors.components.card.border}`,
  borderRadius: "12px",
  padding: "12px 24px",
  color: premiumColors.text.primary,
  textTransform: "none",
  transition: "all 0.3s ease",
  "&:hover": {
    backgroundColor: "rgba(255, 255, 255, 0.15)",
    border: `1px solid rgba(255, 255, 255, 0.25)`,
  },
}));

function PremiumLogin() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleInputChange = (field) => (event) => {
    setFormData({
      ...formData,
      [field]: event.target.type === "checkbox" ? event.target.checked : event.target.value,
    });
    if (error) setError("");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError("");

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      // Mock validation
      if (formData.email === "admin@transport.com" && formData.password === "admin123") {
        navigate("/dashboard");
      } else {
        setError("Invalid email or password");
      }
    } catch (err) {
      setError("Login failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = () => {
    console.log("Google login clicked");
  };

  return (
    <AuthContainer>
      <BackgroundImage />
      
      {/* Decorative elements */}
      <Box
        sx={{
          position: "absolute",
          top: "10%",
          right: "-20%",
          width: "40%",
          height: "40%",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(123, 66, 246, 0.15) 0%, transparent 70%)",
          filter: "blur(40px)",
          zIndex: 0,
        }}
      />
      <Box
        sx={{
          position: "absolute",
          bottom: "10%",
          left: "-20%",
          width: "40%",
          height: "40%",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(0, 188, 212, 0.1) 0%, transparent 70%)",
          filter: "blur(40px)",
          zIndex: 0,
        }}
      />

      <GlassCard>
        {/* Header */}
        <Box sx={{ textAlign: "center", mb: 4 }}>
          <Box
            sx={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              width: "64px",
              height: "64px",
              borderRadius: "16px",
              background: premiumColors.primary.gradient,
              mb: 2,
              boxShadow: "0 8px 24px rgba(123, 66, 246, 0.3)",
            }}
          >
            <LocalShippingIcon sx={{ color: "white", fontSize: "32px" }} />
          </Box>
          
          <Typography
            variant="h4"
            sx={{
              color: premiumColors.text.primary,
              fontWeight: 700,
              mb: 1,
              background: premiumColors.primary.gradient,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Welcome Back
          </Typography>
          
          <Typography
            variant="body1"
            sx={{
              color: premiumColors.text.secondary,
              fontSize: "16px",
            }}
          >
            Sign in to your transport management account
          </Typography>
        </Box>

        {/* Error Alert */}
        {error && (
          <Alert
            severity="error"
            sx={{
              mb: 3,
              backgroundColor: "rgba(244, 67, 54, 0.1)",
              border: "1px solid rgba(244, 67, 54, 0.2)",
              borderRadius: "8px",
              color: "#f44336",
              "& .MuiAlert-icon": {
                color: "#f44336",
              },
            }}
          >
            {error}
          </Alert>
        )}

        {/* Login Form */}
        <Box component="form" onSubmit={handleSubmit}>
          <StyledTextField
            fullWidth
            label="Email Address"
            type="email"
            value={formData.email}
            onChange={handleInputChange("email")}
            required
            margin="normal"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <EmailIcon sx={{ color: premiumColors.text.secondary, fontSize: "20px" }} />
                </InputAdornment>
              ),
            }}
          />

          <StyledTextField
            fullWidth
            label="Password"
            type={showPassword ? "text" : "password"}
            value={formData.password}
            onChange={handleInputChange("password")}
            required
            margin="normal"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LockIcon sx={{ color: premiumColors.text.secondary, fontSize: "20px" }} />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={() => setShowPassword(!showPassword)}
                    edge="end"
                    sx={{ color: premiumColors.text.secondary }}
                  >
                    {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />

          <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mt: 2, mb: 3 }}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={formData.rememberMe}
                  onChange={handleInputChange("rememberMe")}
                  sx={{
                    color: premiumColors.text.secondary,
                    "&.Mui-checked": {
                      color: premiumColors.primary.main,
                    },
                  }}
                />
              }
              label="Remember me"
              sx={{
                "& .MuiFormControlLabel-label": {
                  color: premiumColors.text.secondary,
                  fontSize: "14px",
                },
              }}
            />
            <Link
              to="/auth/forgot-password"
              style={{
                color: premiumColors.primary.light,
                textDecoration: "none",
                fontSize: "14px",
                fontWeight: 500,
              }}
            >
              Forgot password?
            </Link>
          </Box>

          <PremiumButton
            type="submit"
            fullWidth
            disabled={loading}
            sx={{ mb: 3 }}
          >
            {loading ? (
              <CircularProgress size={24} sx={{ color: "white" }} />
            ) : (
              "Sign In"
            )}
          </PremiumButton>
        </Box>

        {/* Divider */}
        <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
          <Divider sx={{ flex: 1, borderColor: premiumColors.components.card.border }} />
          <Typography
            variant="body2"
            sx={{
              color: premiumColors.text.secondary,
              px: 2,
              fontSize: "14px",
            }}
          >
            Or continue with
          </Typography>
          <Divider sx={{ flex: 1, borderColor: premiumColors.components.card.border }} />
        </Box>

        {/* Social Login */}
        <SocialButton
          fullWidth
          onClick={handleGoogleLogin}
          startIcon={<GoogleIcon />}
          sx={{ mb: 3 }}
        >
          Continue with Google
        </SocialButton>

        {/* Sign Up Link */}
        <Typography
          variant="body2"
          sx={{
            textAlign: "center",
            color: premiumColors.text.secondary,
            fontSize: "14px",
          }}
        >
          Don't have an account?{" "}
          <Link
            to="/auth/register"
            style={{
              color: premiumColors.primary.light,
              textDecoration: "none",
              fontWeight: 600,
            }}
          >
            Sign up
          </Link>
        </Typography>
      </GlassCard>
    </AuthContainer>
  );
}

export default PremiumLogin;
