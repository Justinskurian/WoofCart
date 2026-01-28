import React from "react";
import Care from "../../assets/Care.webp";
import Feeding from "../../assets/Feeding.webp";
import Game from "../../assets/Game.webp";
import Walk from "../../assets/Walk.webp";
import { Link } from "react-router-dom";

const Collections = () => {
  const collections = [
    { img: Care, alt: "Care", query: "care", link:"/health&supplements" },
    { img: Feeding, alt: "Feeding", query: "feeding",link:"/food&treats" },
    { img: Game, alt: "Game", query: "game",link:"/toys&fun" },
    { img: Walk, alt: "Walk", query: "walk",link:"/grooming&care" },
  ];

  return (
    <section className="py-10 mt-10 px-4 lg:px-0">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-15">
        {collections.map((item, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-2xl group shadow-md hover:shadow-xl transition-shadow duration-300"
          >
            <Link to={item.link}>
              <img
                src={item.img}
                alt={item.alt}
                className="w-full h-full object-cover transform group-hover:scale-105 group-hover:-translate-y-1 transition-transform duration-500"
              />
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Collections;
