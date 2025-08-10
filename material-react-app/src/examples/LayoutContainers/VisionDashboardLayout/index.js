/**
 * Vision UI Dashboard Layout - Professional Modern Design
 * Ultra-modern glassmorphism layout with responsive design and no scroll
 */

import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import { Box, useTheme } from "@mui/material";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";

// Material Dashboard 2 React context
import { useMaterialUIController, setLayout } from "context";

function VisionDashboardLayout({ children }) {
  const [controller, dispatch] = useMaterialUIController();
  const { miniSidenav } = controller;
  const { pathname } = useLocation();
  const theme = useTheme();

  useEffect(() => {
    setLayout(dispatch, "dashboard");
  }, [pathname]);

  return (
    <>
      {/* Main Background */}
      <Box
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: "linear-gradient(135deg, #0a0e1a 0%, #1a1f2e 25%, #2a2f3e 50%, #1a1f2e 75%, #0a0e1a 100%)",
          zIndex: -10,
        }}
      />

      {/* Animated Background Elements */}
      <Box
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          overflow: "hidden",
          pointerEvents: "none",
          zIndex: -5,
        }}
      >
        {/* Floating orbs */}
        <Box
          sx={{
            position: "absolute",
            top: "15%",
            right: "-200px",
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(0, 245, 255, 0.08) 0%, transparent 70%)",
            animation: "visionPulse 10s infinite, visionFloat 6s infinite ease-in-out",
          }}
        />

        <Box
          sx={{
            position: "absolute",
            bottom: "10%",
            left: "-250px",
            width: "400px",
            height: "400px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(156, 39, 176, 0.06) 0%, transparent 70%)",
            animation: "visionPulse 14s infinite reverse, visionFloat 8s infinite ease-in-out reverse",
          }}
        />

        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "300px",
            height: "300px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(76, 175, 80, 0.04) 0%, transparent 70%)",
            animation: "visionPulse 18s infinite, visionFloat 10s infinite ease-in-out",
          }}
        />

        {/* Grid pattern overlay */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: `
              linear-gradient(rgba(255, 255, 255, 0.01) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255, 255, 255, 0.01) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
            opacity: 0.3,
          }}
        />
      </Box>

      {/* Main Layout Container */}
      <MDBox
        sx={({ breakpoints, transitions, functions: { pxToRem } }) => ({
          position: "relative",
          minHeight: "100vh",
          maxHeight: "100vh",
          overflow: "hidden",
          background: "transparent",

          // Main content area with proper spacing
          px: { xs: 1.5, sm: 2, md: 3 },
          py: { xs: 2, sm: 3 },

          // Responsive sidebar spacing
          [breakpoints.up("xl")]: {
            marginLeft: miniSidenav ? pxToRem(80) : pxToRem(274),
            transition: transitions.create(["margin-left", "margin-right"], {
              easing: transitions.easing.easeInOut,
              duration: transitions.duration.standard,
            }),
          },

          // Smooth transitions
          transition: transitions.create(["margin-left"], {
            easing: transitions.easing.easeInOut,
            duration: transitions.duration.standard,
          }),
        })}
      >
        {/* Scrollable Content Container */}
        <Box
          sx={{
            position: "relative",
            zIndex: 1,
            width: "100%",
            maxWidth: { xs: "100%", xl: "calc(100vw - 320px)" },
            mx: "auto",

            // Perfect height management without scroll
            height: "calc(100vh - 60px)",
            maxHeight: "calc(100vh - 60px)",
            overflowY: "auto",
            overflowX: "hidden",

            // Custom scrollbar styling
            "&::-webkit-scrollbar": {
              width: "6px",
            },
            "&::-webkit-scrollbar-track": {
              background: "rgba(255, 255, 255, 0.05)",
              borderRadius: "3px",
            },
            "&::-webkit-scrollbar-thumb": {
              background: "rgba(0, 245, 255, 0.3)",
              borderRadius: "3px",
              transition: "all 0.3s ease",
              "&:hover": {
                background: "rgba(0, 245, 255, 0.5)",
              },
            },

            // Smooth scroll behavior
            scrollBehavior: "smooth",

            // Content animations
            "& > *": {
              animation: "visionSlideIn 0.6s ease-out",
            },

            // Grid system improvements for tight spacing
            "& .MuiGrid-container": {
              margin: "0 !important",
              width: "100% !important",
              "& .MuiGrid-item": {
                paddingLeft: { xs: "6px", sm: "8px", md: "12px" },
                paddingTop: { xs: "6px", sm: "8px", md: "12px" },
              },
            },

            // Responsive spacing adjustments
            "& .MuiBox-root": {
              "& .MuiGrid-container": {
                "& .MuiGrid-item": {
                  marginBottom: { xs: "8px", sm: "12px" },
                },
              },
            },
          }}
        >
          {children}
        </Box>

        {/* Decorative corner elements */}
        <Box
          sx={{
            position: "fixed",
            top: 0,
            right: 0,
            width: "200px",
            height: "200px",
            background: "linear-gradient(225deg, rgba(0, 245, 255, 0.1) 0%, transparent 50%)",
            pointerEvents: "none",
            zIndex: -1,
            clipPath: "polygon(100% 0%, 0% 100%, 100% 100%)",
          }}
        />

        <Box
          sx={{
            position: "fixed",
            bottom: 0,
            left: 0,
            width: "200px",
            height: "200px",
            background: "linear-gradient(45deg, rgba(156, 39, 176, 0.1) 0%, transparent 50%)",
            pointerEvents: "none",
            zIndex: -1,
            clipPath: "polygon(0% 0%, 0% 100%, 100% 100%)",
          }}
        />
      </MDBox>

      {/* Global CSS Animations */}
      <style jsx global>{`
        @keyframes visionSlideIn {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes visionPulse {
          0%, 100% {
            opacity: 0.1;
            transform: scale(1);
          }
          50% {
            opacity: 0.2;
            transform: scale(1.05);
          }
        }

        @keyframes visionFloat {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        /* Responsive improvements */
        @media (max-width: 768px) {
          .MuiGrid-container .MuiGrid-item {
            margin-bottom: 8px !important;
          }
        }

        @media (max-width: 480px) {
          .MuiGrid-container .MuiGrid-item {
            margin-bottom: 6px !important;
          }
        }

        /* Accessibility improvements */
        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </>
  );
}

// Typechecking props for the VisionDashboardLayout
VisionDashboardLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default VisionDashboardLayout;
