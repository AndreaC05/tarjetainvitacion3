import Contenido from "../components/Contenido.jsx";
import "../style/Home.css";

export default function Home() {
  return (
    <>
      <div className="container_home">
        <img
          src="https://res.cloudinary.com/dnao6nouz/image/upload/v1757947302/image_20_h9ensd.png"
          className="video-background"
          alt=""
        />

        <img
          src="https://res.cloudinary.com/dnao6nouz/image/upload/v1757947302/image_20_h9ensd.png"
          className="video-main"
          alt=""
        />
        <div className="contenido_text">
          <Contenido />
        </div>
      </div>
    </>
  );
}
