import { useEffect, useState } from "react";
import { HeartFilledIcon, HeartOutlinedIcon } from "../DynamicIcons";
import { useNavigate } from "react-router";

export default function SingleCartItem({
  increaseProductQuantity,
  decreaseProductQuantity,
  changeProductQuantity,
  removeProduct,
  onClickFav,
  cartItemImg,
  cartItemId,
  cartItemTitle,
  cartItemQuantity,
  isItemFav,
}) {
  const [isItemPresent, setIsItemPresent] = useState();
  const navigate = useNavigate();
  const favProducts = JSON.parse(localStorage.getItem("favProducts"));

  useEffect(() => {
    setIsItemPresent(isItemFav(cartItemId));
  }, [favProducts]);

  return (
    <li
      key={cartItemId}
      className="relative cursor-pointer"
      onClick={() => {
        navigate(`/ProductDetail/${cartItemId}`);
        window.scrollTo({ top: 0, behavior: "smooth" });
      }}
    >
      <div className="border border-gray-400 rounded-sm p-4 flex items-center justify-evenly gap-3">
        <div className="h-full w-32">
          <img src={cartItemImg} alt="" className="w-full" />
        </div>
        <div>
          <h3 className="md:text-2xl text-base leading-snug font-semibold mb-1">
            {cartItemTitle}
          </h3>
          <p className="text-gray-500 text-xs">
            <span>Size: </span>
            <span className="font-medium">XS</span>
          </p>
          <p className="text-gray-500 text-xs mt-1 mb-3">
            <span>Price: </span>
            <span className="font-medium">$ {cartItemTitle}</span>
          </p>
          <div className="flex items-center gap-3 ">
            <button
              className="rounded-full w-6 h-6 leading-none border border-gray-500 bg-gray-200 flex items-center justify-center"
              onClick={(e) => {
                e.stopPropagation();
                decreaseProductQuantity(cartItemId);
              }}
            >
              -
            </button>
            <input
              type="text"
              value={cartItemQuantity}
              className="max-w-[30px] text-center"
              onClick={(e) => e.stopPropagation()}
              onChange={(e) => {
                e.stopPropagation();
                changeProductQuantity(e, cartItemId);
              }}
            />
            <button
              className="rounded-full w-6 h-6 leading-none border border-gray-500 bg-gray-200 flex items-center justify-center"
              onClick={(e) => {
                e.stopPropagation();
                increaseProductQuantity(cartItemId);
              }}
            >
              +
            </button>

            <button
              className="bg-red-600 rounded-md px-4 py-2 ms-auto text-white"
              onClick={(e) => {
                e.stopPropagation();
                removeProduct(cartItemId);
              }}
            >
              remove
            </button>

            <button
              className="bg-[#712689] rounded-md px-4 py-2 ms-3 text-white"
              onClick={(e) => {
                e.stopPropagation();
                navigate("/choose-delivery-add");
              }}
            >
              Checkout
            </button>
          </div>
        </div>

        <button
          className="text-[#712689] absolute top-3 right-3"
          onClick={(e) => {
            e.stopPropagation();
            onClickFav(cartItemId);
          }}
        >
          {isItemPresent ? <HeartFilledIcon /> : <HeartOutlinedIcon />}
        </button>
      </div>
    </li>
  );
}
