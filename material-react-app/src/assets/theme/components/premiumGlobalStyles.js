/**
 * Premium Global Styles
 * Global CSS styles for the premium dashboard design
 * Includes glassmorphism, scrollbars, animations, and responsive utilities
 */

import premiumColors from "../base/premiumColors";

const premiumGlobalStyles = {
  // Global CSS reset and body styles
  "html, body": {
    margin: 0,
    padding: 0,
    height: "100%",
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    backgroundColor: premiumColors.background.main,
    color: premiumColors.text.primary,
    scrollBehavior: "smooth",
  },

  "#root": {
    height: "100%",
    minHeight: "100vh",
    background: premiumColors.background.gradient,
  },

  // Custom scrollbar styling
  "*::-webkit-scrollbar": {
    width: "8px",
    height: "8px",
  },

  "*::-webkit-scrollbar-track": {
    background: "rgba(255, 255, 255, 0.05)",
    borderRadius: "10px",
  },

  "*::-webkit-scrollbar-thumb": {
    background: premiumColors.primary.gradient,
    borderRadius: "10px",
    border: "2px solid transparent",
    backgroundClip: "content-box",
  },

  "*::-webkit-scrollbar-thumb:hover": {
    background: premiumColors.secondary.gradient,
  },

  // Glassmorphism utility classes
  ".glass-card": {
    background: "rgba(255, 255, 255, 0.1) !important",
    backdropFilter: "blur(20px)",
    border: "1px solid rgba(255, 255, 255, 0.15)",
    borderRadius: "16px",
    boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
  },

  ".glass-card-dark": {
    background: "rgba(0, 0, 0, 0.2) !important",
    backdropFilter: "blur(20px)",
    border: "1px solid rgba(255, 255, 255, 0.1)",
    borderRadius: "16px",
    boxShadow: "0 8px 32px rgba(0, 0, 0, 0.5)",
  },

  // Gradient text utility
  ".gradient-text": {
    background: premiumColors.primary.gradient,
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
    fontWeight: "bold",
  },

  // Premium button styles
  ".premium-button": {
    background: premiumColors.components.button.primary,
    border: "none",
    borderRadius: "12px",
    padding: "12px 24px",
    color: "white",
    fontWeight: "600",
    fontSize: "14px",
    cursor: "pointer",
    transition: "all 0.3s ease",
    boxShadow: "0 4px 16px rgba(123, 66, 246, 0.3)",
    
    "&:hover": {
      transform: "translateY(-2px)",
      boxShadow: "0 8px 25px rgba(123, 66, 246, 0.4)",
    },
  },

  // Stat card animations
  ".stat-card": {
    transition: "all 0.3s ease",
    
    "&:hover": {
      transform: "translateY(-5px)",
      boxShadow: "0 12px 40px rgba(0, 0, 0, 0.4)",
    },
  },

  // Table row hover effects
  ".premium-table-row": {
    transition: "all 0.2s ease",
    borderRadius: "8px",
    
    "&:hover": {
      backgroundColor: "rgba(255, 255, 255, 0.05)",
      transform: "translateX(4px)",
    },
  },

  // Navigation item styles
  ".nav-item": {
    borderRadius: "12px",
    margin: "4px 8px",
    transition: "all 0.3s ease",
    
    "&:hover": {
      backgroundColor: "rgba(255, 255, 255, 0.1)",
      transform: "translateX(8px)",
    },
    
    "&.active": {
      background: premiumColors.sidebar.itemActive,
      boxShadow: "0 4px 16px rgba(123, 66, 246, 0.3)",
    },
  },

  // Loading animations
  "@keyframes shimmer": {
    "0%": {
      backgroundPosition: "-200px 0",
    },
    "100%": {
      backgroundPosition: "calc(200px + 100%) 0",
    },
  },

  ".shimmer": {
    background: "linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent)",
    backgroundSize: "200px 100%",
    animation: "shimmer 1.5s infinite",
  },

  // Fade in animation
  "@keyframes fadeInUp": {
    "0%": {
      opacity: 0,
      transform: "translateY(30px)",
    },
    "100%": {
      opacity: 1,
      transform: "translateY(0)",
    },
  },

  ".fade-in-up": {
    animation: "fadeInUp 0.6s ease forwards",
  },

  // Responsive utilities
  ".mobile-only": {
    "@media (min-width: 768px)": {
      display: "none !important",
    },
  },

  ".desktop-only": {
    "@media (max-width: 767px)": {
      display: "none !important",
    },
  },

  // Chart container styling
  ".chart-container": {
    background: "rgba(255, 255, 255, 0.05)",
    borderRadius: "16px",
    padding: "20px",
    border: "1px solid rgba(255, 255, 255, 0.1)",
    backdropFilter: "blur(10px)",
  },

  // Form input styling
  ".premium-input": {
    "& .MuiOutlinedInput-root": {
      backgroundColor: "rgba(255, 255, 255, 0.08)",
      borderRadius: "12px",
      
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
  },

  // Alert and notification styles
  ".premium-alert": {
    borderRadius: "12px",
    backdropFilter: "blur(10px)",
    border: "1px solid rgba(255, 255, 255, 0.1)",
  },

  // Page transition
  ".page-transition": {
    animation: "fadeInUp 0.5s ease forwards",
  },

  // No scroll utility - important for requirement
  ".no-scroll": {
    overflow: "hidden",
    height: "100vh",
  },

  ".content-fit": {
    height: "calc(100vh - 64px)", // Adjust based on header height
    overflow: "auto",
  },
};

export default premiumGlobalStyles;
