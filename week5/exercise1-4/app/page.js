import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1 className={styles.heading}>React week 5 - Exercise 1-4</h1>
        <p className={styles.message}>
          This is a simple Next.js project built as part of the HYF React course.
          Use the navigation above to browse cats and dogs!
        </p>
        <p className={styles.author}>React - week 5</p>
      </main>
    </div>
    
  );
}
