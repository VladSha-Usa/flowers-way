import React, { useEffect } from "react";
import BasketLogic from "../../data/shop/logic/basket";
import Head from "next/head";
import Header from "../../components/mainPage/header";
import Footer from "../../components/mainPage/footer";
import MainMetaInfo from "../../components/common/mainMetaInfo";
import GoodDetailsStatus from "../../components/shop/goodDetailsStatus";
import GoodDetailsChoose from "../../components/shop/goodDetailsChoose";
import GoodDetailsSpecification from "../../components/shop/goodDetailsSpecification";
import Analytics from "../../components/common/analytics";
import Good1Data from "../../data/shop/adapters/good1";
import GoodDetailsThingsTook from "../../components/shop/goodDetailsThingsTook";
import TakenThings from "../../data/shop/adapters/takenThings";
import GoodDetailsImgGallery from "../../components/shop/goodDetailsImgGallery";
import GoodDetailsSeeMore from "../../components/shop/goodDetailsSeeMore";
const headerHeight = 80;

const onScroll = () => {
  var scrollThreshold = 40;
  var width = Math.max(
    document.documentElement.clientWidth,
    window.innerWidth || 0
  );
  if (
    document.body.scrollTop > scrollThreshold ||
    document.documentElement.scrollTop > scrollThreshold
  ) {
    document.getElementById("home").classList.add("header-border");
  } else {
    document.getElementById("home").classList.remove("header-border");
  }
};

const Good1 = () => {
  useEffect(() => {
    document.onscroll = onScroll;
    onScroll();
    return BasketLogic.init();
  });
  BasketLogic.colectDataOfGood({
    count: 1,
    picture: Good1Data.mainPicture,
    name: Good1Data.name,
    volume: Good1Data.specification.volume,
    price: Good1Data.price,
  });
  return (
    <>
      <Head>
        <Analytics />
        <title>Flower's Way. Країна очима велосипедистів</title>
        <MainMetaInfo
          title="Flower's Way. Країна очима велосипедистів. Сумки, велоспорядження"
          description="Велосумки для легких подорожей. Власне виробництво. просте монтування"
          img="https://flowersway.com.ua/img/objects/Swirg2_450_320.jpg"
        ></MainMetaInfo>

        <link
          href="https://fonts.googleapis.com/css?family=Archivo+Black&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Montserrat:400,500,600,900&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          charSet="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
      </Head>

      <div id="home" className="header">
        <div className="page-content" style={{ height: "100%" }}>
          <Header />
        </div>
      </div>
      <div className="good-details-status">
        <div className="page-content">
          <GoodDetailsStatus breadcrumbs={Good1Data.breadcrumbs} />
        </div>
      </div>
      <div className="good-details-choose">
        <div className="page-content">
          <GoodDetailsChoose />
        </div>
      </div>
      <div className="good-details-specification">
        <div className="page-content">
          <GoodDetailsSpecification specification={Good1Data.specification} />
        </div>
      </div>
      <div className="good-details-things-took">
        <div className="page-content">
          <GoodDetailsThingsTook things={TakenThings} сontent={Good1Data} />
        </div>
      </div>
      <div className="good-details-img-gallery">
        <div className="page-content">
          <GoodDetailsImgGallery galleryContent={Good1Data.detailsImgGallery} />
        </div>
      </div>
      <div className="good-details-see-more">
        <div className="page-content">
          <GoodDetailsSeeMore elseGoods={Good1Data.moreGoods} />
        </div>
      </div>
      <div className="footer-background">
        <div id="footer" className="page-content">
          <Footer />{" "}
        </div>
      </div>
      <style jsx>
        {`
          .header {
            height: ${headerHeight}px;
            position: fixed;
            z-index: 999;
            top: 0;
            left: 0;
            width: 100%;
          }
          .header-page {
            align-items: center;
            height: 100%;
          }
          .page-content {
            max-width: 1166px;
            margin-left: auto;
            margin-right: auto;
          }
          .good-details-status {
            margin-top: 115px;
            margin-bottom: 36px;
          }
          .good-details-choose {
            margin-bottom: 60px;
          }
          .good-details-specification {
            margin-bottom: 120px;
          }
          .good-details-things-took {
            margin-bottom: 70px;
          }
          .good-details-img-gallery {
            margin-bottom: 170px;
          }
          .good-details-see-more {
            margin-bottom: 80px;
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
          .footer-background {
            width: 100%;
            height: 180px;
            background-color: var(--footer-back);
          }

          @media only screen and (max-width: 1220px) {
            .page-content {
              max-width: 960px;
              margin-left: auto;
              margin-right: auto;
            }
          }

          @media only screen and (max-width: 1065px) {
            .page-content {
              width: 335px;
              margin-left: auto;
              margin-right: auto;
            }
            .footer-background {
              height: 215px;
            }
          }
        `}
      </style>
    </>
  );
};

export default Good1;
