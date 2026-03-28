import styles from "./whychoose.module.css";
import { Crown, Wifi, Coffee, HomeTrendUp } from "iconsax-react";

const features = [
  {
    title: "Luxury Rooms",
    desc: "Comfort and elegance in every stay",
    icon: <Crown size="32" color="#000000" variant="Bold" />,
  },
  {
    title: "Free WiFi",
    desc: "Stay connected anytime",
    icon: <Wifi size="32" color="#000000" variant="Bold" />,
  },
  {
    title: "Breakfast Included",
    desc: "Fresh meals every morning",
    icon: <Coffee size="32" color="#000000" variant="Bold" />,
  },
  {
    title: "Premium Experience",
    desc: "Top-tier service and comfort",
    icon: <HomeTrendUp size="32" color="#000000" variant="Bold" />,
  },
];

const WhyChoose = () => {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>Why Choose Us</h2>
      <p className={styles.subtitle}>
        Experience comfort, luxury, and convenience like never before
      </p>

      <div className={styles.grid}>
        {features.map((item, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.icon}>{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChoose;
