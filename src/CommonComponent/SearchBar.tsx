import { SearchOutlined } from "@ant-design/icons";
import "./SearchBar.css";
import { useContext } from "react";
import { ProductCountContext } from "../App";

export default function SearchBar() {
 const {searchProduct,searchInput}=useContext(ProductCountContext)
  return (
    <div style={{ backgroundColor: "#f0f5ff" }} className="flex item-center px-[20px] py-[10px] rounded-[50px] w-full">
      <div className="flex item-center justify-center mr-[10px]">
        <SearchOutlined/>
      </div>
      <div className="flex item-center justify-center text-[18px] w-[100%]">
        <input value={searchInput} onChange={(e)=>searchProduct(e.target.value)} placeholder="Search for Products" className="px-[7px] search-field w-full font-[Inter-Regular]" type="text" />
      </div>
    </div>
  );
}
