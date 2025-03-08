import logo from "/src/assets/images/Bakereies_Logo-removebg-preview.png";
import fbIcon from "/src/assets/images/images (3).png";
import twitterIcon from "/src/assets/images/2496110.png";
import whatsapp from "/src/assets/images/2496112.png";
import youtubeIcon from "/src/assets/images/youtube.webp";
import InstagramIcon from "../../assets/images/instagram_icon.png.webp";


export const Footer = () => {
  return (
    <footer className="bg-[#5D4037] font-[Roboto] text-white p-6 mt-6">
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center md:text-left">
        
        <div className="flex justify-center md:justify-start">
          <img 
            src={logo} 
            alt="Sweet Dessert House Cake" 
            className="w-40 md:w-full max-w-[250px]" 
          />
        </div>

        <div>
          <h3 className="font-bold mb-4 underline">QUICK LINKS</h3>
          <ul className="text-base md:text-lg space-y-1">
            {["Home", "Order Now", "Testimonials", "Feedback", "Our Tale", "Privacy Policy", "Refund Policy", "Shipping Policy", "Terms & Conditions"].map((link, index) => (
              <li key={index} className="hover:underline cursor-pointer">{link}</li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-bold mb-4 underline">OUR VENUE</h3>
          <p className="text-sm md:text-lg">New No: 22, Old No: 40, 3rd <br /> Street, East ABC, XYZ, <br /> Chennai</p>
          <p className="mt-2">📞 9123456789</p>
          <p className="mt-1">✉️ sweetcakebakers@gmail.com</p>
        </div>

        <div>
          <h3 className="font-bold underline">WE ARE SOCIAL</h3>
          <div className="flex justify-center md:justify-start space-x-4 mt-2">
            {[whatsapp,InstagramIcon, fbIcon, youtubeIcon, twitterIcon].map((icon, index) => (
              <img 
                key={index} 
                src={icon} 
                alt="Social Icon" 
                className="w-6 md:w-8 h-6 md:h-8 cursor-pointer transition-transform hover:scale-110"
              />
            ))}
          </div>
        </div>

      </div>

      <p className="text-center text-sm md:text-lg mt-6">
        &copy; 2024 MN Organic India Pvt. Ltd.
      </p>
    </footer>
  );
};
