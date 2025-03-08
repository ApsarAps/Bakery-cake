import React from "react";

export const EnquiryForm = () => {
  return (
    <div className="bg-[#F3C6C6] p-8 rounded-2xl text-[#5D4037] shadow-inner max-w-4xl mx-auto mt-8 border-3 border-[#5D4037]">
      <h2 className="text-center text-3xl font-bold">ENQUIRY FORM</h2>
      <p className="text-center text-2xl font-semibold mt-4">
        Let Us Know About Your Taste!! <br /> We Will Customize It Without Any
        Compromise!!
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        <div>
          <label htmlFor="name" className="block text-lg font-semibold mb-2">Name</label>
          <input
            id="name"
            type="text"
            placeholder="Enter your name"
            className="p-4 bg-white text-xl font-semibold border rounded-2xl w-full"
            required
          />
        </div>
        <div>
          <label htmlFor="eggPreference" className="block text-lg font-semibold mb-2">Egg/Eggless</label>
          <select
            id="eggPreference"
            className="p-4 bg-white text-xl font-semibold border rounded-2xl w-full"
            required
          >
            <option value="" disabled selected>Choose an option</option>
            <option value="Egg">Egg</option>
            <option value="Eggless">Eggless</option>
          </select>
        </div>
        <div>
          <label htmlFor="contact" className="block text-lg font-semibold mb-2">Contact</label>
          <input
            id="contact"
            type="tel"
            placeholder="Enter your contact number"
            className="p-4 bg-white text-xl font-semibold border rounded-2xl w-full"
            required
          />
        </div>
        <div>
          <label htmlFor="flourType" className="block text-lg font-semibold mb-2">Which Flour To Be Used?</label>
          <select
            id="flourType"
            className="p-4 bg-white text-xl font-semibold border rounded-2xl w-full"
            required
          >
            <option value="" disabled selected>Choose Flour Type</option>
            <option value="All-purpose Flour">All-purpose Flour</option>
            <option value="Whole Wheat Flour">Whole Wheat Flour</option>
            <option value="Gluten-Free Flour">Gluten-Free Flour</option>
          </select>
        </div>
        <div>
          <label htmlFor="email" className="block text-lg font-semibold mb-2">Mail ID</label>
          <input
            id="email"
            type="email"
            placeholder="Enter your email"
            className="p-4 bg-white text-xl font-semibold border rounded-2xl w-full"
            required
          />
        </div>
        <div>
          <label htmlFor="customization" className="block text-lg font-semibold mb-2">Customization</label>
          <textarea
            id="customization"
            placeholder="Type Your Customization"
            className="p-4 bg-white text-xl font-semibold border rounded-2xl w-full h-[120px] resize-none"
            required
          ></textarea>
        </div>
        <div className="md:col-span-2">
          <label htmlFor="occasion" className="block text-lg font-semibold mb-2">Occasion</label>
          <input
            id="occasion"
            type="text"
            placeholder="Enter the occasion"
            className="p-4 bg-white text-xl font-semibold border rounded-2xl w-full"
            required
          />
        </div>
      </div>
      <button className="block bg-[#5D4037] transition-all duration-300 ease-in-out cursor-pointer hover:bg-[#F8BBD0] hover:text-[#5D4037] text-white px-6 py-3 text-2xl rounded-2xl mt-6 mx-auto font-bold">
        CONVEY US
      </button>
    </div>
  );
};
