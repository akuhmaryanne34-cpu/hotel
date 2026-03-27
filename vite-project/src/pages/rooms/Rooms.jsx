import { useState } from "react";
import Header from "../../components/header/Header";
import FilterSidebar from "../../components/filter/FilterSidebar";
import RoomCard from "../../components/room/RoomCard";
import rooms from "../../data/rooms";
import styles from "./rooms.module.css";

const Rooms = () => {
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [maxPrice, setMaxPrice] = useState(500);

  // 🔥 FILTER LOGIC
  const filteredRooms = rooms.filter((room) => {
    const matchType =
      selectedTypes.length === 0 || selectedTypes.includes(room.type);

    const matchPrice = room.price <= maxPrice;

    return matchType && matchPrice;
  });

  return (
    <div>
      <Header />

      <div className={styles.container}>
        {/* LEFT - FILTER */}
        <FilterSidebar
          selectedTypes={selectedTypes}
          setSelectedTypes={setSelectedTypes}
          maxPrice={maxPrice}
          setMaxPrice={setMaxPrice}
        />

        {/* RIGHT - ROOMS */}
        <div className={styles.roomsGrid}>
          {filteredRooms.length > 0 ? (
            filteredRooms.map((room) => <RoomCard key={room.id} room={room} />)
          ) : (
            <p>No rooms found</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Rooms;
