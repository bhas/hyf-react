import styles from "./page.module.css";
import { loadNasaImage } from "@/api";

export default async function ServerPage() {
  const photo = await loadNasaImage("2025-05-01");

  return (
    <main className={styles.main}>
      <h1>NASA Astronomy Picture of the Day</h1>
      <p className={styles.date}>Date: {photo.date} — fetched server-side</p>
      <img src={photo.url} alt={photo.title} className={styles.photo} />
      <p className={styles.caption}>{photo.title}</p>
    </main>
  );
}