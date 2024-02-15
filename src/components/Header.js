import React from 'react'; 
import { Link } from 'react-router-dom'; 
import bannerImg from '../images/restaurantfood.jpg'

const Header = () =>{
    return (
        <header className='header'>
            <section>
                {/* Banner Text */}
                <div className="banner">
                <h2>Little Lemon</h2>
                    <h3>Chicago</h3>
                    <p>We are a family owned Mediterraneran restaurant, focused on traditional recipes served with a modern twist.</p>
                </div>
                    <Link to="/booking" ><button aria-label='On Click'>Reserve Table</button></Link>

                {/* Banner Img */}
                <div className='banner-img'>
                    <img src={bannerImg} alt="Restautant Food" />
                </div>


            </section>
        </header>
    );
}

export default Header; 