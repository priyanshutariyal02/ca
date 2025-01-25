import React, { useState, useRef, useEffect, JSX } from "react";
import { motion } from "framer-motion";
import { cn } from "../../../lib/utils";

import Image, { StaticImageData } from "next/image";

type Card = {
  id: number;
  className: string;
  thumbnail: StaticImageData;
  onClick?: () => void; // Optional click handler for the card
};

export const LayoutGrid = ({ cards }: { cards: Card[] }) => {
  const [selected, setSelected] = useState<Card | null>(null);

  const handleClick = (card: Card) => {
    setSelected({ ...card }); // Avoid unnecessary re-renders
    card.onClick?.(); // Call the card's optional click handler
  };

  const handleOutsideClick = () => {
    setSelected(null);
  };

  return (
    <div className="w-full h-full p-10 grid grid-cols-1 md:grid-cols-3 max-w-7xl mx-auto gap-4 relative">
      {cards.map((card, i) => (
        
        <div key={i} className={cn(card.className, "")}>
          <motion.div
            onClick={() => handleClick(card)}
            className={cn(
              card.className,
              "relative overflow-hidden",
              selected?.id === card.id
                ? "rounded-lg cursor-pointer absolute inset-0 h-1/2 w-full md:w-1/2 m-auto z-50 flex justify-center items-center flex-wrap flex-col shadow-lg"
                : "bg-white rounded-md h-full w-full"
            )}
            layoutId={`card-${card.id}`}
          >
            <ImageComponent card={card} />
          </motion.div>
        </div>
      ))}
      <motion.div
        onClick={handleOutsideClick}
        className={cn(
          "absolute h-full w-full left-0 top-0 z-10",
          selected?.id ? "pointer-events-auto" : "pointer-events-none"
        )}
        animate={{ opacity: selected?.id ? 0.3 : 0 }}
      />
    </div>
  );
};

const ImageComponent = ({ card }: { card: Card }) => {
  return (
    <motion.div
      layoutId={`image-${card.id}-image`}
      className={cn(
        "object-cover object-top absolute inset-0 h-full w-full transition duration-200 "
      )}
    >
      <Image src={card.thumbnail} height={500} width={500} alt="thumbnail" className="w-full h-full object-cover shadow-lg rounded-xl"/>
    </motion.div>
  );
};
