/**
=========================================================
* Modern Dashboard - Inspired by Premium UI Designs
=========================================================
* Beautiful gradient background with glassmorphism effects
* Inspired by the provided dashboard screenshots
*/

// @mui material components
import Grid from "@mui/material/Grid";
import { Box, Typography, Card, Avatar, LinearProgress, Chip, IconButton } from "@mui/material";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";

// Material Dashboard 2 React example components
import VisionDashboardLayout from "examples/LayoutContainers/VisionDashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import ReportsBarChart from "examples/Charts/BarCharts/ReportsBarChart";
import ReportsLineChart from "examples/Charts/LineCharts/ReportsLineChart";
import VisionStatCard from "examples/Cards/StatisticsCards/VisionStatCard";

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
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import SpeedIcon from '@mui/icons-material/Speed';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AssessmentIcon from '@mui/icons-material/Assessment';

// Premium Stat Card Component inspired by the screenshots
const PremiumStatCard = ({ icon: Icon, title, value, percentage, trend, gradient, shadowColor }) => (
  <Card
    sx={{
      background: `linear-gradient(135deg, ${gradient}), rgba(26, 26, 46, 0.8)`,
      backgroundBlendMode: 'overlay',
      backdropFilter: 'blur(20px)',
      border: '1px solid rgba(255, 255, 255, 0.2)',
      borderRadius: '16px',
      p: 3,
      height: '160px',
      position: 'relative',
      overflow: 'hidden',
      transition: 'all 0.3s ease',
      cursor: 'pointer',
      boxShadow: `0 8px 32px ${shadowColor || 'rgba(0, 0, 0, 0.3)'}`,
      '&:hover': {
        transform: 'translateY(-6px)',
        boxShadow: `0 16px 40px ${shadowColor || 'rgba(0, 0, 0, 0.4)'}`,
        border: '1px solid rgba(255, 255, 255, 0.3)',
      },
      '&::before': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'rgba(255, 255, 255, 0.02)',
        backdropFilter: 'blur(10px)',
        zIndex: 0,
      },
      '&::after': {
        content: '""',
        position: 'absolute',
        top: 0,
        right: 0,
        width: '100%',
        height: '2px',
        background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent)',
      }
    }}
  >
    <Box sx={{ position: 'relative', zIndex: 1, height: '100%' }}>
      <Box sx={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', mb: 2 }}>
        <Avatar
          sx={{
            background: 'rgba(255, 255, 255, 0.2)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.3)',
            width: 56,
            height: 56,
          }}
        >
          <Icon sx={{ color: '#ffffff', fontSize: 28 }} />
        </Avatar>
        <IconButton
          size="small"
          sx={{
            color: 'rgba(255, 255, 255, 0.7)',
            background: 'rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(10px)',
            '&:hover': { 
              background: 'rgba(255, 255, 255, 0.2)',
              color: '#ffffff'
            }
          }}
        >
          <MoreVertIcon fontSize="small" />
        </IconButton>
      </Box>
      
      <Typography
        variant="h3"
        sx={{
          color: '#ffffff',
          fontWeight: 800,
          mb: 1,
          fontSize: '2.2rem',
          textShadow: '0 4px 12px rgba(0,0,0,0.6)',
          letterSpacing: '-0.02em',
        }}
      >
        {value}
      </Typography>

      <Typography
        variant="h6"
        sx={{
          color: 'rgba(255, 255, 255, 0.95)',
          fontWeight: 600,
          mb: 1,
          fontSize: '1rem',
          textShadow: '0 2px 8px rgba(0,0,0,0.4)',
        }}
      >
        {title}
      </Typography>
      
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Chip
          label={percentage}
          size="small"
          sx={{
            background: trend === 'up' ? 'rgba(0, 255, 136, 0.2)' : 'rgba(255, 107, 107, 0.2)',
            color: trend === 'up' ? '#00ff88' : '#ff6b6b',
            border: trend === 'up' ? '1px solid rgba(0, 255, 136, 0.3)' : '1px solid rgba(255, 107, 107, 0.3)',
            fontSize: '0.75rem',
            fontWeight: 600,
            backdropFilter: 'blur(10px)',
          }}
        />
      </Box>
    </Box>
  </Card>
);

// Premium Chart Card inspired by the screenshots
const PremiumChartCard = ({ title, subtitle, children, gradient, icon: Icon }) => (
  <Card
    sx={{
      background: 'rgba(26, 26, 46, 0.95)',
      backdropFilter: 'blur(20px)',
      border: '1px solid rgba(255, 255, 255, 0.15)',
      borderRadius: '20px',
      p: 3,
      height: '420px',
      position: 'relative',
      overflow: 'hidden',
      transition: 'all 0.3s ease',
      boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4)',
      '&:hover': {
        border: '1px solid rgba(139, 92, 246, 0.4)',
        background: 'rgba(26, 26, 46, 1)',
        transform: 'translateY(-4px)',
        boxShadow: '0 12px 40px rgba(0, 0, 0, 0.5)',
      },
      '&::before': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: '3px',
        background: gradient || 'linear-gradient(90deg, #8b5cf6, #3b82f6)',
      }
    }}
  >
    <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
      <Avatar
        sx={{
          background: 'rgba(139, 92, 246, 0.2)',
          border: '1px solid rgba(139, 92, 246, 0.3)',
          width: 48,
          height: 48,
          mr: 2,
        }}
      >
        <Icon sx={{ color: '#8b5cf6', fontSize: 24 }} />
      </Avatar>
      <Box sx={{ flex: 1 }}>
        <Typography
          variant="h5"
          sx={{
            color: '#ffffff',
            fontWeight: 700,
            mb: 0.5,
            textShadow: '0 2px 8px rgba(0,0,0,0.4)',
          }}
        >
          {title}
        </Typography>
        <Typography
          variant="body2"
          sx={{
            color: 'rgba(255, 255, 255, 0.8)',
            fontSize: '0.9rem',
            textShadow: '0 1px 4px rgba(0,0,0,0.3)',
          }}
        >
          {subtitle}
        </Typography>
      </Box>
      <IconButton
        size="small"
        sx={{
          color: 'rgba(255, 255, 255, 0.5)',
          '&:hover': { 
            color: '#8b5cf6',
            background: 'rgba(139, 92, 246, 0.1)' 
          }
        }}
      >
        <MoreVertIcon fontSize="small" />
      </IconButton>
    </Box>
    <Box sx={{ height: 'calc(100% - 100px)' }}>
      {children}
    </Box>
  </Card>
);

function Dashboard() {
  const { sales, tasks } = reportsLineChartData;

  return (
    <VisionDashboardLayout
      sx={{
        background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 25%, #0f0f23 50%, #1a1a2e 75%, #16213e 100%)',
        minHeight: '100vh',
        height: '100vh',
        overflow: 'hidden',
        position: 'relative',
      }}
    >
        <DashboardNavbar />

        {/* Background avec gradient violet/bleu comme la capture */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 25%, #0f0f23 50%, #1a1a2e 75%, #16213e 100%)',
            zIndex: -1,
          }}
        />
        
        {/* Contenu du dashboard avec scroll interne */}
        <MDBox
          sx={{
            height: 'calc(100vh - 120px)',
            overflowY: 'auto',
            paddingRight: '8px',
            '&::-webkit-scrollbar': {
              width: '4px',
            },
            '&::-webkit-scrollbar-track': {
              background: 'rgba(255, 255, 255, 0.1)',
              borderRadius: '2px',
            },
            '&::-webkit-scrollbar-thumb': {
              background: 'linear-gradient(135deg, #8b5cf6, #3b82f6)',
              borderRadius: '2px',
            },
          }}
        >
        <MDBox mb={3}>
          <Card
            sx={{
              background: 'rgba(26, 26, 46, 0.8)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              borderRadius: '20px',
              p: 4,
              position: 'relative',
              overflow: 'hidden',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4)',
              '&::before': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '3px',
                background: 'linear-gradient(90deg, #8b5cf6, #ec4899, #00d4ff, #8b5cf6)',
                backgroundSize: '300% 100%',
                animation: 'gradientMove 3s ease infinite',
                '@keyframes gradientMove': {
                  '0%, 100%': { backgroundPosition: '0% 50%' },
                  '50%': { backgroundPosition: '100% 50%' },
                },
              }
            }}
          >
            <Grid container spacing={4} alignItems="center">
              <Grid item xs={12} md={8}>
                <Typography
                  variant="h3"
                  sx={{
                    color: '#ffffff',
                    fontWeight: 800,
                    mb: 2,
                    fontSize: { xs: '2rem', md: '2.5rem' },
                    textShadow: '0 4px 16px rgba(0,0,0,0.6)',
                    letterSpacing: '-0.02em',
                  }}
                >
                  Transport Management Hub
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    color: 'rgba(255, 255, 255, 0.9)',
                    fontWeight: 400,
                    mb: 3,
                    lineHeight: 1.6,
                    textShadow: '0 2px 8px rgba(0,0,0,0.4)',
                  }}
                >
                  Advanced analytics and real-time monitoring for your fleet operations
                </Typography>
                
                <Grid container spacing={3}>
                  {[
                    { value: '98.7%', label: 'System Uptime', color: '#00ff88' },
                    { value: '24/7', label: 'Live Support', color: '#00d4ff' },
                    { value: '500+', label: 'Active Fleets', color: '#8b5cf6' },
                    { value: '€2.8M', label: 'Revenue', color: '#ec4899' },
                  ].map((stat, index) => (
                    <Grid item xs={6} sm={3} key={index}>
                      <Box sx={{ textAlign: 'center' }}>
                        <Typography
                          variant="h4"
                          sx={{
                            color: stat.color,
                            fontWeight: 800,
                            textShadow: `0 0 20px ${stat.color}50`,
                          }}
                        >
                          {stat.value}
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{ color: 'rgba(255, 255, 255, 0.7)' }}
                        >
                          {stat.label}
                        </Typography>
                      </Box>
                    </Grid>
                  ))}
                </Grid>
              </Grid>
              
              <Grid item xs={12} md={4}>
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  <Avatar
                    sx={{
                      width: 120,
                      height: 120,
                      background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.3), rgba(0, 212, 255, 0.2))',
                      border: '3px solid rgba(255, 255, 255, 0.2)',
                      backdropFilter: 'blur(10px)',
                    }}
                  >
                    <SpeedIcon sx={{ fontSize: 60, color: '#ffffff' }} />
                  </Avatar>
                </Box>
              </Grid>
            </Grid>
          </Card>
        </MDBox>

        {/* Premium Stats Cards inspired by the screenshots */}
        <MDBox mb={3}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} lg={3}>
              <PremiumStatCard
                icon={LocalShippingIcon}
                title="Active Vehicles"
                value="284"
                percentage="+12.5%"
                trend="up"
                gradient="rgba(255, 159, 64, 0.3), rgba(255, 99, 132, 0.2)"
                shadowColor="rgba(255, 159, 64, 0.4)"
              />
            </Grid>
            <Grid item xs={12} sm={6} lg={3}>
              <PremiumStatCard
                icon={RouteIcon}
                title="Routes Today"
                value="2,481"
                percentage="+8.2%"
                trend="up"
                gradient="rgba(59, 130, 246, 0.3), rgba(147, 51, 234, 0.2)"
                shadowColor="rgba(59, 130, 246, 0.4)"
              />
            </Grid>
            <Grid item xs={12} sm={6} lg={3}>
              <PremiumStatCard
                icon={AttachMoneyIcon}
                title="Revenue"
                value="$31,124"
                percentage="+15.8%"
                trend="up"
                gradient="rgba(16, 185, 129, 0.3), rgba(52, 211, 153, 0.2)"
                shadowColor="rgba(16, 185, 129, 0.4)"
              />
            </Grid>
            <Grid item xs={12} sm={6} lg={3}>
              <PremiumStatCard
                icon={PeopleIcon}
                title="Active Drivers"
                value="2,125"
                percentage="+3.1%"
                trend="up"
                gradient="rgba(236, 72, 153, 0.3), rgba(251, 113, 133, 0.2)"
                shadowColor="rgba(236, 72, 153, 0.4)"
              />
            </Grid>
          </Grid>
        </MDBox>

        {/* Premium Charts Section */}
        <MDBox mb={3}>
          <Grid container spacing={3}>
            <Grid item xs={12} lg={8}>
              <PremiumChartCard
                title="Fleet Performance Analytics"
                subtitle="Real-time monitoring and efficiency metrics"
                gradient="linear-gradient(90deg, #8b5cf6, #ec4899, #00d4ff)"
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
              </PremiumChartCard>
            </Grid>
            
            <Grid item xs={12} lg={4}>
              <PremiumChartCard
                title="Route Efficiency"
                subtitle="Optimization insights"
                gradient="linear-gradient(90deg, #ec4899, #8b5cf6)"
                icon={RouteIcon}
              >
                <Box sx={{ height: '300px', mt: 2 }}>
                  <ReportsBarChart
                    color="secondary"
                    title=""
                    description=""
                    date=""
                    chart={reportsBarChartData}
                  />
                </Box>
              </PremiumChartCard>
            </Grid>
          </Grid>
        </MDBox>

        {/* Bottom Section */}
        <MDBox>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6} lg={8}>
              <PremiumChartCard
                title="Operations Overview"
                subtitle="Comprehensive fleet management insights"
                gradient="linear-gradient(90deg, #00d4ff, #8b5cf6)"
                icon={AssessmentIcon}
              >
                <Projects />
              </PremiumChartCard>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <PremiumChartCard
                title="Recent Activities"
                subtitle="Live updates and notifications"
                gradient="linear-gradient(90deg, #8b5cf6, #00ff88)"
                icon={NotificationsIcon}
              >
                <OrdersOverview />
              </PremiumChartCard>
            </Grid>
          </Grid>
        </MDBox>

        <Footer />
        </MDBox>
      </VisionDashboardLayout>
  );
}

export default Dashboard;
