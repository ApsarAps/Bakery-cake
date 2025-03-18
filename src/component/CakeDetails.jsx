import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

const CakeDetails = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  const cake = state?.cake;

  const [quantity, setQuantity] = useState(1);
  const [flavour, setFlavour] = useState("Vanilla");
  const [type, setType] = useState("Egg");
  const [weight, setWeight] = useState("2.0kg");
  const [search, setSearch] = useState("");

  if (!cake) {
    return <p className="text-center text-red-500 py-10">Cake not found. Please go back and select a cake.</p>;
  }

  const handleCheckout = () => {
navigate("/checkout-cake", {
    state: {
      name: cake.name,
      price: cake.price,
      quantity,
      flavour,
      type,
      weight,
      image: cake.image,
    },
  });
  
  };

  return (
    <div className="min-h-screen bg-[#f8c9d4] py-6 px-4 md:px-10 lg:px-16 font-[Roboto]">
      <div className="relative max-w-lg mx-auto mb-6">
        <input
          type="text"
          placeholder="Search"
          className="w-full bg-white text-lg md:text-xl font-bold p-3 pl-12 rounded-xl text-gray-600 border shadow-md focus:outline-none"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
      </div>

      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-10">
        <div className="w-full max-w-[400px] mx-auto lg:mx-0">
          <img
            src={cake.image}
            alt={cake.name}
            className="w-full h-auto object-cover rounded-xl shadow-lg"
          />
        </div>

        <div className="w-full space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-[#5b0a0a]">{cake.name}</h2>

          <div className="space-y-2">
            <h3 className="font-bold text-xl mb-2">Type:</h3>
           
            <div className="flex gap-4 flex-wrap justify-center lg:justify-start">
              {["Egg", "Eggless"].map((item) => (
                <button
                  key={item}
                  onClick={() => setType(item)}
                  className={`relative cursor-pointer px-10 py-6 bg-[#5D4037] hover:bg-[#F8BBD0] rounded-xl overflow-hidden group transition-all duration-300 ${
                    type === item ? "" : ""
                  }`}
                >
                  <span className="absolute inset-0 flex items-center justify-center text-[#F8BBD0] text-lg font-bold transition-all duration-500 ease-in-out group-hover:translate-x-full group-hover:scale-110">
                    {item}
                  </span>
                  <span className="absolute inset-0 flex items-center justify-center text-[#5D4037] text-lg font-bold transition-all duration-500 ease-in-out translate-x-[-100%] group-hover:translate-x-0 group-hover:scale-110">
                    {item}
                  </span>
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-2">
  <h3 className="font-bold text-lg sm:text-xl mb-2">Weight:</h3>
  <div className="grid grid-cols-2 sm:flex gap-2 sm:gap-4">
    {["1.0kg", "2.0kg", "3.0kg", "4.0kg", "5.0kg"].map((item) => (
      <button
        key={item}
        onClick={() => setWeight(item)}
        className={`px-6 py-3 rounded-lg text-base sm:text-lg font-bold w-full sm:w-auto text-center ${
          weight === item
            ? "bg-[#F8BBD0] text-[#5D4037]"
            : "bg-[#5D4037] text-[#F8BBD0]"
        }`}
      >
        {item}
      </button>
    ))}
  </div>
</div>


          <div className="space-y-2">
            <h3 className="font-bold text-xl mb-2">Flavour:</h3>
            <div className="flex flex-wrap gap-2">
              {["Vanilla", "Chocolate", "Butterscotch", "Black Forest", "White Forest", "Red Velvet", "Nutella Choco", "Caramel", "Strawberry", "Blueberry", "Mango", "Black Current"].map((item) => (
               <button
               key={item}
               onClick={() => setFlavour(item)}
               className={`px-4 py-2 rounded-lg text-lg font-bold ${
                 flavour === item
                   ? "bg-[#F8BBD0] text-[#5D4037]"
                   : "bg-[#5D4037] text-[#F8BBD0]"
               }`}
             >
               {item}
             </button>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-center lg:justify-start gap-4">
            <label className="font-bold text-xl">Quantity:</label>
            <div className="flex items-center gap-4 px-4 py-2 border-2 border-[#5D4037] rounded-lg">
              <button
                className="px-3 py-1 font-bold border-2 border-[#5D4037] rounded-full text-[#5D4037]"
                onClick={() => setQuantity((prev) => Math.max(prev - 1, 1))}
              >
                -
              </button>
              <span className="text-lg font-bold">{quantity}</span>
              <button
                className="px-3 py-1 font-bold border-2 border-[#5D4037] rounded-full text-[#5D4037]"
                onClick={() => setQuantity((prev) => prev + 1)}
              >
                +
              </button>
            </div>
          </div>


          <div className="space-y-4">
            <p className="text-center lg:text-left text-2xl font-bold text-[#5D4037]">Price: ₹{cake.price.toLocaleString()} ({weight})</p>
            <button
              onClick={handleCheckout}
              className="bg-indigo-500 hover:bg-[#caa299] text-[#F8BBD0] font-bold text-xl px-8 py-3 rounded-lg transition-all duration-300"
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CakeDetails;
