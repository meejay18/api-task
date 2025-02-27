import CatComp from "../../AllCategoriesComp/CatComp";
import pic from "../../../assets/65f3e90500b564c42b51609c_Mask group.jpeg";
import pic2 from "../../../assets/65f2ab40f11e13328f1e982b_134486406_19e2683f-62ea-4c57-ae91-73d2ddc490ca 1.jpeg";
import pic3 from "../../../assets/truck.png";
import pic4 from "../../../assets/badge.png";
import pic5 from "../../../assets/quality.png";

const Hero = () => {
  return (
    <div>
      <div className="min-h-[100vh] bg-[#F8F9FF] flex flex-col justify-center items-center">
        <section className="h-[35rem] w-[95%] mt-[2rem] bg-[#F8F9FF] flex justify-between">
          <div className="w-[25%] h-[100%] bg-[white] rounded-md shadow-[20px] flex justify-center items-center">
            <div className="w-[90%]  h-[90%]">
              <div className="w-[full] h-[40px] border-b-[1px] pb-2 border-b-[silver] text-[20px] font-medium flex justify-start items-center ">
                All Categories
              </div>
              <CatComp />
            </div>
          </div>
          <div className="w-[73%] h-[100%]  rounded-md shadow-[20px]">
            <div
              style={{
                backgroundSize: "cover",
                backgroundImage: `url(${pic})`,
                position: "absolute",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "877px",
                height: "650px",
              }}
              // className="w-[100%] h-[100%]"
            >
              <div className="w-[800px] h-[50%]  relative flex">
                <div className="w-[50%] h-[100%]">
                  <div className="w-[340px] text-white text-left  h-[50px]">
                    <p className="text-[40px] font-bold">
                      16X Digital Zoom 1080P HD SLR Camera
                    </p>
                  </div>
                </div>
                <div>
                  <img className="w-[100%] h-[100%]" src={pic2} alt="" />
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="w-[100%] mt-[60px] h-[20rem] bg-[#F8F9FF] flex justify-center items-center">
          <div className="w-[95%] h-[65%] flex items-center justify-between ">
            <div className="w-[32%] h-[90%]  border rounded-[5px] flex justify-center items-center ">
              <div className="w-[95%] h-[80%]  flex">
                <div className="w-[40%] h-[90%] ">
                  <img src={pic3} alt="#" />
                </div>
                <div className="w-[75%] h-[100%]    flex flex-col gap-[10px] ">
                  <p className="font-medium">Delivery from 30 min</p>
                  <p className="text-[17px]">
                    Object select list clip clip star selection plugin component
                    opacity. Line inspect object auto
                  </p>
                </div>
              </div>
            </div>
            <div className="w-[32%] h-[90%] border  rounded-[5px] flex justify-center items-center ">
              <div className="w-[95%] h-[80%]   flex">
                <div className="w-[40%] h-[90%] ">
                  <img src={pic4} alt="#" />
                </div>
                <div className="w-[75%] h-[100%]   flex flex-col gap-[10px] ">
                  <p className="font-medium">Quality assurance</p>
                  <p className="text-[17px]">
                    Object select list clip clip star selection plugin component
                    opacity. Line inspect object auto
                  </p>
                </div>
              </div>
            </div>
            <div className="w-[32%] h-[90%] border rounded-[5px] flex justify-center items-center ">
              <div className="w-[95%] h-[80%]  flex">
                <div className="w-[40%] h-[90%] ">
                  <img src={pic5} alt="#" />
                </div>
                <div className="w-[75%] h-[100%]   flex flex-col gap-[10px] ">
                  <p className="font-medium">100% Secure Payment</p>
                  <p className="text-[17px]">
                    Object select list clip clip star selection plugin component
                    opacity. Line inspect object auto
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
