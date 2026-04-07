import React from "react";

// This will be reused in InfoSection component
const InfoCard = ({ className, children }) => {
  return <div className={className}>{children}</div>;
};

export default InfoCard;
