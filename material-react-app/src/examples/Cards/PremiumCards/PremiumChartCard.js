/**
 * Premium Chart Card Component
 * Beautiful chart containers with glassmorphism and modern styling
 * Supports various chart types and custom headers
 */

import React from "react";
import PropTypes from "prop-types";
import { 
  Card, 
  Box, 
  Typography, 
  IconButton, 
  Menu, 
  MenuItem, 
  Chip,
  Divider,
} from "@mui/material";
import { styled } from "@mui/material/styles";

// Icons
import MoreVertIcon from "@mui/icons-material/MoreVert";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";
import GetAppIcon from "@mui/icons-material/GetApp";
import ShareIcon from "@mui/icons-material/Share";
import RefreshIcon from "@mui/icons-material/Refresh";

// Premium colors
import premiumColors from "assets/theme/base/premiumColors";

const StyledCard = styled(Card)(({ theme }) => ({
  background: premiumColors.components.card.background,
  backdropFilter: "blur(20px)",
  border: `1px solid ${premiumColors.components.card.border}`,
  borderRadius: "20px",
  boxShadow: premiumColors.components.card.shadow,
  overflow: "hidden",
  position: "relative",
  transition: "all 0.3s ease",
  "&:hover": {
    transform: "translateY(-2px)",
    boxShadow: premiumColors.components.card.glassShadow,
  },
}));

const ChartContainer = styled(Box)(({ theme }) => ({
  padding: "20px",
  background: "rgba(255, 255, 255, 0.02)",
  borderRadius: "16px",
  margin: "16px",
  position: "relative",
  "&::before": {
    content: '""',
    position: "absolute",
    inset: 0,
    borderRadius: "16px",
    padding: "1px",
    background: "linear-gradient(45deg, rgba(255, 255, 255, 0.1), transparent)",
    mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
    maskComposite: "exclude",
  },
}));

function PremiumChartCard({
  title,
  subtitle,
  value,
  percentage,
  trend = "neutral",
  period = "This Month",
  children,
  headerActions = true,
  customHeader,
  height = "300px",
  chartType = "default",
  ...rest
}) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const getTrendColor = () => {
    switch (trend) {
      case "up": return "#4CAF50";
      case "down": return "#f44336";
      default: return premiumColors.text.secondary;
    }
  };

  const getTrendIcon = () => {
    switch (trend) {
      case "up":
        return <TrendingUpIcon sx={{ fontSize: "16px", color: "#4CAF50" }} />;
      case "down":
        return <TrendingDownIcon sx={{ fontSize: "16px", color: "#f44336" }} />;
      default:
        return null;
    }
  };

  const defaultHeader = (
    <Box sx={{ padding: "24px 24px 0 24px" }}>
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", mb: 2 }}>
        <Box sx={{ flex: 1 }}>
          <Typography
            variant="h6"
            sx={{
              color: premiumColors.text.primary,
              fontSize: "18px",
              fontWeight: 600,
              mb: 0.5,
            }}
          >
            {title}
          </Typography>
          
          {subtitle && (
            <Typography
              variant="body2"
              sx={{
                color: premiumColors.text.secondary,
                fontSize: "14px",
                mb: 2,
              }}
            >
              {subtitle}
            </Typography>
          )}

          {/* Value and trend */}
          {value && (
            <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 1 }}>
              <Typography
                variant="h4"
                sx={{
                  color: premiumColors.text.primary,
                  fontSize: "2rem",
                  fontWeight: 700,
                  lineHeight: 1,
                }}
              >
                {value}
              </Typography>
              
              {percentage && (
                <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
                  {getTrendIcon()}
                  <Typography
                    variant="body2"
                    sx={{
                      color: getTrendColor(),
                      fontSize: "14px",
                      fontWeight: 600,
                    }}
                  >
                    {percentage}
                  </Typography>
                </Box>
              )}
            </Box>
          )}

          {/* Period chip */}
          <Chip
            label={period}
            size="small"
            sx={{
              backgroundColor: "rgba(255, 255, 255, 0.08)",
              color: premiumColors.text.secondary,
              fontSize: "12px",
              height: "24px",
              border: `1px solid ${premiumColors.components.card.border}`,
            }}
          />
        </Box>

        {/* Actions */}
        {headerActions && (
          <IconButton
            size="small"
            onClick={handleMenuOpen}
            sx={{
              color: premiumColors.text.secondary,
              backgroundColor: "rgba(255, 255, 255, 0.05)",
              backdropFilter: "blur(10px)",
              border: `1px solid ${premiumColors.components.card.border}`,
              "&:hover": {
                backgroundColor: "rgba(255, 255, 255, 0.1)",
              },
            }}
          >
            <MoreVertIcon sx={{ fontSize: "18px" }} />
          </IconButton>
        )}
      </Box>
    </Box>
  );

  return (
    <>
      <StyledCard {...rest}>
        {/* Header */}
        {customHeader || defaultHeader}

        {/* Chart Container */}
        <ChartContainer sx={{ height, display: "flex", alignItems: "center", justifyContent: "center" }}>
          {children || (
            <Typography
              variant="body2"
              sx={{
                color: premiumColors.text.secondary,
                textAlign: "center",
              }}
            >
              Chart content goes here
            </Typography>
          )}
        </ChartContainer>

        {/* Bottom gradient line */}
        <Box
          sx={{
            height: "2px",
            background: "linear-gradient(90deg, transparent, rgba(123, 66, 246, 0.5), transparent)",
          }}
        />
      </StyledCard>

      {/* Actions Menu */}
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
        sx={{
          "& .MuiPaper-root": {
            background: premiumColors.background.paper,
            backdropFilter: "blur(20px)",
            border: `1px solid ${premiumColors.components.card.border}`,
            borderRadius: "12px",
            minWidth: "160px",
          },
        }}
      >
        <MenuItem onClick={handleMenuClose} sx={{ gap: 1 }}>
          <RefreshIcon sx={{ fontSize: "16px" }} />
          <Typography variant="body2">Refresh</Typography>
        </MenuItem>
        <MenuItem onClick={handleMenuClose} sx={{ gap: 1 }}>
          <GetAppIcon sx={{ fontSize: "16px" }} />
          <Typography variant="body2">Export</Typography>
        </MenuItem>
        <MenuItem onClick={handleMenuClose} sx={{ gap: 1 }}>
          <ShareIcon sx={{ fontSize: "16px" }} />
          <Typography variant="body2">Share</Typography>
        </MenuItem>
      </Menu>
    </>
  );
}

PremiumChartCard.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  percentage: PropTypes.string,
  trend: PropTypes.oneOf(["up", "down", "neutral"]),
  period: PropTypes.string,
  children: PropTypes.node,
  headerActions: PropTypes.bool,
  customHeader: PropTypes.node,
  height: PropTypes.string,
  chartType: PropTypes.string,
};

export default PremiumChartCard;
