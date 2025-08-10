/**
 * Premium Color Palette
 * Inspired by Vision UI, Veltrix, and modern dashboard designs
 * Colors from the provided premium dashboard examples
 */

const premiumColors = {
  // Primary gradients - Deep blue to purple
  primary: {
    main: "#1E2A78",
    dark: "#0D1441",
    light: "#3949AB",
    gradient: "linear-gradient(135deg, #1E2A78 0%, #5C2DD5 50%, #7B42F6 100%)",
    gradientAlt: "linear-gradient(45deg, #1E2A78 0%, #3949AB 100%)",
  },

  // Secondary - Purple gradients
  secondary: {
    main: "#5C2DD5",
    dark: "#4527A0",
    light: "#7B42F6",
    gradient: "linear-gradient(135deg, #5C2DD5 0%, #7B42F6 50%, #9C27B0 100%)",
  },

  // Accent colors - Neon and vibrant
  accent: {
    turquoise: "#00BCD4",
    orange: "#FF6B35",
    pink: "#E91E63",
    green: "#4CAF50",
    yellow: "#FFC107",
    purple: "#9C27B0",
  },

  // Background gradients
  background: {
    main: "#0A0E27",
    paper: "#151729",
    gradient: "linear-gradient(135deg, #0A0E27 0%, #1A1F3A 50%, #2D1B69 100%)",
    glassmorphism: "rgba(255, 255, 255, 0.1)",
    card: "rgba(255, 255, 255, 0.05)",
    overlay: "rgba(0, 0, 0, 0.6)",
  },

  // Text colors for dark theme
  text: {
    primary: "#FFFFFF",
    secondary: "rgba(255, 255, 255, 0.7)",
    disabled: "rgba(255, 255, 255, 0.5)",
    hint: "rgba(255, 255, 255, 0.6)",
  },

  // Status colors with gradients
  status: {
    success: {
      main: "#4CAF50",
      gradient: "linear-gradient(135deg, #4CAF50 0%, #8BC34A 100%)",
    },
    warning: {
      main: "#FF9800",
      gradient: "linear-gradient(135deg, #FF9800 0%, #FFC107 100%)",
    },
    error: {
      main: "#F44336",
      gradient: "linear-gradient(135deg, #F44336 0%, #E91E63 100%)",
    },
    info: {
      main: "#2196F3",
      gradient: "linear-gradient(135deg, #2196F3 0%, #00BCD4 100%)",
    },
  },

  // Chart colors - vibrant for data visualization
  charts: {
    blue: ["#2196F3", "#03A9F4", "#00BCD4"],
    purple: ["#9C27B0", "#673AB7", "#3F51B5"],
    orange: ["#FF9800", "#FF5722", "#F44336"],
    green: ["#4CAF50", "#8BC34A", "#CDDC39"],
    pink: ["#E91E63", "#F06292", "#F8BBD9"],
    cyan: ["#00BCD4", "#26C6DA", "#4DD0E1"],
  },

  // Sidebar and navigation
  sidebar: {
    background: "linear-gradient(180deg, #1A1F3A 0%, #0A0E27 100%)",
    itemHover: "rgba(255, 255, 255, 0.1)",
    itemActive: "linear-gradient(135deg, #5C2DD5 0%, #7B42F6 100%)",
    border: "rgba(255, 255, 255, 0.1)",
  },

  // Card and component styles
  components: {
    card: {
      background: "rgba(255, 255, 255, 0.05)",
      border: "rgba(255, 255, 255, 0.1)",
      shadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
      glassShadow: "0 8px 32px rgba(123, 66, 246, 0.1)",
    },
    button: {
      primary: "linear-gradient(135deg, #5C2DD5 0%, #7B42F6 100%)",
      secondary: "linear-gradient(135deg, #00BCD4 0%, #2196F3 100%)",
      success: "linear-gradient(135deg, #4CAF50 0%, #8BC34A 100%)",
    },
    input: {
      background: "rgba(255, 255, 255, 0.08)",
      border: "rgba(255, 255, 255, 0.15)",
      focus: "#7B42F6",
    },
  },
};

export default premiumColors;
