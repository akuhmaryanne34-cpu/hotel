import { useParams, useNavigate } from "react-router-dom";
import rooms from "../../src/data/rooms";
import RoomCard from "../../src/components/room/RoomCard";
import styles from "./roomDetails.module.css";

const RoomDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const room = rooms.find((room) => room.id === parseInt(id));

  if (!room) {
    return <h2 style={{ padding: "80px" }}>Room not found</h2>;
  }

  return (
    <section className={styles.container}>
      {/* HEADER */}
      <div className={styles.detailsHeader}>
        <div className={styles.headerLeft}>
          <button className={styles.backBtn} onClick={() => navigate(-1)}>
            ← Back to Rooms
          </button>

          <h1 className={styles.roomTitle}>{room.name}</h1>

          <p className={styles.roomDescription}>{room.description}</p>
        </div>

        <div className={styles.headerNote}>
          <p>
            Your comfort is our highest priority.
            <br />
            Experience elegance without compromise.
          </p>
        </div>
      </div>

      {/* GALLERY */}
      <div className={styles.gallery}>
        <div className={styles.mainImage}>
          <img src={room.images[0]} alt={room.name} />
        </div>

        <div className={styles.sideImages}>
          {room.images.slice(1).map((img, index) => (
            <img key={index} src={img} alt="" />
          ))}
        </div>
      </div>

      {/* PREMIUM EDITORIAL SECTION */}
      <div className={styles.premiumSection}>
        <div className={styles.editorialText}>
          <h2>Designed for Refined Comfort</h2>
          <p>
            Every detail of this suite has been thoughtfully curated to provide
            a harmonious balance of elegance and relaxation. From premium
            finishes to panoramic views, your stay is crafted for unforgettable
            moments.
          </p>

          <ul className={styles.amenities}>
            <li>✓ King Size Bed</li>
            <li>✓ High-Speed WiFi</li>
            <li>✓ Complimentary Breakfast</li>
            <li>✓ Smart TV & Workspace</li>
            <li>✓ Luxury Bathroom Amenities</li>
          </ul>
        </div>

        <div className={styles.reserveCard}>
          <h3>${room.price} / night</h3>
          <button className={styles.reserveBtn}>Reserve This Room</button>
        </div>
      </div>

      {/* SIMILAR ROOMS */}
      <div className={styles.similarSection}>
        <h2>You May Also Like</h2>

        <div className={styles.similarGrid}>
          {rooms
            .filter((r) => r.id !== room.id)
            .slice(0, 3)
            .map((r) => (
              <RoomCard key={r.id} room={r} />
            ))}
        </div>
      </div>
    </section>
  );
};

export default RoomDetails;
