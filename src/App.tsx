import { createContext, useEffect, useState } from "react";
import "./App.css";
import Header from "./CommonComponent/Header";
import "./styles/fonts.css";
import ProductCard from "./CommonComponent/ProductCard";
import Toast from "./CommonComponent/Toast";
import Modal from "./CommonComponent/Modal";

export const ProductCountContext = createContext<any>({});
function App() {
  const [products, setProducts] = useState<any>([]);
  const [showProducts, setShowProducts] = useState<any>([]);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [cartStack, setCartStack] = useState<any>([]);
  const [cartCount, setCartCount] = useState<any>(0);
  const [isOpen, setIsOpen] = useState(false);
  const [searchInput, setSearchInput] = useState<String>("");

  useEffect(() => {
    if (cartStack.length === 0) {
      setIsOpen(false);
    }
  }, [isOpen]);

  useEffect(() => {
    getProducts();
  }, []);

  useEffect(() => {
    setCartCount(cartStack?.length);
  }, [cartStack]);

  const getProducts = () => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setShowProducts(data);
      });
  };

  const addItemToCard = (item: any) => {
    if (
      cartStack?.some((selected: any) => selected?.id === item?.id) === false
    ) {
      setCartStack((prev: any) => [...prev, item]);
      setToastMessage("Item added to cart!");
    } else {
      setToastMessage("Item already added to the cart");
    }
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
      setToastMessage("");
    }, 3000);
  };

  const removeItemToCard = (id: any) => {
    const filteredValue = cartStack.filter((item: any) => item?.id !== id);
    setCartStack(filteredValue);
    if (filteredValue?.length > 0 === false) {
      setIsOpen(false);
    }
  };

  const searchProduct = (searchItem: any) => {
    setSearchInput(searchItem);
  };

  useEffect(() => {
    if (searchInput === "") {
      getProducts();
    } else {
      const filteredItems = showProducts?.filter((item: any) => {
        return item?.title?.toLowerCase().includes(searchInput.toLowerCase());
      });
      setProducts(filteredItems);
    }
  }, [searchInput]);

  return (
    <>
      <div className="sticky top-0 z-1 shadow-md bg-white">
        <ProductCountContext.Provider
          value={{ cartCount, setIsOpen, searchProduct, searchInput }}
        >
          <Header />
        </ProductCountContext.Provider>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 p-[15px] ">
        {products?.map((item: any) => (
          <div className="col-span-1" key={item?.id}>
            <ProductCard product={item} addItemToCard={addItemToCard} />
          </div>
        ))}
      </div>
      <Toast enable={showToast} toast={toastMessage} />
      {isOpen === true && cartStack.length > 0 && (
        <Modal
          product={cartStack}
          setIsOpen={setIsOpen}
          removeItemToCard={removeItemToCard}
        />
      )}
    </>
  );
}

export default App;
