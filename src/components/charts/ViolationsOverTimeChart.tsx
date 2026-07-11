import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { violationsData } from './data';

export default function ViolationsOverTimeChart() {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={violationsData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="#2a2a2a" vertical={false} />
        <XAxis dataKey="date" stroke="#666" tick={{fontSize: 12}} />
        <YAxis stroke="#666" tick={{fontSize: 12}} />
        <Tooltip contentStyle={{ backgroundColor: '#1a1a1a', border: 'none', borderRadius: '8px' }} />
        <Line type="monotone" dataKey="critical" stroke="#ef4444" strokeWidth={2} dot={{ r: 4 }} />
        <Line type="monotone" dataKey="high" stroke="#f97316" strokeWidth={2} dot={{ r: 4 }} />
        <Line type="monotone" dataKey="medium" stroke="#eab308" strokeWidth={2} dot={{ r: 4 }} />
        <Line type="monotone" dataKey="low" stroke="#3b82f6" strokeWidth={2} dot={{ r: 4 }} />
      </LineChart>
    </ResponsiveContainer>
  );
}