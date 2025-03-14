import React, { useState } from "react";
import ThemeCakesSlider from "./ThemeCakesSlider";
import CakeCards from "./CakeCards"; 
import { EnquiryForm } from "./pages/EnquiryForm";
import { FaSearch } from "react-icons/fa";
import expressTheme from "/src/assets/images/kit_kat_cake.jpg";
import birthdayTheme from "/src/assets/images/Birthday_cakes.jpg";
import weddingTheme from "/src/assets/images/wedding.jpeg";
import heartTheme from "/src/assets/images/21.jpeg";
import girlsTheme from "/src/assets/images/19.jpeg";
import boysTheme from "/src/assets/images/23.jpeg";
import TierTheme from "/src/assets/images/32.jpeg";
import ShapeTheme from "/src/assets/images/9444cc0c-8a77-4438-ae5e-d85c37f9388b.jpeg";
import DrawingTheme from "/src/assets/images/f006-_3_to_5_1.jpg";
import BabyShowerTheme from "/src/assets/images/Fun and Delicious Cakes for Your Pregnancy Reveal.jpeg";
import PinataTheme from "/src/assets/images/38.jpeg";
import AlphabeticTheme from "/src/assets/images/Alphabet Cake.jpeg";
import NumericTheme from "/src/assets/images/Snow white theme cake.jpeg";
import PhotoTheme from "/src/assets/images/Doraemon Fam Cartoon Cake _ JS yummy_.jpeg";
import expressCake1 from "/src/assets/images/chocolate-truffle-cake-845926.jpg";
import expressCake2 from "/src/assets/images/blasty_blueberry_1_5.jpg";
import expressCake3 from "/src/assets/images/blackforest.jpg";
import expressCake4 from "/src/assets/images/redvelvet_cake.jpg";
import expressCake5 from "/src/assets/images/nutty_choco_delight.jpg";
import expressCake6 from "/src/assets/images/50.jpeg";
import expressCake7 from "/src/assets/images/50.jpeg";
import expressCake8 from "/src/assets/images/kit_kat_cake.jpg";
import expressCake9 from "/src/assets/images/b0c2bae9-f44e-4204-a039-cf5e5cccce99.jpeg";
import expressCake10 from "/src/assets/images/Walnut Caramel Mirror Cake with Caramel Mirror Glaze.jpeg";
import expressCake11 from "/src/assets/images/Sprinkle Birthday Cake _ Hungry Happenings.jpeg";
import expressCake12 from "/src/assets/images/Rasmalai cake.jpeg";
import birthdayCake1 from "/src/assets/images/14.jpeg";
import birthdayCake2 from "/src/assets/images/Purple Rosette Birthday Cake with Buttercream Flowers.jpeg";
import birthdayCake3 from "/src/assets/images/Princess Birthday Cakes.jpeg";
import birthdayCake4 from "/src/assets/images/11.jpeg";
import birthdayCake5 from "/src/assets/images/25+ Rainbow Cakes Ideas That Look Too Perfect to Eat.jpeg";
import birthdayCake6 from "/src/assets/images/4.jpeg";
import birthdayCake7 from "/src/assets/images/b30eebc9-b3b8-4d98-a0de-7b23521802ed.jpeg";
import birthdayCake8 from "/src/assets/images/ba87803f-0ac9-4cad-96f0-a030aa7bf636.jpeg";
import weddingCake1 from "/src/assets/images/wedding.jpeg";
import weddingCake2 from "/src/assets/images/29.jpeg";
import weddingCake3 from "/src/assets/images/Engagement cake.jpeg";
import weddingCake4 from "/src/assets/images/e2c6a4dc-a077-42b8-9ba3-d9546d6ee48d.jpeg";
import weddingCake5 from "/src/assets/images/40.jpeg";
import weddingCake6 from "/src/assets/images/a88f9426-e9f7-4c94-a08e-1524e5f272c3.jpeg";
import weddingCake7 from "/src/assets/images/0353fccd-9ebd-4e12-8737-07f3396edf1f.jpeg";
import weddingCake8 from "/src/assets/images/Rosettes and Roses White Chocolate Strawberry….jpeg";
import girlsCake1 from "/src/assets/images/Birthday cake.jpeg";
import girlsCake2 from "/src/assets/images/9.jpeg";
import girlsCake3 from "/src/assets/images/13.jpeg";
import girlsCake4 from "/src/assets/images/26.jpeg";
import girlsCake5 from "/src/assets/images/a82e3e4b-cec9-435c-9e6d-9a7acd7734b5.jpeg";
import girlsCake6 from "/src/assets/images/31.jpeg";
import girlsCake7 from "/src/assets/images/Birthday Cake Design for Girl Kid with Name Generator - Name Birthday Cakes - Write Name on Cake Images.jpeg";
import girlsCake8 from "/src/assets/images/12.jpeg";
import boysCake1 from "/src/assets/images/23.jpeg";
import boysCake2 from "/src/assets/images/50.jpeg";
import boysCake3 from "/src/assets/images/Its a wild 1!.jpeg";
import boysCake4 from "/src/assets/images/Cakes For Boys at Loisnicholson.jpeg";
import boysCake5 from "/src/assets/images/Nautical Sailboat Cake with Ombre Waves and Anchor Details.jpeg";
import boysCake6 from "/src/assets/images/36.jpeg";
import boysCake7 from "/src/assets/images/Baked with love 💕 Eggless Redvelvet cake….jpeg";
import boysCake8 from "/src/assets/images/17.jpeg";
import heartcake1 from "/src/assets/images/Easy Heart Shaped Cake Tutorial - Sugar & Sparrow.jpeg";
import heartcake2 from "/src/assets/images/Heart cake.jpeg";
import heartcake3 from "/src/assets/images/33.jpeg";
import heartcake4 from "/src/assets/images/Buy and Send All Types of Cakes Online - FNP.jpeg";
import heartcake5 from "/src/assets/images/Vintage Cake Toppers_ Add Charm and Character to Your Desserts.jpeg";
import heartcake6 from "/src/assets/images/Pink Heart Cake.jpeg";
import heartcake7 from "/src/assets/images/21.jpeg";
import heartcake8 from "/src/assets/images/Heart Shape Anniversary Cakes Ideas __ New Valentine's Day cakes _ wedding cakes ideas.jpeg";
import Tiercake1 from "/src/assets/images/Hanging fake cake, faux wedding cake, 5 tiered white faux cake, 12 inch cake.jpeg";
import Tiercake2 from "/src/assets/images/Two tier Rainbow cake with chocolate drip and rainbow topper!.jpeg";
import Tiercake3 from "/src/assets/images/TWO TIER CAKE - two layer (30 PEOPLE).jpeg";
import Tiercake4 from "/src/assets/images/Italian-Inspired White And Greenery Sarasota Wedding - Marry Me Tampa Bay _ Most Trusted Wedding Vendor Search And Real Wedding Inspiration Site.jpeg";
import Tiercake5 from "/src/assets/images/7.jpeg";
import Tiercake6 from "/src/assets/images/TWO TIER CAKE - two layer (30 PEOPLE).jpeg";
import Tiercake7 from "/src/assets/images/Porsche Cake.jpeg";
import Tiercake8 from "/src/assets/images/26 Fun Cakes for an Awesome 20th Birthday.jpeg";
import Shapecake1 from "/src/assets/images/Bear Cake.jpeg";
import Shapecake2 from "/src/assets/images/8792e2d7-d2cb-4d7f-af24-f4a7633b5cf1.jpeg";
import Shapecake3 from "/src/assets/images/Piped soccer ball shaped birthday cake.jpeg";
import Shapecake4 from "/src/assets/images/Flying Kite Bars.jpeg";
import Shapecake5 from "/src/assets/images/Google-Images.jpeg";
import Shapecake6 from "/src/assets/images/09f584ef-eecd-4924-a7a6-e8462c94eff7.jpeg";
import Shapecake7 from "/src/assets/images/Book.jpeg";
import Shapecake8 from "/src/assets/images/Two the moon theme cake semi circle, dome shape moon cake _.jpeg";
import Drawingcake1 from "/src/assets/images/9390b676-5c0c-463d-a7a6-8554ba36d4d9.jpeg";
import Drawingcake2 from "/src/assets/images/292c3958-b536-4892-8fda-f09aacdec871.jpeg";
import Drawingcake3 from "/src/assets/images/CH633-350x350.jpg";
import Drawingcake4 from "/src/assets/images/hello kitty filter glasses.jpeg";
import Drawingcake5 from "/src/assets/images/mikey.jpeg";
import Drawingcake6 from "/src/assets/images/25fbedfaa463b4423e78f0afd5eca1d7.jpg";
import Drawingcake7 from "/src/assets/images/651ff1c0-6f95-4d83-9c8c-444d7a6d8c1b.jpeg";
import Drawingcake8 from "/src/assets/images/ec3a86a1-0a3d-4c83-a9e0-28aa91a42a2b.jpeg";
import BabyShowercake1 from "/src/assets/images/39.jpeg";
import BabyShowercake2 from "/src/assets/images/34.jpeg";
import BabyShowercake3 from "/src/assets/images/22.jpeg";
import BabyShowercake4 from "/src/assets/images/Mini torta temática de embarazo.jpeg";
import BabyShowercake5 from "/src/assets/images/Prince or Princess_ Baby Shower 400113.jpeg";
import BabyShowercake6 from "/src/assets/images/fea3ae2d-a560-4811-8ea4-5cf37aab4e22.jpeg";
import BabyShowercake7 from "/src/assets/images/25+ Inspirações Bolo Chá Revelação.jpeg";
import BabyShowercake8 from "/src/assets/images/28.jpeg";
import Pinatacake1 from "/src/assets/images/53371105-0d35-4f4a-9c46-08353711cb85.jpeg";
import Pinatacake2 from "/src/assets/images/e89e912c-cfdf-4cd4-a230-bee5f7396dd7.jpeg";
import Pinatacake3 from "/src/assets/images/Cricket Pinata Cakes- CakeSmash_in.jpeg";
import Pinatacake4 from "/src/assets/images/Chocolate Smash Cakes (Piñata Cakes) - Cake Pops by Gabi.jpeg";
import Pinatacake5 from "/src/assets/images/Pinata Cake with Hammer - Frozen theme.jpeg";
import Pinatacake6 from "/src/assets/images/Boom! Bomb 💣 cake.jpeg";
import Pinatacake7 from "/src/assets/images/Unicorn Pinyata.jpeg";
import Pinatacake8 from "/src/assets/images/853d1b45-7735-4e84-be99-2a8dee91309d.jpeg";
import Alphabetcake1 from "/src/assets/images/Letter A Cake.jpeg";
import Alphabetcake2 from "/src/assets/images/How To Make Alphabet Cake At Home - Wondafox.jpeg";
import Alphabetcake3 from "/src/assets/images/Custom Initial Birthday CakeChocolate Cake Decorated with Fruit and Macarons.jpeg";
import Alphabetcake4 from "/src/assets/images/Monogram cake.jpeg";
import Alphabetcake5 from "/src/assets/images/Letter cake.jpeg";
import Alphabetcake6 from "/src/assets/images/fdd4d62e-b627-423a-8b5e-f938a6aec5d2.jpeg";
import Alphabetcake7 from "/src/assets/images/a775ae9a-01d6-4d79-a53c-3bea347a4664.jpeg";
import Alphabetcake8 from "/src/assets/images/964faaf1-0ce8-4e1d-92ad-da955d7e30f1.jpeg";
import Numericcake1 from "/src/assets/images/b4530edf-67d4-471f-999d-8219db916d14.jpeg";
import Numericcake2 from "/src/assets/images/eeb24ca6-cec6-4345-bb53-894fa92d5888.jpeg";
import Numericcake3 from "/src/assets/images/6.jpeg";
import Numericcake4 from "/src/assets/images/Number cake.jpeg";
import Numericcake5 from "/src/assets/images/Nutella Number Cake - Emma's Lieblingsstücke.jpeg";
import Numericcake6 from "/src/assets/images/Backtrends 2020_2021.jpeg";
import Numericcake7 from "/src/assets/images/Nutella Number Cake - Emma's Lieblingsstücke.jpeg";
import Numericcake8 from "/src/assets/images/bf8a6403-8471-4d1b-aa9e-e8faee10c59f.jpeg";
import Photocake1 from "/src/assets/images/Birthday Cake With Photo Red Velvet Cake.jpeg";
import Photocake2 from "/src/assets/images/Order Ben 10 Kids Photo Cake - onlinecake_in.jpeg";
import Photocake3 from "/src/assets/images/16.jpeg";
import Photocake4 from "/src/assets/images/Captain America Photo Cake _ Marvel Character Cake _ Pure Veg Bakery.jpeg";
import logo1 from"/src/assets/images/6021967-removebg-preview.png"
import logo2 from"/src/assets/images/silver-star-five-points-design_88791-59.avif"
import logo3 from"/src/assets/images/pngtree-vector-gold-star-with-circle-png-image_13064659-removebg-preview.png"
import breadPastriesImage from "/src/assets/images/breads-pastries-christmas-cake-wooden-background-heart-picture-bakery-shop-valentines-day-65833657.webp";




const themes = [
  { name: "Express", image: expressTheme },
  { name: "Birthday", image: birthdayTheme },
  { name: "Wedding", image: weddingTheme },
  { name: "Heart", image: heartTheme },
  { name: "Girl's", image: girlsTheme },
  { name: "Boy's", image: boysTheme },
  { name: "Tier/Step", image:TierTheme },
    { name: "Shape", image: ShapeTheme },
    { name: "Drawing", image: DrawingTheme },
    { name: "Baby Shower", image: BabyShowerTheme },
    { name: "Pinata", image: PinataTheme },
    { name: "Alphabet", image:AlphabeticTheme },
    { name: "Numeric", image: NumericTheme },
    { name: "Photo", image:PhotoTheme },
];

const cakeData = {
  
    Express: [
      { id: 1, name: "Premium Choco Truffle Cake", weight: "1 Kg", price: 690, image: expressCake1 },
      { id: 2, name: "Blastly Blueberry Cake", weight: "1 Kg", price: 540, image: expressCake2 },
      { id: 3, name: "Blackforest Cake", weight: "1 Kg", price: 540, image: expressCake3 },
      { id: 4, name: "RedVelvet Cake", weight: "1 Kg", price: 620, image: expressCake4 },
      { id: 5, name: "Nutty Choco Delight Cake", weight: "1 Kg", price: 640, image: expressCake5 },
      { id: 6, name: "ButterScotch Sensation", weight: "1 Kg", price: 640, image: expressCake6 },
      { id: 7, name: "Rosemilk Pistachio Cake", weight: "1 Kg", price: 640, image: expressCake7 },
      { id: 8, name: "Kit Kat Cake", weight: "1 Kg", price: 640, image: expressCake8 },
      { id: 9, name: "WhiteForest Cake", weight: "1 Kg", price: 540, image: expressCake9 },
      { id: 10, name: "Walnut Caramel Cake", weight: "1 Kg", price: 690, image: expressCake10 },
      { id: 11, name: "Sprinkle Birthday Cake", weight: "1 Kg", price: 690, image: expressCake11 },
      { id: 12, name: "Rasamalai Cake", weight: "1 Kg", price: 690, image: expressCake12 }
    
    ],
    
    Birthday: [
      { id: 13, name: "Adorable Birthday Cake", weight: "4 kg", price: 2690, image: birthdayCake1 },
      { id: 14, name: "Purple Themed Cake", weight: "1 kg", price: 1540, image: birthdayCake2 },
      { id: 15, name: "Cartoon Theme Cake", weight: "3 kg", price: 2890, image: birthdayCake3 },
      { id: 16, name: "Unicorn Fantasy Cake", weight: "2 kg", price: 1990, image: birthdayCake4 },
      { id: 17, name: "Butterfly Dream Cake", weight: "1.5 kg", price: 1690, image: birthdayCake5 },
      { id: 18, name: "Confetti Celebration", weight: "1 kg", price: 1590, image: birthdayCake6 },
      { id: 19, name: "Rainbow Sprinkles Cake", weight: "2 kg", price: 2100, image: birthdayCake7 },
      { id: 20, name: "Chocolate Drip Cake", weight: "3 kg", price: 2800, image: birthdayCake8 },
    ],
  
    Wedding: [
      { id: 21, name: "Pillar of Love", weight: "5 Kg", price: 5690, image: weddingCake1 },
  { id: 22, name: "Majestic Love Symphony", weight: "1 Kg", price: 3540, image: weddingCake2 },
  { id: 23, name: "Happily, Ever After", weight: "1 Kg", price: 3540, image: weddingCake3 },
  { id: 24, name: "White Pearl Affair", weight: "3 Kg", price: 5620, image: weddingCake4 },
  { id: 25, name: "My Heart, Forever Yours", weight: "1 Kg", price: 2640, image: weddingCake5 },
  { id: 26, name: "Tied With Love", weight: "1 Kg", price: 1240, image: weddingCake6 },
  { id: 27, name: "Rose Pink Celebration", weight: "1 Kg", price: 2240, image: weddingCake7 },
  { id: 28, name: "Wedding Cake", weight: "1 Kg", price: 2240, image: weddingCake8 },

    ],
  
    Heart: [
      { id: 29, name: "Rose Glossy Love", weight: "1 kg", price: 2690, image: heartcake1 },
  { id: 30, name: "Purple Celebration", weight: "1 kg", price: 3540, image: heartcake2 },
  { id: 31, name: "Melt My Heart", weight: "1 kg", price: 3540, image: heartcake3 },
  { id: 32, name: "Choco Gem Heart Delight", weight: "1 kg", price: 2620, image: heartcake4 },
  { id: 33, name: "Two Hearts, One Love", weight: "1 kg", price: 2640, image: heartcake5 },
  { id: 34, name: "Pink Heart Cake", weight: "1 kg", price: 2640, image: heartcake6 },
  { id: 35, name: "Red Velvet Heart Cake", weight: "1 kg", price: 2640, image: heartcake7 },
  { id: 36, name: "Heart Fondant Cake", weight: "1 kg", price: 2640, image: heartcake8 },
    ],
  
    "Girl's": [
      { id: 37, name: "Rose Pinky Love", weight: "1 kg", price: 2690, image: girlsCake1 },
      { id: 38, name: "Princess Celebration", weight: "1 kg", price: 3540, image: girlsCake2 },
      { id: 39, name: "Mermaid Cake", weight: "1 kg", price: 3540, image: girlsCake3 },
      { id: 40, name: "Ice Cream Delight Cake", weight: "1 kg", price: 2620, image: girlsCake4 },
      { id: 41, name: "Butterfly Wing Cake", weight: "1 kg", price: 2640, image: girlsCake5 },
      { id: 42, name: "Butterfly Rainbow Cake", weight: "1 kg", price: 2640, image: girlsCake6 },
      { id: 43, name: "Name Generator Cake", weight: "1 kg", price: 2640, image: girlsCake7 },
      { id: 44, name: "Pretty Doll Cake", weight: "1 kg", price: 2640, image: girlsCake8 },
    
    ],
  
    "Boy's": [
      { id: 45, name: "Spiderman Cake", weight: "1 kg", price: 2690, image: boysCake1 },
      { id: 46, name: "Football Theme Cake", weight: "1 kg", price: 3540, image: boysCake2 },
      { id: 47, name: "Jungle Cake", weight: "1 kg", price: 3540, image: boysCake3 },
      { id: 48, name: "Car Race Theme Cake", weight: "1 kg", price: 2620, image: boysCake4 },
      { id: 49, name: "Nautical Sail Boat Cake", weight: "1 kg", price: 2640, image: boysCake5 },
      { id: 50, name: "Batman Theme Cake", weight: "1 kg", price: 2640, image: boysCake6 },
      { id: 51, name: "Mickey Mouse Cake", weight: "1 kg", price: 2640, image: boysCake7 },
      { id: 52, name: "Football Theme Cake", weight: "1 kg", price: 2640, image: boysCake8 },
    
    ],
  "Tier/Step": [
      { id: 53, name: "Hanging Cake", weight: "2 kg", price: 3690, image: Tiercake1 },
      { id: 54, name: "Two Tier Rainbow Cake", weight: "1 kg",price: 3540, image: Tiercake2 },
      { id: 55, name: "Choco Layer Cake", weight: "1 kg", price: 3540, image: Tiercake3 },
      { id: 56, name: "White & Greenary Cake", weight: "1 kg", price: 2620, image: Tiercake4 },
      { id: 57, name: "5-tier Classy Light-up Cake", weight: "1 kg", price: 2640, image: Tiercake5 },
      { id: 58, name: "5-tier Delicious Choco Cake", weight: "1 kg", price: 2640, image: Tiercake6 },
      { id: 59, name: "2-tier Classy Porsche Cake", weight: "1 kg", price: 2640, image: Tiercake7 },
      { id: 60, name: "Sea Animals Theme Cake", weight: "1 kg", price: 2640, image:Tiercake8},
    ],
    Shape:[
  {
    id: 61,
    name: "Teddy Bear Cake",
    weight: "1 Kg",
    price: "2690.00",
    image: Shapecake1, 
  },
  {
    id: 62,
    name: "Kitty Cake",
    weight: "1 Kg",
    price: "3540.00",
    image: Shapecake2, 
  },
  {
    id: 63,
    name: "Soccer Ball Cake",
    weight: "1 Kg",
    price: "3540.00",
    image: Shapecake3, 
  },
  {
    id: 64,
    name: "Flying Kite Bars Cake",
    weight: "1 Kg",
    price: "2620.00",
    image: Shapecake4, 
  },
  {
    id: 65,
    name: "Dog Shaped Cake",
    weight: "1 Kg",
    price: "2640.00",
    image: Shapecake5, 
  },
  {
    id: 66,
    name: "Ice Cream Shape Cake",
    weight: "1 Kg",
    price: "2640.00",
    image: Shapecake6, 
  },
  {
    id: 67,
    name: "Book Shaped Cake",
    weight: "1 Kg",
    price: "2640.00",
    image: Shapecake7, 
  },
  {
    id: 68,
    name: "Two the Moon Cake",
    weight: "1 Kg",
    price: "2640.00",
    image: Shapecake8,
  },
],
 Drawing:[
  {
    id: 69,
    name: "Angry Bird Cake",
    weight: "1 Kg",
    price: "1690.00",
    image: Drawingcake1,
  },
  {
    id: 70,
    name: "Doremon Cake",
    weight: "1 Kg",
    price: "3540.00",
    image: Drawingcake2, 
  },
  {
    id: 71,
    name: "Chotta Beem Cake",
    weight: "1 Kg",
    price: "1540.00",
    image: Drawingcake3, 
  },
  {
    id: 72,
    name: "Hello Kitty Cake",
    weight: "1 Kg",
    price: "2620.00",
    image: Drawingcake4, 
  },
  {
    id: 73,
    name: "Micky Mouse Cake",
    weight: "1 Kg",
    price: "2640.00",
    image: Drawingcake5, 
  },
  {
    id: 74,
    name: "Dora Theme Cake",
    weight: "1 Kg",
    price: "2640.00",
    image: Drawingcake6, 
  },
  {
    id: 75,
    name: "Tom & Jerry Cake",
    weight: "1 Kg",
    price: "2640.00",
    image: Drawingcake7, 
  },
  {
    id: 76,
    name: "Incredible Cake",
    weight: "1 Kg",
    price: "2640.00",
    image: Drawingcake8, 
  },
],
 "Baby Shower":[
  {
    id: 77,
    name: "Gender Reveal Cake",
    weight: "1 Kg",
    price: "2690.00",
    image: BabyShowercake1, 
  },
  {
    id: 78,
    name: "Pink & Blue Theme Cake",
    weight: "1 Kg",
    price: "3540.00",
    image: BabyShowercake2, 
  },
  {
    id: 79,
    name: "Boy Reveal Cake",
    weight: "1 Kg",
    price: "1540.00",
    image: BabyShowercake3, 
  },
  {
    id: 80,
    name: "Baby Shower Cake",
    weight: "1 Kg",
    price: "2620.00",
    image: BabyShowercake4, 
  },
  {
    id: 81,
    name: "Gender Reveal Cake",
    weight: "1 Kg",
    price: "2640.00",
    image: BabyShowercake5, 
  },
  {
    id: 82,
    name: "Baby Shower Cake",
    weight: "1 Kg",
    price: "2640.00",
    image: BabyShowercake6, 
  },
  {
    id: 83,
    name: "Baby Shower Cake",
    weight: "1 Kg",
    price: "2640.00",
    image: BabyShowercake7, 
  },
  {
    id: 84,
    name: "Baby Shower Cake",
    weight: "1 Kg",
    price: "2640.00",
    image: BabyShowercake8, 
  },
],
 Pinata:[
  {
    id: 85,
    name: "Pinata Cake",
    weight: "1 Kg",
    price: "2690.00",
    image: Pinatacake1, 
  },
  {
    id: 86,
    name: "Ball Pinata Cake",
    weight: "1 Kg",
    price: "3540.00",
    image: Pinatacake2, 
  },
  {
    id: 87,
    name: "Cricket Pinata Cakes",
    weight: "1 Kg",
    price: "1540.00",
    image: Pinatacake3, 
  },
  {
    id: 88,
    name: "Chocolate Smash Pinata Cake",
    weight: "1 Kg",
    price: "2620.00",
    image: Pinatacake4, 
  },
  {
    id: 89,
    name: "Frozen Pinata Cake",
    weight: "1 Kg",
    price: "2640.00",
    image: Pinatacake5, 
  },
  {
    id: 90,
    name: "Bomb Pinata Cake",
    weight: "1 Kg",
    price: "2640.00",
    image: Pinatacake6, 
  },
  {
    id: 91,
    name: "Unicorn Pinata Cake",
    weight: "1 Kg",
    price: "2640.00",
    image: Pinatacake7, 
  },
  {
    id: 92,
    name: "Bomb Pinata Cake",
    weight: "1 Kg",
    price: "2640.00",
    image: Pinatacake8, 
  },
],
Alphabet: [
  {
    id: 93,
    name: "Pink Blush Cake",
    weight: "1 Kg",
    price: "2690.00",
    image: Alphabetcake1, 
  },
  {
    id: 94,
    name: "Macroon Infused",
    weight: "1 Kg",
    price: "3540.00",
    image: Alphabetcake2, 
  },
  {
    id: 95,
    name: "Chocolate Overload",
    weight: "1 Kg",
    price: "1540.00",
    image: Alphabetcake3, 
  },
  {
    id: 96,
    name: "M Alphabet Cake",
    weight: "1 Kg",
    price: "2620.00",
    image: Alphabetcake4, 
  },
  {
    id: 97,
    name: "Panda Theme Cake",
    weight: "1 Kg",
    price: "2640.00",
    image: Alphabetcake5, 
  },
  {
    id: 98,
    name: "T Letter Cake",
    weight: "1 Kg",
    price: "2640.00",
    image: Alphabetcake6, 
  },
  {
    id: 99,
    name: "Ferrero Rocher",
    weight: "1 Kg",
    price: "2640.00",
    image: Alphabetcake7, 
  },
  {
    id: 100,
    name: "Death by Chocolate",
    weight: "1 Kg",
    price: "2640.00",
    image: Alphabetcake8, 
  },
],
Numeric: [
  {
    id: 101,
    name: "Pink Blush Cake",
    weight: "1 Kg",
    price: "2690.00",
    image: Numericcake1, 
  },
  {
    id: 102,
    name: "Macroon Infused",
    weight: "1 Kg",
    price: "3540.00",
    image: Numericcake2, 
  },
  {
    id: 103,
    name: "Chocolate Overload",
    weight: "1 Kg",
    price: "1540.00",
    image: Numericcake3, 
  },
  {
    id: 104,
    name: "11 Numeric Cake",
    weight: "1 Kg",
    price: "2620.00",
    image: Numericcake4, 
  },
  {
    id: 105,
    name: "Game Theme Cake",
    weight: "1 Kg",
    price: "2640.00",
    image: Numericcake5, 
  },
  {
    id: 106,
    name: "7 Number Cake",
    weight: "1 Kg",
    price: "2640.00",
    image: Numericcake6, 
  },
  {
    id: 107,
    name: "Nutella Number Cake",
    weight: "1 Kg",
    price: "2640.00",
    image: Numericcake7, 
  },
  {
    id: 108,
    name: "Death by Chocolate",
    weight: "1 Kg",
    price: "2640.00",
    image: Numericcake8, 
  },
],
Photo:[
  {
    id: 109,
    name: "Photo Theme Cake",
    weight: "2 Kg",
    price: "3500.00",
    image: Photocake1, 
  },
  {
    id: 110,
    name: "Ben 10 Photo Cake",
    weight: "1 Kg",
    price: "3540.00",
    image: Photocake2, 
  },
  {
    id: 111,
    name: "Shinchan Photo Cake",
    weight: "1 Kg",
    price: "1540.00",
    image: Photocake3, 
  },
  {
    id: 112,
    name: "Captain America Photo Cake",
    weight: "1 Kg",
    price: "₹2620.00",
    image: Photocake4, 
  },
],






  
  };
export const ThemeCakes = () => {
  const [selectedCategory, setSelectedCategory] = useState("Express");
       const [search, setSearch] = useState("");
       const [showDiscounts, setShowDiscounts] = useState(false);


  return (
    <div className="px-4 py-8">
      <div className="relative">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap md:flex-nowrap items-center justify-between gap-4 w-full px-4">
            <div className="relative flex-grow max-w-lg w-full">
              <input
                type="text"
                placeholder="Search"
                className="w-full bg-white text-lg md:text-xl font-bold p-3 pl-10 rounded-xl text-gray-400 border"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>

            <button
              className="bg-[#5D4037] hover:bg-[#F8BBD0] transition-all duration-400 ease-in-out hover:text-[#5D4037] font-semibold text-lg text-white px-6 py-3 rounded-2xl w-full md:w-auto"
              onClick={() => setShowDiscounts(true)}
            >
              Discounts
            </button>
          </div>
        </div>

        {showDiscounts && (
          <div className="fixed inset-0 flex items-center  justify-center z-50 p-4">
            <div
              className="relative w-full max-w-[700px]  bg-no-repeat bg-center bg-cover rounded-xl text-center shadow-2xl transform transition-all duration-500 ease-out scale-100 p-4 sm:p-6 md:p-8"
              style={{
                backgroundImage: `url(${breadPastriesImage})`,
              }}
            >
              <div className="absolute  inset-0 bg-[#F8BBD0] opacity-60 rounded-xl"></div>
              <div className="relative z-10">
                <div className="bg-[#5D4037] text-white rounded-xl p-3 mb-4">
                  <div className="flex flex-col  sm:flex-row items-center justify-between gap-4">
                    <img src="" alt="logo" className="w-12 h-12 sm:w-16 sm:h-16" />
                    <h2 className="text-white font-bold text-lg sm:text-lg text-center">
                      GET 100 ADDITIONAL POINTS ON YOUR FIRST ONLINE ORDER.
                    </h2>
                  </div>
                  <p className="text-md sm:text-md font-semibold mt-2">
                    Now earn Points on every order and use them on your next one.
                  </p>
                  <h2 className="text-md sm:text-md font-bold mt-2">1 Point = 1 Rupee</h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
                  <div className="bg-[#5D4037] sm:p-2 text-white p-4 rounded-xl flex flex-col items-center">
                    <img src={logo1} alt="Welcome Gift" className="w-14 h-14 sm:w-16 sm:h-16 mb-2" />
                    <p className="font-bold text-lg underline">Welcome Gift</p>
                    <p className="text-sm sm:text-base text-center">Get 100 Points on your first order</p>
                  </div>

                  <div className="bg-[#5D4037] text-white  p-4 rounded-xl flex flex-col items-center">
                    <img src={logo2} alt="Vanilla" className="w-14 h-14 sm:w-16 sm:h-16 rounded-full mb-2" />
                    <p className="font-bold text-lg underline">Vanilla</p>
                    <p className="text-sm sm:text-base text-center">Get Points worth 10% of your order amount</p>
                    <p className="text-sm sm:text-base text-center">Applicable for <strong>1st to 8th order</strong></p>
                  </div>

                  <div className="bg-[#5D4037] text-white p-4 rounded-xl flex flex-col items-center">
                    <img src={logo3} alt="Saffron" className="w-14 h-14 sm:w-16 sm:h-16 mb-2" />
                    <p className="font-bold text-lg underline">Saffron</p>
                    <p className="text-sm sm:text-base text-center">Get Points worth <strong>20%</strong> of your order</p>
                    <p className="text-sm sm:text-base text-center">Applicable for <strong>9th order and onwards</strong></p>
                  </div>
                </div>

                <div className="mt-4 bg-[#5D4037] text-white p-3 rounded-xl font-semibold text-center">
                  GET 10 Points (whenever you submit a feedback)
                </div>

                <button className="mt-4 text-black font-bold underline text-lg" onClick={() => setShowDiscounts(false)}>
                  Close
                </button>
              </div>
            </div>
          </div>
        )}

<h1 className="text-3xl text-[#5D4037] text-center my-8 font-bold underline">THEME CAKES</h1>

<ThemeCakesSlider themes={themes} setSelectedCategory={setSelectedCategory} />
<h2 className="text-3xl text-[#5D4037] text-center font-bold underline mt-6">{selectedCategory} Cakes</h2>
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
  {cakeData[selectedCategory]?.length > 0 ? (
    cakeData[selectedCategory].map((cake) => <CakeCards key={cake.id} cake={cake} />)
  ) : (
    <p className="text-center col-span-3 font-semibold text-lg">No cakes available.</p>
  )}
</div>
</div>
<EnquiryForm />

</div>
  );
};