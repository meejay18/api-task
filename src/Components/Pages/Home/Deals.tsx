import { MdArrowRight } from "react-icons/md";
import productData from "../../JSON/ProductsData1.json";
import ProductCard from "../../ProductsCards/ProductCard";

const Deals = () => {
  return (
    <div>
      <div className="md:w-[100%] md:h-[35rem] md:min-h-[35rem] lg:min-h-[37rem] bg-[#F8F9FF] w-[100%] min-h-[45rem]  mt-[20px] flex justify-center items-center  ">
        <div className="min-w-[95%] min-h-[95%] gap-[20px] ">
          <div className="w-[100%] h-[3rem]  flex justify-between items-center">
            <div className="text-[17px] font-bold md:text-[30px]">
              Deals of the Week
            </div>
            <button className="px-[5px] text-[red] md:text-[20px] flex justify-center items-center md: mr-[3px] text-[15px] border-[red] rounded-md border py-[3px]">
              view All <MdArrowRight className="text-[20px]" />
            </button>
          </div>

          <div className="min-h-[30rem] gap-[20px] grid grid-cols-1 p-[5px] sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4">
            {productData.map((el) => (
              <ProductCard cardObj={el} key={el?.id} />
            ))}
          </div>
        </div>
      </div>
      <div className="w-[100%] h-[25rem] bg-[orange] flex justify-center items-center mt-[70px] ">
        <div className="lg:w-[95%] lg:h-[90%] bg-[blue]"></div>
      </div>
      ;
    </div>
  );
};

export default Deals;
