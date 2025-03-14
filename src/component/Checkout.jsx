import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Payment from "/src/assets/images/secure-payment-landing-page_23-2148534821.avif";
import logo from "/src/assets/images/Bakereies_Logo-removebg-preview.png";


const Checkout = () => {
  const { state } = useLocation();
  const { pastry, quantity, piece, type } = state || {};
  const totalPrice = pastry ? pastry.price * quantity : 0;
  const navigate = useNavigate();
  const [orderPlaced, setOrderPlaced] = useState(false);

  if (!pastry) return <p className="text-center text-lg py-10">Pastry not found.</p>;

  const handlePlaceOrder = () => {
    setOrderPlaced(true);
    setTimeout(() => {
      navigate("/");
    }, 5000); 
  };

  const handleCancel = () => {
    navigate("/pastries"); 
  };

  return (
    <div className="min-h-screen py-6 px-4 md:px-10 lg:px-16 bg-[#f8c9d4] font-[Roboto] relative">
      {orderPlaced && (
        <div className="absolute inset-0  bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-[#5D4037] text-[#F8BBD0] rounded-2xl p-6 md:p-10 text-center w-[90%] max-w-md shadow-2xl">
            <img
              src={logo}
              alt="Sweet Dessert House Cake"
              className="w-28 mx-auto mb-4"
            />
            <h2 className="text-2xl font-bold mb-2">Bravo!!</h2>
            <p className="text-lg mb-2">Your Order Placed Successfully</p>
            <p className="text-md">Thank You for Choosing Us!!</p>
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="space-y-6">
          <div className="bg-[#F3C6C6] p-4 rounded-xl shadow-lg">
            <h2 className="text-2xl md:text-xl font-bold mb-3 border-b-2 border-black pb-2">
              Dispatch Details:
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 items-center">
              <img
                src={pastry.image}
                alt={pastry.name}
                className="w-50 h-50 object-cover rounded-lg"
              />
              <div className="space-y-1 text-center sm:text-left">
                <p className="font-bold text-xl">{pastry.name}</p>
                <p className="text-lg">Type: {type}</p>
                <p className="text-lg">Piece (Pcs): {piece}</p>
                <p className="text-lg">Qty: {quantity}</p>
                <p className="font-bold text-xl">Price: ₹{totalPrice}.00</p>
              </div>
            </div>
          </div>

          <div className="bg-[#F3C6C6] p-4 rounded-xl shadow-lg">
            <h2 className="text-2xl md:text-xl font-bold mb-3 border-b-2 border-black pb-2">
              Payment Options:
            </h2>
            <div className="space-y-3">
              {[
                "Pay by any UPI App",
                "Wallet",
                "Debit/Credit Cards",
                "Net Banking",
                "Cash on Delivery",
              ].map((option, index) => (
                <div key={index} className="flex items-center gap-3">
                  <input
                    type="radio"
                    name="payment"
                    className="w-5 h-5 accent-[#5D4037]"
                  />
                  <label className="text-base md:text-lg">{option}</label>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-[#F3C6C6]  p-6 rounded-xl shadow-lg flex flex-col justify-between h-full">
            <div>
              <h2 className="text-2xl md:text-xl font-bold mb-4 border-b-2 border-black pb-2">
                Summary:
              </h2>
              <div className="space-y-3 text-base md:text-lg">
                <div className="flex justify-between">
                  <span>SubTotal Price Details</span>
                  <span>₹{totalPrice}.00</span>
                </div>
                <div className="flex justify-between">
                  <span>Delivery Fee (Free Home Delivery)</span>
                  <span>₹0.00</span>
                </div>
                <hr className="border-black my-2" />
                <div className="flex justify-between font-bold">
                  <span>Order Total</span>
                  <span>₹{totalPrice}.00</span>
                </div>
              </div>

              <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={handlePlaceOrder}
                  className="bg-[#5D4037] text-[#F8BBD0] hover:bg-[#7a5249] px-8 py-3 rounded-lg font-bold w-full sm:w-auto"
                >
                  Place Order
                </button>
                <button
                  onClick={handleCancel}
                  className="bg-[#5D4037] text-[#F8BBD0] hover:bg-[#7a5249] px-8 py-3 rounded-lg font-bold w-full sm:w-auto"
                >
                  Cancel
                </button>
              </div>
            </div>

            <div className=" mt-6">
              <img
                src={Payment}
                alt="Secure Payment"
                className="rounded-xl w-100 max-w-full m-auto h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;