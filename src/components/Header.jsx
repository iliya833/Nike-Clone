import { useState } from 'react'
import './Header.css'
import { LuSearch, LuHeart, LuShoppingBag } from "react-icons/lu"

function Header() {

  const [activeMenu, setActiveMenu] = useState(null)

  const menus = {
    Men: [
      {
        title: "New & Featured",
        items: [
          "New Arrivals",
          "Best Sellers",
          "Latest Drops",
          "Back to School Shop",
          "SNKRS Launch Calendar",
          "Shop All Sale"
        ]
      },
      {
        title: "Shoes",
        items: [
          "All Shoes",
          "Basketball",
          "Jordan",
          "Lifestyle",
          "Running",
          "Sandals & Slides",
          "Training & Gym",
          "Custom Shoes"
        ]
      },
      {
        title: "Clothing",
        items: [
          "All Clothing",
          "Jackets & Vests",
          "Pants",
          "Shorts",
          "Sweats & Sweatshirts",
          "Swim",
          "Tops & Graphic Tees"
        ]
      },
      {
        title: "Accessories",
        items: [
          "All Accessories",
          "Bags & Backpacks",
          "Hats & Headwear",
          "Socks",
          "Sunglasses"
        ]
      }
    ],

    Woman: [
      {
        title: "New & Featured",
        items: [
          "New Arrivals",
          "Best Sellers",
          "Latest Drops",
          "Back to School",
          "Shop All Sale"
        ]
      },
      {
        title: "Shoes",
        items: [
          "All Shoes",
          "Lifestyle",
          "Running",
          "Training",
          "Basketball",
          "Sandals & Slides"
        ]
      },
      {
        title: "Clothing",
        items: [
          "All Clothing",
          "Tops",
          "Bras",
          "Pants",
          "Shorts",
          "Leggings",
          "Jackets & Vests"
        ]
      },
      {
        title: "Accessories",
        items: [
          "All Accessories",
          "Bags",
          "Hats & Headwear",
          "Socks",
          "Sunglasses"
        ]
      }
    ],

    Kids: [
      {
        title: "New & Featured",
        items: [
          "New Arrivals",
          "Best Sellers",
          "Back to School",
          "Shop All Sale"
        ]
      },
      {
        title: "Shoes",
        items: [
          "All Shoes",
          "Big Kids",
          "Little Kids",
          "Baby & Toddler",
          "Jordan",
          "Running"
        ]
      },
      {
        title: "Clothing",
        items: [
          "All Clothing",
          "T-Shirts",
          "Hoodies",
          "Pants",
          "Shorts",
          "Jackets"
        ]
      },
      {
        title: "Accessories",
        items: [
          "Bags",
          "Hats",
          "Socks",
          "Backpacks"
        ]
      }
    ],

    Jordan: [
      {
        title: "Featured",
        items: [
          "New Jordan",
          "Best Sellers",
          "Jordan Basketball",
          "Jordan Essentials"
        ]
      },
      {
        title: "Shoes",
        items: [
          "All Jordan Shoes",
          "Jordan 1",
          "Jordan 3",
          "Jordan 4",
          "Jordan 11"
        ]
      },
      {
        title: "Clothing",
        items: [
          "All Jordan Clothing",
          "T-Shirts",
          "Hoodies",
          "Pants",
          "Shorts"
        ]
      },
      {
        title: "Accessories",
        items: [
          "Jordan Bags",
          "Jordan Hats",
          "Jordan Socks"
        ]
      }
    ],

    NikeSkims: [
      {
        title: "NikeSkims",
        items: [
          "Shop All",
          "New Arrivals",
          "Best Sellers"
        ]
      },
      {
        title: "Clothing",
        items: [
          "Tops",
          "Bras",
          "Leggings",
          "Shorts",
          "Bodysuits"
        ]
      },
      {
        title: "Shoes",
        items: [
          "NikeSkims Shoes",
          "Running",
          "Lifestyle"
        ]
      }
    ],
    "Back to School": [
      {
        title: "Featured",
        items: [
          "Back to School",
          "New Arrivals",
          "Best Sellers"
        ]
      },
      {
        title: "Kids",
        items: [
          "Kids Shoes",
          "Kids Clothing",
          "Backpacks",
          "School Essentials"
        ]
      },
      {
        title: "Men",
        items: [
          "Men's Shoes",
          "Men's Clothing",
          "Backpacks"
        ]
      },
      {
        title: "Woman",
        items: [
          "Women's Shoes",
          "Women's Clothing",
          "Bags"
        ]
      }
    ],

    Sale: [
      {
        title: "Sale",
        items: [
          "Shop All Sale",
          "Best Sellers",
          "Last Chance"
        ]
      },
      {
        title: "Men",
        items: [
          "Men's Shoes",
          "Men's Clothing",
          "Men's Accessories"
        ]
      },
      {
        title: "Woman",
        items: [
          "Women's Shoes",
          "Women's Clothing",
          "Women's Accessories"
        ]
      },
      {
        title: "Kids",
        items: [
          "Kids Shoes",
          "Kids Clothing",
          "Kids Accessories"
        ]
      }
    ]
  }


  return (
    <>
      <header>

        <div className='top-header'>

          <div className='brands'>
            <img
              src='src/assets/air.jpg'
              alt="Jordan"
            />

            <img
              src='src/assets/Converse_shoe_company_logo.png'
              alt="Converse"
            />
          </div>

          <div className='top-links'>
            <a>Find A Store</a>
            <span className='line'></span>

            <a>Help</a>
            <span className='line'></span>

            <a>Join Us</a>
            <span className='line'></span>

            <a>Sign In</a>
          </div>

        </div>

      </header>


      {/* هدر اصلی */}
      <div
        className='main-header'
        onMouseLeave={() => setActiveMenu(null)}
      >

        <div className='nike-logo1'>
          <img
            src='src/assets/nike.jpg'
            className='nike'
            alt="Nike"
          />
        </div>


        {/* لینک های وسط */}
        <div className='nav-link'>

          <span
            onMouseEnter={() => setActiveMenu("Men")}
          >
            Men
          </span>

          <span
            onMouseEnter={() => setActiveMenu("Woman")}
          >
            Woman
          </span>

          <span
            onMouseEnter={() => setActiveMenu("Kids")}
          >
            Kids
          </span>

          <span
            onMouseEnter={() => setActiveMenu("Jordan")}
          >
            Jordan
          </span>

          <span
            onMouseEnter={() => setActiveMenu("NikeSkims")}
          >
            NikeSkims
          </span>

          <span
            onMouseEnter={() => setActiveMenu("Back to School")}
          >
            Back to School
          </span>

          <span
            onMouseEnter={() => setActiveMenu("Sale")}
          >
            Sale
          </span>

        </div>


        {/* قسمت راست */}
        <div className='header-actions'>

          <button className='search-button'>
            <LuSearch />
            <span>Search</span>
          </button>

          <LuHeart className='action-icon' />

          <LuShoppingBag className='action-icon' />

        </div>


        {/* Mega Menu */}
        {activeMenu && (
          <div className='mega-menu'>

            {menus[activeMenu].map((column, index) => (

              <div className='menu-column' key={index}>

                <h3>{column.title}</h3>

                {column.items.map((item, itemIndex) => (
                  <p key={itemIndex}>
                    {item}
                  </p>
                ))}

              </div>

            ))}

          </div>
        )}

      </div>
    </>
  )
}

export default Header