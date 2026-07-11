import { ChevronLeft } from "lucide-react";
import { useBreadcrumb } from "../../../hooks/useBreadcrumb";
import styles from "./Topbar.module.css";

export default function BreadcrumbNav() {
  const { segments, hasBack, goBack } = useBreadcrumb();

  const content = (
    <>
      {hasBack && <ChevronLeft size={18} className={styles.chevron} />}
      <span className={styles.breadcrumb}>
        {segments.map((segment, index) => (
          <span key={`${segment}-${index}`}>
            {index > 0 && " / "}
            {index === segments.length - 1 ? (
              <span className={styles.current}>{segment}</span>
            ) : (
              segment
            )}
          </span>
        ))}
      </span>
    </>
  );

  if (!hasBack) {
    return <div className={styles.breadcrumbNav}>{content}</div>;
  }

  return (
    <button
      type="button"
      className={`${styles.breadcrumbNav} ${styles.clickable}`}
      onClick={goBack}
    >
      {content}
    </button>
  );
}
