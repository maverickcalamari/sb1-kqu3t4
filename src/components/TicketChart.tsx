import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';

interface TicketChartProps {
  data: Array<{
    date: string;
    created: number;
    resolved: number;
  }>;
  title: string;
}

export function TicketChart({ data, title }: TicketChartProps) {
  return (
    <div>
      <h3 className="text-lg font-semibold text-white mb-4">{title}</h3>
      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#333" />
            <XAxis 
              dataKey="date" 
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
            <Line 
              type="monotone" 
              dataKey="created" 
              stroke="#3B82F6" 
              strokeWidth={2}
              dot={{ fill: '#3B82F6', strokeWidth: 2 }}
              name="Created"
            />
            <Line 
              type="monotone" 
              dataKey="resolved" 
              stroke="#10B981" 
              strokeWidth={2}
              dot={{ fill: '#10B981', strokeWidth: 2 }}
              name="Resolved"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}