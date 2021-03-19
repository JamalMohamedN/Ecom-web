import React from 'react'
import "./Home.css";
import Product from "./Product.js"
export default function Home() {
    return (
        <div className="home">
            <img 
            className="home_banner"
            src="https://image.freepik.com/free-vector/online-shopping-instagram-stories_23-2148748071.jpg"
            alt=""
            />
             <div className="home_row">
            <Product 
                id="1233344"
                title="OnePlus 8T 5G (Aquamarine Green, 8GB RAM, 128GB Storage"
                price={42000}
                rating={5}
                image="https://images-na.ssl-images-amazon.com/images/I/61Tw6LZoaiL._SL1500_.jpg" />
            
            <Product 
                id="923563"
                title="New Apple iPhone 12 Pro Max (128GB) - Pacific Blue"
                price={129700}
                rating={5}
                image="https://images-na.ssl-images-amazon.com/images/I/71MHTD3uL4L._SL1500_.jpg" />
            </div>

            <div className="home_row">
            <Product 
                id="1238833"
                title="Apple MacBook Air (13-inch, 8GB RAM, 128GB Storage, 1.8GHz Intel Core i5) - Silver"
                price={68000}
                rating={5}
                image="https://images-na.ssl-images-amazon.com/images/I/51TdkJSqeQL._SL1000_.jpg" />
            
            <Product 
                id="1233344"
                title="HP Pavilion Gaming 9th Gen Intel Core i5 Processor 15.6-inch Laptop "
                price={59000}
                rating={5}
                image="https://images-na.ssl-images-amazon.com/images/I/81pezrPSgOL._SL1500_.jpg" />
            
            <Product 
                id="1233344"
                title="OnePlus 8T 5G (Aquamarine Green, 8GB RAM, 128GB Storage"
                price={42000}
                rating={5}
                image="https://images-na.ssl-images-amazon.com/images/I/61Tw6LZoaiL._SL1500_.jpg" />
            </div>

            <div className="home_row">
            <Product 
                id="1233344"
                title="OnePlus 8T 5G (Aquamarine Green, 8GB RAM, 128GB Storage"
                price={42000}
                rating={5}
                image="https://images-na.ssl-images-amazon.com/images/I/61Tw6LZoaiL._SL1500_.jpg" />
            </div>
        </div>
    )
}
