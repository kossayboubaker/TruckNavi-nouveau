/**
 * Vision UI Dashboard Layout
 * Modern glassmorphism layout with responsive design
 */

import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import { Box } from "@mui/material";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";

// Material Dashboard 2 React context
import { useMaterialUIController, setLayout } from "context";

function VisionDashboardLayout({ children }) {
  const [controller, dispatch] = useMaterialUIController();
  const { miniSidenav } = controller;
  const { pathname } = useLocation();

  useEffect(() => {
    setLayout(dispatch, "dashboard");
  }, [pathname]);

  return (
    <MDBox
      sx={({ breakpoints, transitions, functions: { pxToRem } }) => ({
        position: "relative",
        minHeight: "100vh",
        background: "transparent",
        
        // Main content area with proper spacing
        px: { xs: 2, sm: 3 },
        py: 3,
        
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
      {/* Background overlay for better content visibility */}
      <Box
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: "linear-gradient(135deg, rgba(15, 20, 25, 0.1) 0%, rgba(26, 32, 44, 0.05) 100%)",
          pointerEvents: "none",
          zIndex: -1,
        }}
      />

      {/* Main content with Vision UI styling */}
      <Box
        sx={{
          position: "relative",
          zIndex: 1,
          width: "100%",
          maxWidth: { xs: "100%", xl: "calc(100vw - 300px)" },
          mx: "auto",
          
          // Ensure no horizontal overflow
          overflowX: "hidden",
          
          // Responsive height management
          minHeight: "calc(100vh - 120px)",
          
          // Smooth animations
          "& > *": {
            animation: "visionSlideIn 0.6s ease-out",
          },
          
          // Grid system improvements
          "& .MuiGrid-container": {
            "& .MuiGrid-item": {
              paddingLeft: { xs: "8px", sm: "12px" },
              paddingTop: { xs: "8px", sm: "12px" },
            },
          },
        }}
      >
        {children}
      </Box>

      {/* Decorative elements */}
      <Box
        sx={{
          position: "fixed",
          top: "10%",
          right: "-200px",
          width: "400px",
          height: "400px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(0, 212, 255, 0.05) 0%, transparent 70%)",
          pointerEvents: "none",
          zIndex: -1,
          animation: "visionPulse 8s infinite",
        }}
      />
      
      <Box
        sx={{
          position: "fixed",
          bottom: "10%",
          left: "-200px",
          width: "300px",
          height: "300px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(92, 45, 213, 0.05) 0%, transparent 70%)",
          pointerEvents: "none",
          zIndex: -1,
          animation: "visionPulse 12s infinite reverse",
        }}
      />
    </MDBox>
  );
}

// Typechecking props for the VisionDashboardLayout
VisionDashboardLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default VisionDashboardLayout;
