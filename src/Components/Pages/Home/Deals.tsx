import { MdArrowRight } from "react-icons/md";
import productData from "../../JSON/ProductsData1.json";
import ProductCard from "../../ProductsCards/ProductCard";
import { PiArrowRight } from "react-icons/pi";
import img from "../../../assets/65f3f07c0df16ddbfb45ab2a_Group.jpeg";

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
      <div className=" w-[100%] min-h-[25rem] lg:w-[100%] lg:h-[25rem]  flex justify-center items-center mt-[70px] ">
        <div className="lg:w-[95%] lg:h-[60%] w-[95%] min-h-[90%] bg-[blue] rounded-md lg:flex justify-center items-center">
          <div className="lg:w-[50%] lg:h-[70%] ">
            <div className="lg:w-[70%] lg:h-[100%] bg-[] mt-[20px] ">
              <p className="text-[35px]  text-[white] font-bold">
                Celebrate July with Discounts on All Phone Accessories!
              </p>

              <div className="w-[100%] h-[60px]   mt-[50px] flex gap-[10px] items-center">
                <button className="lg:px-[50px] text-[18px] text-[white] lg:text-[15px] lg:py-[10px] rounded-md bg-[red] ">
                  <p> Check Products</p>
                  <div></div>
                </button>
                <button className="lg:px-[18px] border-white text-white lg:text-[15px] lg:py-[10px] rounded-md bg-[blue] ">
                  <p> Show all categories</p>
                </button>
              </div>
            </div>
          </div>
          <div className=" w-[100%] h-[100%] lg:w-[40%] flex justify-end items-end lg:h-[95%] md:w-[40%] sm:h-[80%] sm:w-[40%] md:h-[80%] mt-[20px] ">
            <img className="h-[200px] lg:h-[250px]" src={img} alt="#" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Deals;
