import styles from "./page.module.css";

const dogs = [
  { src: "https://placedog.net/400/300?id=1", alt: "Two sleepy doggos" },
  { src: "https://placedog.net/400/300?id=2", alt: "Puppies" },
  { src: "https://placedog.net/400/300?id=3", alt: "A cutie" },
  { src: "https://placedog.net/400/300?id=4", alt: "A good boy" },
];

export default function DogsPage() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1 className={styles.heading}>Dog Gallery</h1>
        <p className={styles.intro}>Check out these good boys and girls!</p>
        <div className={styles.grid}>
          {dogs.map((dog, i) => (
            <div key={i} className={styles.card}>
              <img src={dog.src} alt={dog.alt} className={styles.image} />
              <p className={styles.caption}>{dog.alt}</p>
            </div>
          ))}
        </div>
      </main>
      <footer className={styles.footer}>
        <p>Photos courtesy of <a href="https://placedog.net" target="_blank" rel="noopener noreferrer">placedog.net</a></p>
      </footer>
    </div>
  );
}
