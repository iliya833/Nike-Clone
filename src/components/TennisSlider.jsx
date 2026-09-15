import { useRef } from "react";
import "./TennisSlider.css";
import WomanImage from "../assets/Woman.jpg"
import Woman2Image from '../assets/Woman2.jpg'
import Woman3Image from '../assets/zib.png'
import Woman4Image from '../assets/zib2.png'
import Woman5Image from '../assets/zib3.png'
import nike from "../assets/nike.jpg"

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
      image:  Woman4Image
    },
    {
      name: "Naomi Osaka",
      image: Woman2Image
    },
    {
      name: "Serena Williams",
      image: Woman5Image
    },
    {
      name: "Coco Gauff",
      image:Woman3Image
    },
    {
      name: "Iga Swiatek",
      image: WomanImage
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
            
            <img src={nike} className="nike"></img>
            <div className="nike-logo">
            </div>
         </section>
    </div>
    </>
  );
}

export default TennisSlider;
