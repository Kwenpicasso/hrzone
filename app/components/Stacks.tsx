import Marquee from "@/components/ui/marquee";
import Ship from "../images/ship.svg";
import Ship1 from "../images/reddit.png";

import Ship4 from "../images/sentry.svg";
import Ship6 from "../images/forever.png";
import Ship7 from "../images/klarna.png";
import Ship8 from "../images/nike.png";
import Ship9 from "../images/nu.png";
import Image from "next/image";

// Define images array
const images = [
  Ship,
  Ship1,
  Ship4,
  Ship6,
  Ship7,
  Ship8,
  Ship9,
  // Add more images as needed...
];

const ImageCard = ({ img }: { img: string }) => {
  return (
    <div className="flex items-center justify-center p-4">
      <Image className="rounded-full" width="64" height="64" alt="Logo" src={img} />
    </div>
  );
};

export function Stacks() {
  return (
    <div className="relative flex mt-4 w-full flex-col items-center justify-center overflow-hidden ">
      <Marquee pauseOnHover className="[--duration:20s]">
        {images.map((img, index) => (
          <ImageCard key={index} img={img} />
        ))}
      </Marquee>
      
    </div>
  );
}
