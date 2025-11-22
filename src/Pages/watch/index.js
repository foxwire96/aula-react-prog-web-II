import styles from "./Watch.module.css";
import Cards from "../../components/Cards";

export default function Watch() {

  const videos = [
    {
      id: 1,
      title: "",
      thumbnail: "",
    },
    {
      id: 2,
      title: "",
      thumbnail: "",
    },
    {
      id: 3,
      title: ")",
      thumbnail: "",
    }
  ];

  return (
    <div className={styles.watchPage}>
      <h1 className={styles.title}>Página Watch</h1>

      {/* Usando o componente Cards */}
      <Cards videos={videos} />
    </div>
  );
}
