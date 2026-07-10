import { Search, Bell, User } from "lucide-react";
import { useLocation } from "react-router-dom";
import styles from "./Topbar.module.css";

export default function Topbar() {
  const location = useLocation();
  // تحويل المسار إلى عنوان مقروء (مثلاً /regulatory-mapping يصير Regulatory Mapping)
  const pathName = location.pathname.replace('/', '').replace('-', ' ') || 'Overview';
  const pageTitle = pathName.charAt(0).toUpperCase() + pathName.slice(1);

  return (
    <header className={styles.topbar}>
      
      {/* Breadcrumb فقط بدون عنوان مكرر */}
      <div className={styles.pageInfo}>
        <span className={styles.breadcrumb}>Pages / <span>{pageTitle}</span></span>
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