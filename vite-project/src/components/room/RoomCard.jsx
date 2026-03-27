import { Link } from "react-router-dom";
import styles from "./roomCard.module.css";

const RoomCard = ({ room }) => {
  return (
    <div className={styles.card}>
      <img
        src={room.images?.[0] || "https://via.placeholder.com/400"}
        alt={room.name}
        className={styles.image}
      />

      <div className={styles.content}>
        <h3>{room.name}</h3>
        <p>{room.description}</p>

        <div className={styles.bottom}>
          <span>${room.price} / night</span>

          <Link to={`/rooms/${room.id}`}>
            <button className={styles.btn}>View Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RoomCard;
