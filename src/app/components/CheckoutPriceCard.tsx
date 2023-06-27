import CardWrapper from "./CardWrapper";

const CheckoutPriceCard = () => {
  return (
    <CardWrapper>
      <div className="text-black font-semibold text-3xl pt-10 pl-10">
        Select Item
      </div>
      <div className="flex justify-between my-2 text-gray-500 px-10">
        <span>Grey Chair</span>
        <span className="font-semibold">$19</span>
      </div>
      <div className="flex justify-between my-2 text-gray-500 px-10">
        <span>Grey Chair</span>
        <span className="font-semibold">$19</span>
      </div>
      <div className="flex justify-between mt-2 pt-2 mx-10 border-t-2 border-dashed">
        <span>Total</span>
        <span className="font-semibold">$38</span>
      </div>
      <div className="bg-blue-500 text-white p-3 my-5 text-center rounded-xl w-1/2 mx-auto">
        Checkout
      </div>
    </CardWrapper>
  );
};

export default CheckoutPriceCard;
