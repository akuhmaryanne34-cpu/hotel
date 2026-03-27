import styles from "./galleryitem.module.css";

const GalleryItem = ({ img }) => {
  return (
    <div className={styles.card}>
      <img src={img} alt="gallery" />

      <div className={styles.overlay}>
        <span>View</span>
      </div>
    </div>
  );
};

export default GalleryItem;
