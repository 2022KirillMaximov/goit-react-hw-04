import styles from "./ImageGallery.module.css";
import ImageCard from "../ImageCard/ImageCard";

export default function ImageGallery({ items, onImageClick }) {
  return (
    <ul className={styles.list}>
      {items &&
        items.map((image) => (
          <li key={image.id}>
            <ImageCard image={image} onClick={() => onImageClick(image)} />
          </li>
        ))}
    </ul>
  );
}