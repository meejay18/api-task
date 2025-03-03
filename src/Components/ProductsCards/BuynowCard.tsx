import { MdArrowRight } from "react-icons/md";
import pic1 from "../../assets/headphone.png";
import pic2 from "../../assets/65f2850a2f093ed930b9ad1f_image-1.png";

const BuynowCard = ({ buyNowObj }: any) => {
  return (
    <div className=" w-[100%] h-[70rem]  lg:w-[100%] lg:h-[25rem]   sm:w-[100%] sm:h-[70rem]  md:w-[100%] md:h-[25rem]  xl:w-[100%] xl:h-[25rem]  flex justify-center items-center mt-[50px]">
      <div className=" w-[95%] h-[90%] lg:w-[95%] lg:h-[90%]    gap-4 lg:flex lg:justify-between lg:items-center ">
        <div className="w-[100%] h-[50%]   lg:w-[48%] lg:h-[100%] rounded-[10px] mb-6  flex justify-center items-center bg-[#717AE0] lg:mb-0">
          <div className=" w-[90%] h-[100%] md:w-[90%] md:flex sm:w-[90%] sm:h-[90%] md:h-[90%]  lg:w-[90%] lg:h-[90%] lg:flex ">
            <div className=" w-[100%] h-[60%]  lg:w-[50%] lg:h-[100%] flex justify-center items-center ">
              <div className="lg:w-[90%] lg:h-[90%] md:w-[90%] md:h-[90%] w-[90%] sm:w-[90%] sm:h-[90%] h-[90%] flex flex-col gap-3   ">
                <p className="text-[white] text-[30px] font-medium">
                  Save Up To 70%
                </p>
                <p className="text-[white] text-[20px] font-medium">
                  Head Mounted Bluetooth Headphones Multifunctional Headset
                  Wireless.
                </p>
                <p className="text-[gold] text-[30px] font-medium">$120.00</p>

                <div>
                  <button className=" text-[white] text-[17px] lg:py-[10px] rounded-[5px] lg:px-[30px] px-[5px] py-[7px] flex justify-center items-center gap-[10px] bg-[red]">
                    <p>Buy now</p>
                    <span>
                      <MdArrowRight />
                    </span>
                  </button>
                </div>
              </div>
            </div>
            <div className="w-[100%] h-[40%] lg:w-[50%] lg:h-[100%]  flex justify-center items-center">
              <img className="lg:w-[300px] lg:h-[300px]" src={pic1} alt="" />
            </div>
          </div>
        </div>
        <div className="w-[100%] h-[50%] rounded-[10px]  lg:w-[48%] lg:h-[100%] flex justify-center items-center bg-[#0C2D57]">
          <div className=" w-[90%] h-[90%]  lg:w-[90%] lg:h-[90%] lg:flex ">
            <div className="  w-[100%] h-[60%] lg:w-[50%] lg:h-[100%]  flex justify-center items-center">
              <div className="lg:w-[90%] lg:h-[90%] md:w-[90%] md:h-[90%] w-[90%] sm:w-[90%] sm:h-[90%] h-[90%] flex flex-col gap-3   ">
                <p className="text-[white] text-[30px] font-medium">
                  Loud Alarm Clock
                </p>
                <p className="text-[white] text-[20px] font-medium">
                  Stylish Timekeeping for Home Office & Students
                </p>
                <p className=" text-[20px] font-medium text-[gold]">
                  Up To 70% Off & Free Shipping
                </p>

                <div>
                  <button className=" text-[white] text-[17px] lg:py-[10px] rounded-[5px] lg:px-[30px] px-[5px] py-[7px] flex justify-center items-center gap-[10px] bg-[red]">
                    <p>Buy now</p>
                    <span>
                      <MdArrowRight />
                    </span>
                  </button>
                </div>
              </div>
            </div>
            <div className=" w-[100%] h-[40%]  lg:w-[50%] lg:h-[100%]  flex justify-center items-center">
              <img className="lg:w-[300px] lg:h-[250px]" src={pic2} alt="#" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuynowCard;
