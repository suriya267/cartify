import { ShoppingCartOutlined } from "@ant-design/icons";
import { useContext } from "react";
import { ProductCountContext } from "../App.tsx";

export default function Cart() {
  const {cartCount,setIsOpen} = useContext<any>(ProductCountContext);
  return (
    <div onClick={()=>setIsOpen(true)} className="relative mt-4 mr-3 cursor-pointer">
      <div className="font-[Inter-Regular] absolute top-[-16px] text-white bg-blue-700 px-[5px] py-[1px] left-[28%] right-[10%] rounded-full text-[12px] flex items-center justify-center">
        {cartCount}
      </div>
      <div>
        <ShoppingCartOutlined />
      </div>
    </div>
  );
}
