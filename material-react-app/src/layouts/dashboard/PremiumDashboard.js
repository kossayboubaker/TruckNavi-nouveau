/**
=========================================================
* Premium Transport Management Dashboard
=========================================================
* Modern dashboard with glassmorphism effects and premium design
* Inspired by Vision UI and premium dashboard examples provided
*/

import React from "react";
import { Grid, Box, Typography, useMediaQuery, useTheme } from "@mui/material";

// Material Dashboard components
import MDBox from "components/MDBox";

// Layout components
import VisionDashboardLayout from "examples/LayoutContainers/VisionDashboardLayout";
import PremiumNavbar from "examples/Navbars/PremiumNavbar";
import Footer from "examples/Footer";

// Premium card components
import PremiumStatCard from "examples/Cards/PremiumCards/PremiumStatCard";
import PremiumChartCard from "examples/Cards/PremiumCards/PremiumChartCard";

// Chart components
import ReportsBarChart from "examples/Charts/BarCharts/ReportsBarChart";
import ReportsLineChart from "examples/Charts/LineCharts/ReportsLineChart";

// Data
import reportsBarChartData from "layouts/dashboard/data/reportsBarChartData";
import reportsLineChartData from "layouts/dashboard/data/reportsLineChartData";

// Dashboard components
import Projects from "layouts/dashboard/components/Projects";
import OrdersOverview from "layouts/dashboard/components/OrdersOverview";

// Icons
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import RouteIcon from '@mui/icons-material/Route';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import PeopleIcon from '@mui/icons-material/People';
import LocalGasStationIcon from '@mui/icons-material/LocalGasStation';
import ScheduleIcon from '@mui/icons-material/Schedule';
import SecurityIcon from '@mui/icons-material/Security';
import AssessmentIcon from '@mui/icons-material/Assessment';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SpeedIcon from '@mui/icons-material/Speed';

// Premium colors
import premiumColors from "assets/theme/base/premiumColors";

function PremiumDashboard() {
  const { sales, tasks } = reportsLineChartData;
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  // Dashboard stats data
  const dashboardStats = [
    {
      icon: LocalShippingIcon,
      title: "Active Vehicles",
      value: "284",
      percentage: "+12.5%",
      trend: "up",
      gradient: "linear-gradient(135deg, #FF9F40 0%, #FF6384 100%)",
      shadowColor: "#FF9F40",
      iconBg: "linear-gradient(135deg, rgba(255, 159, 64, 0.2), rgba(255, 99, 132, 0.1))",
      subtitle: "Fleet Status"
    },
    {
      icon: RouteIcon,
      title: "Routes Today",
      value: "2,481",
      percentage: "+8.2%",
      trend: "up",
      gradient: "linear-gradient(135deg, #36A2EB 0%, #00D4FF 100%)",
      shadowColor: "#00D4FF",
      iconBg: "linear-gradient(135deg, rgba(54, 162, 235, 0.2), rgba(0, 212, 255, 0.1))",
      subtitle: "Daily Operations"
    },
    {
      icon: AttachMoneyIcon,
      title: "Revenue",
      value: "$31,124",
      percentage: "+15.8%",
      trend: "up",
      gradient: premiumColors.primary.gradient,
      shadowColor: premiumColors.primary.main,
      iconBg: "linear-gradient(135deg, rgba(139, 92, 246, 0.2), rgba(236, 72, 153, 0.1))",
      subtitle: "Monthly Total"
    },
    {
      icon: PeopleIcon,
      title: "Active Drivers",
      value: "2,125",
      percentage: "+3.1%",
      trend: "up",
      gradient: "linear-gradient(135deg, #4BC0C0 0%, #00FF88 100%)",
      shadowColor: "#00FF88",
      iconBg: "linear-gradient(135deg, rgba(75, 192, 192, 0.2), rgba(0, 255, 136, 0.1))",
      subtitle: "Online Now"
    },
    {
      icon: LocalGasStationIcon,
      title: "Fuel Efficiency",
      value: "98.5%",
      percentage: "+2.3%",
      trend: "up",
      gradient: "linear-gradient(135deg, #FF6B35 0%, #F7931E 100%)",
      shadowColor: "#FF6B35",
      iconBg: "linear-gradient(135deg, rgba(255, 107, 53, 0.2), rgba(247, 147, 30, 0.1))",
      subtitle: "Optimization"
    },
    {
      icon: SecurityIcon,
      title: "Safety Score",
      value: "99.2%",
      percentage: "+0.8%",
      trend: "up",
      gradient: "linear-gradient(135deg, #4CAF50 0%, #8BC34A 100%)",
      shadowColor: "#4CAF50",
      iconBg: "linear-gradient(135deg, rgba(76, 175, 80, 0.2), rgba(139, 195, 74, 0.1))",
      subtitle: "Incident Rate"
    }
  ];

  return (
    <VisionDashboardLayout>
      {/* Use Premium Navbar */}
      <PremiumNavbar isMini />
      
      {/* Dashboard Content */}
      <MDBox 
        sx={{ 
          minHeight: "calc(100vh - 64px)",
          background: premiumColors.background.gradient,
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Background decorative elements */}
        <Box
          sx={{
            position: "absolute",
            top: "-50%",
            right: "-30%",
            width: "80%",
            height: "80%",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(123, 66, 246, 0.1) 0%, transparent 70%)",
            filter: "blur(40px)",
            zIndex: 0,
          }}
        />
        <Box
          sx={{
            position: "absolute",
            bottom: "-50%",
            left: "-30%",
            width: "60%",
            height: "60%",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(0, 188, 212, 0.08) 0%, transparent 70%)",
            filter: "blur(40px)",
            zIndex: 0,
          }}
        />

        {/* Content */}
        <Box sx={{ position: "relative", zIndex: 1, padding: "24px" }}>
          {/* Welcome Section */}
          <MDBox mb={4}>
            <Typography
              variant="h4"
              sx={{
                background: premiumColors.primary.gradient,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                fontWeight: "bold",
                mb: 1,
                fontSize: { xs: "1.5rem", md: "2rem" },
              }}
            >
              Transport Management Dashboard
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: premiumColors.text.secondary,
                fontSize: "16px",
                mb: 2,
              }}
            >
              Real-time insights and analytics for your fleet operations
            </Typography>
          </MDBox>

          {/* Primary Stats Cards */}
          <MDBox mb={4}>
            <Grid container spacing={3}>
              {dashboardStats.slice(0, 4).map((stat, index) => (
                <Grid item xs={12} sm={6} lg={3} key={index}>
                  <PremiumStatCard
                    icon={stat.icon}
                    title={stat.title}
                    value={stat.value}
                    percentage={stat.percentage}
                    trend={stat.trend}
                    gradient={stat.gradient}
                    shadowColor={stat.shadowColor}
                    iconBg={stat.iconBg}
                    subtitle={stat.subtitle}
                    sx={{
                      height: "160px",
                      animation: `fadeInUp 0.6s ease ${index * 0.1}s forwards`,
                      opacity: 0,
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
                    }}
                  />
                </Grid>
              ))}
            </Grid>
          </MDBox>

          {/* Secondary Stats Cards */}
          <MDBox mb={4}>
            <Grid container spacing={3}>
              {dashboardStats.slice(4).map((stat, index) => (
                <Grid item xs={12} sm={6} lg={6} key={index + 4}>
                  <PremiumStatCard
                    icon={stat.icon}
                    title={stat.title}
                    value={stat.value}
                    percentage={stat.percentage}
                    trend={stat.trend}
                    gradient={stat.gradient}
                    shadowColor={stat.shadowColor}
                    iconBg={stat.iconBg}
                    subtitle={stat.subtitle}
                    showProgress={true}
                    progressValue={parseFloat(stat.value.replace("%", ""))}
                    sx={{
                      height: "160px",
                      animation: `fadeInUp 0.6s ease ${(index + 4) * 0.1}s forwards`,
                      opacity: 0,
                    }}
                  />
                </Grid>
              ))}
            </Grid>
          </MDBox>

          {/* Charts Section */}
          <MDBox mb={4}>
            <Grid container spacing={3}>
              {/* Main Chart */}
              <Grid item xs={12} lg={8}>
                <PremiumChartCard
                  title="Fleet Performance Analytics"
                  subtitle="Real-time monitoring and efficiency metrics"
                  value="476"
                  percentage="+12.5%"
                  trend="up"
                  period="Last 30 days"
                  height="400px"
                  sx={{
                    animation: "fadeInUp 0.6s ease 0.5s forwards",
                    opacity: 0,
                  }}
                >
                  <ReportsLineChart
                    color="info"
                    title=""
                    description=""
                    date=""
                    chart={sales}
                  />
                </PremiumChartCard>
              </Grid>
              
              {/* Side Chart */}
              <Grid item xs={12} lg={4}>
                <PremiumChartCard
                  title="Route Efficiency"
                  subtitle="Optimization insights"
                  value="88.5%"
                  percentage="+5.2%"
                  trend="up"
                  period="This week"
                  height="400px"
                  sx={{
                    animation: "fadeInUp 0.6s ease 0.6s forwards",
                    opacity: 0,
                  }}
                >
                  <ReportsBarChart
                    color="secondary"
                    title=""
                    description=""
                    date=""
                    chart={reportsBarChartData}
                  />
                </PremiumChartCard>
              </Grid>
            </Grid>
          </MDBox>

          {/* Bottom Section */}
          <MDBox mb={4}>
            <Grid container spacing={3}>
              {/* Projects Overview */}
              <Grid item xs={12} lg={8}>
                <PremiumChartCard
                  title="Fleet Operations Overview"
                  subtitle="Comprehensive management insights"
                  period="Real-time"
                  height="500px"
                  sx={{
                    animation: "fadeInUp 0.6s ease 0.7s forwards",
                    opacity: 0,
                  }}
                >
                  <Projects />
                </PremiumChartCard>
              </Grid>
              
              {/* Recent Activities */}
              <Grid item xs={12} lg={4}>
                <PremiumChartCard
                  title="Recent Activities"
                  subtitle="Live updates and notifications"
                  period="Live"
                  height="500px"
                  sx={{
                    animation: "fadeInUp 0.6s ease 0.8s forwards",
                    opacity: 0,
                  }}
                >
                  <OrdersOverview />
                </PremiumChartCard>
              </Grid>
            </Grid>
          </MDBox>
        </Box>
      </MDBox>

      <Footer />
    </VisionDashboardLayout>
  );
}

export default PremiumDashboard;
