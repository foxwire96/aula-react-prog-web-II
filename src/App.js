import VideoCard from "./components/Cards";
import "./App.css";

export default function App() {
  const videos = [
    {
      title: "Tokyo Drift",
      thumbnail: "https://img.youtube.com/vi/VtZWiKpt9iA/maxresdefault.jpg",
      link: "https://www.youtube.com/watch?v=VtZWiKpt9iA"
    },
    {
      title: "Best of JDM",
      thumbnail: "https://img.youtube.com/vi/VDvb8jJzVOA/maxresdefault.jpg",
      link: "https://www.youtube.com/watch?v=VDvb8jJzVOA"
    },
    {
      title: "RX7 Night Run",
      thumbnail: "https://img.youtube.com/vi/5NZmUkA5rGQ/maxresdefault.jpg",
      link: "https://www.youtube.com/watch?v=5NZmUkA5rGQ"
    }
  ];

  return (
    <div className="App">
      <section className="cards-section">
        {videos.map((v, i) => (
          <VideoCard key={i} {...v} />
        ))}
      </section>
    </div>
  );
}
