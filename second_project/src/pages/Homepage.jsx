import React from 'react';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer..jsx';
const Homepage = () => {
    return(
    <>
    <Navbar/>
    <div className="hero-section">
        <h1><i>Welcome to our site</i></h1>
        <button>shop now</button>
    </div>
    <br />
    <center><h1>Products</h1></center>
    <div className="products">
        <img src="https://th.bing.com/th/id/OIP.93zKV3fDtMJ-2L6q2PlO6AHaFj?r=0&o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3" alt="" />
        <img src="https://th.bing.com/th/id/OIP.3S2QsdyGVAcKkwUqEq1_OQHaE8?r=0&o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3" alt="" />
        <img src="https://tse1.mm.bing.net/th/id/OIP.Xipbs8ybRQ6r6csNf8AhrAHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3" alt="" />
    </div>
    <div className="products">
        <img src="https://tse4.mm.bing.net/th/id/OIP.E2mmyetsj79GyojeUMplgAHaJ4?r=0&rs=1&pid=ImgDetMain&o=7&rm=3" alt="" />
        <img src="https://th.bing.com/th/id/OIP.7MELyIGgBnsXxoGkCZZx7QHaRr?r=0&o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3" alt="" />
        <img src="https://tse4.mm.bing.net/th/id/OIP.oTM88stPbNwDtTWBjjJS0wHaE8?r=0&rs=1&pid=ImgDetMain&o=7&rm=3" alt="" />
    </div>
    <Footer/>
    </>
    )
}
export default Homepage;