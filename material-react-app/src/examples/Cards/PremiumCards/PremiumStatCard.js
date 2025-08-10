/**
 * Premium Stat Card Component
 * Beautiful stat cards with gradients, icons, and trend indicators
 * Inspired by the premium dashboard examples
 */

import React from "react";
import PropTypes from "prop-types";
import { Card, Box, Typography, IconButton, LinearProgress } from "@mui/material";
import { styled } from "@mui/material/styles";

// Icons
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";
import MoreVertIcon from "@mui/icons-material/MoreVert";

// Premium colors
import premiumColors from "assets/theme/base/premiumColors";

const StyledCard = styled(Card)(({ gradient, shadowColor }) => ({
  background: gradient || premiumColors.components.card.background,
  backdropFilter: "blur(20px)",
  border: "1px solid rgba(255, 255, 255, 0.15)",
  borderRadius: "20px",
  boxShadow: shadowColor 
    ? `0 8px 32px ${shadowColor}30, 0 0 0 1px rgba(255, 255, 255, 0.05)`
    : premiumColors.components.card.shadow,
  overflow: "hidden",
  position: "relative",
  transition: "all 0.3s ease",
  "&:hover": {
    transform: "translateY(-5px)",
    boxShadow: shadowColor 
      ? `0 12px 40px ${shadowColor}40, 0 0 0 1px rgba(255, 255, 255, 0.1)`
      : "0 12px 40px rgba(0, 0, 0, 0.4)",
  },
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: "2px",
    background: gradient || "linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent)",
  },
}));

const IconContainer = styled(Box)(({ iconBg }) => ({
  width: "48px",
  height: "48px",
  borderRadius: "12px",
  background: iconBg || "rgba(255, 255, 255, 0.1)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginBottom: "16px",
  position: "relative",
  "&::after": {
    content: '""',
    position: "absolute",
    inset: 0,
    borderRadius: "12px",
    padding: "1px",
    background: "linear-gradient(45deg, rgba(255, 255, 255, 0.2), transparent)",
    mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
    maskComposite: "exclude",
  },
}));

const TrendContainer = styled(Box)(({ trendType }) => ({
  display: "flex",
  alignItems: "center",
  gap: "4px",
  padding: "4px 8px",
  borderRadius: "8px",
  background: trendType === "up" 
    ? "rgba(76, 175, 80, 0.1)" 
    : trendType === "down" 
    ? "rgba(244, 67, 54, 0.1)"
    : "rgba(255, 255, 255, 0.05)",
  border: `1px solid ${
    trendType === "up" 
      ? "rgba(76, 175, 80, 0.2)" 
      : trendType === "down" 
      ? "rgba(244, 67, 54, 0.2)"
      : "rgba(255, 255, 255, 0.1)"
  }`,
}));

function PremiumStatCard({
  icon: IconComponent,
  title,
  value,
  percentage,
  trend = "neutral",
  gradient,
  shadowColor,
  iconColor = "#fff",
  iconBg,
  subtitle,
  showProgress = false,
  progressValue = 0,
  onClick,
  ...rest
}) {
  const getTrendIcon = () => {
    switch (trend) {
      case "up":
        return <TrendingUpIcon sx={{ fontSize: "14px", color: "#4CAF50" }} />;
      case "down":
        return <TrendingDownIcon sx={{ fontSize: "14px", color: "#f44336" }} />;
      default:
        return null;
    }
  };

  const getTrendColor = () => {
    switch (trend) {
      case "up": return "#4CAF50";
      case "down": return "#f44336";
      default: return premiumColors.text.secondary;
    }
  };

  return (
    <StyledCard 
      gradient={gradient} 
      shadowColor={shadowColor}
      onClick={onClick}
      sx={{ 
        cursor: onClick ? "pointer" : "default",
        ...(rest.sx || {})
      }}
      {...rest}
    >
      <Box sx={{ padding: "24px", position: "relative" }}>
        {/* Header */}
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", mb: 2 }}>
          <IconContainer iconBg={iconBg}>
            <IconComponent 
              sx={{ 
                fontSize: "24px", 
                color: iconColor,
                filter: "drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3))",
              }} 
            />
          </IconContainer>
          
          <IconButton
            size="small"
            sx={{
              color: "rgba(255, 255, 255, 0.6)",
              "&:hover": {
                backgroundColor: "rgba(255, 255, 255, 0.1)",
              },
            }}
          >
            <MoreVertIcon sx={{ fontSize: "18px" }} />
          </IconButton>
        </Box>

        {/* Title */}
        <Typography
          variant="body2"
          sx={{
            color: "rgba(255, 255, 255, 0.8)",
            fontSize: "14px",
            fontWeight: 500,
            mb: 1,
            textTransform: "uppercase",
            letterSpacing: "0.5px",
          }}
        >
          {title}
        </Typography>

        {/* Value */}
        <Typography
          variant="h4"
          sx={{
            color: "#fff",
            fontSize: "2rem",
            fontWeight: 700,
            lineHeight: 1,
            mb: subtitle ? 0.5 : 2,
            textShadow: "0 2px 4px rgba(0, 0, 0, 0.3)",
          }}
        >
          {value}
        </Typography>

        {/* Subtitle */}
        {subtitle && (
          <Typography
            variant="caption"
            sx={{
              color: "rgba(255, 255, 255, 0.7)",
              fontSize: "12px",
              mb: 2,
              display: "block",
            }}
          >
            {subtitle}
          </Typography>
        )}

        {/* Progress bar */}
        {showProgress && (
          <Box sx={{ mb: 2 }}>
            <LinearProgress
              variant="determinate"
              value={progressValue}
              sx={{
                height: "4px",
                borderRadius: "2px",
                backgroundColor: "rgba(255, 255, 255, 0.1)",
                "& .MuiLinearProgress-bar": {
                  backgroundColor: "#fff",
                  borderRadius: "2px",
                },
              }}
            />
          </Box>
        )}

        {/* Trend and percentage */}
        {percentage && (
          <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <TrendContainer trendType={trend}>
              {getTrendIcon()}
              <Typography
                variant="caption"
                sx={{
                  color: getTrendColor(),
                  fontSize: "12px",
                  fontWeight: 600,
                }}
              >
                {percentage}
              </Typography>
            </TrendContainer>

            <Typography
              variant="caption"
              sx={{
                color: "rgba(255, 255, 255, 0.6)",
                fontSize: "11px",
              }}
            >
              vs last month
            </Typography>
          </Box>
        )}
      </Box>

      {/* Decorative elements */}
      <Box
        sx={{
          position: "absolute",
          top: -20,
          right: -20,
          width: 60,
          height: 60,
          borderRadius: "50%",
          background: "rgba(255, 255, 255, 0.03)",
          filter: "blur(20px)",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          bottom: -30,
          left: -30,
          width: 80,
          height: 80,
          borderRadius: "50%",
          background: "rgba(255, 255, 255, 0.02)",
          filter: "blur(30px)",
        }}
      />
    </StyledCard>
  );
}

PremiumStatCard.propTypes = {
  icon: PropTypes.elementType.isRequired,
  title: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  percentage: PropTypes.string,
  trend: PropTypes.oneOf(["up", "down", "neutral"]),
  gradient: PropTypes.string,
  shadowColor: PropTypes.string,
  iconColor: PropTypes.string,
  iconBg: PropTypes.string,
  subtitle: PropTypes.string,
  showProgress: PropTypes.bool,
  progressValue: PropTypes.number,
  onClick: PropTypes.func,
};

export default PremiumStatCard;
