/**
 * Premium Sidebar Component
 * Modern sidebar with glassmorphism and gradient design
 * Inspired by Vision UI and premium dashboard examples
 */

import { useEffect, useState } from "react";
import { useLocation, NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import {
  List,
  Divider,
  Link,
  Icon,
  Box,
  Typography,
  Drawer,
  useMediaQuery,
  useTheme,
  Avatar,
  Collapse,
  ListItem,
  ListItemIcon,
  ListItemText,
  Tooltip,
} from "@mui/material";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Material Dashboard 2 React context
import {
  useMaterialUIController,
  setMiniSidenav,
} from "context";

// Translation
import { useTranslation } from "react-i18next";

// Icons
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import LogoutIcon from "@mui/icons-material/Logout";
import SettingsIcon from "@mui/icons-material/Settings";

// Premium colors
import premiumColors from "assets/theme/base/premiumColors";

function PremiumSidenav({ color = "info", brand = "", brandName, routes, ...rest }) {
  const [controller, dispatch] = useMaterialUIController();
  const { miniSidenav } = controller;
  const location = useLocation();
  const { t } = useTranslation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("xl"));
  
  const [openSubmenu, setOpenSubmenu] = useState({});

  const collapseName = location.pathname.replace("/", "");

  const closeSidenav = () => setMiniSidenav(dispatch, true);

  useEffect(() => {
    function handleMiniSidenav() {
      setMiniSidenav(dispatch, window.innerWidth < 1200);
    }

    window.addEventListener("resize", handleMiniSidenav);
    handleMiniSidenav();

    return () => window.removeEventListener("resize", handleMiniSidenav);
  }, [dispatch, location]);

  const handleSubmenuToggle = (key) => {
    setOpenSubmenu(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  // Brand section with logo and title
  const brand_section = (
    <MDBox
      sx={{
        padding: "24px 20px",
        textAlign: "center",
        borderBottom: `1px solid ${premiumColors.sidebar.border}`,
        background: "rgba(255, 255, 255, 0.05)",
        backdropFilter: "blur(10px)",
      }}
    >
      {brand && (
        <MDBox
          component={Link}
          href="/"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: miniSidenav ? "center" : "flex-start",
            textDecoration: "none",
          }}
        >
          <Box
            component="img"
            src={brand}
            alt="Brand"
            sx={{
              width: miniSidenav ? "32px" : "40px",
              height: miniSidenav ? "32px" : "40px",
              borderRadius: "8px",
              mr: miniSidenav ? 0 : 2,
            }}
          />
          {!miniSidenav && (
            <Typography
              variant="h5"
              sx={{
                background: premiumColors.primary.gradient,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                fontWeight: "bold",
                fontSize: "1.25rem",
              }}
            >
              {brandName}
            </Typography>
          )}
        </MDBox>
      )}
    </MDBox>
  );

  // Navigation items renderer
  const renderNavItems = (routes) =>
    routes.map(({ type, nameKey, key, icon, route, component, noCollapse, submenu }) => {
      let returnValue;

      if (type === "collapse") {
        const isActive = collapseName === key;
        const hasSubmenu = submenu && submenu.length > 0;

        returnValue = (
          <Box key={key}>
            <ListItem
              component={hasSubmenu ? "div" : NavLink}
              to={hasSubmenu ? undefined : route}
              button
              onClick={hasSubmenu ? () => handleSubmenuToggle(key) : undefined}
              sx={{
                borderRadius: "12px",
                margin: "4px 12px",
                padding: "12px 16px",
                transition: "all 0.3s ease",
                backgroundColor: isActive ? "rgba(123, 66, 246, 0.2)" : "transparent",
                border: isActive ? `1px solid ${premiumColors.primary.light}` : "1px solid transparent",
                "&:hover": {
                  backgroundColor: "rgba(255, 255, 255, 0.08)",
                  transform: miniSidenav ? "scale(1.05)" : "translateX(8px)",
                  border: `1px solid ${premiumColors.primary.light}`,
                },
                "&.active": {
                  background: premiumColors.sidebar.itemActive,
                  boxShadow: "0 4px 16px rgba(123, 66, 246, 0.3)",
                },
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: miniSidenav ? "unset" : "40px",
                  color: isActive ? "#fff" : premiumColors.text.secondary,
                  justifyContent: "center",
                }}
              >
                {typeof icon === "string" ? (
                  <Icon
                    sx={{
                      fontSize: "20px",
                      color: isActive ? "#fff" : premiumColors.text.secondary,
                    }}
                  >
                    {icon}
                  </Icon>
                ) : (
                  icon
                )}
              </ListItemIcon>
              
              {!miniSidenav && (
                <>
                  <ListItemText
                    primary={t(nameKey)}
                    sx={{
                      "& .MuiListItemText-primary": {
                        fontSize: "14px",
                        fontWeight: isActive ? 600 : 500,
                        color: isActive ? "#fff" : premiumColors.text.secondary,
                      },
                    }}
                  />
                  {hasSubmenu && (
                    openSubmenu[key] ? <ExpandLess /> : <ExpandMore />
                  )}
                </>
              )}
            </ListItem>

            {/* Submenu */}
            {hasSubmenu && !miniSidenav && (
              <Collapse in={openSubmenu[key]} timeout="auto" unmountOnExit>
                <List sx={{ pl: 2 }}>
                  {submenu.map((subItem) => (
                    <ListItem
                      key={subItem.key}
                      component={NavLink}
                      to={subItem.route}
                      button
                      sx={{
                        borderRadius: "8px",
                        margin: "2px 8px",
                        padding: "8px 16px",
                        transition: "all 0.3s ease",
                        "&:hover": {
                          backgroundColor: "rgba(255, 255, 255, 0.05)",
                          transform: "translateX(4px)",
                        },
                      }}
                    >
                      <ListItemIcon sx={{ minWidth: "32px" }}>
                        <Box
                          sx={{
                            width: "6px",
                            height: "6px",
                            borderRadius: "50%",
                            backgroundColor: premiumColors.primary.light,
                          }}
                        />
                      </ListItemIcon>
                      <ListItemText
                        primary={t(subItem.nameKey)}
                        sx={{
                          "& .MuiListItemText-primary": {
                            fontSize: "13px",
                            color: premiumColors.text.secondary,
                          },
                        }}
                      />
                    </ListItem>
                  ))}
                </List>
              </Collapse>
            )}
          </Box>
        );
      } else if (type === "title") {
        returnValue = (
          <Typography
            key={key}
            sx={{
              fontSize: "12px",
              fontWeight: 600,
              color: premiumColors.text.hint,
              textTransform: "uppercase",
              letterSpacing: "1px",
              margin: "24px 20px 12px 20px",
              display: miniSidenav ? "none" : "block",
            }}
          >
            {t(nameKey)}
          </Typography>
        );
      } else if (type === "divider") {
        returnValue = (
          <Divider
            key={key}
            sx={{
              margin: "16px 20px",
              borderColor: premiumColors.sidebar.border,
            }}
          />
        );
      }

      return returnValue;
    });

  // Bottom section with user info and settings
  const bottomSection = (
    <MDBox
      sx={{
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        padding: "16px",
        borderTop: `1px solid ${premiumColors.sidebar.border}`,
        background: "rgba(0, 0, 0, 0.2)",
        backdropFilter: "blur(10px)",
      }}
    >
      {!miniSidenav ? (
        <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
          {/* User Profile Section */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 2,
              padding: "12px",
              borderRadius: "12px",
              background: "rgba(255, 255, 255, 0.05)",
              border: `1px solid ${premiumColors.sidebar.border}`,
            }}
          >
            <Avatar
              sx={{
                width: 32,
                height: 32,
                background: premiumColors.primary.gradient,
              }}
            >
              U
            </Avatar>
            <Box sx={{ flex: 1, minWidth: 0 }}>
              <Typography
                variant="body2"
                sx={{
                  color: premiumColors.text.primary,
                  fontWeight: 500,
                  fontSize: "14px",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
              >
                Admin User
              </Typography>
              <Typography
                variant="caption"
                sx={{
                  color: premiumColors.text.hint,
                  fontSize: "12px",
                }}
              >
                Super Admin
              </Typography>
            </Box>
          </Box>

          {/* Quick Actions */}
          <Box sx={{ display: "flex", gap: 1 }}>
            <Tooltip title="Settings">
              <Box
                sx={{
                  flex: 1,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "8px",
                  borderRadius: "8px",
                  background: "rgba(255, 255, 255, 0.05)",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    background: "rgba(255, 255, 255, 0.1)",
                  },
                }}
              >
                <SettingsIcon sx={{ fontSize: "16px", color: premiumColors.text.secondary }} />
              </Box>
            </Tooltip>
            <Tooltip title="Logout">
              <Box
                sx={{
                  flex: 1,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "8px",
                  borderRadius: "8px",
                  background: "rgba(244, 67, 54, 0.1)",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    background: "rgba(244, 67, 54, 0.2)",
                  },
                }}
              >
                <LogoutIcon sx={{ fontSize: "16px", color: "#f44336" }} />
              </Box>
            </Tooltip>
          </Box>
        </Box>
      ) : (
        <Box sx={{ display: "flex", flexDirection: "column", gap: 1, alignItems: "center" }}>
          <Avatar
            sx={{
              width: 32,
              height: 32,
              background: premiumColors.primary.gradient,
            }}
          >
            U
          </Avatar>
          <Box sx={{ display: "flex", gap: 0.5 }}>
            <Tooltip title="Settings">
              <Box
                sx={{
                  padding: "6px",
                  borderRadius: "6px",
                  background: "rgba(255, 255, 255, 0.05)",
                  cursor: "pointer",
                  "&:hover": {
                    background: "rgba(255, 255, 255, 0.1)",
                  },
                }}
              >
                <SettingsIcon sx={{ fontSize: "14px", color: premiumColors.text.secondary }} />
              </Box>
            </Tooltip>
            <Tooltip title="Logout">
              <Box
                sx={{
                  padding: "6px",
                  borderRadius: "6px",
                  background: "rgba(244, 67, 54, 0.1)",
                  cursor: "pointer",
                  "&:hover": {
                    background: "rgba(244, 67, 54, 0.2)",
                  },
                }}
              >
                <LogoutIcon sx={{ fontSize: "14px", color: "#f44336" }} />
              </Box>
            </Tooltip>
          </Box>
        </Box>
      )}
    </MDBox>
  );

  return (
    <Drawer
      {...rest}
      variant={isMobile ? "temporary" : "permanent"}
      anchor="left"
      open={!miniSidenav}
      onClose={closeSidenav}
      sx={{
        "& .MuiDrawer-paper": {
          width: miniSidenav ? 80 : 280,
          transition: "width 0.3s ease",
          background: premiumColors.sidebar.background,
          border: "none",
          borderRight: `1px solid ${premiumColors.sidebar.border}`,
          boxShadow: "4px 0 20px rgba(0, 0, 0, 0.3)",
          position: "relative",
          height: "100vh",
          overflow: "hidden",
        },
      }}
    >
      {brand_section}
      
      <MDBox
        sx={{
          flex: 1,
          overflowY: "auto",
          paddingBottom: "140px", // Space for bottom section
          "&::-webkit-scrollbar": {
            width: "4px",
          },
          "&::-webkit-scrollbar-track": {
            background: "transparent",
          },
          "&::-webkit-scrollbar-thumb": {
            background: premiumColors.primary.gradient,
            borderRadius: "2px",
          },
        }}
      >
        <List sx={{ padding: "16px 0" }}>
          {renderNavItems(routes)}
        </List>
      </MDBox>

      {bottomSection}
    </Drawer>
  );
}

PremiumSidenav.propTypes = {
  color: PropTypes.oneOf(["primary", "secondary", "info", "success", "warning", "error", "dark"]),
  brand: PropTypes.string,
  brandName: PropTypes.string.isRequired,
  routes: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default PremiumSidenav;
