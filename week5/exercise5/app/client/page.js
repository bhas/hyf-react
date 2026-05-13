"use client";

import { useEffect, useState } from "react";
import styles from "./page.module.css";
import { loadNasaImage } from "@/api";

export default function ClientPage() {
  const [photo, setPhoto] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    loadNasaImage('2025-05-01')
      .then((data) => {
        setPhoto(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error loading NASA image:", err);
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p className={styles.status}>Loading…</p>;
  if (error) return <p className={styles.status}>Error: {error}</p>;

  return (
    <main className={styles.main}>
      <h1>NASA Astronomy Picture of the Day</h1>
      <p className={styles.date}>Date: {photo.date} — fetched client-side</p>
      <img src={photo.url} alt={photo.title} className={styles.photo} />
      <p className={styles.caption}>{photo.title}</p>
    </main>
  );
}
