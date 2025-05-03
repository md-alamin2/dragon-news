import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const FindUs = () => {
  return (
    <div>
      <p className="text-xl font-semibold">Find us on</p>
      <div className="join join-vertical w-full mt-5">
        <button className="btn bg-base-100 justify-start join-item"><FaFacebook size={24} />Facebook</button>
        <button className="btn bg-base-100 justify-start join-item"><FaTwitter size={24} /> Twitter</button>
        <button className="btn bg-base-100 justify-start join-item"><FaInstagram size={24} /> Instagram</button>
      </div>
    </div>
  );
};

export default FindUs;
