import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, CloseSquare } from "iconsax-react";
import styles from "./header.module.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <Link to="/" className={styles.logo}>
        SCOPE HOTEL
      </Link>

      <nav className={`${styles.nav} ${menuOpen ? styles.open : ""}`}>
        <Link to="/rooms">Rooms</Link>
        <Link to="/gallery">Gallery</Link>
        <Link to="/about">About</Link>
      </nav>

      <div className={styles.actions}>
        <button className={styles.bookBtn}>Book Now</button>

        <div
          className={styles.hamburger}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? (
            <CloseSquare size="28" color="#111" />
          ) : (
            <Menu size="28" color="#111" />
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
