import "./NikeGrid.css"
import WomanImage from '../assets/Woman.jpg'
import Woman2Image from '../assets/Woman2.jpg'
import Woman3Image from '../assets/zib.png'
import Woman4Image from '../assets/zib2.png'
import Woman5Image from '../assets/zib3.png'



function NikeGrid(){
    return(
        <>
    <section className="hero2">

      <div className="hero-images">

        <div className="hero-box">
          <img src={WomanImage} />
        </div>

        <div className="hero-box">
          <img src={Woman2Image} />
        </div>

        <div className="hero-box">
          <img src={Woman3Image} />
        </div>

        <div className="hero-box">
          <img src={Woman4Image} />
        </div>
        
   <div className="hero-text2">

        <h1>HARD IN THE PAINT</h1>

        <p>
          Gear up for NYC's biggest tennis showdown in the
          hoops-inspired Slam City Collection.
        </p>

        <button>Shop</button>

      </div>
     
      </div>

   

    </section>


    </>
  )
}



export default NikeGrid