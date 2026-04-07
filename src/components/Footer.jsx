import React from "react";

// Footer section with a simple layout that works on both mobile and desktop.

const Footer = () => {
  return (
    <footer className="bg-black text-white py-20 px-6 md:px-20 border-t border-white/10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-end gap-10">
        <h2 className="text-4xl md:text-6xl font-bold">
          The Best <span className="">Insurance</span> <br />
          Companies for 2021
        </h2>

        <p className="text-lg md:text-xl font-light">
          you're in <span>{"     "}</span>
          <span className="text-orange-400 font-semibold">good hands</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
