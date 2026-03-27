import GalleryItem from "./GalleryItem";
import styles from "./gallerygrid.module.css";

const GalleryGrid = ({ images }) => {
  return (
    <div className={styles.grid}>
      {images.map((img, index) => (
        <GalleryItem key={index} img={img} index={index} />
      ))}
    </div>
  );
};

export default GalleryGrid;
