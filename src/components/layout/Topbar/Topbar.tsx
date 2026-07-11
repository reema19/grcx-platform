import { Search, Bell, User } from "lucide-react";
import BreadcrumbNav from "./BreadcrumbNav";
import styles from "./Topbar.module.css";

export default function Topbar() {
  return (
    <header className={styles.topbar}>
      
      <div className={styles.pageInfo}>
        <BreadcrumbNav />
      </div>

      {/* Actions */}
      <div className={styles.actionsContainer}>
        <div className={styles.searchBox}>
          <Search size={16} className={styles.searchIcon} />
          <input 
            type="text" 
            placeholder="Type here..." 
            className={styles.searchInput} 
          />
        </div>
        
        <button className={styles.actionBtn}>
          <User size={18} />
          <span className={styles.btnText}>Profile</span>
        </button>
        
        <button className={styles.iconBtn}>
          <Bell size={18} />
        </button>
      </div>
      
    </header>
  );
}