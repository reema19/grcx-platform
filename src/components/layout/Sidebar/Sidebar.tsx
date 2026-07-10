import { 
  ShieldCheck, 
  LayoutDashboard, 
  Users, 
  UserCheck, 
  AlertTriangle, 
  Network, 
  CheckSquare, 
  FileText, 
  Settings, 
  Sparkles 
} from "lucide-react";
import SidebarItem from "./SidebarItem";
import styles from "./Sidebar.module.css";

export default function Sidebar() {

  return (
    <aside className={styles.sidebar}>

      {/* Logo */}
      <div className={styles.brand}>
        <div className={styles.logoIcon}>
          <ShieldCheck size={24}/>
        </div>

        <div>
          <h2>GRCx</h2>
          <span>AI Compliance Platform</span>
        </div>
      </div>

      {/* Navigation */}
      <nav className={styles.navigation}>

        <SidebarItem
          label="Overview"
          icon={<LayoutDashboard size={20}/>}
          path="/dashboard"
        />

        <SidebarItem
          label="Identities"
          icon={<Users size={20}/>}
          path="/identities"
        />

        <SidebarItem
          label="Access Review"
          icon={<UserCheck size={20}/>}
          path="/access-review"
        />

        <SidebarItem
          label="Violations"
          icon={<AlertTriangle size={20}/>}
          path="/violations"
        />

        <SidebarItem
          label="Regulatory Mapping"
          icon={<Network size={20}/>}
          path="/regulatory-mapping"
        />

        <SidebarItem
          label="Tasks"
          icon={<CheckSquare size={20}/>}
          path="/tasks"
        />

        <SidebarItem
          label="Reports"
          icon={<FileText size={20}/>}
          path="/reports"
        />

        <SidebarItem
          label="Setting"
          icon={<Settings size={20}/>}
          path="/settings"
        />

      </nav>

      {/* AI Copilot */}
      <div className={styles.copilot}>
        <div className={styles.copilotIcon}>
          <Sparkles size={20}/>
        </div>
        <div>
          <h3>AI Copilot</h3>
          <p>Ask about compliance risks</p>
        </div>
        <button>Open</button>
      </div>

      {/* User */}
      <div className={styles.profile}>
        <div className={styles.avatar}>R</div>
        <div>
          <h4>Reema</h4>
          <span>Administrator</span>
        </div>
      </div>

    </aside>
  );
}