import DashboardLayout from "../../layouts/DashboardLayout";
import {
  BrainCircuit,
  ShieldCheck,
  Sparkles,
  ChevronRight,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

import styles from "./Analysis.module.css";

export default function Analysis() {

  const navigate = useNavigate();

  return (

    <DashboardLayout>

      <div className={styles.container}>

        {/* Header */}

        <header className={styles.header}>

          <div>

            <span className={styles.label}>
              AI ANALYSIS
            </span>

            <h1>
              Compliance Analysis Complete
            </h1>

            <p>
              GRCx analyzed the identity, permissions,
              organizational context, historical identity
              events and mapped the detected violation
              against applicable regulatory frameworks.
            </p>

          </div>

          <div className={styles.score}>

            <span>Confidence</span>

            <h2>98%</h2>

          </div>

        </header>

        {/* AI Reasoning */}

        <section className={styles.card}>

          <div className={styles.title}>

            <BrainCircuit size={20}/>

            AI Reasoning

          </div>

          <p>

            The employee changed departments while
            privileged financial permissions remained
            active. Identity lifecycle records indicate
            that access rights were never recalculated,
            creating a high probability of unauthorized
            financial operations.

          </p>

        </section>

        {/* Two Cards */}

        <section className={styles.grid}>

          <div className={styles.card}>

            <div className={styles.title}>

              <ShieldCheck size={18}/>

              Applicable Regulations

            </div>

            <ul>

              <li>SAMA CSF IAM-3</li>

              <li>NCA ECC IAM-2</li>

              <li>ISO 27001 A.5</li>

            </ul>

          </div>

          <div className={styles.card}>

            <div className={styles.title}>

              <Sparkles size={18}/>

              AI Findings

            </div>

            <ul>

              <li>Role mismatch detected</li>

              <li>Privilege escalation risk</li>

              <li>Identity lifecycle not updated</li>

              <li>Access review overdue</li>

            </ul>

          </div>

        </section>

        {/* Recommendation Preview */}

        <section className={styles.card}>

          <div className={styles.title}>

            <Sparkles size={18}/>

            Recommended Action

          </div>

          <p>

            GRCx recommends revoking unnecessary privileged
            permissions, recalculating the employee role,
            notifying the Identity Governance team and
            validating compliance controls before closing
            the incident.

          </p>

        </section>

        {/* CTA */}

        <button
          className={styles.nextButton}
          onClick={() => navigate("/remediation")}
        >

          Review Remediation Plan

          <ChevronRight size={18}/>

        </button>

      </div>

    </DashboardLayout>

  );

}