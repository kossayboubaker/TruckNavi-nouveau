/**
 * Premium Navbar Component
 * Modern header with glassmorphism, search, and user menu
 * Inspired by premium dashboard designs
 */

import { useState, useEffect, useContext } from "react";
import { useLocation, Link, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import {
  AppBar,
  Toolbar,
  IconButton,
  Menu,
  MenuItem,
  Badge,
  Avatar,
  Box,
  Typography,
  InputBase,
  Tooltip,
  Divider,
  ListItemIcon,
  ListItemText,
  Switch,
  FormControlLabel,
} from "@mui/material";
import { styled, alpha } from "@mui/material/styles";

// Icons
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SettingsIcon from "@mui/icons-material/Settings";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LogoutIcon from "@mui/icons-material/Logout";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import MenuIcon from "@mui/icons-material/Menu";
import FullscreenIcon from "@mui/icons-material/Fullscreen";
import FullscreenExitIcon from "@mui/icons-material/FullscreenExit";
import LanguageIcon from "@mui/icons-material/Language";

// Material Dashboard components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import Breadcrumbs from "examples/Breadcrumbs";

// Context
import { useMaterialUIController, setMiniSidenav, setDarkMode } from "context";
import { AuthContext } from "context";

// Premium colors
import premiumColors from "assets/theme/base/premiumColors";

// Translation
import { useTranslation } from "react-i18next";

// Styled components
const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: "12px",
  backgroundColor: alpha(theme.palette.common.white, 0.1),
  backdropFilter: "blur(10px)",
  border: "1px solid rgba(255, 255, 255, 0.15)",
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    border: "1px solid rgba(255, 255, 255, 0.25)",
  },
  "&:focus-within": {
    border: `1px solid ${premiumColors.primary.light}`,
    boxShadow: `0 0 0 2px ${premiumColors.primary.light}20`,
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
    minWidth: "300px",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: premiumColors.text.secondary,
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: premiumColors.text.primary,
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    fontSize: "14px",
    "&::placeholder": {
      color: premiumColors.text.secondary,
      opacity: 1,
    },
  },
}));

const GlassIconButton = styled(IconButton)(({ theme }) => ({
  backgroundColor: "rgba(255, 255, 255, 0.08)",
  backdropFilter: "blur(10px)",
  border: "1px solid rgba(255, 255, 255, 0.1)",
  borderRadius: "10px",
  margin: "0 4px",
  transition: "all 0.3s ease",
  "&:hover": {
    backgroundColor: "rgba(255, 255, 255, 0.15)",
    border: "1px solid rgba(255, 255, 255, 0.25)",
    transform: "translateY(-1px)",
  },
}));

function PremiumNavbar({ absolute, light, isMini, ...rest }) {
  const [controller, dispatch] = useMaterialUIController();
  const { miniSidenav, transparentNavbar, fixedNavbar, openConfigurator, darkMode } = controller;
  const [navbarType, setNavbarType] = useState();
  const [anchorEl, setAnchorEl] = useState(null);
  const [notificationAnchor, setNotificationAnchor] = useState(null);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const { user, logout } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();

  useEffect(() => {
    if (fixedNavbar) {
      setNavbarType("sticky");
    } else {
      setNavbarType("static");
    }

    function handleTransparentNavbar() {
      setTransparentNavbar(dispatch, (fixedNavbar && window.scrollY === 0) || !fixedNavbar);
    }

    window.addEventListener("scroll", handleTransparentNavbar);
    handleTransparentNavbar();

    return () => window.removeEventListener("scroll", handleTransparentNavbar);
  }, [dispatch, fixedNavbar]);

  const handleMiniSidenav = () => setMiniSidenav(dispatch, !miniSidenav);
  const handleUserMenu = (event) => setAnchorEl(event.currentTarget);
  const handleCloseUserMenu = () => setAnchorEl(null);
  const handleNotificationMenu = (event) => setNotificationAnchor(event.currentTarget);
  const handleCloseNotificationMenu = () => setNotificationAnchor(null);

  const handleLogout = () => {
    logout();
    handleCloseUserMenu();
  };

  const handleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  const handleLanguageChange = (lang) => {
    i18n.changeLanguage(lang);
    handleCloseUserMenu();
  };

  const handleDarkModeToggle = () => {
    setDarkMode(dispatch, !darkMode);
  };

  // Mock notifications
  const notifications = [
    { id: 1, title: "New delivery assigned", time: "2 min ago", type: "info" },
    { id: 2, title: "Route optimization complete", time: "5 min ago", type: "success" },
    { id: 3, title: "Vehicle maintenance required", time: "10 min ago", type: "warning" },
  ];

  const getNotificationColor = (type) => {
    switch (type) {
      case "success": return premiumColors.status.success.main;
      case "warning": return premiumColors.status.warning.main;
      case "error": return premiumColors.status.error.main;
      default: return premiumColors.status.info.main;
    }
  };

  return (
    <AppBar
      position={absolute ? "absolute" : navbarType}
      color="inherit"
      sx={{
        background: transparentNavbar 
          ? "rgba(255, 255, 255, 0.05)" 
          : "rgba(255, 255, 255, 0.1)",
        backdropFilter: "blur(20px)",
        border: "1px solid rgba(255, 255, 255, 0.1)",
        borderRadius: "0 0 16px 16px",
        boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
        transition: "all 0.3s ease",
        zIndex: 1100,
      }}
      {...rest}
    >
      <Toolbar
        sx={{
          minHeight: "64px !important",
          padding: "0 24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Left section */}
        <MDBox sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          {isMini && (
            <GlassIconButton
              size="small"
              onClick={handleMiniSidenav}
              sx={{ display: { xs: "block", xl: "none" } }}
            >
              <MenuIcon sx={{ fontSize: "20px", color: premiumColors.text.primary }} />
            </GlassIconButton>
          )}

          {/* Breadcrumbs */}
          <Box sx={{ display: { xs: "none", md: "block" } }}>
            <Breadcrumbs
              icon="home"
              title={location.pathname.split("/").pop() || "Dashboard"}
              route={location.pathname.split("/")}
              light={light}
            />
          </Box>
        </MDBox>

        {/* Center section - Search */}
        <Box sx={{ display: { xs: "none", sm: "block" }, flex: 1, maxWidth: "400px", mx: 3 }}>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder={t("Search trucks, routes, drivers...")}
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
        </Box>

        {/* Right section */}
        <MDBox sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          {/* Mobile search */}
          <GlassIconButton
            size="small"
            sx={{ display: { xs: "block", sm: "none" } }}
          >
            <SearchIcon sx={{ fontSize: "20px", color: premiumColors.text.primary }} />
          </GlassIconButton>

          {/* Fullscreen toggle */}
          <Tooltip title={isFullscreen ? "Exit Fullscreen" : "Fullscreen"}>
            <GlassIconButton size="small" onClick={handleFullscreen}>
              {isFullscreen ? (
                <FullscreenExitIcon sx={{ fontSize: "20px", color: premiumColors.text.primary }} />
              ) : (
                <FullscreenIcon sx={{ fontSize: "20px", color: premiumColors.text.primary }} />
              )}
            </GlassIconButton>
          </Tooltip>

          {/* Dark mode toggle */}
          <Tooltip title="Toggle Theme">
            <GlassIconButton size="small" onClick={handleDarkModeToggle}>
              {darkMode ? (
                <LightModeIcon sx={{ fontSize: "20px", color: premiumColors.text.primary }} />
              ) : (
                <DarkModeIcon sx={{ fontSize: "20px", color: premiumColors.text.primary }} />
              )}
            </GlassIconButton>
          </Tooltip>

          {/* Notifications */}
          <Tooltip title="Notifications">
            <GlassIconButton size="small" onClick={handleNotificationMenu}>
              <Badge
                badgeContent={notifications.length}
                sx={{
                  "& .MuiBadge-badge": {
                    background: premiumColors.status.error.gradient,
                    color: "white",
                    fontSize: "10px",
                  },
                }}
              >
                <NotificationsIcon sx={{ fontSize: "20px", color: premiumColors.text.primary }} />
              </Badge>
            </GlassIconButton>
          </Tooltip>

          {/* User Menu */}
          <Tooltip title="Account">
            <GlassIconButton size="small" onClick={handleUserMenu}>
              <Avatar
                sx={{
                  width: 28,
                  height: 28,
                  background: premiumColors.primary.gradient,
                  fontSize: "14px",
                  fontWeight: "bold",
                }}
              >
                {user?.name?.[0] || "U"}
              </Avatar>
            </GlassIconButton>
          </Tooltip>
        </MDBox>
      </Toolbar>

      {/* Notifications Menu */}
      <Menu
        anchorEl={notificationAnchor}
        open={Boolean(notificationAnchor)}
        onClose={handleCloseNotificationMenu}
        sx={{
          "& .MuiPaper-root": {
            background: premiumColors.background.paper,
            backdropFilter: "blur(20px)",
            border: `1px solid ${premiumColors.components.card.border}`,
            borderRadius: "12px",
            minWidth: "320px",
            mt: 1,
          },
        }}
      >
        <Box sx={{ p: 2 }}>
          <Typography
            variant="h6"
            sx={{
              color: premiumColors.text.primary,
              fontSize: "16px",
              fontWeight: 600,
              mb: 1,
            }}
          >
            Notifications ({notifications.length})
          </Typography>
        </Box>
        <Divider sx={{ borderColor: premiumColors.components.card.border }} />
        
        {notifications.map((notification) => (
          <MenuItem
            key={notification.id}
            sx={{
              padding: "12px 16px",
              "&:hover": {
                backgroundColor: "rgba(255, 255, 255, 0.05)",
              },
            }}
          >
            <Box sx={{ display: "flex", alignItems: "flex-start", gap: 2, width: "100%" }}>
              <Box
                sx={{
                  width: "8px",
                  height: "8px",
                  borderRadius: "50%",
                  backgroundColor: getNotificationColor(notification.type),
                  mt: 1,
                  flexShrink: 0,
                }}
              />
              <Box sx={{ flex: 1 }}>
                <Typography
                  variant="body2"
                  sx={{
                    color: premiumColors.text.primary,
                    fontSize: "14px",
                    fontWeight: 500,
                    mb: 0.5,
                  }}
                >
                  {notification.title}
                </Typography>
                <Typography
                  variant="caption"
                  sx={{
                    color: premiumColors.text.secondary,
                    fontSize: "12px",
                  }}
                >
                  {notification.time}
                </Typography>
              </Box>
            </Box>
          </MenuItem>
        ))}
        
        <Divider sx={{ borderColor: premiumColors.components.card.border }} />
        <MenuItem
          sx={{
            justifyContent: "center",
            py: 1.5,
            "&:hover": {
              backgroundColor: "rgba(255, 255, 255, 0.05)",
            },
          }}
        >
          <Typography
            variant="body2"
            sx={{
              color: premiumColors.primary.light,
              fontSize: "14px",
              fontWeight: 500,
            }}
          >
            View All Notifications
          </Typography>
        </MenuItem>
      </Menu>

      {/* User Menu */}
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleCloseUserMenu}
        sx={{
          "& .MuiPaper-root": {
            background: premiumColors.background.paper,
            backdropFilter: "blur(20px)",
            border: `1px solid ${premiumColors.components.card.border}`,
            borderRadius: "12px",
            minWidth: "200px",
            mt: 1,
          },
        }}
      >
        {/* User Info */}
        <Box sx={{ p: 2 }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <Avatar
              sx={{
                width: 40,
                height: 40,
                background: premiumColors.primary.gradient,
              }}
            >
              {user?.name?.[0] || "U"}
            </Avatar>
            <Box>
              <Typography
                variant="body2"
                sx={{
                  color: premiumColors.text.primary,
                  fontWeight: 600,
                  fontSize: "14px",
                }}
              >
                {user?.name || "Admin User"}
              </Typography>
              <Typography
                variant="caption"
                sx={{
                  color: premiumColors.text.secondary,
                  fontSize: "12px",
                }}
              >
                {user?.role || "Super Admin"}
              </Typography>
            </Box>
          </Box>
        </Box>
        
        <Divider sx={{ borderColor: premiumColors.components.card.border }} />

        {/* Menu Items */}
        <MenuItem onClick={handleCloseUserMenu}>
          <ListItemIcon>
            <AccountCircleIcon sx={{ fontSize: "20px", color: premiumColors.text.secondary }} />
          </ListItemIcon>
          <ListItemText
            primary="Profile"
            sx={{
              "& .MuiListItemText-primary": {
                color: premiumColors.text.secondary,
                fontSize: "14px",
              },
            }}
          />
        </MenuItem>

        <MenuItem onClick={handleCloseUserMenu}>
          <ListItemIcon>
            <SettingsIcon sx={{ fontSize: "20px", color: premiumColors.text.secondary }} />
          </ListItemIcon>
          <ListItemText
            primary="Settings"
            sx={{
              "& .MuiListItemText-primary": {
                color: premiumColors.text.secondary,
                fontSize: "14px",
              },
            }}
          />
        </MenuItem>

        <MenuItem>
          <ListItemIcon>
            <LanguageIcon sx={{ fontSize: "20px", color: premiumColors.text.secondary }} />
          </ListItemIcon>
          <ListItemText
            primary="Language"
            sx={{
              "& .MuiListItemText-primary": {
                color: premiumColors.text.secondary,
                fontSize: "14px",
              },
            }}
          />
        </MenuItem>

        <Divider sx={{ borderColor: premiumColors.components.card.border }} />

        <MenuItem onClick={handleLogout}>
          <ListItemIcon>
            <LogoutIcon sx={{ fontSize: "20px", color: "#f44336" }} />
          </ListItemIcon>
          <ListItemText
            primary="Logout"
            sx={{
              "& .MuiListItemText-primary": {
                color: "#f44336",
                fontSize: "14px",
              },
            }}
          />
        </MenuItem>
      </Menu>
    </AppBar>
  );
}

PremiumNavbar.defaultProps = {
  absolute: false,
  light: false,
  isMini: false,
};

PremiumNavbar.propTypes = {
  absolute: PropTypes.bool,
  light: PropTypes.bool,
  isMini: PropTypes.bool,
};

export default PremiumNavbar;
