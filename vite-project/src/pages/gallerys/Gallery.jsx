import Header from "../../components/header/Header";
import GalleryGrid from "../../components/gallery/GalleryGrid";
import styles from "./gallery.module.css";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/footer/Footer";

const images = [
  "/room-1.jpg",
  "/room2-1.jpg",
  "/room2-3.jpg",
  "/room4-1.jpg",
  "/room5.jpg",
  "/room6.jpg",
];

const Gallery = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Header />

      {/* HERO */}
      <section className={styles.hero}>
        <h1>Gallery</h1>
        <p>Explore the beauty of our luxury spaces</p>
      </section>

      {/* GRID */}
      <GalleryGrid images={images} />

      {/* 🔥 CTA */}
      <section className={styles.cta}>
        <h2>Ready to experience luxury?</h2>
        <p>Book your stay and enjoy world-class comfort</p>

        <button onClick={() => navigate("/rooms")}>Book Now</button>
      </section>
       
       <Footer />
    </div>
  );
};

export default Gallery;
