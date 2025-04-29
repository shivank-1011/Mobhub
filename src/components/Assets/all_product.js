import p1_img from "./product_1.png";
import p2_img from "./images.png";
import p3_img from "./2_3_f91c302a-4602-4ff1-867c-591a1fc26b38_800x.png";
import p4_img from "./61BgEfmZC8L._AC_UF1000,1000_QL80_.png";
import p5_img from "./-original-imah2nd6sbpfgn29.png";
import p6_img from "./d9169f94917a9bb1de62d34fc43bb0ad.png";
import p7_img from "./718aEzLJKLL.png";
import p8_img from "./galaxy-a06-sm-a065flbdins-samsung-original-imah4az6d6xfjqqz.png";
import p9_img from "./717swzZZk5L.png";
import p10_img from "./in-galaxy-m-sm-m166plggins-front-light-green-thumb-545235495.png";
import p11_img from "./in-galaxy-f-sm-e166pzkhins-sm-e---pzkdins-thumb-545373342.png";
import p12_img from "./in-galaxy-f-sm-e066bzvhins-sm-e---bzvgins-545132358.png";

import p13_img from "./16pm.png";
import p14_img from "./iphone-15-pro-max-256-gb-natural-titanium-272607387-rul0ytcs.png";
import p15_img from "./-original-imaghxen343tbjgj.png";
import p16_img from "./iphone-13-pro-mlw03hn-a-apple-original-imag6vpbvmfygne9.png";
import p17_img from "./apple-iphone-16-pro-max-1tb-black-titanium-myx43.png";
import p18_img from "./81+GIkwqLIL._AC_UF1000,1000_QL80_.png";
import p19_img from "./Apple-iPhone-14-Pro-iPhone-14-Pro-Max-deep-purple-220907-geo_inline.jpg.large.png";
import p20_img from "./iphone-13-pro-256-gb-alpine-green-270849872-z3ndckg1.png";
import p21_img from "./Apple-iPhone-16-hero-240909_inline.jpg.large.png";
import p22_img from "./71d7rfSl0wL.png";
import p23_img from "./r1595_Purple_PDP_Image_Position-1A_Avail__en-IN.png";
import p24_img from "./Apple_iphone13_hero_geo_09142021_inline.jpg.large.png";

import p25_img from "./Vivo-x200-pro-5g-titanium-grey-512gb-16gb-ram-Front-Back-View-Image.jpg";
import p26_img from "./images-3.png";
import p27_img from "./-original-imagwyhjdvhyujhg.png";
import p28_img from "./d0467cb4099841dae725d707fce48b51-2.png";
import p29_img from "./2_8_0be3c665-b07f-46d4-b542-dcb72b469ae3_500x.png";
import p30_img from "./-original-imahax8vggyh33gx.png";
import p31_img from "./-original-imah3hvby9rhhh4w.png";
import p32_img from "./61Mr3os9ZQL.png";
import p33_img from "./-original-imagyzwbzst7eemd.png";
import p34_img from "./v30-5g-v2318-vivo-original-imagyzhhxumayhzw.png";
import p35_img from "./ff8487e47efc45bb630a5620c2ca18e5.png_w860-h860.png";
import p36_img from "./-original-imagz6tzsqekf2mg.png";

let all_product = [
  {
    id: 1,
    name: "Samsung S25 Ultra",
    category: "Samsung",
    image: p1_img,
    new_price: 1299.0,
    old_price: 1309.0
  },
  {
    id: 2,
    name: "Samsung S25 Plus",
    category: "Samsung",
    image: p2_img,
    new_price: 1099.0,
    old_price: 1109.0
  },
  {
    id: 3,
    name: "Samsung S25",
    category: "Samsung",
    image: p3_img,
    new_price: 999.0,
    old_price: 1009.0
  },
  {
    id: 4,
    name: "Samsung Z Fold 6",
    category: "Samsung",
    image: p4_img,
    new_price: 1899.0,
    old_price: 1909.0
  },
  {
    id: 5,
    name: "Samsung Z Flip 6",
    category: "Samsung",
    image: p5_img,
    new_price: 1099.0,
    old_price: 1109.0
  },
  {
    id: 6,
    name: "Samsung A56",
    category: "Samsung",
    image: p6_img,
    new_price: 499.0,
    old_price: 509.0
  },
  {
    id: 7,
    name: "Samsung A36",
    category: "Samsung",
    image: p7_img,
    new_price: 399.0,
    old_price: 409.0
  },
  {
    id: 8,
    name: "Samsung A06",
    category: "Samsung",
    image: p8_img,
    new_price: 149.0,
    old_price: 159.0
  },
  {
    id: 9,
    name: "Samsung M56",
    category: "Samsung",
    image: p9_img,
    new_price: 295.0,
    old_price: 305.0
  },
  {
    id: 10,
    name: "Samsung M16",
    category: "Samsung",
    image: p10_img,
    new_price: 185.0,
    old_price: 195.0
  },
  {
    id: 11,
    name: "Samsung F16",
    category: "Samsung",
    image: p11_img,
    new_price: 157.0,
    old_price: 167.0
  },
  {
    id: 12,
    name: "Samsung F06",
    category: "Samsung",
    image: p12_img,
    new_price: 180.0,
    old_price: 190.0
  },
  {
    id: 13,
    name: "iPhone 16 Pro Max",
    category: "Apple",
    image: p13_img,
    new_price: 1199.0,
    old_price: 1209.0
  },
  {
    id: 14,
    name: "iPhone 15 Pro Max",
    category: "Apple",
    image: p14_img,
    new_price: 1199.0,
    old_price: 1209.0
  },
  {
    id: 15,
    name: "iPhone 14 Pro Max",
    category: "Apple",
    image: p15_img,
    new_price: 1099.0,
    old_price: 1109.0
  },
  {
    id: 16,
    name: "iPhone 13 Pro Max",
    category: "Apple",
    image: p16_img,
    new_price: 999.0,
    old_price: 1009.0
  },
  {
    id: 17,
    name: "iPhone 16 Pro",
    category: "Apple",
    image: p17_img,
    new_price: 1099.0,
    old_price: 1109.0
  },
  {
    id: 18,
    name: "iPhone 15 Pro",
    category: "Apple",
    image: p18_img,
    new_price: 999.0,
    old_price: 1009.0
  },
  {
    id: 19,
    name: "iPhone 14 Pro",
    category: "Apple",
    image: p19_img,
    new_price: 899.0,
    old_price: 909.0
  },
  {
    id: 20,
    name: "iPhone 13 Pro",
    category: "Apple",
    image: p20_img,
    new_price: 799.0,
    old_price: 809.0
  },
  {
    id: 21,
    name: "iPhone 16",
    category: "Apple",
    image: p21_img,
    new_price: 799.0,
    old_price: 809.0
  },
  {
    id: 22,
    name: "iPhone 15",
    category: "Apple",
    image: p22_img,
    new_price: 699.0,
    old_price: 709.0
  },
  {
    id: 23,
    name: "iPhone 14",
    category: "Apple",
    image: p23_img,
    new_price: 599.0,
    old_price: 609.0
  },
  {
    id: 24,
    name: "iPhone 13",
    category: "Apple",
    image: p24_img,
    new_price: 499.0,
    old_price: 509.0
  },
  {
    id: 25,
    name: "Vivo X200 Pro",
    category: "Vivo",
    image: p25_img,
    new_price: 999.0,
    old_price: 1009.0
  },
  {
    id: 26,
    name: "Vivo X200",
    category: "Vivo",
    image: p26_img,
    new_price: 899.0,
    old_price: 909.0
  },
  {
    id: 27,
    name: "Vivo X100 Pro",
    category: "Vivo",
    image: p27_img,
    new_price: 849.0,
    old_price: 859.0
  },
  {
    id: 28,
    name: "Vivo X100",
    category: "Vivo",
    image: p28_img,
    new_price: 749.0,
    old_price: 759.0
  },
  {
    id: 29,
    name: "Vivo V50",
    category: "Vivo",
    image: p29_img,
    new_price: 499.0,
    old_price: 509.0
  },
  {
    id: 30,
    name: "Vivo V50e",
    category: "Vivo",
    image: p30_img,
    new_price: 449.0,
    old_price: 459.0
  },
  {
    id: 31,
    name: "Vivo V40 Pro",
    category: "Vivo",
    image: p31_img,
    new_price: 399.0,
    old_price: 409.0
  },
  {
    id: 32,
    name: "Vivo V40",
    category: "Vivo",
    image: p32_img,
    new_price: 349.0,
    old_price: 359.0
  },
  {
    id: 33,
    name: "Vivo V30 Pro",
    category: "Vivo",
    image: p33_img,
    new_price: 349.0,
    old_price: 359.0
  },
  {
    id: 34,
    name: "Vivo V30",
    category: "Vivo",
    image: p34_img,
    new_price: 299.0,
    old_price: 309.0
  },
  {
    id: 35,
    name: "Vivo T3 Pro",
    category: "Vivo",
    image: p35_img,
    new_price: 259.0,
    old_price: 269.0
  },
  {
    id: 36,
    name: "Vivo T3",
    category: "Vivo",
    image: p36_img,
    new_price: 219.0,
    old_price: 229.0
  }
];

export default all_product;
