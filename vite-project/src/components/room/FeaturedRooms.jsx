import rooms from "../../data/rooms";
import RoomCard from "./RoomCard";
import styles from "./featuredRooms.module.css";

const FeaturedRooms = () => {
  const featuredRooms = rooms.filter((room) => room.featured).slice(0, 6);

  return (
    <section className={styles.section}>
      <div className={styles.featureHeader}>
        <span className={styles.tag}>Our Collection</span>

        <h2 className={styles.title}>Featured Rooms & Signature Suites</h2>

        <p className={styles.subtitle}>
          Discover spaces designed for elegance, comfort, and unforgettable
          experiences. Each suite is crafted to deliver refined hospitality and
          exceptional luxury.
        </p>
      </div>

      <div className={styles.grid}>
        {featuredRooms.map((room) => (
          <RoomCard key={room.id} room={room} />
        ))}
      </div>
    </section>
  );
};

export default FeaturedRooms;
