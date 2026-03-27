import styles from "./testimonials.module.css";

const testimonials = [
  {
    text: "As a first time guest, the experience was smooth and everything felt premium.",
    name: "Michelle",
    location: "Lagos",
  },
  {
    text: "The service was incredible and the staff were very helpful throughout my stay.",
    name: "Tunde",
    location: "Abuja",
  },
  {
    text: "Smooth experience from start to finish. Highly recommended.",
    name: "Rose",
    location: "Port Harcourt",
  },
];

const Testimonials = () => {
  return (
    <section className={styles.container}>
      <h2>Real Stories From Guests</h2>
      <p className={styles.subtitle}>
        Discover how our guests experience comfort and luxury
      </p>

      <div className={styles.grid}>
        {testimonials.map((item, index) => (
          <div key={index} className={styles.card}>
            <span className={styles.quote}>“</span>

            <p className={styles.text}>{item.text}</p>

            <div className={styles.user}>
              <h4>{item.name}</h4>
              <p>{item.location}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
