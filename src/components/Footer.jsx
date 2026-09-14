import AirImage from "../assets/air.jpg"
import "./Footer.css"
import Image from '../assets/images5.jpg'
import Image2 from '../assets/images (6).jpg'
import Image3 from '../assets/images (7).jpg'
import Image4 from '../assets/images (8).jpg'
import Image5 from '../assets/images (9).jpg'
import Image6 from '../assets/images (10).jpg'
import Image7 from '../assets/images (11).jpg'
import Image8 from '../assets/images (12).jpg'
import Image9 from '../assets/images (13).jpg'
import Image10 from '../assets/images (14).jpg'
import Image11 from '../assets/images (15).jpg'
import Image12 from '../assets/images (16).jpg'
import Image13 from '../assets/images (17).jpg'
import Image14 from '../assets/images (18).jpg'
import Image15 from '../assets/images (19).jpg'
import Image16 from '../assets/images (20).jpg'
import nike from "../assets/nike.jpg"




function Footer (){
  const items = [
    { name: "Air Jordan 1", image: Image },
    { name: "Air Max", image: Image2 },
    { name: "Graphic Tees", image: Image3 },
    { name: "Dunk", image: Image4 },
    { name: "Air Force 1", image: Image5 },
    { name: "24.7 Collection", image: Image6 },
    { name: "Vomero 5", image: Image7 },
    { name: "Sweats & Sweatshirts", image: Image8 },

    { name: "ACG", image: Image9 },
    {name: "Ja4", image: Image10},
    {name: "air jordan", image: Image11},
    {name: "air jordan2", image: Image12},
    {name: "air jordan2", image: Image13},
    {name: "air jordan2", image: Image14},
    {name: "air jordan2", image: Image15},
    {name: "air jordan2", image: Image16},
    

    
    ];
    return (
        <>
      


  
  
   


    <>

      <section className="trending">

        <h2>TRENDING</h2>

        <p className="trending-description">
          Classic silhouettes and cutting-edge innovation to build your game from the ground up.
        </p>

        <div className="trending-grid">

          {items.map((item, index) => (
            <div className="trending-item" key={index}>

              <img
                src={item.image}
                alt={item.name}
              />

              <h3>{item.name}</h3>

            </div>
          ))}

        </div>

        <div className="trending-nike">
          <img  src={nike} className="logo3"></img>
        </div>

      </section>


      <footer className="footer">

        <div className="footer-columns">

          <div className="footer-column">
            <h3>Resources</h3>
            <p>Gift Cards</p>
            <p>Corporate Sales</p>
            <p>Find a Store</p>
            <p>Membership</p>
            <p>Nike Journal</p>
          </div>


          <div className="footer-column">
            <h3>Help</h3>
            <p>Get Help</p>
            <p>Order Status</p>
            <p>Shipping and Delivery</p>
            <p>Returns</p>
            <p>Order Cancellation</p>
          </div>


          <div className="footer-column">
            <h3>Company</h3>
            <p>About Nike</p>
            <p>News</p>
            <p>Careers</p>
            <p>Investors</p>
            <p>Purpose</p>
          </div>


          <div className="footer-column">
            <h3>Promotions & Discounts</h3>
            <p>Student</p>
            <p>Military</p>
            <p>Teacher</p>
            <p>First Responders & Medical Professionals</p>
            <p>Birthday</p>
          </div>


          <div className="footer-country">
            <span>🌐</span>
            <span>United States</span>
          </div>

        </div>

      </footer>

    </>
  );




       

       </>
    )
}

export default Footer