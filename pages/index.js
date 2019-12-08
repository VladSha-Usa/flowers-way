//import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react'
import Pathfinder from '../components/pathfinder'
import Head from 'next/head'
// import Nav from '../components/nav'
// import Banner from '../components/banner'
// import Shop from '../components/shop'


// import Container from 'react-bootstrap/Container'
// import Col from 'react-bootstrap/Col'
// import Row from 'react-bootstrap/Row'
// import Image from 'react-bootstrap/Image'
// import Carousel from 'react-bootstrap/Carousel'


const headerHegith = 110

const Home = () => {
  return (<>
    <Head>
      <link href="https://fonts.googleapis.com/css?family=Archivo+Black&display=swap" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css?family=Montserrat&display=swap" rel="stylesheet"/ >
      </Head>

    <div className="map-image">
      <header >
        <div>
          <nav style={{ justifyContent: 'flex-start' }}>
            left
          </nav>
          <nav style={{ justifyContent: 'flex-start' }}>
            left
          </nav>
          <nav style={{ width: "90px", marginLeft: "auto", justifyContent: 'flex-center' }}>
            <a href="#">Магазин</a>
          </nav>
          <nav style={{  width:"90px", margin:"40px", justifyContent: 'flex-center' }}>
            <a href="#">Путівник</a>
          </nav>
          <nav style={{ width: "90px", marginRight: "auto", justifyContent: 'flex-center' }}>
            <a href="#">Блог</a>
          </nav>
          <nav style={{ justifyContent: 'flex-end' }}>
            rightNav
          </nav>
          <nav style={{ justifyContent: 'flex-end' }}>
            rightNav
          </nav>
        </div>
      </header>

      <div className="main page-content">
        <span className="background-text">FLOWERS<br /> WAY</span>
        <div id="left">
          <div id="block-left">
            <span className="flowers-way">FLOWERS</span><br />
            <span className="flowers-way text-style-sss">WAY</span>
          </div>
        </div>
        <div id="right">
          <div id="block-right">
            <img src="img/shop-image.jpg" className="shop-image" />
            <div className="shop-text">МАГАЗИН</div>
          </div>
          <div>
           Велоспорядження 
 для легких подорожей
          </div>
        </div>
      </div>

      <div className="page-content"><Pathfinder /> </div>

    </div>

    <style jsx>{`
      nav {
        font-family: 'Montserrat', sans-serif;
        font-size: 17px;
        font-weight: 500;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: 0.79px;
        color: #061434;
      }
      header {
        height: ${headerHegith}px;
        position: fixed;
        z-index: 999;
        top: 0;
        left: 0;
        width: 100%;
      }
      .shop-image {
        // width: 320px;
        // height: 400px;
        object-fit: contain;
        border-radius: 10px;
        box-shadow: 14px 25px 46px 0 rgba(9, 21, 85, 0.2);
      }
      header div {
        align-items: center;
        display: flex;
        height: 100%;
        width: 100%;
        min-width: 1066px;
        max-width: 1166px;
        margin: auto;
      }
      .page-content {
        min-width: 1066px;
        max-width: 1166px;
        margin: auto;
        width: 100%;
      }
      .main {
        height: 100vh;

        display: flex;
        //justify-content: center;
        position: relative;
        padding-top: ${headerHegith+60}px;
        //background-color: rgba(0,255, 0, 0.1);
      }
      .flowers-way {
        font-family: 'Archivo Black', sans-serif;
        font-size: 128px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.18;
        letter-spacing: 5.98px;
        color: #040f2a;
      }
      
      .text-style-sss {
        color: #1831aa;
      }
      .background-text {
        //display: block;
        position: absolute;
        left: -150px;
        object-fit: contain;
        opacity: 0.08;
        font-family: 'Archivo Black', sans-serif;
        font-size: 184px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: 0.88;
        letter-spacing: 8.6px;
        z-index: -100;
        color: #296fdc;

        //background-color: rgba(0,0, 255, 0.1);
      }
      #left {
        justify-content: flex-start;
        margin-left: 0px;
        margin-right: auto;
        //width: 100%;
        //height: 500px;
        //background-color: rgba(0,255, 255, 0.3);
      }
      #right {
        justify-content: flex-end;
        margin-top: 20px;
        width: 360px;
        //margin: auto;
        height: 400px;
        //background-color: rgba(255,255, 0, 0.3);
      }
      #block-left {
        //position: relative;
        // width: 250px;
        // height: 250px;
      }
      #block-right {
        //display: flex;
        //position: relative;
         width: 320px;
        // height: 400px;
        //background-color: black;
      }

      .map-image {
        /* Set a specific height */
        height: 100vh; 
      
        /* Create the parallax scrolling effect */
        background-attachment: fixed;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;


        background-image: linear-gradient(to right, rgba(255, 255, 255, 0) -3%, rgba(255, 255, 255, 0.68) 117%), url(img/map-image.png);
      }
      .shop-text {
        position: relative;
        object-fit: contain;
        left: 180px;
        top: -190px;
        transform: rotate(-90deg);
        opacity: 0.12;
        font-family: 'Montserrat', sans-serif;;
        font-size: 70px;
        font-weight: 900;
        font-stretch: normal;
        font-style: normal;
        line-height: 0.57;
        letter-spacing: 0.82px;
        color: #296fdc;
        z-index: -90;
}
    `}
    </style>
  </>)
}

export default Home
