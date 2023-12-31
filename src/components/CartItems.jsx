import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { MdOutlineClose } from "react-icons/md";
import { HiOutlineArrowLeft } from "react-icons/hi";
import {
  decrementQuantity,
  deleteItem,
  incrementQuantity,
  resetCart,
} from "../redux/bazaarSlice";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

const CartItems = () => {
  const dispatch = useDispatch();
  const productData = useSelector((state) => state.bazaar.productData);
  //console.log(productData);
  return (
    <>
      <div className="w-2/3 pr-10">
        <div className="w-full">
          <h2 className="title-titleFont text-2xl">shopping cart</h2>
        </div>
        <div>
          {productData?.map((item) => (
            <div
              key={item._id}
              className="flex items-center justify-between gap-6 mt-6"
            >
              <div className="flex items-center gap-2">
                <img
                  src={item?.image}
                  alt="product image"
                  className="w-32 h-32 object-contain"
                />
              </div>
              <h2 className="w-52">{item.title}</h2>
              <h2 className="w-10">${item.price}</h2>
              <div className="w-52 flex items-center justify-between text-gray-500 gap-4 border  p-3">
                <p className="text-sm">Quantity</p>
                <div className="flex items-center gap-4 text-sm font-semibold">
                  <button
                    onClick={() => {
                      dispatch(
                        decrementQuantity({
                          _id: item._id,
                          title: item.title,
                          image: item.image,
                          price: item.price,
                          quantity: 1,
                          description: item.description,
                        })
                      );
                    }}
                    className="border h-5 font-normal text-lg flex items-center justify-center px-2 hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active:bg-black "
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    onClick={() =>
                      dispatch(
                        incrementQuantity({
                          _id: item._id,
                          title: item.title,
                          image: item.image,
                          price: item.price,
                          quantity: 1,
                          description: item.description,
                        })
                      )
                    }
                    className="border h-5 font-normal text-lg flex items-center justify-center px-2 hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active:bg-black"
                  >
                    +
                  </button>
                </div>
              </div>
              <p className="w-14">${item.quantity * item.price}</p>
              <button
                onClick={() => {
                  dispatch(deleteItem(item._id));
                  toast.error(`${item.title} removed from cart`);
                }}
                className="flex px-3 py-2 items-center gap-2 bg-red-500 text-white text-sm hover:bg-red-800 cursor-pointer duration-300"
              >
                delete
                <span>
                  <MdOutlineClose />
                </span>
              </button>
            </div>
          ))}
        </div>
        <div className="flex flex-col items-center gap-5">
          <button
            onClick={() =>
              dispatch(resetCart()) & toast.error("Your cart is empty")
            }
            className="bg-red-500 text-white mt-8 ml-7 py-1 px-6 hover:bg-red-800 duration-300"
          >
            reset cart
          </button>
          <Link to="/" className="capitalize hover:text-red-600 cursor-pointer">
            ⬅ shopping
          </Link>
        </div>
      </div>
    </>
  );
};

export default CartItems;
