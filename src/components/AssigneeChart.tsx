import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend
} from 'recharts';
import type { AssigneeStats } from '@/types';

interface AssigneeChartProps {
  data: AssigneeStats[];
}

export function AssigneeChart({ data }: AssigneeChartProps) {
  return (
    <div>
      <h3 className="text-lg font-semibold text-white mb-4">
        Tickets Per Assignee
      </h3>
      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#333" />
            <XAxis 
              dataKey="name" 
              stroke="#fff"
              tick={{ fill: '#fff' }}
            />
            <YAxis 
              stroke="#fff"
              tick={{ fill: '#fff' }}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: 'rgba(0, 0, 0, 0.85)',
                border: '1px solid #666',
                borderRadius: '4px',
                color: '#fff'
              }}
            />
            <Legend
              formatter={(value) => <span className="text-white">{value}</span>}
            />
            <Bar 
              dataKey="resolved" 
              fill="#3B82F6"
              radius={[4, 4, 0, 0]}
              name="Resolved Tickets"
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}