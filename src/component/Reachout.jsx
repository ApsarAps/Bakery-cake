import React from "react";
import Bakery from "/src/assets/images/49.jpeg"; 

export const Reachout = () => {
  return (
    <div>
      <div className="relative w-full">
        <img src={Bakery} alt="Bakery" className="w-full h-[80vh] object-cover" />
      </div>

      <div className="p-6 md:p-12 lg:p-16">
        <h2 className="text-center text-[#5D4037] underline text-3xl font-bold mb-6">
          TOUCH BASE WITH US
        </h2>

        <div className="mt-8 flex flex-col md:flex-row gap-10">
          <div className="md:w-1/2 text-[#5D4037] space-y-8">
            <div>
              <h3 className="underline text-3xl font-bold">OUR VENUE:</h3>
              <p className="text-2xl font-medium mt-3 leading-relaxed">
                New No: 22, Old No: 40, 3rd <br /> Street, East ABC, XYZ, <br /> Chennai-6000XX
              </p>
            </div>

            <div>
              <h3 className="underline text-3xl font-bold">REACH US:</h3>
              <p className="text-2xl font-medium mt-3">+91 9123456789</p>
            </div>

            <div>
              <h3 className="underline text-3xl font-bold">WRITE TO US:</h3>
              <p className="text-2xl font-medium mt-3">sweetcakebakers@gmail.com</p>
            </div>
          </div>

          <div className="md:w-1/2 bg-pink-200 p-6 lg:p-10 rounded-xl shadow-lg">
            <h3 className="text-center text-[#5D4037] underline text-3xl font-bold mb-4">
              CONTACT US
            </h3>

            <form className="flex flex-col space-y-6">
              <input
                type="text"
                placeholder="Name"
                className="p-4 text-2xl font-bold bg-white border border-gray-300 rounded-xl w-full"
              />
              <input
                type="text"
                placeholder="Contact"
                className="p-4 text-2xl font-bold bg-white border border-gray-300 rounded-xl w-full"
              />
              <input
                type="email"
                placeholder="Mail ID"
                className="p-4 text-2xl font-bold bg-white border border-gray-300 rounded-xl w-full"
              />
              <textarea
                placeholder="Type Your Enquiry"
                className="p-4 text-2xl font-bold bg-white border border-gray-300 rounded-xl h-40 w-full"
              ></textarea>

              <div className="text-center">
                <button className="bg-[#5D4037] font-bold text-2xl text-white px-10 py-3 rounded-2xl cursor-pointer transition-all duration-300 ease-in-out hover:bg-[#F8BBD0] hover:text-[#5D4037]">
                  SEND IN
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
