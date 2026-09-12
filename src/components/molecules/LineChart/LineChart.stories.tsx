import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import Box from '@atoms/Box/Box';
import Title from '@atoms/Title/Title';
import Button from '@atoms/Button/Button';
import LineChart, { LineChartProps, LineChartDataItem } from './LineChart';

// Pio colors from tailwind.config.js (for use in recharts)
const PIO_COLORS = {
  tealDark: '#2b665d',
  teal: '#4db86c',
  amber: '#f4a460',
  stone: '#6d4c41',
  coral: '#e05a5a',
  text: '#2d2d2f',
  textMuted: '#6b7280',
  grid: '#e5e7eb',
  bgLight: '#f6f4eb',
} as const;

export default {
  title: 'Molecules/LineChart',
  component: LineChart,
  argTypes: {
    height: { control: 'number' },
    showGrid: { control: 'boolean' },
    showTooltip: { control: 'boolean' },
    data: { control: false, table: { disable: true } },
    series: { control: false, table: { disable: true } },
    xAxisKey: { control: false, table: { disable: true } },
    width: { control: false, table: { disable: true } },
    yAxisDomain: { control: false, table: { disable: true } },
  },
} as Meta;

const sampleData: LineChartDataItem[] = [
  { day: 'Mon', series1: 0.6, series2: 2.1 },
  { day: 'Tue', series1: 1.2, series2: 2.3 },
  { day: 'Wed', series1: 2.9, series2: 1.5 },
  { day: 'Thu', series1: 2.0, series2: 2.4 },
  { day: 'Fri', series1: 0.9, series2: 3.7 },
  { day: 'Sat', series1: 2.5, series2: 1.4 },
  { day: 'Sun', series1: 2.2, series2: 1.5 },
];

const defaultSeries = [
  {
    dataKey: 'series1',
    name: 'Series 1',
    stroke: PIO_COLORS.tealDark,
    dotFill: PIO_COLORS.tealDark,
    dotStroke: PIO_COLORS.tealDark,
  },
  {
    dataKey: 'series2',
    name: 'Series 2',
    stroke: PIO_COLORS.amber,
    dotFill: PIO_COLORS.amber,
    dotStroke: PIO_COLORS.amber,
  },
];

const Template: StoryFn<LineChartProps> = (args) => (
  <LineChart {...args} />
);

export const Default = Template.bind({});
Default.args = {
  data: sampleData,
  series: defaultSeries,
  xAxisKey: 'day',
  height: 280,
  showGrid: false,
  showTooltip: true,
  yAxisDomain: [0, 4],
};
Default.tags = ['!dev'];

export const ChartOnly = Template.bind({});
ChartOnly.args = {
  data: sampleData,
  series: defaultSeries,
  xAxisKey: 'day',
  height: 280,
  showGrid: false,
  showTooltip: true,
  yAxisDomain: [0, 4],
};
ChartOnly.parameters = { controls: { disable: true } };

export const WithBox = () => (
  <div className="p-6 max-w-xl">
    <Box
      header={<Title size="lg">Weekly trend</Title>}
      footer={
        <Button
          label="View details"
          type="green"
          onClick={() => {}}
        />
      }
      className="w-full"
    >
      <LineChart
        data={sampleData}
        series={defaultSeries}
        xAxisKey="day"
        height={280}
        showGrid={false}
        showTooltip={true}
        yAxisDomain={[0, 4]}
      />
    </Box>
  </div>
);
WithBox.parameters = { controls: { disable: true } };

/** Same composition with alternating pio dot colors (stone/coral). */
export const WithAlternatingDotColors = () => {
  const seriesWithVariedDots = [
    {
      dataKey: 'series1',
      name: 'Series 1',
      stroke: PIO_COLORS.tealDark,
      dotFill: PIO_COLORS.stone,
      dotStroke: PIO_COLORS.tealDark,
    },
    {
      dataKey: 'series2',
      name: 'Series 2',
      stroke: PIO_COLORS.amber,
      dotFill: PIO_COLORS.coral,
      dotStroke: PIO_COLORS.amber,
    },
  ];
  return (
    <div className="p-6 max-w-xl">
      <Box
        header={<Title size="lg">Weekly trend</Title>}
        footer={
          <Button
            label="View details"
            type="green"
            onClick={() => {}}
          />
        }
        className="w-full"
      >
        <LineChart
          data={sampleData}
          series={seriesWithVariedDots}
          xAxisKey="day"
          height={280}
          showGrid={false}
          showTooltip={true}
          yAxisDomain={[0, 4]}
        />
      </Box>
    </div>
  );
};
WithAlternatingDotColors.parameters = { controls: { disable: true } };
