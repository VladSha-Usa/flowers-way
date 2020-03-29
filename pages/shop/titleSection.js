const TitleSection = () => {
  const titleWrapper = "title__section-wrapper";
  const titleClass = "title__section-main";
  const backgroundClass = "title__section-background";
  const subTitle = "title__section-subtitle";

  const mainFontSize = 28;
  return (
    <>
      <div className={titleWrapper}>
        <div className={backgroundClass}>Магазин велоспорядження</div>
        <div className={titleClass}>Магазин велоспорядження</div>
        <div className={subTitle}>
          Велоспорядження для легких подорожей, мандруй сміливо, безпечно, а
          головне з комфортом
        </div>
      </div>
      <style jsx>{`
        .${titleWrapper} {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-left: -15px;
        }
        .${titleClass} {
          font-size: ${mainFontSize}px;
          font-family: Montserrat;
          font-weight: 600;
          font-stretch: normal;
          font-style: normal;
          line-height: normal;
          letter-spacing: 1.31px;
          color: var(--texticonscolor);
          position: relative;
          text-transform: uppercase;
          margin-bottom: 15px;
        }
        .${backgroundClass} {
          object-fit: contain;
          opacity: 0.12;
          font-family: Montserrat;
          font-size: 38px;
          font-weight: 900;
          font-stretch: normal;
          font-style: normal;
          line-height: 1.05;
          letter-spacing: 1.78px;
          color: var(--transparency);
          position: absolute;
          margin-top: -19px;
          text-transform: uppercase;
        }
        .${subTitle} {
          font-family: Montserrat;
          font-size: 17px;
          font-weight: normal;
          font-stretch: normal;
          font-style: normal;
          line-height: 1.53;
          letter-spacing: 0.79px;
          text-align: center;
          color: var(--texticonscolor);
          width: 501px;
        }
      `}</style>
    </>
  );
};

export default TitleSection;