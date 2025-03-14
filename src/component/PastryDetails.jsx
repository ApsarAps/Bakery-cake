import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

const PastryDetails = () => {
  const { state } = useLocation();
  const pastry = state?.pastry;
  const [quantity, setQuantity] = useState(1);
  const [piece, setPiece] = useState("1 Pc");
  const [type, setType] = useState("Egg");
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  if (!pastry) return <p className="text-center text-lg py-10">Pastry not found.</p>;

  const handleCheckout = () => {
    navigate("/checkout", {
      state: {
        pastry,
        quantity,
        piece,
        type,
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
            src={pastry.image}
            alt={pastry.name}
            className="w-full h-auto object-cover rounded-xl shadow-lg"
          />
        </div>

        <div className="w-full space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-[#5D4037] text-center lg:text-left">
            {pastry.name}
          </h2>

          <div>
            <p className="font-bold text-xl mb-2">Type:</p>
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

          <div>
            <p className="font-bold text-xl mb-2">Piece:</p>
            <div className="flex gap-2 flex-wrap justify-center lg:justify-start">
              {["1 Pc", "2 Pc", "3 Pc", "4 Pc", "5 Pc"].map((item) => (
                <button
                  key={item}
                  onClick={() => setPiece(item)}
                  className={`px-4 py-2 rounded-lg text-lg font-bold ${
                    piece === item
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

          <p className="text-center lg:text-left text-2xl font-bold text-[#5D4037]">
            Price: ₹{pastry.price * quantity}.00 <span className="text-lg">({piece})</span>
          </p>

          <div className="flex justify-center lg:justify-start">
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

export default PastryDetails;
