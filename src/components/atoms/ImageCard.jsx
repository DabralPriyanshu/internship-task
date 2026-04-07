import React from "react";

// this component can be re-used it will take prop of image which contain the source of image
// component for  showing images with a simple hover effect

const ImageCard = ({ image }) => {
  return (
    <div className="h-64 overflow-hidden group">
      <img
        src={image}
        alt="Moving Car"
        className="w-full h-full hover:scale-125"
      />
    </div>
  );
};

export default ImageCard;
