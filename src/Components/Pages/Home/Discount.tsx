import React from "react";
import ProductCard from "../../ProductsCards/ProductCard";

const Discount = () => {
  return (
    <div className="w-[100%] h-[30rem] bg-[blue] flex justify-center items-center mt-[50px]">
      <div className="w-[95%] h-[90%] bg-[brown] flex justify-between items-center ">
        <div className="w-[48%] h-[100%] bg-[green]"></div>
        <div className="w-[48%] h-[100%] bg-[red]"></div>
      </div>
    </div>
  );
};

export default Discount;
