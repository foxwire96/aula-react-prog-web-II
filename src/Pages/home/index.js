import "./Home.module.css";
import { useNavigate } from "react-router-dom";

export default function Home() {

  const navigate = useNavigate();

  function irParaWatch() {
    navigate("/watch");
  }

  return (

    
    <button onClick={() => navigate("/watch")}
>

    </button>
  );
}

