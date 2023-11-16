import React from "react";
import { CiExport } from "react-icons/ci";
import { FaEdit } from "react-icons/fa";
import { PiCaretDownBold } from "react-icons/pi";

type Props = {};

const Wallet = (props: Props) => {
  return (
    <div className="bg-[#f8f9fa] p-5">
      <div className="flex items-center justify-between px-3">
        <p className="font-[500]">Transactions</p>
        <div className="flex gap-2 items-center">
          <div className="px-2 py-3 flex gap-2 items-center border rounded-md">
            <p>Last 7 days</p>
            <PiCaretDownBold />
          </div>
          <div className="px-2 py-3 flex gap-2 items-center border rounded-md">
            <CiExport />
            <p>Export</p>
          </div>
        </div>
      </div>
      <div className="bg-white p-5">
        <div className="flex items-center">
          <p className="font-[500]">Your wallet</p>
          <p className="ml-[200px]">Transactions this month: 38</p>
        </div>
        <div className="flex gap-3 items-center ">
          <div className="w-[400px] h-[250px] flex flex-col justify-between rounded-md p-5 bg-gray-100">
            <div className="flex justify-between items-center font-[500]">
              <p>Total balance:</p>
              <p>$7,288</p>
            </div>
            <div className="flex items-center justify-between">
              <button className="border border-green-800 w-[150px] rounded-md  text-green-800 px-3 py-2 font-[500]">
                Withdraw
              </button>
              <button className="text-white bg-green-800 w-[150px] rounded-md  px-3 py-2 font-[500]">
                Fund
              </button>
            </div>
          </div>
          <div className="">
            <p className="font-[500] text-left my-2">Cards</p>
            <div className="w-[400px] h-auto flex flex-col justify-between rounded-md p-2 border border-gray-500">
              <div className="flex justify-between items-center py-2 border-b border-gray-500 font-[500]">
                <p>See all</p>
                <FaEdit className="text-gray-500 text-[20px]" />
              </div>
              <div className="flex flex-col ">
                <div className="flex items-center justify-between w-full">
                  <div className="flex flex-col">
                    <div className="flex items-center">
                      <img src="/ma_symbol.svg" className="h-[50px] w-[50px]" />
                      <p>Thomas Emmanuel</p>
                    </div>
                    <p className="font-[500]">24069 **** **** 3120</p>
                  </div>
                  <button className="bg-gray-200 text-green-600 p-2 font-[500]">
                    Default
                  </button>
                </div>
                <div className="flex items-center justify-between w-full">
                  <div className="flex flex-col">
                    <div className="flex items-center">
                      <img src="/ma_symbol.svg" className="h-[50px] w-[50px]" />
                      <p>Thomas Emmanuel</p>
                    </div>
                    <p className="font-[500]">24069 **** **** 3120</p>
                  </div>
                </div>
              </div>
              <div className="flex border-t border-gray-500 py-2">
                <p className="text-green-800 font-[500] ml-auto">
                  Add new card
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <p className="font-[500] text-left my-2">Transaction history</p>
          <div className="border border-gray-500 rounded-md">
            <div className="flex border-b border-gray-500 gap-3 px-3 pt-2">
              <p className="border-b-[3px] border-green-900 ">All</p>
              <p>withdrawals</p>
              <p>Cards</p>
            </div>
            <table className="p-2 w-full">
              <thead>
                <tr className="">
                  <th>Items</th>
                  <th>Amount ($)</th>
                  <th>Type</th>
                  <th>Status</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                <tr className="">
                  <td className="">Luxury leather handbag</td>
                  <td>3000</td>
                  <td>Debit</td>
                  <td className="text-green-400">Completed</td>
                  <td>Date</td>
                </tr>
                <tr>
                  <td>Wallet Funding</td>
                  <td>3000</td>
                  <td>Debit</td>
                  <td className="text-yellow-400">Pending</td>
                  <td>Date</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wallet;
