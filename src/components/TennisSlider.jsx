import { useRef } from "react";
import "./TennisSlider.css";
import WomanImage from '../assets/Woman.jpg'
import Woman2Image from '../assets/Woman2.jpg'
import Woman3Image from '../assets/zib.png'
import Woman4Image from '../assets/zib2.png'
import Woman5Image from '../assets/zib3.png'

function TennisSlider() {
  const sliderRef = useRef(null);

  const nextSlide = () => {
    sliderRef.current.scrollBy({
      left: 450,
      behavior: "smooth",
    });
  };

  const prevSlide = () => {
    sliderRef.current.scrollBy({
      left: -450,
      behavior: "smooth",
    });
  };

  const players = [
    {
      name: "Aryna Sabalenka",
      image:  "/images/zib2.png",
    },
    {
      name: "Naomi Osaka",
      image: "/images/Woman2.jpg",
    },
    {
      name: "Serena Williams",
      image: "/images/zib3.png",
    },
    {
      name: "Coco Gauff",
      image:"/images/zib.png",
    },
    {
      name: "Iga Swiatek",
      image: "/images/Woman.jpg",
    },
  ];

  return (
    <>
    <section className="tennis-section">

      <div className="slider-buttons">
        <button onClick={prevSlide}>←</button>
        <button onClick={nextSlide}>→</button>
      </div>

      <div className="tennis-slider" ref={sliderRef}>
        {players.map((player, index) => (
          <div className="tennis-card" key={index}>
            <img src={player.image} alt={player.name} />

            <div className="player-name">
              {player.name}
            </div>
          </div>
        ))}
      </div>

    </section>

    <div>
          <section className="nike-logo-frame">
            
            <img src='src\assets\nike.jpg' className="nike"></img>
            <div className="nike-logo">
            </div>
         </section>
    </div>
    </>
  );
}

export default TennisSlider;
