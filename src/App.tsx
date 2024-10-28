import { Activity } from 'lucide-react';
import { KPICard } from './components/KPICard';
import { TicketChart } from './components/TicketChart';
import { AssigneeChart } from './components/AssigneeChart';
import { StatusPieChart } from './components/StatusPieChart';
import { RegionBarChart } from './components/RegionBarChart';

const kpiData = {
  created: 28,
  resolved: 14
};

const timelineData = [
  { date: '2024-01-01', created: 5, resolved: 2 },
  { date: '2024-01-02', created: 8, resolved: 4 },
  { date: '2024-01-03', created: 12, resolved: 6 },
  { date: '2024-01-04', created: 15, resolved: 8 },
  { date: '2024-01-05', created: 20, resolved: 10 }
];

const assigneeData = [
  { name: 'Sallie Yu', resolved: 42 },
  { name: 'James Tsoi', resolved: 28 },
  { name: 'Michihiro Ogi', resolved: 15 },
  { name: 'Terry Song', resolved: 14 },
  { name: 'Uwe Gross', resolved: 4 }
];

const statusData = [
  { status: 'Resolved', count: 45 },
  { status: 'Withdrawn', count: 15 },
  { status: 'Acknowledged', count: 25 }
];

const regionData = [
  { region: 'APAC', tickets: 68 },
  { region: 'AMER', tickets: 42 },
  { region: 'EMEA', tickets: 35 }
];

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black">
      <header className="bg-black/40 backdrop-blur-lg border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center space-x-4">
            <Activity className="h-10 w-10 text-blue-500" />
            <div>
              <h1 className="text-3xl font-bold text-white">
                BTS BQNT Cloud Tracker
              </h1>
              <p className="text-blue-400/80">
                Real-time Progress Dashboard
              </p>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <KPICard
            title="Created Tickets"
            value={kpiData.created}
            subtitle="Total tickets created"
            trend={+15}
          />
          <KPICard
            title="Resolved Tickets"
            value={kpiData.resolved}
            subtitle="Total tickets resolved"
            trend={+8}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <div className="card p-6">
            <StatusPieChart data={statusData} />
          </div>
          <div className="card p-6">
            <RegionBarChart data={regionData} />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="card p-6">
            <TicketChart
              data={timelineData}
              title="Ticket Timeline"
            />
          </div>
          <div className="card p-6">
            <AssigneeChart data={assigneeData} />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;