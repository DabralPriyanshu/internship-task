import React from "react";
import InfoCard from "../atoms/InfoCard";

const InfoSection = () => {
  return (
    //divided both  div equal width
    <section className="bg-black text-white py-12 px-5 md:px-16" id="about">
      <div className="flex flex-col md:flex-row gap-10">
        {/* Left Side: 50% width  */}
        <InfoCard className="md:w-1/2">
          <h2 className="text-3xl font-bold mb-5">
            Finding the best car insurance company for you
          </h2>
          <p className="text-gray-400 mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequuntur odit expedita inventore reiciendis sapiente.
          </p>
          <p className="text-gray-400 mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint sequi
            provident sed facere dolore similique.
          </p>
          <p className="text-gray-400 mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint sequi
            provident sed facere dolore similique.
          </p>
          <p className="text-gray-400 mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint sequi
            provident sed facere dolore similique.
          </p>
          <p className="text-gray-400 mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint sequi
            provident sed facere dolore similique.
          </p>
          <p className="text-gray-400 mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint sequi
            provident sed facere dolore similique.
          </p>
          <p className="text-gray-400 mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint sequi
            provident sed facere dolore similique.
          </p>
          <p className="text-gray-400 mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint sequi
            provident sed facere dolore similique.
          </p>
        </InfoCard>

        {/* right side with 50% width  */}
        <InfoCard className="md:w-1/2 bg-orange-500 p-8 text-black">
          <h3 className="text-xl font-bold mb-5">To find the top companies:</h3>
          <div className="text-sm space-y-4">
            <p>
              1. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Accusamus repudiandae nisi error similique beatae a!
            </p>
            <p>
              2. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Accusamus repudiandae nisi error similique beatae a!
            </p>
            <p>
              3. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Accusamus repudiandae nisi error similique beatae a!
            </p>
            <p>
              4. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Accusamus repudiandae nisi error similique beatae a!
            </p>
            <p>
              5. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Accusamus repudiandae nisi error similique beatae a!
            </p>
            <p>
              6. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Accusamus repudiandae nisi error similique beatae a!
            </p>
            <p>
              7. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Accusamus repudiandae nisi error similique beatae a!
            </p>
            <p>
              8. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Accusamus repudiandae nisi error similique beatae a!
            </p>
          </div>
        </InfoCard>
      </div>
    </section>
  );
};

export default InfoSection;
