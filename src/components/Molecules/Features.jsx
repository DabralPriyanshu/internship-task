import { Users, Briefcase, Sun } from "lucide-react";
import Card from "../atoms/Card";
//we have reused Card component here and used icons from lucide-react

const Features = () => {
  return (
    <section className="bg-black text-white py-12 px-5" id="service">
      <div className="max-w-5xl mx-auto text-center">
        {/* heading */}
        <h2 className="text-2xl font-bold mb-2">
          Insurance and investing for your many sides
        </h2>
        <p className="text-gray-400 mb-10">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus,
          tenetur?
        </p>

        <div className="flex flex-col md:flex-row gap-10">
          {/* Card 1 */}
          <Card icon={<Users size={20} className="text-orange-500" />} />

          {/* Card 2 */}
          <Card icon={<Briefcase size={20} className="text-orange-500" />} />

          {/* Card 3 */}
          <Card icon={<Sun size={20} className="text-orange-500" />} />
        </div>
      </div>
    </section>
  );
};

export default Features;
