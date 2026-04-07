import React from "react";
import firstImage from "../../asset/first.jpg";
import secondImage from "../../asset/second.jpg";
import thirdImage from "../../asset/third.jpg";
import ImageCard from "../atoms/ImageCard";

// I have re-used ImageCard component here
// This component shows 3 images in a grid using a reusable ImageCard

const ImageContainer = () => {
  return (
    <section className="bg-black py-10 px-6 md:px-20" id="cars">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Image 1 */}

        <ImageCard image={firstImage} />
        {/* Image 2 */}
        <ImageCard image={secondImage} />

        {/* Image 3 */}
        <ImageCard image={thirdImage} />
      </div>
    </section>
  );
};

export default ImageContainer;
