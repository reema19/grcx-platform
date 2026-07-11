import DashboardLayout from "../../layouts/DashboardLayout";
import {
  CheckCircle2,
  ShieldCheck,
  UserCog,
  BellRing,
  FileCheck2,
  ChevronRight,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

import styles from "./Remediation.module.css";

export default function Remediation() {

  const navigate = useNavigate();

  return (

    <DashboardLayout>

      <div className={styles.container}>

        <header className={styles.header}>

          <div>

            <span className={styles.badge}>
              AI GENERATED PLAN
            </span>

            <h1>
              Recommended Remediation Plan
            </h1>

            <p>
              Based on the detected violation and applicable
              regulatory controls, GRCx generated the following
              remediation workflow.
            </p>

          </div>

        </header>

        {/* Timeline */}

        <section className={styles.timeline}>

          <div className={styles.step}>

            <CheckCircle2 size={20}/>

            <div>

              <h3>Remove Excessive Privileges</h3>

              <p>
                Remove Domain Admin and SWIFT Operator access
                from the employee.
              </p>

            </div>

          </div>

          <div className={styles.step}>

            <UserCog size={20}/>

            <div>

              <h3>Review Identity Role</h3>

              <p>
                Recalculate permissions according to the
                employee's current department.
              </p>

            </div>

          </div>

          <div className={styles.step}>

            <BellRing size={20}/>

            <div>

              <h3>Notify Security Team</h3>

              <p>
                Create a security task and notify the Identity
                Governance team.
              </p>

            </div>

          </div>

          <div className={styles.step}>

            <FileCheck2 size={20}/>

            <div>

              <h3>Compliance Verification</h3>

              <p>
                Validate that all mapped SAMA and NCA controls
                are satisfied after remediation.
              </p>

            </div>

          </div>

        </section>

        {/* Summary */}

        <section className={styles.summary}>

          <div>

            <ShieldCheck size={22}/>

            <div>

              <h3>Expected Result</h3>

              <p>

                Estimated Risk Reduction

              </p>

            </div>

          </div>

          <h2>96 → 18</h2>

        </section>

        <button
          className={styles.button}
          onClick={() => navigate("/success")}
        >

          Apply Remediation Plan

          <ChevronRight size={18}/>

        </button>

      </div>

    </DashboardLayout>

  );

}