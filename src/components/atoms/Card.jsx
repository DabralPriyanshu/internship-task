//This component will be re-used .It takes an icon as a prop and shows a title with a description.
const Card = ({ icon }) => {
  return (
    <div className="flex-1 text-center">
      <div className="w-16 h-16 border border-gray-500 rounded-full flex items-center justify-center mx-auto mb-4 hover:border-orange-500 transition">
        {icon}
      </div>
      <h3 className="font-bold mb-2">For you and your family</h3>
      <p className="text-gray-400 text-sm mb-4">
        We protect vehicles, property, pets and events.
      </p>
      <button className="border border-white px-4 py-2 rounded-full text-xs hover:bg-white hover:text-black">
        READ MORE
      </button>
    </div>
  );
};

export default Card;
