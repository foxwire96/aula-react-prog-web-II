import styles from "./banner.module.css";

export default function Banner() {
  return (
    <div className={styles.banner}>
      <h1>Welcome to Midnight Tokyo</h1>
      <p>Drift cars every night</p>
    </div>
  );
}
