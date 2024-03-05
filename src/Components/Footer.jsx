import React from "react";
import { IoSend } from "react-icons/io5";
import {
  FaTwitter,
  FaInstagram,
  FaFacebook,
  FaLinkedin,
  FaRegCopyright,
} from "react-icons/fa";
const Footer = () => {
  return (
    <section
      id="footer"
      className="w-100 bg-black text-white  "
    >
      <footer className="flex flex-wrap justify-center gap-10 items-top md:p-10 py-4 ">
        <div className="flex flex-col gap-3 font-small w-[200px] text-sm">
          <h2 className="font-bold text-lg xl:text-2xl tracking-widest">ezMart</h2>
          <h3>Subscribe</h3>
          <p>Get 10% off on your first order</p>
          <div className="border-2 rounded-md p-1">
            <form className="flex gap-2 items-center px-1">
              <input
                className="bg-black  outline-none"
                placeholder="Enter your mail"
                name="email"
                type="email"
              />
              <div className="cursor-pointer">
                <IoSend />
              </div>
            </form>
          </div>
        </div>
        <div className="flex flex-col gap-3 font-small w-[200px] text-sm">
          <h2 className="font-bold text-lg xl:text-xl">Support</h2>
          <h3>111 Indore, M.P., India.</h3>
          <p>ecommerce@gmail.com</p>
          <p>+91-11111-11111</p>
        </div>
        <div className="flex flex-col gap-3 font-small w-[200px] text-sm">
          <h2 className="font-bold text-lg xl:text-xl">Account</h2>
          <h3 className="cursor-pointer">My Account</h3>
          <p className="cursor-pointer">Login / Register</p>
          <p className="cursor-pointer">Cart</p>
          <p className="cursor-pointer">Wishlist</p>
          <p className="cursor-pointer">Shop</p>
        </div>
        <div className="flex flex-col gap-3 font-small w-[200px] text-sm">
          <h2 className="font-bold text-lg xl:text-xl">Quick Link</h2>
          <h3 className="cursor-pointer">Privacy Policy</h3>
          <p className="cursor-pointer">Terms Of Use</p>
          <p className="cursor-pointer">FAQ</p>
          <p className="cursor-pointer">Contact</p>
        </div>

        <div className="flex flex-col gap-3 font-small w-[200px] text-sm">
          <h2 className="font-bold text-lg xl:text-xl">Download App</h2>
          <h3 className="text-[#FAFAFA] opacity-70">
            Save $3 with App New User Only
          </h3>
          <div className="flex gap-2 opacity-75">
            <FaFacebook size={20} className="cursor-pointer" />
            <FaTwitter size={20} className="cursor-pointer" />
            <FaInstagram size={20} className="cursor-pointer" />
            <FaLinkedin size={20} className="cursor-pointer" />
          </div>
        </div>
      </footer>
      <div className="flex items-center justify-center py-2 opacity-50">
        <p> &copy; | Developed by <span className="cursor-pointer"><a>Team Zenith</a></span>  </p>
      </div>
    </section>
  );
};

export default Footer;
