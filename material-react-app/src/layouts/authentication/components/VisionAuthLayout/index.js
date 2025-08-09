/**
 * Vision UI Authentication Layout
 * Modern glassmorphism authentication layout with dark theme
 */

import PropTypes from "prop-types";
import { Box, Container, Grid, Typography, alpha } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import PageLayout from "examples/LayoutContainers/PageLayout";

function VisionAuthLayout({ children }) {
  const { pathname } = useLocation();
  const { t } = useTranslation();

  const getPageTitle = () => {
    if (pathname.includes('/login')) return t("form3.signIn");
    if (pathname.includes('/register')) return t("signUp");
    if (pathname.includes('/forgot-password')) return t("forgotPassword");
    if (pathname.includes('/reset-password')) return t("resetPassword");
    return "Authentication";
  };

  const getPageDescription = () => {
    if (pathname.includes('/login')) return "Welcome back! Please sign in to your account.";
    if (pathname.includes('/register')) return "Create your account to get started.";
    if (pathname.includes('/forgot-password')) return "Enter your email to reset your password.";
    if (pathname.includes('/reset-password')) return "Enter your new password.";
    return "Secure access to your dashboard";
  };

  return (
    <PageLayout>
      {/* Main Background */}
      <Box
        sx={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100vh',
          background: 'linear-gradient(135deg, #0F1419 0%, #1A202C 50%, #2D3748 100%)',
          zIndex: -2,
        }}
      />

      {/* Animated Background Elements */}
      <Box
        sx={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100vh',
          zIndex: -1,
          overflow: 'hidden',
          '&::before': {
            content: '""',
            position: 'absolute',
            width: '800px',
            height: '800px',
            background: 'radial-gradient(circle, rgba(30, 42, 120, 0.3) 0%, transparent 70%)',
            top: '-400px',
            right: '-400px',
            borderRadius: '50%',
            animation: 'float 20s ease-in-out infinite',
          },
          '&::after': {
            content: '""',
            position: 'absolute',
            width: '600px',
            height: '600px',
            background: 'radial-gradient(circle, rgba(92, 45, 213, 0.2) 0%, transparent 70%)',
            bottom: '-300px',
            left: '-300px',
            borderRadius: '50%',
            animation: 'float 25s ease-in-out infinite reverse',
          },
          '@keyframes float': {
            '0%, 100%': {
              transform: 'translateY(0) rotate(0deg)',
            },
            '50%': {
              transform: 'translateY(-30px) rotate(180deg)',
            },
          },
        }}
      />

      {/* Content Container */}
      <Container
        maxWidth="lg"
        sx={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          py: 4,
          position: 'relative',
          zIndex: 1,
        }}
      >
        <Grid container spacing={4} alignItems="center" justifyContent="center">
          {/* Left Side - Branding/Info */}
          <Grid item xs={12} lg={6} sx={{ display: { xs: 'none', lg: 'block' } }}>
            <MDBox sx={{ pr: 4 }}>
              <Typography
                variant="h2"
                sx={{
                  color: 'white',
                  fontWeight: 700,
                  mb: 3,
                  background: 'linear-gradient(135deg, #FFFFFF 0%, #00D4FF 100%)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  fontSize: { xs: '2rem', md: '3rem', lg: '3.5rem' },
                  lineHeight: 1.2,
                }}
              >
                {t("layout.title") || "Fleet Management"}
              </Typography>
              
              <Typography
                variant="h5"
                sx={{
                  color: '#A0AEC0',
                  mb: 4,
                  lineHeight: 1.6,
                  fontWeight: 400,
                }}
              >
                Advanced logistics and delivery tracking system for modern fleet management
              </Typography>

              {/* Feature List */}
              <Box sx={{ mb: 4 }}>
                {[
                  'Real-time vehicle tracking',
                  'Advanced route optimization',
                  'Comprehensive analytics',
                  'Smart notifications system'
                ].map((feature, index) => (
                  <Box
                    key={index}
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      mb: 2,
                      opacity: 0,
                      animation: `slideIn 0.6s ease-out ${index * 0.1}s forwards`,
                      '@keyframes slideIn': {
                        from: {
                          opacity: 0,
                          transform: 'translateX(-20px)',
                        },
                        to: {
                          opacity: 1,
                          transform: 'translateX(0)',
                        },
                      },
                    }}
                  >
                    <Box
                      sx={{
                        width: 8,
                        height: 8,
                        borderRadius: '50%',
                        background: 'linear-gradient(135deg, #00D4FF, #01B574)',
                        mr: 3,
                        boxShadow: '0 0 10px rgba(0, 212, 255, 0.4)',
                      }}
                    />
                    <Typography
                      variant="body1"
                      sx={{
                        color: '#CBD5E0',
                        fontWeight: 500,
                      }}
                    >
                      {feature}
                    </Typography>
                  </Box>
                ))}
              </Box>

              {/* Decorative Stats */}
              <Box sx={{ display: 'flex', gap: 4, mt: 6 }}>
                {[
                  { number: '99.9%', label: 'Uptime' },
                  { number: '24/7', label: 'Support' },
                  { number: '500+', label: 'Fleets' },
                ].map((stat, index) => (
                  <Box key={index} sx={{ textAlign: 'center' }}>
                    <Typography
                      variant="h4"
                      sx={{
                        color: 'white',
                        fontWeight: 700,
                        mb: 1,
                        background: 'linear-gradient(135deg, #5C2DD5, #7B42F6)',
                        backgroundClip: 'text',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                      }}
                    >
                      {stat.number}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: '#A0AEC0',
                        fontSize: '0.875rem',
                        fontWeight: 500,
                      }}
                    >
                      {stat.label}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </MDBox>
          </Grid>

          {/* Right Side - Auth Form */}
          <Grid item xs={12} lg={6}>
            <MDBox
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: { xs: '80vh', lg: 'auto' },
              }}
            >
              {/* Mobile Title */}
              <Box sx={{ display: { xs: 'block', lg: 'none' }, textAlign: 'center', mb: 4 }}>
                <Typography
                  variant="h3"
                  sx={{
                    color: 'white',
                    fontWeight: 700,
                    mb: 2,
                    background: 'linear-gradient(135deg, #FFFFFF 0%, #00D4FF 100%)',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  {getPageTitle()}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: '#A0AEC0',
                    mb: 3,
                  }}
                >
                  {getPageDescription()}
                </Typography>
              </Box>

              {/* Auth Card */}
              <Box
                sx={{
                  width: '100%',
                  maxWidth: '440px',
                  background: 'rgba(26, 32, 44, 0.8)',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '24px',
                  p: { xs: 3, md: 4 },
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
                  position: 'relative',
                  overflow: 'hidden',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '2px',
                    background: 'linear-gradient(90deg, #5C2DD5, #7B42F6, #00D4FF)',
                  },
                }}
              >
                {/* Desktop Title */}
                <Box sx={{ display: { xs: 'none', lg: 'block' }, textAlign: 'center', mb: 4 }}>
                  <Typography
                    variant="h4"
                    sx={{
                      color: 'white',
                      fontWeight: 600,
                      mb: 1,
                    }}
                  >
                    {getPageTitle()}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      color: '#A0AEC0',
                    }}
                  >
                    {getPageDescription()}
                  </Typography>
                </Box>

                {children}
              </Box>

              {/* Additional Links or Info */}
              <Box sx={{ mt: 3, textAlign: 'center' }}>
                <Typography
                  variant="body2"
                  sx={{
                    color: '#718096',
                    fontSize: '0.875rem',
                  }}
                >
                  Secure • Encrypted • Protected
                </Typography>
              </Box>
            </MDBox>
          </Grid>
        </Grid>
      </Container>
    </PageLayout>
  );
}

VisionAuthLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default VisionAuthLayout;
