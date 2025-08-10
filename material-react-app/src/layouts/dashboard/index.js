/**
=========================================================
* Material Dashboard 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Grid from "@mui/material/Grid";
import { Box, Typography } from "@mui/material";

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

function Dashboard() {
  const { sales, tasks } = reportsLineChartData;

  return (
    <VisionDashboardLayout>
      <DashboardNavbar />
      
      {/* Welcome Section */}
      <MDBox mb={4}>
        <Box 
          className="vision-glass"
          sx={{ 
            p: 4, 
            borderRadius: "24px",
            background: "linear-gradient(135deg, rgba(30, 42, 120, 0.1) 0%, rgba(92, 45, 213, 0.05) 100%)",
            position: "relative",
            overflow: "hidden",
            "&::before": {
              content: '""',
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              height: "4px",
              background: "linear-gradient(90deg, #1E2A78, #5C2DD5, #7B42F6, #00D4FF)",
            }
          }}
        >
          <Typography 
            variant="h3" 
            sx={{ 
              color: "white", 
              fontWeight: 700, 
              mb: 1,
              background: "linear-gradient(135deg, #FFFFFF 0%, #00D4FF 100%)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Fleet Management Dashboard
          </Typography>
          <Typography 
            variant="h6" 
            sx={{ 
              color: "#A0AEC0", 
              fontWeight: 400,
              mb: 3
            }}
          >
            Monitor and optimize your delivery operations in real-time
          </Typography>
          
          {/* Quick Stats */}
          <Grid container spacing={3}>
            <Grid item xs={6} md={3}>
              <Box sx={{ textAlign: "center" }}>
                <Typography variant="h4" sx={{ color: "#01B574", fontWeight: 700 }}>
                  98.5%
                </Typography>
                <Typography variant="body2" sx={{ color: "#718096" }}>
                  On-Time Delivery
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={6} md={3}>
              <Box sx={{ textAlign: "center" }}>
                <Typography variant="h4" sx={{ color: "#00D4FF", fontWeight: 700 }}>
                  24/7
                </Typography>
                <Typography variant="body2" sx={{ color: "#718096" }}>
                  Live Tracking
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={6} md={3}>
              <Box sx={{ textAlign: "center" }}>
                <Typography variant="h4" sx={{ color: "#FFB547", fontWeight: 700 }}>
                  15.2K
                </Typography>
                <Typography variant="body2" sx={{ color: "#718096" }}>
                  Deliveries/Month
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={6} md={3}>
              <Box sx={{ textAlign: "center" }}>
                <Typography variant="h4" sx={{ color: "#7B42F6", fontWeight: 700 }}>
                  €2.8M
                </Typography>
                <Typography variant="body2" sx={{ color: "#718096" }}>
                  Monthly Revenue
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </MDBox>

      <MDBox
        sx={{
          background: 'transparent',
          minHeight: 'calc(100vh - 220px)',
        }}
      >
        {/* Statistics Cards Section */}
        <MDBox mb={4}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} lg={3}>
              <VisionStatCard
                color="primary"
                icon="local_shipping"
                title="Active Trucks"
                count={281}
                percentage={{
                  color: "success",
                  amount: "+12%",
                  label: "vs last month",
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6} lg={3}>
              <VisionStatCard
                color="info"
                icon="route"
                title="Total Routes"
                count="2,300"
                percentage={{
                  color: "success",
                  amount: "+8%",
                  label: "vs last month",
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6} lg={3}>
              <VisionStatCard
                color="success"
                icon="attach_money"
                title="Revenue"
                count="€34.2K"
                percentage={{
                  color: "success",
                  amount: "+15%",
                  label: "vs yesterday",
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6} lg={3}>
              <VisionStatCard
                color="secondary"
                icon="people"
                title="Active Drivers"
                count="142"
                percentage={{
                  color: "warning",
                  amount: "-2%",
                  label: "vs last week",
                }}
              />
            </Grid>
          </Grid>
        </MDBox>

        {/* Charts Section */}
        <MDBox mb={4}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6} lg={4}>
              <MDBox className="vision-card">
                <ReportsBarChart
                  color="info"
                  title="Fleet Performance"
                  description="Route Efficiency Analysis"
                  date="updated 2 hours ago"
                  chart={reportsBarChartData}
                />
              </MDBox>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <MDBox className="vision-card">
                <ReportsLineChart
                  color="success"
                  title="Daily Revenue"
                  description={
                    <>
                      (<strong>+15%</strong>) increase in today's earnings.
                    </>
                  }
                  date="updated 30 min ago"
                  chart={sales}
                />
              </MDBox>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <MDBox className="vision-card">
                <ReportsLineChart
                  color="dark"
                  title="Delivery Status"
                  description="Completed vs Pending Deliveries"
                  date="live updates"
                  chart={tasks}
                />
              </MDBox>
            </Grid>
          </Grid>
        </MDBox>

        {/* Projects and Orders Section */}
        <MDBox>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6} lg={8}>
              <MDBox className="vision-card">
                <Projects />
              </MDBox>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <MDBox className="vision-card">
                <OrdersOverview />
              </MDBox>
            </Grid>
          </Grid>
        </MDBox>
      </MDBox>
      <Footer />
    </VisionDashboardLayout>
  );
}

export default Dashboard;
