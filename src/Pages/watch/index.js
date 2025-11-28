import styles from "./Watch.module.css";
import Cards from "../../components/Cards";

export default function Watch() {
    const videos = [
        {
            id: '1',
            title: 'Toda a VERDADE Sobre o LÍDER do 湾岸MIDNIGHT CLUB e o BLACKBIRD Porsche 911',
            thumbnailUrl: 'https://img.youtube.com/vi/eda66UvhuRE/maxresdefault.jpg',
            videoUrl: 'https://www.youtube.com/watch?v=eda66UvhuRE',
        },
        {
            id: '2',
            title: 'Toda VERDADE Sobre as Corridas de Rua PROIBIDAS no Japão',
            thumbnailUrl: 'https://img.youtube.com/vi/gG_2vgn9FvU/maxresdefault.jpg', 
            videoUrl: 'https://www.youtube.com/watch?v=gG_2vgn9FvU',
        },
        {
            id: '3',
            title: 'Mid Night Club: The story of the street racers who did things differently',
            thumbnailUrl: 'https://img.youtube.com/vi/lRt56Y9JMEg/maxresdefault.jpg', 
            videoUrl: 'https://www.youtube.com/watch?v=lRt56Y9JMEg',
        }
    ];

    return (
        <div className={styles.watchPage}>
            {videos.map((video) => (
                <Cards 
                    key={video.id}
                    title={video.title}
                    thumbnail={video.thumbnailUrl}
                    videoUrl={video.videoUrl}   
                />
            ))}
        </div>
    );
}
