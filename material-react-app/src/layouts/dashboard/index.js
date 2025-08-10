/**
=========================================================
* Modern Professional Dashboard - Transport Management
=========================================================
* Inspired by modern dashboard designs
* Optimized for responsive design and professional appearance
*/

import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import { Box, Typography, Card, Avatar, LinearProgress, Chip } from "@mui/material";
import { motion } from "framer-motion";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";

// Material Dashboard 2 React example components
import VisionDashboardLayout from "examples/LayoutContainers/VisionDashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";

// Chart components
import ReportsBarChart from "examples/Charts/BarCharts/ReportsBarChart";
import ReportsLineChart from "examples/Charts/LineCharts/ReportsLineChart";

// Data
import reportsBarChartData from "layouts/dashboard/data/reportsBarChartData";
import reportsLineChartData from "layouts/dashboard/data/reportsLineChartData";

// Icons
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import RouteIcon from '@mui/icons-material/Route';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import PeopleIcon from '@mui/icons-material/People';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import SpeedIcon from '@mui/icons-material/Speed';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import TimelapseIcon from '@mui/icons-material/Timelapse';

// Modern Stat Card Component
const ModernStatCard = ({ icon: Icon, title, value, change, color, trend }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <Card
      sx={{
        background: 'rgba(255, 255, 255, 0.02)',
        backdropFilter: 'blur(20px)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        borderRadius: '20px',
        p: 3,
        height: '140px',
        position: 'relative',
        overflow: 'hidden',
        transition: 'all 0.3s ease',
        '&:hover': {
          transform: 'translateY(-5px)',
          boxShadow: `0 20px 40px rgba(${color}, 0.2)`,
          border: `1px solid rgba(${color}, 0.3)`,
        },
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '3px',
          background: `linear-gradient(90deg, rgb(${color}), rgba(${color}, 0.5))`,
        }
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2 }}>
        <Avatar
          sx={{
            background: `linear-gradient(135deg, rgba(${color}, 0.2), rgba(${color}, 0.1))`,
            border: `1px solid rgba(${color}, 0.2)`,
            width: 48,
            height: 48,
          }}
        >
          <Icon sx={{ color: `rgb(${color})`, fontSize: 24 }} />
        </Avatar>
        <Chip
          label={change}
          size="small"
          sx={{
            background: trend === 'up' ? 'rgba(0, 255, 136, 0.1)' : 'rgba(255, 107, 107, 0.1)',
            color: trend === 'up' ? '#00ff88' : '#ff6b6b',
            border: trend === 'up' ? '1px solid rgba(0, 255, 136, 0.2)' : '1px solid rgba(255, 107, 107, 0.2)',
            fontSize: '0.75rem',
          }}
        />
      </Box>
      <Typography
        variant="h3"
        sx={{
          color: '#ffffff',
          fontWeight: 700,
          mb: 0.5,
          fontSize: '2rem',
        }}
      >
        {value}
      </Typography>
      <Typography
        variant="body2"
        sx={{
          color: 'rgba(255, 255, 255, 0.7)',
          fontWeight: 500,
        }}
      >
        {title}
      </Typography>
    </Card>
  </motion.div>
);

// Performance Metric Component
const PerformanceMetric = ({ label, value, maxValue, color }) => (
  <Box sx={{ mb: 2 }}>
    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
      <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.8)' }}>
        {label}
      </Typography>
      <Typography variant="body2" sx={{ color: '#ffffff', fontWeight: 600 }}>
        {value}%
      </Typography>
    </Box>
    <LinearProgress
      variant="determinate"
      value={(value / maxValue) * 100}
      sx={{
        height: 8,
        borderRadius: 4,
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        '& .MuiLinearProgress-bar': {
          borderRadius: 4,
          background: `linear-gradient(90deg, rgb(${color}), rgba(${color}, 0.7))`,
        },
      }}
    />
  </Box>
);

// Modern Chart Card Component
const ModernChartCard = ({ title, subtitle, children, color, icon: Icon }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
  >
    <Card
      sx={{
        background: 'rgba(255, 255, 255, 0.02)',
        backdropFilter: 'blur(20px)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        borderRadius: '20px',
        p: 3,
        height: '400px',
        position: 'relative',
        overflow: 'hidden',
        transition: 'all 0.3s ease',
        '&:hover': {
          border: `1px solid rgba(${color}, 0.3)`,
        },
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
        <Avatar
          sx={{
            background: `linear-gradient(135deg, rgba(${color}, 0.2), rgba(${color}, 0.1))`,
            border: `1px solid rgba(${color}, 0.2)`,
            width: 40,
            height: 40,
            mr: 2,
          }}
        >
          <Icon sx={{ color: `rgb(${color})`, fontSize: 20 }} />
        </Avatar>
        <Box>
          <Typography
            variant="h6"
            sx={{
              color: '#ffffff',
              fontWeight: 600,
              mb: 0.5,
            }}
          >
            {title}
          </Typography>
          <Typography
            variant="body2"
            sx={{
              color: 'rgba(255, 255, 255, 0.6)',
            }}
          >
            {subtitle}
          </Typography>
        </Box>
      </Box>
      {children}
    </Card>
  </motion.div>
);

function Dashboard() {
  const { sales, tasks } = reportsLineChartData;

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <VisionDashboardLayout>
      <DashboardNavbar />
      
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <MDBox mb={3}>
          <Card
            sx={{
              background: 'linear-gradient(135deg, rgba(20, 25, 35, 0.95) 0%, rgba(30, 35, 50, 0.9) 100%)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '24px',
              p: 4,
              position: 'relative',
              overflow: 'hidden',
              '&::before': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '4px',
                background: 'linear-gradient(90deg, #00f5ff, #4fc3f7, #29b6f6, #0288d1)',
              }
            }}
          >
            <Grid container spacing={4} alignItems="center">
              <Grid item xs={12} md={8}>
                <Typography
                  variant="h3"
                  sx={{
                    color: '#ffffff',
                    fontWeight: 700,
                    mb: 1,
                    background: 'linear-gradient(135deg, #ffffff 0%, #00f5ff 100%)',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  Transport Management Hub
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    color: 'rgba(255, 255, 255, 0.8)',
                    fontWeight: 400,
                    mb: 3
                  }}
                >
                  Real-time monitoring and analytics for your fleet operations
                </Typography>
                
                <Grid container spacing={3}>
                  <Grid item xs={6} sm={3}>
                    <Box sx={{ textAlign: 'center' }}>
                      <Typography variant="h4" sx={{ color: '#00ff88', fontWeight: 700 }}>
                        98.7%
                      </Typography>
                      <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                        Uptime
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={6} sm={3}>
                    <Box sx={{ textAlign: 'center' }}>
                      <Typography variant="h4" sx={{ color: '#00f5ff', fontWeight: 700 }}>
                        24/7
                      </Typography>
                      <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                        Monitoring
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={6} sm={3}>
                    <Box sx={{ textAlign: 'center' }}>
                      <Typography variant="h4" sx={{ color: '#4fc3f7', fontWeight: 700 }}>
                        15.2K
                      </Typography>
                      <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                        Routes/Month
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={6} sm={3}>
                    <Box sx={{ textAlign: 'center' }}>
                      <Typography variant="h4" sx={{ color: '#9c27b0', fontWeight: 700 }}>
                        €2.8M
                      </Typography>
                      <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                        Revenue
                      </Typography>
                    </Box>
                  </Grid>
                </Grid>
              </Grid>
              
              <Grid item xs={12} md={4}>
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    minHeight: '140px',
                  }}
                >
                  <Avatar
                    sx={{
                      width: 80,
                      height: 80,
                      background: 'linear-gradient(135deg, rgba(0, 245, 255, 0.2), rgba(79, 195, 247, 0.1))',
                      border: '2px solid rgba(0, 245, 255, 0.3)',
                      mb: 2,
                    }}
                  >
                    <SpeedIcon sx={{ fontSize: 40, color: '#00f5ff' }} />
                  </Avatar>
                  <Typography
                    variant="h5"
                    sx={{
                      color: '#ffffff',
                      fontWeight: 600,
                      textAlign: 'center',
                    }}
                  >
                    System Status: Optimal
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Card>
        </MDBox>
      </motion.div>

      {/* Stats Cards */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <MDBox mb={3}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} lg={3}>
              <ModernStatCard
                icon={LocalShippingIcon}
                title="Active Vehicles"
                value="284"
                change="+12%"
                color="0, 245, 255"
                trend="up"
              />
            </Grid>
            <Grid item xs={12} sm={6} lg={3}>
              <ModernStatCard
                icon={RouteIcon}
                title="Routes Today"
                value="2,547"
                change="+8.2%"
                color="76, 175, 80"
                trend="up"
              />
            </Grid>
            <Grid item xs={12} sm={6} lg={3}>
              <ModernStatCard
                icon={AttachMoneyIcon}
                title="Daily Revenue"
                value="€34.2K"
                change="+15.8%"
                color="255, 193, 7"
                trend="up"
              />
            </Grid>
            <Grid item xs={12} sm={6} lg={3}>
              <ModernStatCard
                icon={PeopleIcon}
                title="Active Drivers"
                value="186"
                change="-2.1%"
                color="156, 39, 176"
                trend="down"
              />
            </Grid>
          </Grid>
        </MDBox>
      </motion.div>

      {/* Charts Section */}
      <MDBox mb={3}>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={8}>
            <ModernChartCard
              title="Fleet Performance Analytics"
              subtitle="Real-time efficiency metrics and trends"
              color="0, 245, 255"
              icon={TrendingUpIcon}
            >
              <Box sx={{ height: '300px', mt: 2 }}>
                <ReportsLineChart
                  color="info"
                  title=""
                  description=""
                  date=""
                  chart={sales}
                />
              </Box>
            </ModernChartCard>
          </Grid>
          
          <Grid item xs={12} lg={4}>
            <ModernChartCard
              title="Performance Metrics"
              subtitle="Key operational indicators"
              color="76, 175, 80"
              icon={SpeedIcon}
            >
              <Box sx={{ mt: 2 }}>
                <PerformanceMetric
                  label="Fuel Efficiency"
                  value={87}
                  maxValue={100}
                  color="76, 175, 80"
                />
                <PerformanceMetric
                  label="Route Optimization"
                  value={92}
                  maxValue={100}
                  color="0, 245, 255"
                />
                <PerformanceMetric
                  label="Driver Performance"
                  value={79}
                  maxValue={100}
                  color="255, 193, 7"
                />
                <PerformanceMetric
                  label="Vehicle Utilization"
                  value={94}
                  maxValue={100}
                  color="156, 39, 176"
                />
                <PerformanceMetric
                  label="Customer Satisfaction"
                  value={96}
                  maxValue={100}
                  color="255, 87, 34"
                />
              </Box>
            </ModernChartCard>
          </Grid>
        </Grid>
      </MDBox>

      {/* Bottom Charts Section */}
      <MDBox>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <ModernChartCard
              title="Route Efficiency"
              subtitle="Delivery time optimization analysis"
              color="255, 193, 7"
              icon={RouteIcon}
            >
              <Box sx={{ height: '300px', mt: 2 }}>
                <ReportsBarChart
                  color="warning"
                  title=""
                  description=""
                  date=""
                  chart={reportsBarChartData}
                />
              </Box>
            </ModernChartCard>
          </Grid>
          
          <Grid item xs={12} md={6}>
            <ModernChartCard
              title="Real-time Operations"
              subtitle="Live tracking and status updates"
              color="156, 39, 176"
              icon={LocationOnIcon}
            >
              <Box sx={{ height: '300px', mt: 2 }}>
                <ReportsLineChart
                  color="secondary"
                  title=""
                  description=""
                  date=""
                  chart={tasks}
                />
              </Box>
            </ModernChartCard>
          </Grid>
        </Grid>
      </MDBox>

      <Footer />
    </VisionDashboardLayout>
  );
}

export default Dashboard;
