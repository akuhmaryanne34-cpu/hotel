import styles from "./hero.module.css";
import bgImg from "../../assets/bgImg.jpg";

const Hero = () => {
  return (
    <section
      className={styles.hero}
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <div className={styles.overlay}></div>

      <div className={styles.content}>
        <h1>
          Experience Luxury
          <br />
          Like Never Before
        </h1>

        <p>
          Discover world-class comfort, stunning views, and unforgettable
          hospitality.
        </p>

        <button className={styles.cta}>Explore Rooms</button>
      </div>
    </section>
  );
};

export default Hero;
