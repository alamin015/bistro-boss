import React from "react";
import { FaTwitter,FaFacebook,FaInstagramSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <>
    <div className="flex items-center justify-between text-white">
      <div className="bg-[#1F2937] flex items-center justify-end w-full pr-10 h-[300px]  py-10">
        <div className="flex pr-6 items-center justify-end">
          <div>
            <h2 className="font-inter font-medium text-3xl mb-6">Contact use</h2>
            <p className="text-xl font-medium mb-1 font-inter">
                123 ABS Street, Uni 21, Bangladesh   
            </p>
            <p className="text-xl font-medium mb-1 font-inter">+88 123456789</p>
            <p className="text-xl font-medium mb-1 font-inter">Mon - Fri: 08:00 - 22:00</p>
            <p className="text-xl font-medium font-inter">Sat - Sun: 10:00 - 23:00</p>
          </div>
        </div>
      </div>
      <div className="bg-[#111827] flex items-center justify-start min-h-[300px] pl-10  py-10 w-full">
        <div className="">
            <div>
                <h2 className="font-inter font-medium text-3xl mb-6">Follow Us</h2>
                <p className="text-xl font-medium mb-8 font-inter">Join us social media</p>
                <div className="flex items-center gap-8">
                    <FaFacebook className="text-3xl" />
                    <FaTwitter  className="text-3xl"/>
                    <FaInstagramSquare className="text-3xl" />
                </div>
            </div>
        </div>
      </div>
    </div>
    <div className="w-full text-center py-4 bg-[#151515]">
        <h2 className="font-inter text-xl font-medium text-white">Copyright © CulinaryCloud. All rights reserved.</h2>
    </div>
    </>
  );
};

export default Footer;
