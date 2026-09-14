import React from 'react';
import {
  LineChart as RechartsLineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

export interface LineChartDataItem {
  [key: string]: string | number;
}

export interface LineChartSeriesConfig {
  dataKey: string;
  stroke?: string;
  dotStroke?: string;
  dotFill?: string;
  name?: string;
}

export interface LineChartProps {
  data: LineChartDataItem[];
  series: LineChartSeriesConfig[];
  xAxisKey: string;
  width?: number | `${number}%`;
  height?: number | `${number}%`;
  showGrid?: boolean;
  showTooltip?: boolean;
  yAxisDomain?: [number | 'auto', number | 'auto'];
}

const DEFAULT_SERIES_COLOR = 'rgb(var(--lz-pio-teal-dark))';

const LineChart: React.FC<LineChartProps> = ({
  data,
  series,
  xAxisKey,
  width = '100%',
  height = 280,
  showGrid = false,
  showTooltip = true,
  yAxisDomain = [0, 'auto'],
}) => {
  return (
    <ResponsiveContainer width={width} height={height}>
      <RechartsLineChart
        data={data}
        margin={{ top: 8, right: 8, left: 0, bottom: 0 }}
      >
        {showGrid && (
          <CartesianGrid
            strokeDasharray="3 3"
            stroke="var(--pio-grid, #e5e7eb)"
            vertical={false}
          />
        )}
        <XAxis
          dataKey={xAxisKey}
          axisLine={false}
          tickLine={false}
          tick={{ fill: 'var(--pio-text-muted, #6b7280)', fontSize: 12 }}
        />
        <YAxis
          domain={yAxisDomain}
          axisLine={false}
          tickLine={false}
          tick={{ fill: 'var(--pio-text-muted, #6b7280)', fontSize: 12 }}
          width={24}
        />
        {showTooltip && (
          <Tooltip
            contentStyle={{
              backgroundColor: 'var(--pio-bg-light, #f6f4eb)',
              border: '1px solid var(--pio-grid, #e5e7eb)',
              borderRadius: 8,
            }}
            labelStyle={{ color: 'var(--pio-text, #2d2d2f)' }}
          />
        )}
        {series.map((s, index) => (
          <Line
            key={s.dataKey}
            type="monotone"
            dataKey={s.dataKey}
            name={s.name ?? s.dataKey}
            stroke={s.stroke ?? DEFAULT_SERIES_COLOR}
            strokeWidth={2}
            dot={{
              r: 4,
              fill: s.dotFill ?? s.stroke ?? DEFAULT_SERIES_COLOR,
              stroke: s.dotStroke ?? s.stroke ?? DEFAULT_SERIES_COLOR,
              strokeWidth: 2,
            }}
            activeDot={{
              r: 5,
              fill: s.dotFill ?? s.stroke,
              stroke: s.dotStroke ?? s.stroke,
              strokeWidth: 2,
            }}
            isAnimationActive={true}
          />
        ))}
      </RechartsLineChart>
    </ResponsiveContainer>
  );
};

export default LineChart;
