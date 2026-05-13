import Link from "next/link";
import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <Link href="/" className={styles.brand}>
        🐾 PetGallery
      </Link>
      <ul className={styles.links}>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/cats">Cats</Link></li>
        <li><Link href="/dogs">Dogs</Link></li>
      </ul>
    </nav>
  );
}
