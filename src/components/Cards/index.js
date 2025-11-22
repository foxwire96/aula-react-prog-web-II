import styles from "./cards.module.css";

export default function Cards({ videos }) {
  return (
    <div className={styles.cardGrid}>
      {videos.map((video) => (
        <div key={video.id} className={styles.card}>
          <img
            src={video.thumbnail}
            alt={video.title}
            className={styles.thumbnail}
          />
          <h2 className={styles.cardTitle}>{video.title}</h2>
        </div>
      ))}
    </div>
  );
}
