import React from "react";
import { CiBellOn, CiSearch } from "react-icons/ci";

type Props = {};

const Header = (props: Props) => {
  return (
    <div className="flex px-2 py-3 justify-between items-center">
      <div className="px-2 py-3 flex gap-2 items-center border rounded-md">
        <CiSearch />
        <input className="outline-0" placeholder="Search for order ID" />
      </div>
      <div className="flex gap-2 items-center">
        <CiBellOn className="text-[30px]" />
        <img
          src="https://geepy.vercel.app/logo.JPG"
          className="rounded-full h-[50px] w-[50px] object-cover"
        />
        <div className="flex flex-col gap-2">
          <p className="font-[500]">Emmanuel Jacob</p>
          <p>Blessed Stores</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
