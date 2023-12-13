// Sidebar imports
import {
  UilEstate,
  UilClipboardAlt,
  UilPackage,
  UilChart,
} from "@iconscout/react-unicons";

// Analytics Cards imports
import { UilUsdSquare, UilMoneyWithdrawal } from "@iconscout/react-unicons";
import { keyboard } from "@testing-library/user-event/dist/keyboard";

// Recent Card Imports
import img1 from "../imgs/img1.png";
import img3 from "../imgs/img3.png";

import image1 from "../imgs/image1.png";
import image2 from "../imgs/image2.jpg";
import image3 from "../imgs/image3.png";


// Sidebar Data
export const SidebarData = [
  {
    icon: UilEstate,
    heading: "Dashboard",
  },
  {
    icon: UilClipboardAlt,
    heading: "Subscription",
  },
 
];

// Analytics Cards Data
export const cardsData = [
  {
    title: "Placement & Intern",
    color: {
      backGround: "linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)",
      boxShadow: "0px 10px 20px 0px #e0c6f5",
    },
    barValue: 70,
    value: "25,000",
    png: UilUsdSquare,
    series: [
      {
        name: "Placed",
        data: [310, 400, 280, 510, 420, 1090, 100],
      },
    ],
  },
  {
    title: "Prediction Model",
    color: {
      backGround: "linear-gradient(180deg, #FF919D 0%, #FC929D 100%)",
      boxShadow: "0px 10px 20px 0px #FDC0C7",
    },
    barValue: 80,
    png: UilMoneyWithdrawal,
    series: [
      {
        name: "Placed",
        data: [310, 400, 280, 510, 420, 1090, 100],
      },
    ],
    
  },
  {
    title: "Alumni Network",
    color: {
      backGround:
        "linear-gradient(rgb(248, 212, 154) -146.42%, rgb(255 202 113) -46.42%)",
      boxShadow: "0px 10px 20px 0px #F9D59B",
    },
    barValue: 60,
    png: UilClipboardAlt,
    series: [
      {
        name: "Helped Students",
        data: [280, 300,150, 210, 720, 790, 900],
      },
    ],
  },
];

// Recent Update Card Data
export const UpdatesData = [
  {
    img: img1,
    name: "Roneet Yadav",
    noti: "The campus placement resources and prediction program exceeded my expectations.",
    company: "-Apple",
  },
  
  {
    img: img3,
    name: "Girija Sawant",
    noti: "The comprehensive preparation and industry connections provided me securing my dream job.",
    company: "-Microsoft",
  },
];
export const UpdatesData2 = [
  {
    img: image1,
    college: "IIT Bombay (- Morgan Stanley)",
    desc: "Software Development Engineer (SDE)",
    
  },
  { 
    img: image2,
    college: "IIM Bangalore (- Mercedes Benz)",
    desc: " Research Analyst",
   
  },
  { 
    img: image3,
    college: "LTCE (- AWS)",
    desc: "Operational Head",
    
  },
];
