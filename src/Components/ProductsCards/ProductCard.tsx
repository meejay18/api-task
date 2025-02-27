import React from "react";

const ProductCard = ({ cardObj }: any) => {
  return (
    <div className="min-h-[330px] md:min-h-[470px] shadow-md rounded-md  ">
      <div className="border bg-[blue] text-[white] p-[5px] w-[60px] h-[25px] lg:w-[70px] lg:h-[40px] flex justify-center items-center ml-2 mt-2 rounded-md lg:text-[15px] text-[12px] border-none">
        {cardObj.button_1}
      </div>
      <div className="lg:w-[100%] lg:h-[50%] flex justify-center items-center   ">
        <img
          className="w-[150px] lg:w-[200px] hover:animate-bounce"
          src={cardObj.img}
          alt="#"
        />
      </div>
      <div className="w-[100%] h-[30px] font-medium text-center lg:mt-[30px] mt-[10px] ">
        {cardObj.product_name}
      </div>
      <div className="w-[100%] h-[30px] font-medium text-center mt-[10px] ">
        {cardObj.rating}
      </div>
      <div className="w-[100%] h-[30px] font-medium text-center text-[red] pr-[70px] mt-[5px] ">
        {cardObj.price}
      </div>
      <div className="w-[100%] h-[30px] font-medium text-center text-[gray] pr-[70px] mt-[5px] ">
        {cardObj.former_price}
      </div>
      <div className="w-[100%] h-[10%] flex justify-center items-center">
        <button className=" font-medium text-center py-[5px] px-[20px] mt-[25px] rounded-md  border-[blue] border text-blue-900 ">
          {cardObj.button_2}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
