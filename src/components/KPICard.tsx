import { Card } from './ui/Card';
import { TrendingUp, TrendingDown } from 'lucide-react';

interface KPICardProps {
  title: string;
  value: number;
  subtitle: string;
  trend?: number;
}

export function KPICard({ title, value, subtitle, trend }: KPICardProps) {
  return (
    <Card className="p-6 hover:bg-white/5 transition-colors">
      <h3 className="text-lg font-semibold text-white mb-4">{title}</h3>
      <div className="flex items-end justify-between">
        <div>
          <div className="text-4xl font-bold text-blue-500 mb-2">{value}</div>
          <p className="text-sm text-white/80">{subtitle}</p>
        </div>
        {trend && (
          <div className={`flex items-center ${trend > 0 ? 'text-green-500' : 'text-red-500'}`}>
            {trend > 0 ? <TrendingUp className="w-5 h-5" /> : <TrendingDown className="w-5 h-5" />}
            <span className="ml-1 text-sm font-medium">{Math.abs(trend)}%</span>
          </div>
        )}
      </div>
    </Card>
  );
}