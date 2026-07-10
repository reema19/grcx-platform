import { Calendar } from "lucide-react";
import DashboardLayout from "../../layouts/DashboardLayout";
import ViolationsOverTimeChart from "../../components/charts/ViolationsOverTimeChart";
import styles from "./Dashboard.module.css";

export default function Dashboard() {
  return (
    <DashboardLayout>
      <div className={styles.container}>
        
        {/* Header Section */}
        <header className={styles.header}>
          <div>
            <h1 className={styles.title}>Good Morning, Reema</h1>
            <p className={styles.subtitle}>
              Here's What's Happening With Your Compliance Today
            </p>
          </div>
          <button className={styles.datePicker}>
            May 18 – May 24, 2026
            <Calendar size={18} className={styles.calendarIcon} />
          </button>
        </header>

        {/* Charts Row */}
        <section className={styles.chartsRow}>
          {/* Main Chart with Dynamic Component */}
          <div className={`${styles.card} ${styles.mainChart}`}>
            <h3 className={styles.cardTitle}>Violations Over Time</h3>
            <div className={styles.chartWrapper}>
              <ViolationsOverTimeChart />
            </div>
          </div>
          
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>Violations by Severity</h3>
          </div>
          
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>Top Violation Types</h3>
          </div>
        </section>

        {/* Bottom Row (Table & Coverage) */}
        <section className={styles.bottomRow}>
          <div className={`${styles.card} ${styles.tableCard}`}>
            <div className={styles.cardHeader}>
              <h3 className={styles.cardTitle}>Recent Violations</h3>
              <button className={styles.viewAll}>View All</button>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.cardHeader}>
              <h3 className={styles.cardTitle}>Regulatory Coverage</h3>
              <button className={styles.viewAll}>View Details</button>
            </div>
          </div>
        </section>

      </div>
    </DashboardLayout>
  );
}