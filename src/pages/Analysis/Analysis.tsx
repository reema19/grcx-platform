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
              organizational context and mapped the
              violation against regulatory frameworks.
            </p>

          </div>

          <div className={styles.score}>

            <span>Confidence</span>

            <h2>98%</h2>

          </div>

        </header>

        <section className={styles.card}>

          <div className={styles.title}>

            <BrainCircuit size={20}/>

            AI Reasoning

          </div>

          <p>

            The AI detected that the employee changed
            departments while privileged financial
            permissions remained active. Based on identity
            lifecycle events, role definitions and access
            history, this creates a high probability of
            unauthorized financial operations.

          </p>

        </section>

        <section className={styles.grid}>

          <div className={styles.card}>

            <div className={styles.title}>
              <ShieldCheck size={18}/>
              Regulations
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

              <li>Inactive review process</li>

            </ul>

          </div>

        </section>

        <button
          className={styles.nextButton}
          onClick={() => navigate("/remediation")}
        >

          Continue to Remediation

          <ChevronRight size={18}/>

        </button>

      </div>

    </DashboardLayout>

  );

}