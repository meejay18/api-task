import CatComp from "../../AllCategoriesComp/CatComp";
import pic from "../../../assets/65f3e90500b564c42b51609c_Mask group.jpeg";

const Hero = () => {
  return (
    <div>
      <div className="min-h-[100vh] bg-[#F8F9FF] flex justify-center items-center">
        <section className="h-[35rem] w-[95%] mt-[2rem] bg-[#F8F9FF] flex justify-between">
          <div className="w-[27%] h-[100%]  rounded-md shadow-[20px] flex justify-center items-center">
            <div className="w-[90%]  h-[90%]">
              <div className="w-[full] h-[40px] border-b-[1px] pb-2 border-b-[silver] text-[20px] font-medium flex justify-start items-center ">
                All Categories
              </div>
              <CatComp />
            </div>
          </div>
          <div className="w-[70%] h-[100%] bg-[red] rounded-md shadow-[20px]">
            <div
              style={{ backgroundImage: `${pic}` }}
              className="h-[100%] w-[100%] "
            >
              {/* <img
                className="object-contain h-[full] w-[full] "
                src={pic}
                alt=""
              /> */}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Hero;
