import './Hero.css'
import heroImage from '../assets/hero.png'
import NigaImage from '../assets/Niga.png'
import Niga2Image from '../assets/Niga2.png'
import Niga3Image from '../assets/Niga3.png'
import AirImage from '../assets/air.jpg'


function Hero() {
  return (
  <>
    <section className="hero">
      <div className="hero-media">
        <img src={heroImage} alt="Nike athlete"  className='im'/>
      </div>

      <div className="hero-content">
        <h1>Another Record Day</h1>

        <p>
          Masai Russell shatters the 100m hurdles world record.
          Try to keep up.
        </p>

        <button>Shop</button>
      </div>
    </section>

    
     <div className="grid-content">
        <h1>SHOW THEM WHERE<span>YOU STAND</span></h1>
        <p>Divion lines, drown. The 2026 Rivilles Colection is Touching Down</p>
        <button>shop collection </button>
    </div>

    <div className='categories'>
    <div className='category'>
      <img src={NigaImage}></img>
      <p className='iliya'>Woman shop</p>
    </div>
     <div className='category'>
      <img src={Niga2Image}></img>
      <p className='iliya'>LifeStyle shop</p>
    </div>
     <div className='category'>
      <img src={Niga3Image}></img>
      <p className='iliya'>Mans shop</p>
    </div>
    </div>

    <div>
      <img src={AirImage} className='logo'></img>
    </div>
    
    </>
  )
}

export default Hero