import DashboardLayout from "../../layouts/DashboardLayout";
import {
  Search,
  Filter,
  SlidersHorizontal,
  ArrowUpDown,
} from "lucide-react";

import styles from "./Violations.module.css";
import ViolationCard from "../../components/violations/ViolationCard";
import { violationsData } from "../../components/violations/violationsData";

export default function Violations() {
  return (
    <DashboardLayout>
      <div className={styles.container}>
        {/* Header */}
        <section className={styles.header}>
          <div>
            <h1 className={styles.title}>Violations</h1>

            <p className={styles.subtitle}>
              Monitor detected identity, access and compliance violations across
              your organization.
            </p>
          </div>

          <button className={styles.exportButton}>
            Export Report
          </button>
        </section>

        {/* Toolbar */}
        <section className={styles.toolbar}>
          {/* Search */}

          <div className={styles.search}>
            <Search size={18} />

            <input
              placeholder="Search by employee, violation or ID..."
            />
          </div>

          {/* Filters */}

          <div className={styles.filters}>
            <button className={styles.filterButton}>
              <Filter size={16} />
              Severity
            </button>

            <button className={styles.filterButton}>
              <SlidersHorizontal size={16} />
              Framework
            </button>

            <button className={styles.filterButton}>
              Status
            </button>

            <button className={styles.sortButton}>
              <ArrowUpDown size={16} />
              Sort
            </button>
          </div>
        </section>

        {/* Summary */}

        <section className={styles.summary}>
          <div className={styles.summaryCard}>
            <span>Total Violations</span>
            <h2>27</h2>
          </div>

          <div className={styles.summaryCard}>
            <span>Critical</span>
            <h2 className={styles.critical}>3</h2>
          </div>

          <div className={styles.summaryCard}>
            <span>High</span>
            <h2 className={styles.high}>7</h2>
          </div>

          <div className={styles.summaryCard}>
            <span>Resolved</span>
            <h2 className={styles.success}>17</h2>
          </div>
        </section>

        {/* Violations */}

        <section className={styles.cardsSection}>
          {violationsData.map((violation) => (
            <ViolationCard
              key={violation.id}
              violation={violation}
            />
          ))}
        </section>
      </div>
    </DashboardLayout>
  );
}