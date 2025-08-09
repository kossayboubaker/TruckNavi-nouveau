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

// Material Dashboard 2 React components
import MDBox from "components/MDBox";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
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
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox
        py={3}
        sx={{
          background: 'transparent',
          minHeight: 'calc(100vh - 120px)',
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
              <MDBox
                sx={{
                  '& .MuiCard-root': {
                    background: 'rgba(26, 32, 44, 0.8)',
                    backdropFilter: 'blur(20px)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: '20px',
                  },
                }}
              >
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
              <MDBox
                sx={{
                  '& .MuiCard-root': {
                    background: 'rgba(26, 32, 44, 0.8)',
                    backdropFilter: 'blur(20px)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: '20px',
                  },
                }}
              >
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
              <MDBox
                sx={{
                  '& .MuiCard-root': {
                    background: 'rgba(26, 32, 44, 0.8)',
                    backdropFilter: 'blur(20px)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: '20px',
                  },
                }}
              >
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
              <MDBox
                sx={{
                  '& .MuiCard-root': {
                    background: 'rgba(26, 32, 44, 0.8)',
                    backdropFilter: 'blur(20px)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: '20px',
                  },
                }}
              >
                <Projects />
              </MDBox>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <MDBox
                sx={{
                  '& .MuiCard-root': {
                    background: 'rgba(26, 32, 44, 0.8)',
                    backdropFilter: 'blur(20px)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: '20px',
                  },
                }}
              >
                <OrdersOverview />
              </MDBox>
            </Grid>
          </Grid>
        </MDBox>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Dashboard;
