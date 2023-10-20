import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToCart } from "../redux/bazaarSlice";
import { toast } from "react-toastify";

const ProductsCard = ({ product }) => {
  // console.log(product);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const changeIdToString = (id) => {
    return String(id).toLowerCase().split(" ").join("");
  };
  let rootID = changeIdToString(product.title);
  const handleDetails = (id) => {
    navigate(`/product/${id}`, {
      state: {
        item: product,
      },
    });
  };

  const addtheCart = () => {
    // alert("called add to cart");
    dispatch(
      addToCart({
        _id: product._id,
        title: product.title,
        image: product.image,
        price: product.price,
        quantity: 1,
        description: product.description,
      })
    );

    toast.success(`${product.title} added to the cart`);
    // console.log({
    //   _id: product._id,
    //   title: product.title,
    //   image: product.image,
    //   price: product.price,
    //   quantity: 1,
    //   description: product.description,
    // });
  };
  return (
    <div className="group relative">
      <div
        onClick={() => handleDetails(rootID)}
        className="w-full h-96 cursor-pointer overflow-hidden"
      >
        <img
          className="w-full h-full object-cover group-hover:scale-110 duration-500"
          src={product.image}
          alt={"productImage"}
        />
      </div>
      <div className="w-full border-[1px] px-2 py-4">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="font-titleFont text-base font-bold">
              {product.title.substring(0, 15)}
            </h2>
          </div>
          <div className="flex justify-end gap-2 relative w-28 overflow-hidden text-sm ">
            <div className="flex gap-2 transform group-hover:translate-x-24 transition-transform duration-500">
              <p className="line-through text-gray-500">${product.oldPrice}</p>
              <p className="font-semibold">${product.price}</p>
            </div>
            <p
              onClick={addtheCart}
              className="absolute z-20 w-[100px] text-gray-500 hover:text-gray-900  top-0 transform -translate-x-32 group-hover:translate-x-0 transition-transform cursor-pointer duration-500"
            >
              add to cart{" "}
            </p>
          </div>
        </div>
        <div>
          <p>{product.category}</p>
        </div>
        <div className="absolute top-4 right-0">
          {product?.isNew && (
            <p className="bg-black text-white font-semibold font-titleFont px-6 py-1">
              Sale
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductsCard;
