import styles from "./page.module.css";

const cats = [
  { src: "https://placecats.com/400/300", alt: "Double trouble" },
  { src: "https://placecats.com/neo/400/300", alt: "A sleepy grey cat" },
  { src: "https://placecats.com/bella/400/300", alt: "A cat" },
  { src: "https://placecats.com/millie/400/300", alt: "A playful kitten" },
];

export default function CatsPage() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1 className={styles.heading}>Cat Gallery</h1>
        <p className={styles.intro}>Here are some adorable cats for you!</p>
        <div className={styles.grid}>
          {cats.map((cat, i) => (
            <figure key={i} className={styles.card}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={cat.src} alt={cat.alt} className={styles.image} />
              <figcaption className={styles.caption}>{cat.alt}</figcaption>
            </figure>
          ))}
        </div>
      </main>
      <footer className={styles.footer}>
        <p>Photos courtesy of <a href="https://placecats.com" target="_blank" rel="noopener noreferrer">placecats.com</a></p>
      </footer>
    </div>
  );
}
