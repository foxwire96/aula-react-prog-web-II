import styles from "./cards.module.css";

export default function Cards({ title, thumbnail, onClick }) {
  return (
    <div className={styles.card} onClick={onClick}>
      <img src={thumbnail} alt={title} className={styles.thumb} />
      <h3>{title}</h3>
    </div>
  );
}
