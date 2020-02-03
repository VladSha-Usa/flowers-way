import '../../components/styleguide.css'


import React, { useEffect } from 'react'
import Head from 'next/head'
import Header from '../../components/mainPage/header'
import Footer from '../../components/mainPage/footer'
import Caption from '../../components/common/pageCaption'
import PFTextItem from '../../components/pathfinder/pfTextItem'
import PFMainContent from '../../components/pathfinder/pfMainContent'

const headerHeight = 80

const onScroll = () => {
  var scrollThreshold = 40
  var width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0)
  if (width <= 1023) {
    scrollThreshold = 3
  }
  if (document.body.scrollTop > scrollThreshold || document.documentElement.scrollTop > scrollThreshold) {
    document.getElementById("home").classList.add("header-border");
  } else {
    document.getElementById("home").classList.remove("header-border");
  }
}

const Swirzh = () => {
  useEffect(() => {
    document.onscroll = onScroll;
    onScroll()

    // var firebaseConfig = {
    //   apiKey: "AIzaSyC8mAIUcvd7bqw46bajWEbRrHcDTnd1qTw",
    //   authDomain: "flowers-way.firebaseapp.com",
    //   databaseURL: "https://flowers-way.firebaseio.com",
    //   projectId: "flowers-way",
    //   storageBucket: "flowers-way.appspot.com",
    //   messagingSenderId: "305623494289",
    //   appId: "1:305623494289:web:fa6954b42047c910079930",
    //   measurementId: "G-PSBJYP7E5X"
    // };
    // // Initialize Firebase
    // firebase.initializeApp(firebaseConfig)
    // firebase.analytics()

  });

  const text = `В 1594 Станіслав Жолкевський(польський державний та військовий діяч, гетьман) почав будівництво свого замку.В 1603 рокі за свої військові перемоги отримав королівський привілей Зигмунта III про надання Магдебурзького права, що дало поштовх розвитку торгівлі.В цей час почали жвавіше розвиватися ремесла та навколишні території.Жовква перетворилася на укріплене місто - фортецю, яке було оточене валами і ровами.`

  return (<>
    <Head>
      <title>Свірж. Країна очима велосипедистів</title>
      <meta property="og:locale" content="uk_UA" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Flower's Way. Країна очима велосипедистів. Сумки, велоспорядження" />
      <meta property="og:description" content="Велосумки для легких подорожей. Власне виробництво. просте монтування" />
      <meta property="og:url" content="https://flowersway.com.ua" />
      <meta property="og:image" content="https://flowersway.com.ua/img/shop-image@3x.jpg" />
      <meta property="og:site_name" content="Спорядження для легких подорожей" />


      <link href="https://fonts.googleapis.com/css?family=Archivo+Black&display=swap" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css?family=Montserrat:400,500,600,900&display=swap" rel="stylesheet" />
      <script src="https://www.gstatic.com/firebasejs/7.5.2/firebase-app.js"></script>
      <script src="https://www.gstatic.com/firebasejs/7.5.2/firebase-analytics.js"></script>
      <link rel="stylesheet" type="text/css" charSet="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
      <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
    </Head>

    <div className="map-image">
      <div id="home" className="header">
        <div className="page-content" style={{ height: "100%" }}>
          <Header />
        </div>
      </div>
      <div className="page-content content">
        <Caption caption="Свирж"/>
        <PFTextItem text={text} images={['/objects/Swirg2_450_320.jpg']} direct={false}/>
        <PFTextItem text={text} images={['/objects/Swirg2_450_320.jpg']} direct={true} />
        <PFMainContent />
      </div>
    </div>
    <div className="footer-background">
      <div id="footer" className="page-content" ><Footer /> </div>
    </div>
    <style jsx>{`
      .header {
        height: ${headerHeight}px;
        position: fixed;
        z-index: 999;
        top: 0;
        left: 0;
        width: 100vw;
      }

      .page-content {
        max-width: 1166px;
        margin-left: auto;
        margin-right: auto;
      }

      .map-image {
        /* Set a specific height */
        //height: 1000vh;

        /* Create the parallax scrolling effect */
        background-attachment: fixed;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        background-image: linear-gradient(to right, rgba(255, 255, 255, 0) -3%, rgba(255, 255, 255, 0.68) 117%), url(/img/map-image.png);
      }

      .header-border ::after {
          content: "";
          display: block;
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 2px;
          background-color: var(--light-blue-grey);
      }

      .header-border {
          background-color: #ffffff;
      }

      .content {
        position: relative;
        padding-top: ${headerHeight + 27}px;
        margin-bottom: auto;
      }

      .bg-block-2 {
        background-color: #f6faff;
        padding-top: 30px;
        padding-bottom: 30px;
      }
      .footer-background {
        width: 100%;
        height: 180px;
        background-color: var(--footer-back);
      }

      @media only screen and (max-width: 1165px) {
        .page-content {
          max-width: 960px;
          margin-left: auto;
          margin-right: auto;
        }
      }

      @media only screen and (max-width: 1023px) {
        .page-content {
          width: 343px;
          margin-left: auto;
          margin-right: auto;
        }
        .map-image {
          height: initial;
        }
        .content {
          padding-top: ${headerHeight}px;
        }
        .footer-background {
          height: 215px;
        }
      }
    `}
    </style>
  </>)
}

export default Swirzh
