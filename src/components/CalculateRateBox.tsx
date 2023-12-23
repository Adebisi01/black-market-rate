import React from "react";
import { FaEquals } from "react-icons/fa";

const CalculateRateBox = () => {
  return (
    <>
      <div className="border-2 rounded-lg border-black p-3 sm:w-full md:w-2/3">
        <div className="border border-gray-600 bg-gray-200 p-2 rounded-t-lg rounded-e-lg">
          <section className=" flex items-start justify-between">
            <span className="text-xs">Amount</span>
            <select name="" id="" className=" bg-transparent rounded-full text-xs border p-0.5 border-gray-600 ">

            <option value="usa">USA</option>
            </select>
          </section>
          <input defaultValue={100}  className="outline-none bg-gray-200 w-full" type="text" />
        </div>
        <div className="  border-l border-gray-600 flex items-center py-6 pl-3">
          <FaEquals className="border-2 rounded-full p-0.5 text-black text-xl" />
          1USD = 1184.047
        </div>
        <div className="border border-gray-600 p-2 rounded-b-lg rounded-e-lg bg-gray-200">
          <section className="flex items-start justify-between">
            <span className="text-xs">Exchange value</span>
            <select name="" id="" className="bg-transparent rounded-full text-xs border p-0.5 border-gray-600 ">

            <option value="ngn">NGN</option>
            </select>
          </section>
          <input defaultValue={10000} className="outline-none bg-gray-200 w-full" type="text" />
        </div>
      </div>
    </>
  );
};

export default CalculateRateBox;
