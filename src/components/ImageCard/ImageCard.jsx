import styles from "./ImageCard.module.css";

export default function ImageCard({ image, onClick }) {
  return (
    <img
      onClick={() => onClick(image.urls.small)}
      className={styles.img}
      src={image.urls.small}
      alt={image.alt_description}
    />
  );
}