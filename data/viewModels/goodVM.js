import basketModel from '../logic/basket';
import goodDetailsStatusVM from './good/GoodDetailsStatusVM';
import goodDetailsChooseVM from './good/GoodDetailsChooseVM';
import goodDetailsSpecificationVM from './good/GoodDetailsSpecificationVM';
import goodDetailsThingsTookVM from './good/GoodDetailsThingsTookVM';
import goodDetailsImgGalleryVM from './good/GoodDetailsImgGalleryVM';
import goodDetailsSeeMoreVM from './good/GoodDetailsSeeMoreVM';

const factory = (good, Goods, detailsImgGallery) => {
  const goodVM = {
    colectDataOfGood: basketModel.colectDataOfGood,
    init: basketModel.init,
    name: good.name,
    price: good.price,
    mainPicture: {
      src: good.image,
      srcSet: good.srcSet,
    },
    volume: good.volume,
    goodDetailsStatusVM: goodDetailsStatusVM({
      breadcrumbs: good.breadcrumbs,
      name: good.name,
    }),
    goodDetailsChooseVM: goodDetailsChooseVM(good),
    goodDetailsSpecificationVM: goodDetailsSpecificationVM({
      volume: good.volume,
      height: good.height,
      materials: good.materials,
      description: good.description,
      inAddition: good.inAddition,
    }),
    goodDetailsThingsTookVM: goodDetailsThingsTookVM(),
    goodDetailsImgGalleryVM: goodDetailsImgGalleryVM(detailsImgGallery),
    goodDetailsSeeMoreVM: goodDetailsSeeMoreVM(Goods),
  };
  return goodVM;
};

export default factory;
