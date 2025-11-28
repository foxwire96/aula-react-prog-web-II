import { useState } from "react";
import styles from "./cards.module.css";

export default function Cards({ title, thumbnail, videoUrl }) {
    const [showVideo, setShowVideo] = useState(false);

    return (
        <div className={styles.card}>
            {!showVideo ? ( 
                <div onClick={() => setShowVideo(true)} className={styles.thumbnailContainer}>
                    <img src={thumbnail} alt={title} className={styles.thumbnail} />
                    <h3>{title}</h3>
                </div>
            ) : (
                <div className={styles.videoContainer}>
                    <iframe
                        src={videoUrl.replace("watch?v=", "embed/")}
                        title={title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    />
                </div>
            )}
        </div>
    );
}

////onClick={() => window.open(videoUrl, "_blank")} para abrir em nova página
//onClick={() => setShowVideo(true)} para abrir na própria página