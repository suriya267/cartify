import { CloseOutlined } from "@ant-design/icons";

interface productProps {
  product: any;
  addItemToCard?: any;
  removeItemToCard?: any;
  isModal?: boolean;
}

export default function ProductCard(props: productProps) {
  const { product, addItemToCard, removeItemToCard, isModal } =
    props;

  const removeFromCart = (id:any) => {
    removeItemToCard(id)
  };
  return (
    <div className=" relative border border-gray-300 p-3 rounded-sm">
      {isModal === true && (
        <div
          onClick={() => removeFromCart(product?.id)}
          className=" cursor-pointer absolute top-[-10px] right-[-10px] bg-red-500 rounded-full w-8 h-8 flex items-centeer justify-center"
        >
          <CloseOutlined />
        </div>
      )}
      <div className="flex justify-center">
        <img className="h-[9rem]" src={product?.image} alt="Product" />
      </div>
      <div
        title={product?.title}
        className="flex items-center justify-center mt-2"
      >
        <div className="font-[inter-Medium] overflow-hidden text-ellipsis whitespace-nowrap">
          {product?.title}
        </div>
      </div>
      {isModal !== true && (
        <div className="flex items-center justify-center font-[inter-Bold] text-[#212121] mt-1">
          ₹ {Math.round(product?.price * 87.15)}
        </div>
      )}
      <div className="flex items-center justify-between mt-3">
        <div>
          {isModal !== true ? (
            <button
              onClick={() => addItemToCard(product)}
              className="font-[inter-Medium] cursor-pointer bg-green-400 text-white w-[5rem] h-[2.3rem] rounded-sm"
            >
              Add Cart
            </button>
          ) : (
            <div className="flex items-center justify-center font-[inter-Bold] text-[#212121] mt-1">
              ₹ {Math.round(product?.price * 87.15)}
            </div>
          )}
        </div>
        <div>
          <button className="font-[inter-Medium] cursor-pointer bg-sky-700 text-white w-[5rem] h-[2.3rem] rounded-sm">
            Buy
          </button>
        </div>
      </div>
    </div>
  );
}
