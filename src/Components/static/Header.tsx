import { IoSearchSharp } from "react-icons/io5";
import pic1 from "../../assets/65f127a7e7e25afdb33b14d2_Logo.webp";
import { FaRegUser } from "react-icons/fa6";
import { IoBagOutline } from "react-icons/io5";
import { HiOutlineSquares2X2 } from "react-icons/hi2";
import { BiPhoneCall } from "react-icons/bi";
import { AiOutlineMail } from "react-icons/ai";
import { Link } from "react-router-dom";

const Header = () => {
  const Nav = [
    {
      id: "1",
      title: "Home",
      url: "/",
    },
    {
      id: "2",
      title: "About Us",
      url: "/about",
    },
    {
      id: "3",
      title: "Products",
      url: "/products",
    },
    {
      id: "4",
      title: "shop",
      url: "/shop",
    },
    {
      id: "5",
      title: "Blog",
      url: "/blog",
    },
    {
      id: "6",
      title: "Contact",
      url: "/contact",
    },
  ];

  return (
    <div>
      <div className="w-100% h-[7rem] sm:w-100% sm:h-[7rem]  flex justify-center items-center border border-b-[silver] ">
        <div className="w-[97%] h-[70%]  flex gap-[10px] items-center">
          <div className="w-[18%] h-[40%]   flex items-center">
            <img src={pic1} alt="" />
          </div>
          <div className="hidden w-[55%] h-[65%] border-[silver] border ml-[50px] sm:flex items-center justify-between rounded-[3px] ">
            <input
              placeholder="What are you looking for?"
              className="w-[80%] h-[100%] flex  text-[15px] outline-none pl-[15px] "
              type="search"
            />

            <button className="px-10 py-4.5 bg-[blue] rounded-[3px] cursor-pointer">
              <IoSearchSharp className="text-white" />
            </button>
          </div>
          <div className="w-[120px] h-[60px] ml-[40px] flex">
            <div className="flex items-center justify-center w-[30%] h-[100%] ">
              <FaRegUser className="font-extrabold text-2xl" />
            </div>
            <div className="flex flex-col  justify-center   w-[60%] h-[100%]">
              <div className="pl-2">
                <p className="text-[12px] text-[grey]">Login</p>
                <p className="text-[15px]">Account</p>
              </div>
            </div>
          </div>
          <div className="flex w-[100px] h-[60px]  items-center gap-1 ">
            <div>
              <IoBagOutline className="font-extrabold text-2xl" />
            </div>
            <p className="text-[15px]">Your cart</p>
          </div>
        </div>
      </div>
      <div className="w-[100%] h-[3rem]  flex justify-center  items-center">
        <div className="w-[97%] h-[60%]  flex gap-[20px]  ">
          <div className=" flex w-[20%] h-full items-center gap-2 ">
            <div className=" h-full w-[30px]  flex justify-center items-center ">
              <HiOutlineSquares2X2 className="text-2xl" />
            </div>
            <p className="text-[15px] text-gray-800 font-medium">
              BROWSE ALL CATEGORIES
            </p>
          </div>
          <div className="w-[45%] hidden h-full  sm:flex text-[15px] font-medium pl-[40px]  text-gray-800 items-center gap-[30px]">
            {Nav.map((el) => (
              <div key={el.id}>
                <Link to={el.url}>{el.title}</Link>
              </div>
            ))}
          </div>
          <div className="w-[20%] h-full flex items-center gap-2">
            <div>
              <BiPhoneCall className="text-1xl text-[red]" />
            </div>
            <div className="text-[15px]">Call: (+234) 9056345749</div>
          </div>
          <div className="w-[20%] h-full flex items-center gap-2">
            <div>
              <AiOutlineMail className="text-1xl text-[red]" />
            </div>
            <div className="text-[15px]">Email: Mdigban@gmail.com</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
