// material
import { Box, Grid, Container, Typography } from '@mui/material';

// components
import Page from '../Page';
import SelectPeriod from '../SelectPeriod/SelectPeriod';
import SelectCategory from '../SelectCategory/SelectCategory';
import SelectCountry from '../SelectCountry/SelectCountry';
import TrendCard from '../TrendCard';


// ----------------------------------------------------------------------

export default function DashboardApp({ topTrends }) {
  return (
    <Page title="Dashboard | Minimal-UI">
      <Container maxWidth="xl">
        <Box sx={{ pb: 5 }}>
          <Typography variant="h1">Discover the next trend</Typography>
          <Typography variant="h2">Find, track and get alerts about new trends and exploading topics </Typography>
        </Box>
        <Grid direction="row"
          justifyContent="flex-start"
          alignItems="center" container spacing={2}>
          <Grid item >
            <SelectCountry countries={['United States']} />
          </Grid>
          <Grid item >
            <SelectPeriod />
          </Grid>
          <Grid item >
            <SelectCategory />
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          {topTrends.map((trendData, key) =>
            <Grid item xs={12} sm={6} md={4}>
              <TrendCard key={key}
                trendName={trendData.name}
                trendValues={trendData.values.month.timelineData}
                volume={trendData.values.month.volume}
                growth={trendData.values.month.growthPercent}
                slope={trendData.values.month.slope} />
            </Grid>)}
        </Grid>
      </Container>
    </Page>
  );
}
