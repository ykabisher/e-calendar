import { merge } from 'lodash';
import dynamic from 'next/dynamic'
const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });
import { styled } from '@mui/material/styles';
import useDeviceDetect from './utils/useDeviceDetect'
// material
import { Card, CardHeader, Box, Grid, Paper, Typography, Stack } from '@mui/material';
//
import { BaseOptionChart } from './charts';
import { maxHeight } from '@mui/system';

// ----------------------------------------------------------------------

// const CHART_DATA = [
//   {
//     name: 'Team B',
//     type: 'area',
//     data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43]
//   },
//   {
//     name: 'Team A',
//     type: 'line',
//     data: [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55]
//   }

// ];

const createSlopeArray = (trendValues, slope) => {
  const firstValue = trendValues[0];
  const arr = [firstValue];
  let lastValue = firstValue[1];
  for (var i = 1; i <= trendValues.length - 1; i++) {
    const newValue = lastValue + slope;
    arr.push([trendValues[i][0], newValue]);
    lastValue = newValue;
  }
  return arr;
}

export default function TrendCard({ trendName, trendValues, volume, growth, slope }) {
  const { isMobile } = useDeviceDetect();
  const trendValuesArray = trendValues.map(vObj => [vObj.time, vObj.value]);
  const cardColor = growth > 0 ? '#43d97e' : '#d94343';
  const lineData = {
    name: 'Trend value',
    type: 'area',
    data: trendValuesArray
  }
  const slopeData = {
    name: 'Slope',
    type: 'line',
    data: createSlopeArray(trendValuesArray, slope)
  }

  const normalizedVolume = volume?.toLocaleString()
  const percentGrowth = growth > 0 ? `+${Math.round(growth)}%` : `${Math.round(growth)}%`
  const chartOptions = merge(BaseOptionChart(), {
    stroke: {
      width: [2, 2],
      dashArray: [0, 8]
    },
    plotOptions: { bar: { columnWidth: '11%', borderRadius: 4 } },
    fill: { type: ['gradient', 'solid'] },
    colors: [cardColor, '#cbcbcb'],
    legend: { show: false },
    yaxis: { show: false },

    xaxis: {
      labels: {
        datetimeUTC: false
      },
      axisTicks: {
        show: false,
      },
      type: 'datetime', 
      labels: {
        show: !isMobile
      }
    }
  });



  return (
    <Card sx={{ maxWidth: 600 }} >
      <Box sx={{ p: 1, pb: 1 }} dir="ltr">
        <Grid container >
          <Grid item xs={6}>
            <Box sx={{ p: 1, pb: 1 }} dir="ltr">
              <Stack spacing={1}>
                <Typography variant="cardTitle">{trendName.toLowerCase()}</Typography>
                <Typography variant="cardSubTitle">Searches</Typography>
                <Typography variant="cardNumber">{normalizedVolume} per month</Typography>
                <Typography variant="cardSubTitle">Growth</Typography>
                <Typography variant="cardNumber">{percentGrowth} from last month</Typography>
              </Stack>
            </Box>
          </Grid>
          <Grid item xs={6}>
            <ReactApexChart height="100%" type="line" series={[lineData, slopeData]} options={chartOptions} />
          </Grid>
        </Grid>
      </Box>
    </Card>
  );
}
