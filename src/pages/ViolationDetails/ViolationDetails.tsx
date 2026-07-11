import DashboardLayout from "../../layouts/DashboardLayout";
import {
  ShieldAlert,
  User,
  Building2,
  ShieldCheck,
  Sparkles,
  ChevronRight,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import styles from "./ViolationDetails.module.css";

export default function ViolationDetails() {

  const navigate = useNavigate();

  return (
    <DashboardLayout>

      <div className={styles.container}>

        {/* Header */}

        <section className={styles.header}>

          <div>

            <div className={styles.badge}>
              <ShieldAlert size={15}/>
              Critical
            </div>

            <h1>Excessive Privileged Access</h1>

            <p>Detected on May 24, 2026</p>

          </div>

          <div className={styles.riskCard}>
            <span>Risk Score</span>
            <h2>96</h2>
            <small>AI Confidence 98%</small>
          </div>

        </section>

        {/* Identity + Summary */}

        <section className={styles.grid}>

          <div className={styles.card}>

            <h3>Identity</h3>

            <div className={styles.identity}>

              <div className={styles.avatar}>
                <User size={22}/>
              </div>

              <div>

                <h4>Ahmed Al-Qahtani</h4>

                <span>
                  <Building2 size={14}/>
                  Finance Department
                </span>

              </div>

            </div>

          </div>

          <div className={styles.card}>

            <h3>Violation Summary</h3>

            <p className={styles.summary}>
              The employee was transferred from the Finance department
              to Operations, however privileged permissions remained
              active in Active Directory.
            </p>

          </div>

        </section>

        {/* Permissions */}

        <section className={styles.card}>

          <h3>Affected Permissions</h3>

          <div className={styles.tags}>

            <span>Domain Admin</span>
            <span>SWIFT Operator</span>
            <span>Finance Approval</span>

          </div>

        </section>

        {/* Framework */}

        <section className={styles.card}>

          <h3>Mapped Controls</h3>

          <div className={styles.frameworks}>

            <div className={styles.framework}>
              <ShieldCheck size={18}/>
              SAMA CSF
            </div>

            <div className={styles.framework}>
              <ShieldCheck size={18}/>
              NCA ECC
            </div>

            <div className={styles.framework}>
              <ShieldCheck size={18}/>
              ISO 27001
            </div>

          </div>

        </section>

        {/* AI */}

        <section className={styles.aiCard}>

          <div>

            <div className={styles.aiTitle}>

              <Sparkles size={18}/>

              AI Recommendation

            </div>

            <p>
              Remove privileged access from Domain Admin and SWIFT
              Operator groups, notify the Identity Management team,
              and create a remediation task automatically.
            </p>

          </div>

          <button
            className={styles.actionButton}
            onClick={() => navigate("/analysis")}
          >
            Generate Remediation
            <ChevronRight size={18}/>
          </button>

        </section>

      </div>

    </DashboardLayout>
  );
}