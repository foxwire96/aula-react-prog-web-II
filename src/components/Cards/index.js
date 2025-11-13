import styles from "./cards.module.css";

export default function VideoCard({ title, thumbnail, link }) {
  return (
    <div className={styles["video"]}>
      <a href={link}>
        <img src={thumbnail} alt={title} />
      </a>
      <h3>{title}</h3>
    </div>
  );
}
