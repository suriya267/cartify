import { useState } from "react";
import SearchBar from "./SearchBar";
import "./Header.css";
import Cart from "./cart";
import { UserOutlined } from "@ant-design/icons";

export default function Header() {
  return (
    <div className="p-2 ">
      <div className="grid grid-cols-8">
        <div className="col-span-2 font-[Inter-bold] text-[35px] text-sky-700 mx-2">
          <img
            className="h-[50px]"
            src="./src/assets/images/AppLogo.png"
            alt="App Logo"
          />
        </div>
        <div className="col-span-4 flex items-center">
          <SearchBar />
        </div>
        <div className="flex items-center col-span-2 justify-end">
          <Cart/>
          <div className="bg-gray-200 h-[45px] w-[45px] flex items-center justify-center rounded-full">
            <UserOutlined />
          </div>
        </div>
      </div>
    </div>
  );
}
