import styles from "./footer.module.css";
import { Instagram, Facebook,} from "iconsax-react";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* LOGO / ABOUT */}
        <div className={styles.section}>
          <h2 className={styles.logo}>SCOPE Hotel</h2>
          <p>
            Experience comfort and luxury like never before. Book your perfect
            stay with us.
          </p>
        </div>

        {/* LINKS */}
        <div className={styles.section}>
          <h3>Quick Links</h3>
          <ul>
            <li>Rooms</li>
            <li>Experience</li>
            <li>Gallery</li>
            <li>About</li>
          </ul>
        </div>

        {/* CONTACT */}
        <div className={styles.section}>
          <h3>Contact</h3>
          <p>Email: info@slopehotel.com</p>
          <p>Phone: +234 800 000 0000</p>
          <p>Location: Lagos, Nigeria</p>
        </div>

        {/* SOCIAL */}
        <div className={styles.section}>
          <h3>Follow Us</h3>
          <div className={styles.icons}>
            <Instagram size="22" />
            <Facebook size="22" />
            
          </div>
        </div>
      </div>

      {/* BOTTOM */}
      <div className={styles.bottom}>
        <p>© 2026 Scope Hotel. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
