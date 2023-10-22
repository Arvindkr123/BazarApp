import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CartItems from "../components/CartItems";
import { one1 } from "../assets";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import StripeCheckout from "react-stripe-checkout";
import { config } from "../Conf/config";
import { resetCart } from "../redux/bazaarSlice";

const Cart = () => {
  const { productData, userInfo } = useSelector((state) => state.bazaar);
  const [totalAmount, setTotalAmount] = useState("");
  const [payNow, setPayNow] = useState(false);
  const dispatch = useDispatch();
  //console.log(productData);

  useEffect(() => {
    let price = 0;
    productData.map((item) => {
      price += item.price * item.quantity;
      return price;
    });
    //console.log("price from cart ", price);
    setTotalAmount(price.toFixed(2));
  }, [productData]);

  const handleCheckout = () => {
    if (userInfo) {
      setPayNow(true);
    } else {
      toast.error("Please sign in first to check out!!");
    }
  };
  return (
    <div>
      <img src={one1} className="w-full h-60 object-cover" alt="" />
      <div className="max-w-screen-xl mx-auto py-20 flex">
        {productData.length === 0 ? (
          <div className="flex flex-col items-center w-full justify-center ">
            <p className="text-red-600">
              Your Cart is Empty.Please go back to Shopping and add products to
              Cart.
            </p>
            <Link to="/" className="text-gray-600 mt-2">
              ⬅Shopping
            </Link>
          </div>
        ) : (
          <>
            <CartItems />
            <div className="w-1/3 bg-[#fafafa] py-6 px-4">
              <div className="flex flex-col gap-6 border-b-[1px] border-b-gray-400 pb-6">
                <h2 className="text-2xl font-medium">Cart totals</h2>
                <p className="flex items-center gap-4 text-base">
                  SubTotal{" "}
                  <span className="font-titleFont text-lg font-bold">
                    $ {totalAmount}
                  </span>{" "}
                </p>
                <p className="flex items-start gap-4 text-base">
                  Shipping{" "}
                  <span>
                    Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor
                    sit amet consectetur adipisicing elit. Enim ex atque tempora
                  </span>
                </p>
              </div>
              <p className="flex justify-between font-titleFont font-semibold mt-6">
                Total <span className="text-xl font-bold">$ {totalAmount}</span>
              </p>
              <button
                onClick={handleCheckout}
                className="text-base bg-black text-white w-full py-3
          mt-6 hover:bg-gray-800 duration-300 lowercase"
              >
                Proceed to Checkout
              </button>
              {payNow && (
                <div className="w-full mt-6 flex items-center justify-center">
                  <StripeCheckout
                    stripeKey={config.publishKeyStripe}
                    name={"Bazaar Online Shopping"}
                    amount={totalAmount * 100}
                    label="Pay to Bazaar"
                    email={userInfo.email}
                    description={`Your payment amount is ${totalAmount}`}
                  />
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
