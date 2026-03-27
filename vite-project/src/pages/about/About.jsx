import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import styles from "./about.module.css";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Header />

      {/* HERO */}
      <section className={styles.hero}>
        <h1>About Us</h1>
        <p>Experience luxury, comfort, and unforgettable moments</p>
      </section>

      {/* INTRO */}
      <section className={styles.intro}>
        <div className={styles.text}>
          <h2>Welcome to Our Hotel</h2>
          <p>
            We provide world-class hospitality with elegant rooms, premium
            services, and a relaxing environment designed for your comfort.
          </p>
        </div>

        <div className={styles.image}>
          <img src="/room-1.jpg" alt="hotel" />
        </div>
      </section>

      {/* FEATURES */}
      <section className={styles.features}>
        <div className={styles.feature}>
          <h3>Luxury Rooms</h3>
          <p>Modern rooms with premium comfort and design.</p>
        </div>

        <div className={styles.feature}>
          <h3>Fine Dining</h3>
          <p>Enjoy delicious meals from top-class chefs.</p>
        </div>

        <div className={styles.feature}>
          <h3>Spa & Wellness</h3>
          <p>Relax your body and mind in our spa center.</p>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.cta}>
        <h2>Ready to stay with us?</h2>
        <button onClick={() => navigate("/rooms")}>Book Now</button>
      </section>

      <Footer />
    </div>
  );
};

export default About;
