import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>NASA APOD Explorer</h1>
      <nav className={styles.nav}>
        <Link href="/client" className={styles.link}>
          /client — client-side fetch
        </Link>
        <Link href="/server" className={styles.link}>
          /server — server-side fetch (May 1 2025)
        </Link>
        <Link href="/server/2025-12-24" className={styles.link}>
          /server/2025-12-24 — dynamic date
        </Link>
      </nav>
    </main>
  );
}
