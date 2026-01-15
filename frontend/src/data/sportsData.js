export const sportsPage = {
  title: "CHOOSE YOUR BATTLEFIELD",
  subtitle: "Explore the sports and register for your event.",
};

import {
  faBasketball,
  faFutbol,
  faPersonRunning,

} from "@fortawesome/free-solid-svg-icons";

import cricketPng from "../assets/cricket.png";
import badmintonPng from "../assets/badminton.png";

export const sportsCards = [
  {
    key: "basketball",
    title: "BASKETBALL 5V5",
    meta: "Open Category | Max 10 Teams",
    cta: "VIEW RULES & REGISTER",
    icon: faBasketball,
  },
  {
    key: "cricket",
    title: "CRICKET 5V5",
    meta: "Open Category | Max 10 Teams",
    cta: "VIEW RULES & REGISTER",
    iconSrc: cricketPng,
    iconAlt: "Cricket",
  },
  {
    key: "football",
    title: "FOOTBALL 5V5",
    meta: "Open Category | Max 10 Teams",
    cta: "VIEW RULES & REGISTER",
    icon: faFutbol,
  },
  {
    key: "badminton",
    title: "BADMINTON",
    meta: "Open Category | Max 10 Teams",
    cta: "VIEW RULES & REGISTER",
    iconSrc: badmintonPng,
    iconAlt: "Badminton",
  },
  {
    key: "athletics",
    title: "ATHLETICS",
    meta: "Open Category | Max 10 Teams",
    cta: "VIEW RULES & REGISTER",
    icon: faPersonRunning,
  },
  {
    key: "athletics-5v5",
    title: "ATHLETICS 5V5",
    meta: "Open Category | Max 10 Teams",
    cta: "VIEW RULES & REGISTER",
    icon: faPersonRunning,
  },
];
