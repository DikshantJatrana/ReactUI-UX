import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";

function Footer() {
  return (
    <div className="bg-black text-white py-8 px-4 grid smd:grid-cols-3">
      <div className="w-full">
        <h1 className="text-[#00ed5f] font-bold text-3xl sm:text-4xl mb-3">
          React.
        </h1>
        <p className="font-semibold text-base sm:text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores quo
          necessitatibus perspiciatis optio exercitationem incidunt illum magnam
          rerum similique aut. Error, labore nemo exercitationem autem maiores
          recusandae molestiae et ratione?
        </p>
        <div className="text-white text-3xl smd:text-4xl flex justify-between my-4">
          <FaInstagram className="hover:scale-105 duration-75" />
          <FaFacebookSquare className="hover:scale-105 duration-75" />
          <FaXTwitter className="hover:scale-105 duration-75" />
          <FaGithub className="hover:scale-105 duration-75" />
        </div>
      </div>
      <div className="text-gray-400 py-4 px-4 flex justify-between smd:col-span-2">
        <div>
          <h6 className="font-semibold text-lg  smd:text-xl underline">
            Solution
          </h6>
          <ul>
            <li className="py-2 text-sm smd:text-lg">Analytics</li>
            <li className="py-2 text-sm smd:text-lg">Marketing</li>
            <li className="py-2 text-sm smd:text-lg">Commerce</li>
            <li className="py-2 text-sm smd:text-lg">Insights</li>
          </ul>
        </div>
        <div>
          <h6 className="font-semibold text-lg  smd:text-xl underline">
            Support
          </h6>
          <ul>
            <li className="py-2 text-sm smd:text-lg">Pricing</li>
            <li className="py-2 text-sm smd:text-lg">Documentation</li>
            <li className="py-2 text-sm smd:text-lg">Guides</li>
            <li className="py-2 text-sm smd:text-lg">API Status</li>
          </ul>
        </div>
        <div>
          <h6 className="font-semibold text-lg smd:text-xl underline">
            Company
          </h6>
          <ul>
            <li className="py-2 text-sm smd:text-lg">About</li>
            <li className="py-2 text-sm smd:text-lg">Blog</li>
            <li className="py-2 text-sm smd:text-lg">Jobs</li>
            <li className="py-2 text-sm smd:text-lg">Press</li>
            <li className="py-2 text-sm smd:text-lg">Careers</li>
          </ul>
        </div>
        <div>
          <h6 className="font-semibold text-lg smd:text-xl underline">
            Legals
          </h6>
          <ul>
            <li className="py-2 text-sm smd:text-lg">Claim</li>
            <li className="py-2 text-sm smd:text-lg">Policy</li>
            <li className="py-2 text-sm smd:text-lg">Terms</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
