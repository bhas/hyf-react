import { loadNasaImage } from "@/api";
import styles from "../page.module.css";

export default async function ServerDatePage({ params }) {
  const { date } = await params;

  // function to part a date from a string and return a Date object
  const parseDate = (dateStr) => {
    const [year, month, day] = dateStr.split("-").map(Number);
    return new Date(year, month - 1, day);
  }

  // Helper function to display an error message
  const displayError = (title, message) => (
    <main className={styles.main}>
      <h1>{title}</h1>
      <p className={styles.error}>{message}</p>
    </main>
  );

  const parsedDate = parseDate(date);

  // Validate format
  if (parsedDate.toString() === "Invalid Date") {
    return displayError("Invalid date", `"${date}" is not a valid date. Use the format YYYY-MM-DD, e.g. 2025-05-01`);
  }

  // Validate not in the future
  if (parsedDate > new Date()) {
    return displayError("Future date", `"${date}" is in the future. Please choose a past date.`);
  }

  let photo;
  try {
    photo = await loadNasaImage(date);
  } catch (err) {
    return displayError("Error fetching photo", err.message);
  }

  return (
    <main className={styles.main}>
      <h1>NASA Astronomy Picture of the Day</h1>
      <p className={styles.date}>Date: {photo.date} — fetched server-side</p>
      <img src={photo.url} alt={photo.title} className={styles.photo} />
      <p className={styles.caption}>{photo.title}</p>
    </main>
  );
}
