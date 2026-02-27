import { useState, useRef, useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import rooms from "../../data/rooms";
import styles from "./scopeAI.module.css";

function ScopeAI({ setSelectedRoom }) {
  const location = useLocation();
  const { id } = useParams();

  const currentRoom =
    location.pathname.includes("/rooms/") &&
    rooms.find((room) => room.id === Number(id));

  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: "ai",
      text: "Welcome to Scope Hotel. I’m your luxury concierge. How may I assist you today?",
    },
  ]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);

  const chatRef = useRef(null);

  useEffect(() => {
    chatRef.current?.scrollTo(0, chatRef.current.scrollHeight);
  }, [messages, typing]);

  const generateResponse = (text) => {
    const message = text.toLowerCase();

    const romanticWords = [
      "romantic",
      "valentine",
      "honeymoon",
      "cozy",
      "special",
      "surprise",
      "love",
    ];

    const familyWords = ["family", "kids", "children", "group"];

    const businessWords = [
      "business",
      "meeting",
      "work",
      "conference",
      "corporate",
    ];

    const luxuryWords = [
      "luxury",
      "premium",
      "exclusive",
      "best",
      "expensive",
      "elite",
    ];

    const contains = (words) => words.some((word) => message.includes(word));

    // If user is on room page
    if (currentRoom) {
      if (message.includes("price") || message.includes("cost")) {
        return `${currentRoom.name} is $${currentRoom.price} per night.`;
      }

      if (message.includes("book") || message.includes("reserve")) {
        setSelectedRoom(currentRoom);

        setTimeout(() => {
          const booking = document.getElementById("booking");
          booking?.scrollIntoView({ behavior: "smooth" });
        }, 300);

        return `Excellent choice. I’ve prepared the ${currentRoom.name} for reservation below.`;
      }
    }

    // Romantic logic
    if (contains(romanticWords)) {
      const room = rooms.find(
        (r) =>
          r.name.toLowerCase().includes("honeymoon") ||
          r.name.toLowerCase().includes("suite"),
      );

      if (room) {
        setSelectedRoom(room);
        return `That sounds beautiful. I recommend our ${room.name}. It offers privacy, elegance, and the perfect ambiance for unforgettable moments.`;
      }
    }

    // Family logic
    if (contains(familyWords)) {
      const room = rooms.find((r) => r.name.toLowerCase().includes("family"));

      if (room) {
        setSelectedRoom(room);
        return `Our ${room.name} is ideal for families. Spacious, comfortable, and thoughtfully designed for group stays.`;
      }
    }

    // Business logic
    if (contains(businessWords)) {
      return `For business stays, our Executive Skyline Room provides a premium workspace and quiet environment for productivity.`;
    }

    // Luxury logic
    if (contains(luxuryWords)) {
      const highestRoom = rooms.reduce((prev, current) =>
        prev.price > current.price ? prev : current,
      );

      setSelectedRoom(highestRoom);

      return `If you desire the finest experience, our ${highestRoom.name} is our most exclusive suite at $${highestRoom.price} per night.`;
    }

    // Booking intent
    if (message.includes("book") || message.includes("reserve")) {
      return `Wonderful. Are you planning a romantic escape, a family vacation, a business stay, or something ultra-luxurious?`;
    }

    // Pricing general
    if (message.includes("price") || message.includes("cost")) {
      return `Our rooms range from $300 to $750 per night depending on the suite category and season.`;
    }

    // Amenities
    if (message.includes("amenities") || message.includes("include")) {
      return `All rooms include high-speed WiFi, premium bedding, luxury bathrooms, smart TVs, and 24/7 concierge service.`;
    }

    // Location
    if (message.includes("location") || message.includes("where")) {
      return `Scope Hotel is located in the heart of the city, offering both skyline and ocean-facing suites.`;
    }

    // Smart fallback
    return `I can help you find the perfect stay. Are you looking for something romantic, family-friendly, business-oriented, or ultra-luxurious?`;
  };

  const sendMessage = () => {
    if (!input.trim()) return;

    const userMsg = { role: "user", text: input };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setTyping(true);

    setTimeout(() => {
      const reply = generateResponse(input);
      setMessages((prev) => [...prev, { role: "ai", text: reply }]);
      setTyping(false);
    }, 800);
  };

  return (
    <div className={styles.wrapper}>
      {open && (
        <div className={styles.chatBox}>
          <div className={styles.header}>
            <h4>Scope Concierge</h4>
            <button onClick={() => setOpen(false)}>×</button>
          </div>

          <div className={styles.messages} ref={chatRef}>
            {messages.map((msg, index) => (
              <div
                key={index}
                className={
                  msg.role === "ai" ? styles.aiMessage : styles.userMessage
                }
              >
                {msg.text}
              </div>
            ))}
            {typing && <div className={styles.typing}>Scope is typing...</div>}
          </div>

          <div className={styles.inputArea}>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about rooms, pricing, or experiences..."
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            />
            <button onClick={sendMessage}>Send</button>
          </div>
        </div>
      )}

      <button className={styles.floatingBtn} onClick={() => setOpen(!open)}>
        AI
      </button>
    </div>
  );
}

export default ScopeAI;
