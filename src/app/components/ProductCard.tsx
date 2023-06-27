import CardWrapper from "./CardWrapper";
import Image from "next/image";

const ProductCard = () => {
  return (
    <CardWrapper>
      <div className="p-10">
        <div className="flex justify-between items-center mb-5">
          <svg
            className="h-8 w-8 flex-no-shrink fill-current"
            fill="none"
            stroke="currentColor"
            stroke-width="1.5"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
            ></path>
          </svg>
          <div className="flex space-x-3 items-center">
            <div>⭐ 4.9</div>
            <div className="shadow-xl p-2 rounded-md">❤️</div>
          </div>
        </div>
        <div className="flex justify-center items-center mb-5">
          <Image
            src="/3034CLOTTEDCREAM170G.jpg"
            alt="clotted cream"
            width="288"
            height="288"
          />
        </div>
        <div>
          <div className="font-medium text-xl">Clotted Cream</div>
          <div className="text-xs text-gray-400">Dairy</div>
          <div className="mt-3 mb-5 flex justify-between items-center">
            <div className="space-x-2">
              <button className="w-5 h-5 rounded-full bg-red-400 focus:ring-2 ring-offset-2 ring-red-200 transition" />
              <button className="w-5 h-5 rounded-full bg-green-400 focus:ring-2 ring-offset-2 ring-green-200 transition" />
              <button className="w-5 h-5 rounded-full bg-yellow-400 focus:ring-2 ring-offset-2 ring-yellow-200 transition" />
            </div>
            <div className="flex items-center space-x-5">
              <button className="bg-blue-200 aspect-square w-8 font-medium text-xl text-gray-600 rounded-md">
                -
              </button>
              <span>1</span>
              <button className="bg-blue-200 aspect-square w-8 font-medium text-xl text-gray-600 rounded-md">
                +
              </button>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <span className="font-medium text-2xl">£4.99</span>
            <button className="bg-blue-500 text-center text-white rounded-lg py-3 px-8 text-sm">
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </CardWrapper>
  );
};

export default ProductCard;
