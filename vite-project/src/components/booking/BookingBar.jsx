import { useState } from "react";
import styles from "./booking.module.css";

const roomPrices = {
  Standard: 120,
  Deluxe: 180,
  Suite: 250,
};

const BookingBar = () => {
  const today = new Date().toISOString().split("T")[0];

  const [email, setEmail] = useState("");
  const [room, setRoom] = useState("Standard");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState(1);
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  const calculateNights = () => {
    if (!checkIn || !checkOut) return 0;
    const start = new Date(checkIn);
    const end = new Date(checkOut);
    const diff = (end - start) / (1000 * 60 * 60 * 24);
    return diff > 0 ? diff : 0;
  };

  const nights = calculateNights();
  const totalPrice = nights * roomPrices[room];

  const validate = () => {
    let newErrors = {};

    if (!email) newErrors.email = "Email required";
    else if (!/\S+@\S+\.\S+/.test(email)) newErrors.email = "Invalid email";

    if (!checkIn) newErrors.checkIn = "Select check-in";
    if (!checkOut) newErrors.checkOut = "Select check-out";

    if (checkIn && checkOut && new Date(checkOut) <= new Date(checkIn)) {
      newErrors.checkOut = "Check-out must be after check-in";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      setSuccess(true);

      setTimeout(() => {
        setSuccess(false);
        setEmail("");
        setCheckIn("");
        setCheckOut("");
      }, 3000);
    }
  };

  return (
    <>
      <div className={styles.wrapper}>
        <form className={styles.bookingCard} onSubmit={handleSubmit}>
          <div className={styles.field}>
            <label>Email</label>
            <input
              type="email"
              value={email}
              min={today}
              onChange={(e) => setEmail(e.target.value)}
              className={errors.email ? styles.errorInput : ""}
              placeholder="you@example.com"
            />
            {errors.email && (
              <span className={styles.errorText}>{errors.email}</span>
            )}
          </div>

          <div className={styles.field}>
            <label>Room</label>
            <select value={room} onChange={(e) => setRoom(e.target.value)}>
              <option>Standard</option>
              <option>Deluxe</option>
              <option>Suite</option>
            </select>
          </div>

          <div className={styles.field}>
            <label>Check In</label>
            <input
              type="date"
              min={today}
              value={checkIn}
              onChange={(e) => setCheckIn(e.target.value)}
            />
          </div>

          <div className={styles.field}>
            <label>Check Out</label>
            <input
              type="date"
              min={checkIn || today}
              value={checkOut}
              onChange={(e) => setCheckOut(e.target.value)}
            />
          </div>

          <div className={styles.field}>
            <label>Guests</label>
            <select value={guests} onChange={(e) => setGuests(e.target.value)}>
              {[1, 2, 3, 4, 5].map((num) => (
                <option key={num}>{num}</option>
              ))}
            </select>
          </div>

          <div className={styles.priceBox}>
            {nights > 0 ? (
              <>
                <span>{nights} night(s)</span>
                <strong>${totalPrice}</strong>
              </>
            ) : (
              <span>Select dates</span>
            )}
          </div>

          <button className={styles.bookBtn}>Book Now</button>
        </form>
      </div>

      {success && (
        <div className={styles.successOverlay}>
          <div className={styles.successBox}>
            <h2>Booking Confirmed</h2>
            <p>Total: ${totalPrice}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default BookingBar;
