import React from 'react';

import TrendCard from '../../components/TrendCard';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/TrendCard',
  component: TrendCard,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <TrendCard {...args} />;

export const RizingTrend = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
RizingTrend.args = {
  trendName: 'Black shoes',
  volume: 34455,
  growth: 0.55,
  slope: 0.68,
  trendValues:[
    { time: 1640995200000, value: 21 },
    { time: 1641081600000, value: 12 },
    { time: 1641168000000, value: 55 },
    { time: 1641254400000, value: 72 },
    { time: 1641340800000, value: 69 },
    { time: 1641427200000, value: 75 },
    { time: 1641513600000, value: 70 },
    { time: 1641600000000, value: 31 },
    { time: 1641686400000, value: 21 },
    { time: 1641772800000, value: 71 },
    { time: 1641859200000, value: 78 },
    { time: 1641945600000, value: 68 },
    { time: 1642032000000, value: 77 },
    { time: 1642118400000, value: 60 },
    { time: 1642204800000, value: 19 },
    { time: 1642291200000, value: 36 },
    { time: 1642377600000, value: 43 },
    { time: 1642464000000, value: 89 },
    { time: 1642550400000, value: 85 },
    { time: 1642636800000, value: 88 },
    { time: 1642723200000, value: 87 },
    { time: 1642809600000, value: 22 },
    { time: 1642896000000, value: 26 },
    { time: 1642982400000, value: 77 },
    { time: 1643068800000, value: 85 },
    { time: 1643155200000, value: 68 },
    { time: 1643241600000, value: 100 },
    { time: 1643328000000, value: 79 },
    { time: 1643414400000, value: 34 },
    { time: 1643500800000, value: 42 }
  ]
};
 
export const LowerTrend = Template.bind({});
LowerTrend.args = {
  trendName: 'Red shoes',
  volume: 34455,
  growth: -0.55,
  slope: -0.77,
  trendValues:[
    { time: 1640995200000, value: 33 },
    { time: 1641081600000, value: 44 },
    { time: 1641168000000, value: 55 },
    { time: 1641254400000, value: 72 },
    { time: 1641340800000, value: 69 },
    { time: 1641427200000, value: 75 },
    { time: 1641513600000, value: 70 },
    { time: 1641600000000, value: 55 },
    { time: 1641686400000, value: 88 },
    { time: 1641772800000, value: 71 },
    { time: 1641859200000, value: 78 },
    { time: 1641945600000, value: 68 },
    { time: 1642032000000, value: 77 },
    { time: 1642118400000, value: 60 },
    { time: 1642204800000, value: 44 },
    { time: 1642291200000, value: 36 },
    { time: 1642377600000, value: 43 },
    { time: 1642464000000, value: 26 },
    { time: 1642550400000, value: 23 },
    { time: 1642636800000, value: 23 },
    { time: 1642723200000, value: 33 },
    { time: 1642809600000, value: 22 },
    { time: 1642896000000, value: 26 },
    { time: 1642982400000, value: 22 },
    { time: 1643068800000, value: 23 },
    { time: 1643155200000, value: 33 },
    { time: 1643241600000, value: 26 },
    { time: 1643328000000, value: 24 },
    { time: 1643414400000, value: 22 },
    { time: 1643500800000, value: 13 }
  ]
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'TrendCard',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'TrendCard',
};
