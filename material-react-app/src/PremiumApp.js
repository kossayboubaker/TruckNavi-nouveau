/**
 * Premium Transport Management App
 * Modern application with premium UI components and theme
 */

import { useState, useEffect, useMemo, useContext } from "react";
import { Routes, Route, Navigate, useLocation, useNavigate } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Helmet } from "react-helmet";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Premium theme
import premiumTheme from "assets/theme/premiumTheme";

// Premium components
import PremiumSidenav from "examples/Sidenav/PremiumSidenav";
import PremiumLogin from "auth/login/PremiumLogin";
import PremiumDashboard from "layouts/dashboard/PremiumDashboard";

// Routes and context
import { superAdminRoutes, managerRoutes, driverRoutes } from "routes";
import { useMaterialUIController, setMiniSidenav } from "context";
import { AuthContext } from "context";

// Authentication components
import Register from "auth/register";
import ForgotPassword from "auth/forgot-password";
import ResetPassword from "auth/reset-password";
import GoogleCallback from "auth/login/GoogleCallback";

// Layout components
import UserProfile from "layouts/user-profile";
import ProfileCompany from "layouts/company-profil";
import SuperAdminDashboard from "layouts/dashboards/SuperAdminDashboard";
import ManagerDashboard from "layouts/dashboards/ManagerDashboard";
import DriverDashboard from "layouts/dashboards/DriverDashboard";

// Protected route component
import ProtectedRoute from "examples/ProtectedRoute";

// Services
import { setupAxiosInterceptors } from "./services/interceptor";
import "./services/mockApi";

const getRoleBasedRoutes = (role, disabled = false) => {
  switch (role) {
    case "super_admin":
      return superAdminRoutes;
    case "manager":
      return managerRoutes;
    case "driver":
      return driverRoutes;
    default:
      return [];
  }
};

function PremiumApp() {
  const [controller, dispatch] = useMaterialUIController();
  const { miniSidenav, direction, layout, openConfigurator, sidenavColor, darkMode } = controller;
  const [onMouseEnter, setOnMouseEnter] = useState(false);
  const { pathname } = useLocation();
  const { user, isAuthenticated, setUser, setIsAuthenticated } = useContext(AuthContext);
  const navigate = useNavigate();

  // Handle sidenav mouse enter
  const handleOnMouseEnter = () => {
    if (miniSidenav && !onMouseEnter) {
      setMiniSidenav(dispatch, false);
      setOnMouseEnter(true);
    }
  };

  // Handle sidenav mouse leave
  const handleOnMouseLeave = () => {
    if (onMouseEnter) {
      setMiniSidenav(dispatch, true);
      setOnMouseEnter(false);
    }
  };

  // Setup axios interceptors
  useEffect(() => {
    setupAxiosInterceptors(navigate);
  }, [navigate]);

  // Auto-login check
  useEffect(() => {
    const checkAuthStatus = async () => {
      const token = localStorage.getItem("token");
      const userId = localStorage.getItem("userId");
      const role = localStorage.getItem("role");

      if (token && userId && role) {
        try {
          // Mock user data - in real app, fetch from API
          const userData = {
            id: userId,
            name: "Admin User",
            email: "admin@transport.com",
            role: role,
          };
          setUser(userData);
          setIsAuthenticated(true);
        } catch (error) {
          console.error("Auto-login failed:", error);
          localStorage.clear();
        }
      }
    };

    checkAuthStatus();
  }, [setUser, setIsAuthenticated]);

  // Get routes based on user role
  const routes = useMemo(() => {
    if (!isAuthenticated || !user) return [];
    return getRoleBasedRoutes(user.role);
  }, [isAuthenticated, user]);

  // Configure sidebar brand
  const brandWhite = "/logo-white.png"; // You can add your logo here
  const brandDark = "/logo-dark.png";

  // Show premium login for unauthenticated users
  if (!isAuthenticated) {
    return (
      <ThemeProvider theme={premiumTheme}>
        <CssBaseline />
        <Helmet>
          <title>Transport Management System - Premium</title>
          <meta name="description" content="Premium transport management dashboard" />
        </Helmet>
        
        <Routes>
          <Route path="/auth/login" element={<PremiumLogin />} />
          <Route path="/auth/register" element={<Register />} />
          <Route path="/auth/forgot-password" element={<ForgotPassword />} />
          <Route path="/auth/reset-password" element={<ResetPassword />} />
          <Route path="/auth/google/callback" element={<GoogleCallback />} />
          <Route path="*" element={<Navigate to="/auth/login" />} />
        </Routes>

        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
          toastStyle={{
            backgroundColor: "rgba(15, 20, 30, 0.95)",
            backdropFilter: "blur(20px)",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            borderRadius: "12px",
            color: "#ffffff",
          }}
        />
      </ThemeProvider>
    );
  }

  return (
    <ThemeProvider theme={premiumTheme}>
      <CssBaseline />
      <Helmet>
        <title>Transport Management System - Premium Dashboard</title>
        <meta name="description" content="Premium transport management dashboard" />
      </Helmet>

      {/* Premium Sidebar */}
      {layout === "dashboard" && (
        <>
          <PremiumSidenav
            color={sidenavColor}
            brand={darkMode ? brandWhite : brandDark}
            brandName="Transport Pro"
            routes={routes}
            onMouseEnter={handleOnMouseEnter}
            onMouseLeave={handleOnMouseLeave}
          />
        </>
      )}

      <Routes>
        {/* Dashboard Routes */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <PremiumDashboard />
            </ProtectedRoute>
          }
        />

        {/* Role-based dashboard routes */}
        <Route
          path="/dashboard/superadmin"
          element={
            <ProtectedRoute requiredRole="super_admin">
              <SuperAdminDashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/dashboard/manager"
          element={
            <ProtectedRoute requiredRole="manager">
              <ManagerDashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/dashboard/driver"
          element={
            <ProtectedRoute requiredRole="driver">
              <DriverDashboard />
            </ProtectedRoute>
          }
        />

        {/* Profile Routes */}
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <UserProfile />
            </ProtectedRoute>
          }
        />
        <Route
          path="/company-profile"
          element={
            <ProtectedRoute>
              <ProfileCompany />
            </ProtectedRoute>
          }
        />

        {/* Dynamic routes based on user role */}
        {routes.map(({ route, component, key }) => (
          <Route
            path={route}
            element={
              <ProtectedRoute key={key}>
                {component}
              </ProtectedRoute>
            }
            key={key}
          />
        ))}

        {/* Default redirect */}
        <Route path="/" element={<Navigate to="/dashboard" />} />
        <Route path="*" element={<Navigate to="/dashboard" />} />
      </Routes>

      {/* Toast Notifications */}
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        toastStyle={{
          backgroundColor: "rgba(15, 20, 30, 0.95)",
          backdropFilter: "blur(20px)",
          border: "1px solid rgba(255, 255, 255, 0.1)",
          borderRadius: "12px",
          color: "#ffffff",
        }}
      />
    </ThemeProvider>
  );
}

export default PremiumApp;
