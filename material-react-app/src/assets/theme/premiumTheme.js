/**
 * Premium Theme Configuration
 * Modern dashboard theme inspired by Vision UI and premium designs
 */

import { createTheme } from "@mui/material/styles";
import premiumColors from "./base/premiumColors";
import premiumGlobalStyles from "./components/premiumGlobalStyles";
import breakpoints from "./base/breakpoints";
import typography from "./base/typography";

const premiumTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: premiumColors.primary.main,
      dark: premiumColors.primary.dark,
      light: premiumColors.primary.light,
    },
    secondary: {
      main: premiumColors.secondary.main,
      dark: premiumColors.secondary.dark,
      light: premiumColors.secondary.light,
    },
    background: {
      default: premiumColors.background.main,
      paper: premiumColors.background.paper,
    },
    text: {
      primary: premiumColors.text.primary,
      secondary: premiumColors.text.secondary,
    },
    error: {
      main: premiumColors.status.error.main,
    },
    warning: {
      main: premiumColors.status.warning.main,
    },
    info: {
      main: premiumColors.status.info.main,
    },
    success: {
      main: premiumColors.status.success.main,
    },
  },

  breakpoints: { ...breakpoints },

  typography: {
    ...typography,
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      ...typography.h1,
      fontWeight: 700,
      color: premiumColors.text.primary,
    },
    h2: {
      ...typography.h2,
      fontWeight: 600,
      color: premiumColors.text.primary,
    },
    h3: {
      ...typography.h3,
      fontWeight: 600,
      color: premiumColors.text.primary,
    },
    h4: {
      ...typography.h4,
      fontWeight: 500,
      color: premiumColors.text.primary,
    },
    h5: {
      ...typography.h5,
      fontWeight: 500,
      color: premiumColors.text.primary,
    },
    h6: {
      ...typography.h6,
      fontWeight: 500,
      color: premiumColors.text.primary,
    },
    body1: {
      ...typography.body1,
      color: premiumColors.text.secondary,
    },
    body2: {
      ...typography.body2,
      color: premiumColors.text.secondary,
    },
  },

  components: {
    // Global styles
    MuiCssBaseline: {
      styleOverrides: {
        ...premiumGlobalStyles,
      },
    },

    // AppBar / Header
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "rgba(255, 255, 255, 0.05)",
          backdropFilter: "blur(20px)",
          border: "1px solid rgba(255, 255, 255, 0.1)",
          boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
        },
      },
    },

    // Drawer / Sidebar
    MuiDrawer: {
      styleOverrides: {
        paper: {
          background: premiumColors.sidebar.background,
          border: "none",
          borderRight: `1px solid ${premiumColors.sidebar.border}`,
        },
      },
    },

    // Cards
    MuiCard: {
      styleOverrides: {
        root: {
          background: premiumColors.components.card.background,
          backdropFilter: "blur(20px)",
          border: `1px solid ${premiumColors.components.card.border}`,
          borderRadius: "16px",
          boxShadow: premiumColors.components.card.shadow,
          transition: "all 0.3s ease",
          "&:hover": {
            transform: "translateY(-2px)",
            boxShadow: premiumColors.components.card.glassShadow,
          },
        },
      },
    },

    // Buttons
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "12px",
          textTransform: "none",
          fontWeight: 600,
          padding: "10px 24px",
          transition: "all 0.3s ease",
        },
        containedPrimary: {
          background: premiumColors.components.button.primary,
          boxShadow: "0 4px 16px rgba(123, 66, 246, 0.3)",
          "&:hover": {
            background: premiumColors.components.button.primary,
            transform: "translateY(-2px)",
            boxShadow: "0 8px 25px rgba(123, 66, 246, 0.4)",
          },
        },
        containedSecondary: {
          background: premiumColors.components.button.secondary,
          "&:hover": {
            background: premiumColors.components.button.secondary,
            transform: "translateY(-2px)",
          },
        },
      },
    },

    // Text Fields / Inputs
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            backgroundColor: premiumColors.components.input.background,
            borderRadius: "12px",
            "& fieldset": {
              borderColor: premiumColors.components.input.border,
            },
            "&:hover fieldset": {
              borderColor: "rgba(255, 255, 255, 0.25)",
            },
            "&.Mui-focused fieldset": {
              borderColor: premiumColors.components.input.focus,
              boxShadow: `0 0 0 2px ${premiumColors.components.input.focus}20`,
            },
          },
          "& .MuiInputLabel-root": {
            color: premiumColors.text.secondary,
          },
          "& .MuiInputBase-input": {
            color: premiumColors.text.primary,
          },
        },
      },
    },

    // Tables
    MuiTableContainer: {
      styleOverrides: {
        root: {
          background: premiumColors.components.card.background,
          backdropFilter: "blur(20px)",
          borderRadius: "16px",
          border: `1px solid ${premiumColors.components.card.border}`,
        },
      },
    },

    MuiTableHead: {
      styleOverrides: {
        root: {
          "& .MuiTableCell-head": {
            backgroundColor: "rgba(255, 255, 255, 0.05)",
            color: premiumColors.text.primary,
            fontWeight: 600,
            borderBottom: `1px solid ${premiumColors.components.card.border}`,
          },
        },
      },
    },

    MuiTableRow: {
      styleOverrides: {
        root: {
          "&:hover": {
            backgroundColor: "rgba(255, 255, 255, 0.05)",
          },
          "& .MuiTableCell-root": {
            borderBottom: `1px solid ${premiumColors.components.card.border}`,
            color: premiumColors.text.secondary,
          },
        },
      },
    },

    // List Items (for sidebar)
    MuiListItem: {
      styleOverrides: {
        root: {
          borderRadius: "12px",
          margin: "4px 8px",
          transition: "all 0.3s ease",
          "&:hover": {
            backgroundColor: premiumColors.sidebar.itemHover,
            transform: "translateX(8px)",
          },
          "&.Mui-selected": {
            background: premiumColors.sidebar.itemActive,
            boxShadow: "0 4px 16px rgba(123, 66, 246, 0.3)",
            "&:hover": {
              background: premiumColors.sidebar.itemActive,
            },
          },
        },
      },
    },

    // Chips
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: "8px",
          backdropFilter: "blur(10px)",
        },
        colorPrimary: {
          background: premiumColors.primary.gradient,
          color: "white",
        },
        colorSecondary: {
          background: premiumColors.secondary.gradient,
          color: "white",
        },
      },
    },

    // Paper
    MuiPaper: {
      styleOverrides: {
        root: {
          background: premiumColors.components.card.background,
          backdropFilter: "blur(20px)",
          border: `1px solid ${premiumColors.components.card.border}`,
        },
      },
    },

    // Divider
    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: premiumColors.components.card.border,
        },
      },
    },

    // Menu
    MuiMenu: {
      styleOverrides: {
        paper: {
          background: premiumColors.background.paper,
          backdropFilter: "blur(20px)",
          border: `1px solid ${premiumColors.components.card.border}`,
          borderRadius: "12px",
        },
      },
    },

    // Tooltip
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          backgroundColor: premiumColors.background.paper,
          color: premiumColors.text.primary,
          border: `1px solid ${premiumColors.components.card.border}`,
          borderRadius: "8px",
          backdropFilter: "blur(10px)",
        },
      },
    },
  },

  // Custom theme properties for premium features
  custom: {
    colors: premiumColors,
    gradients: {
      primary: premiumColors.primary.gradient,
      secondary: premiumColors.secondary.gradient,
      background: premiumColors.background.gradient,
    },
    animations: {
      hover: "all 0.3s ease",
      fast: "all 0.2s ease",
      slow: "all 0.5s ease",
    },
  },
});

export default premiumTheme;
