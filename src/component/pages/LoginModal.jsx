import { useState } from "react";
import emailIcon from "/src/assets/images/email.png"; // Ensure correct path

const LoginModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex items-center justify-center min-h-screen bg-pink-200">
      <button
        onClick={() => setIsOpen(true)}
        className="bg-[#F8BBD0] text-white px-6 py-3 rounded-lg shadow-md hover:bg-pink-600 transition"
      >
        LOGIN/SIGN UP
      </button>

      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-[#5D4037] text-white p-6 rounded-xl w-[90%] max-w-md relative">
            
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-3 right-4 text-2xl font-bold hover:text-[#F8BBD0]"
            >
              &times;
            </button>

            <h2 className="text-center text-lg font-bold text-[#F8BBD0] mb-4">
              WELCOME TO SWEET DESSERT HOUSE CAKE
            </h2>

            <div className="space-y-4">
              <input
                type="text"
                placeholder="Name"
                className="w-full p-3 rounded-lg bg-white text-gray-700 outline-none"
              />
              
              <div className="flex items-center bg-white p-3 rounded-lg text-gray-700">
                <img src={emailIcon} alt="Email" className="w-5 h-5 mr-2" />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full outline-none bg-transparent"
                />
              </div>

              <input
                type="tel"
                placeholder="Mobile"
                className="w-full p-3 rounded-lg bg-white text-gray-700 outline-none"
              />

              <input
                type="password"
                placeholder="Password"
                className="w-full p-3 rounded-lg bg-white text-gray-700 outline-none"
              />
            </div>

            <button className="w-full mt-5 bg-[#F8BBD0] text-white py-3 rounded-lg hover:bg-[#F48FB1] transition">
              LOGIN/SIGN UP
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default LoginModal;
