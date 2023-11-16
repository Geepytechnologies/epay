import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaRegUser } from "react-icons/fa";
import { CiSettings, CiShop, CiWallet } from "react-icons/ci";
import { IoBagHandleOutline } from "react-icons/io5";
import { AiOutlineTransaction } from "react-icons/ai";
import { LuCrown } from "react-icons/lu";
import { MdOutlineContactSupport } from "react-icons/md";

const Dashboardmenu = () => {
  const [currentPage, setCurrentPage] = useState("");

  const location = useLocation();

  useEffect(() => {
    setCurrentPage(location.pathname);
  }, [location]);

  return (
    <>
      <div className="text-[#5a5b5c] min-w-[250px]  h-auto px-2">
        <div className="h-[70px] border-b-[1.5px] border-gray-300"></div>
        <div className="">
          {/* dashboard */}
          <Link
            to="/home"
            className={`flex gap-2 my-2 items-center rounded-md  p-2  ${
              currentPage === "/home"
                ? "bg-gray-100 text-gray-500 rounded-md border-l-[5px] border-green-900"
                : " hover:text-[black] hover:bg-gray-200"
            }`}
          >
            <FaRegUser />
            <p>Dashboard</p>
          </Link>
          {/* products */}
          <Link
            to="/products"
            className={`flex gap-2 my-2 items-center rounded-md  p-2  ${
              currentPage === "/products"
                ? "bg-gray-100 text-gray-500 rounded-md border-l-[5px] border-green-900"
                : " hover:text-[black] hover:bg-gray-200"
            }`}
          >
            <CiShop />
            <p>Products</p>
          </Link>
          {/* orders */}
          <Link
            to="/orders"
            className={`flex gap-2 my-2 items-center rounded-md  p-2  ${
              currentPage === "/orders"
                ? "bg-gray-100 text-gray-500 rounded-md border-l-[5px] border-green-900"
                : " hover:text-[black] hover:bg-gray-200"
            }`}
          >
            <IoBagHandleOutline />
            <p>Orders</p>
          </Link>
          {/* transactions */}
          <Link
            to="/transactions"
            className={`flex gap-2 my-2 items-center rounded-md  p-2  ${
              currentPage === "/transactions"
                ? "bg-gray-100 text-gray-500 rounded-md border-l-[5px] border-green-900"
                : " hover:text-[black] hover:bg-gray-200"
            }`}
          >
            <AiOutlineTransaction />
            <p>Transactions</p>
          </Link>
          {/* wallet */}
          <Link
            to="/"
            className={`flex gap-2 my-2 items-center rounded-md  p-2  ${
              currentPage === "/"
                ? "bg-gray-100 text-gray-500 rounded-md border-l-[5px] border-green-900"
                : " hover:text-[black] hover:bg-gray-200"
            }`}
          >
            <CiWallet />
            <p>Wallet</p>
          </Link>
          {/* promotions */}
          <Link
            to="/promotions"
            className={`flex gap-2 my-2 items-center rounded-md  p-2  ${
              currentPage === "/promotions"
                ? "bg-gray-100 text-gray-500 rounded-md border-l-[5px] border-green-900"
                : " hover:text-[black] hover:bg-gray-200"
            }`}
          >
            <LuCrown />
            <p>Promotions</p>
          </Link>
          <p className="text-left">OTHERS</p>
          {/* settings */}
          <Link
            to="/settings"
            className={`flex gap-2 my-2 items-center rounded-md  p-2  ${
              currentPage === "/settings"
                ? "bg-gray-100 text-gray-500 rounded-md border-l-[5px] border-green-900"
                : " hover:text-[black] hover:bg-gray-200"
            }`}
          >
            <CiSettings />
            <p>Settings</p>
          </Link>
          {/* support */}
          <Link
            to="/support"
            className={`flex gap-2 my-2 items-center rounded-md  p-2  ${
              currentPage === "/support"
                ? "bg-gray-100 text-gray-500 rounded-md border-l-[5px] border-green-900"
                : " hover:text-[black] hover:bg-gray-200"
            }`}
          >
            <MdOutlineContactSupport />
            <p>Support</p>
          </Link>
        </div>
        <div className="text-light w-full flex items-center justify-center mt-3">
          <p className="italic text-[12px]">
            Made by{" "}
            <a className="underline" href="https://geepy.vercel.app">
              Geepy
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default Dashboardmenu;
