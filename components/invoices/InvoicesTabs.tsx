import styles from "./Invoices.module.css";

interface InvoicesTabsProps {
  activeTab: "list" | "edit" | "summary";   
  setActiveTab: (tab: "list" | "edit" | "summary") => void;
}

export default function InvoicesTabs({ activeTab, setActiveTab }: InvoicesTabsProps) {
  return (
    <div className={styles.tabBar}>
    <button
        className={`${styles.tab} ${activeTab === "list" ? styles.active : ""}`}
        onClick={() => setActiveTab("list")}
    >
        Invoice list
    </button>

    <button
        className={`${styles.tab} ${activeTab === "edit" ? styles.active : ""}`}
        onClick={() => setActiveTab("edit")}
    >
        Create / Edit invoice
    </button>

    <button
        className={`${styles.tab} ${activeTab === "summary" ? styles.active : ""}`}
        onClick={() => setActiveTab("summary")}
    >
        Invoice summary & allocation
    </button>
    </div>

  );
}
