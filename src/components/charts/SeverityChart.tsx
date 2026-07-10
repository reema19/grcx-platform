import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import { severityData } from './data';
import styles from './SeverityChart.module.css';

export default function SeverityChart() {
  return (
    <div className={styles.container}>
      <ResponsiveContainer width="100%" height={200}>
        <PieChart>
          <Pie
            data={severityData}
            innerRadius={60}
            outerRadius={80}
            paddingAngle={5}
            dataKey="value"
          >
            {severityData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip contentStyle={{ backgroundColor: '#1a1a1a', border: 'none', borderRadius: '8px' }} />
        </PieChart>
      </ResponsiveContainer>
      
      {/* الرقم الإجمالي في المنتصف */}
      <div className={styles.centerText}>
        <span className={styles.total}>126</span>
        <span className={styles.label}>Total</span>
      </div>
    </div>
  );
}