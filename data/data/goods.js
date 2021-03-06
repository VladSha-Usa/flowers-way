import { Kordura, Oxford, RainBlaBla } from './fabrics';

const triangularBicycleFirstAidKitFrame = {
  id: 'tringular-bicycle-first-aid-kit-frame',
  name: 'Трикутна велоаптечка\nна раму',
  volume: 0.5,
  height: 40,
  materials: 'тканина оксфорд, водовідштовхуюча блискавка, фурнітура WJ.',
  description:
    'В середині є додаткова кишенька.\nВ клапані - відділення для дрібничок.\nВ комплекті є лямка через плечо.\nПотрібно додаткове кріплення. ',
  inAddition: [
    '- можливі різні варіації з кольором\n',
    '- різні комбінації сумок\n',
    '- наявність рейнкавера\n',
  ],
  price: 400,
  image: '/shop/Trykutna_veloaptechka.jpg',
  srcSet:
    '/shop/Trykutna_veloaptechka@2x.jpg 2x, /shop/Trykutna_veloaptechka@3x.jpg 3x',
  gallery: [
    {
      src: '/shop/Trykutna_veloaptechka.jpg',
      srcSet:
        '/shop/Trykutna_veloaptechka@2x.jpg 2x, /shop/Trykutna_veloaptechka@3x.jpg 3x',
    },
    {
      src: 'https://via.placeholder.com/255x230.jpg?text=No+Image',
      srcSet:
        'https://via.placeholder.com/510x460@2x.jpg?text=No+Image 2x, https://via.placeholder.com/765x690@3x.jpg?text=No+Image  3x',
    },
    {
      src: 'https://via.placeholder.com/255x230.jpg?text=No+Image',
      srcSet:
        'https://via.placeholder.com/510x460@2x.jpg?text=No+Image 2x, https://via.placeholder.com/765x690@3x.jpg?text=No+Image  3x',
    },
    {
      src: 'https://via.placeholder.com/255x230.jpg?text=No+Image',
      srcSet:
        'https://via.placeholder.com/510x460@2x.jpg?text=No+Image 2x, https://via.placeholder.com/765x690@3x.jpg?text=No+Image  3x',
    },
    {
      src: 'https://via.placeholder.com/255x230.jpg?text=No+Image',
      srcSet:
        'https://via.placeholder.com/510x460@2x.jpg?text=No+Image 2x, https://via.placeholder.com/765x690@3x.jpg?text=No+Image  3x',
    },
    {
      src: 'https://via.placeholder.com/255x230.jpg?text=No+Image',
      srcSet:
        'https://via.placeholder.com/510x460@2x.jpg?text=No+Image 2x, https://via.placeholder.com/765x690@3x.jpg?text=No+Image  3x',
    },
  ],
  fabrics: [Kordura, Oxford],
  colors: ['main', 'secondary', 'additional'],
};

const bagBigFork = {
  id: 'bag-big-fork',
  name: 'Велика сумка-тубус \nна вилку',
  volume: 10,
  price: 1500,
  image: '/shop/Sumka-tubus_na_vylku_10l.jpg',
  srcSet:
    '/shop/Sumka-tubus_na_vylku_10l@2x.jpg 2x, /shop/Sumka-tubus_na_vylku_10l@3x.jpg 3x',
  fabrics: [Kordura, Oxford, RainBlaBla],
  colors: ['main', 'secondary', 'additional'],
};

const bananaBagSmallFork = {
  id: 'banana-bag-small-fork',
  name: 'Маленька Сумка-тубус\nна вилку',
  volume: 6,
  price: 1250,
  image: '/shop/Sumka-tubus_na_vylku_6l.jpg',
  srcSet:
    '/shop/Sumka-tubus_na_vylku_6l@2x.jpg 2x, /shop/Sumka-tubus_na_vylku_6l@3x.jpg 3x',
  fabrics: [Kordura, Oxford],
  colors: ['main', 'secondary', 'additional'],
};

const bigBagTubeOnWheel = {
  id: 'big-bag-tube-on-wheel',
  name: 'Велика Сумка-тубус\nна кермо',
  volume: 6,
  price: 1150,
  image: '/shop/Sumka-tubus_na_kermo_6l.jpg',
  srcSet:
    '/shop/Sumka-tubus_na_kermo_6l@2x.jpg 2x, /shop/Sumka-tubus_na_kermo_6l@3x.jpg 3x',
  fabrics: [Kordura, Oxford],
  colors: ['main', 'secondary', 'additional'],
};

const smallBagTubeOnWheel = {
  id: 'small-bag-tube-on-wheel',
  name: 'Маленька Сумка-тубус\nна кермо',
  volume: 4,
  price: 1100,
  image: '/shop/Sumka-tubus_na_kermo_4l.jpg',
  srcSet:
    '/shop/Sumka-tubus_na_kermo_4l@2x.jpg 2x, /shop/Sumka-tubus_na_kermo_4l@3x.jpg 3x',
  fabrics: [Kordura, Oxford],
  colors: ['main', 'secondary', 'additional'],
};

const seatBag = {
  id: 'seat-bag',
  name: 'Підседільна сумка',
  volume: 5,
  price: 1150,
  image: '/shop/Sumka_pidsedilna.jpg',
  srcSet: '/shop/Sumka_pidsedilna@2x.jpg 2x, /shop/Sumka_pidsedilna@3x.jpg 3x',
  fabrics: [Kordura, Oxford],
  colors: ['main', 'secondary', 'additional'],
};

const innerFrameBag = {
  id: 'inner-frame-bag',
  name: 'Трикутна внутрірамна\nсумка',
  volume: '5',
  price: 700,
  image: '/shop/Sumka_trykutna_vnytriramna.jpg',
  srcSet:
    '/shop/Sumka_trykutna_vnytriramna@2x.jpg 2x, /shop/Sumka_trykutna_vnytriramna@3x.jpg 3x',
  fabrics: [Kordura, Oxford],
  colors: ['main', 'secondary', 'additional'],
};

const hamster = {
  id: 'hamster',
  name: 'Хом`ячок',
  volume: 1,
  price: 450,
  image: '/shop/Homjak.jpg',
  srcSet: '/shop/Homjak@2x.jpg 2x, /shop/Homjak@3x.jpg 3x',
  fabrics: [Kordura, Oxford],
  colors: ['main', 'secondary', 'additional'],
};

const Goods = [
  triangularBicycleFirstAidKitFrame,
  bagBigFork,
  bananaBagSmallFork,
  bigBagTubeOnWheel,
  smallBagTubeOnWheel,
  seatBag,
  innerFrameBag,
  hamster,
];

export {
  triangularBicycleFirstAidKitFrame,
  bagBigFork,
  bananaBagSmallFork,
  bigBagTubeOnWheel,
  smallBagTubeOnWheel,
  seatBag,
  innerFrameBag,
  hamster,
};
export default Goods;
