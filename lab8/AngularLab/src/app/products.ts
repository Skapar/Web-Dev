export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  link: string;
  image: string;
  rating: number;
  categoryName: string;
  likes: number
}

export const products = [
  {
    id: 1,
    name: 'NextGen MacBook Air 13 M1',
    price: 415785,
    description: 'Unleash the power of the M1 chip with the redesigned MacBook Air. Feather-light design meets astonishing performance, making every task faster and more efficient. Where elegance meets innovation.',
    link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-mgn63-seryi-100797845/?c=750000000',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h73/h87/63947822596126.jpg?format=preview-large',
    rating: 5,
    categoryName: 'PC',
    likes: 0
  },
  {
    id: 2,
    name: 'NextGen iPhone 15 Pro Max',
    price: 619410,
    description: 'Dive into the zenith of technology with the iPhone 15 Pro Max. Its titanium body houses groundbreaking technology, setting new benchmarks for smartphone luxury and performance.',
    link: 'https://kaspi.kz/shop/p/apple-iphone-15-pro-max-256gb-seryi-113138420/?c=750000000',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/hc1/h65/83559848181790.png?format=preview-large',
    rating: 4,
    categoryName: 'Phones',
    likes: 0
  },
  {
    id: 3,
    name: 'NextGen Apple Vision Pro',
    price: 2199334,
    description: 'Enter a new realm of computing with the Apple Vision Pro. This spatial headset blurs the lines between the digital and physical, offering a leap into future technologies.',
    link: 'https://kaspi.kz/shop/p/apple-vision-pro-256-gb-belyi-116472681/?c=750000000',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/ha3/hf9/85120232751134.png?format=preview-large',
    rating: 3,
    categoryName: 'Headsets',
    likes: 0
  },
  {
    id: 4,
    name: 'NextGen iPhone 13 Mini',
    price: 414050,
    description: 'Perfectly compact, the iPhone 13 Mini delivers without compromise. Enjoy the full iPhone experience, supercharged technology in a size that fits anywhere.',
    link: 'https://kaspi.kz/shop/p/apple-iphone-13-mini-512gb-zelenyi-104184124/?c=750000000',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h3a/h76/64946073468958.jpg?format=preview-large',
    rating: 4,
    categoryName: 'Phones',
    likes: 0
  },
  {
    id: 5,
    name: 'NextGen MacBook Pro 16',
    price: 1449950,
    description: 'For the visionary creators, the MacBook Pro 16 is your canvas. Powered by the M1 chip, it transforms your workflow with mind-bending speed and performance.',
    link: 'https://kaspi.kz/shop/p/apple-macbook-pro-16-2023-mnw93-seryi-108645788/?c=750000000',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/hf6/heb/68378829062174.jpg?format=preview-large',
    rating: 5,
    categoryName: 'PC',
    likes: 0
  },
  {
    id: 6,
    name: 'NextGen iPhone XR',
    price: 216974,
    description: 'The iPhone XR, where beauty meets brain. Experience enhanced performance wrapped in the sleek design you love, for a smartphone experience that’s unmistakably Apple.',
    link: 'https://kaspi.kz/shop/p/apple-iphone-xr-64gb-slim-box-chernyi-100691239/?c=750000000',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h65/h29/63943986774046.jpg?format=preview-large',
    rating: 5,
    categoryName: 'Phones',
    likes: 0
  },
  {
    id: 7,
    name: 'NextGen iPhone SE',
    price: 233995,
    description: 'The iPhone SE reimagines classic design for the modern era. Compact, powerful, and beautiful, it’s everything you love about iPhone in a design that fits everywhere.',
    link: 'https://kaspi.kz/shop/p/apple-iphone-se-2022-64gb-chernyi-104153727/?c=750000000',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h92/haa/63993960136734.jpg?format=gallery-medium',
    rating: 3,
    categoryName: 'Phones',
    likes: 0
  },
  {
    id: 8,
    name: 'NextGen iPhone 15 Pro',
    price: 549372,
    description: 'The iPhone 15 Pro, a symphony of technology and design. With its sleek titanium body and cutting-edge features, it sets the stage for the next era of premium smartphones.',
    link: 'https://kaspi.kz/shop/p/apple-iphone-15-pro-128gb-dual-sim-belyi-114790416/?c=750000000',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h6f/h21/84557784645662.jpg?format=preview-large',
    rating: 4,
    categoryName: 'Phones',
    likes: 0
  },
  {
    id: 9,
    name: 'NextGen iPhone 15',
    price: 382411,
    description: 'Experience the pinnacle of innovation with the iPhone 15. Boasting one of the best cameras and cutting-edge technology, it’s not just a smartphone; it’s a statement.',
    link: 'https://kaspi.kz/shop/p/apple-iphone-15-128gb-dual-sim-rozovyi-113933635/?c=750000000',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h20/h52/84205863469086.png?format=preview-large',
    rating: 5,
    categoryName: 'Phones',
    likes: 0
  },
  {
    id: 10,
    name: 'NextGen MacBook Air 13 M2',
    price: 549990,
    description: 'Embrace the future with the MacBook Air 13 M2. Its revolutionary chip redefines performance, making it the perfect blend of power and portability for the modern nomad.',
    link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-mlxy3-serebristyi-106110064/?c=750000000',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/hbf/h31/64515217850398.jpg?format=preview-large',
    rating: 5,
    categoryName: 'PC',
    likes: 0
  },
  {
    id: 11,
    name: 'NextGen MacBook Pro 14',
    price: 979318,
    description: 'Crafted for the professionals, the MacBook Pro 14 is where power meets portability. Featuring the M1 chip, it’s a powerhouse designed for the creators, the innovators, and the dreamers.',
    link: 'https://kaspi.kz/shop/p/apple-macbook-pro-14-2023-mphe3-seryi 108645925/?c=750000000',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/hf6/h95/68379275755550.jpg?format=preview-large',
    rating: 5,
    categoryName: 'PC',
    likes: 0
  }
];




/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
