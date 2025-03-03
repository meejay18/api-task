import pix from "../../assets/65f127a7e7e25afdb33b14d2_Logo.webp";

const Footer = () => {
  const Navs1 = [
    {
      id: 1,
      title: "Home One",
      url: "/",
    },
    {
      id: 1,
      title: "Home Two",
      url: "/",
    },
    {
      id: 1,
      title: "Home Three",
      url: "/",
    },
    {
      id: 1,
      title: "About",
      url: "/about",
    },
    {
      id: 1,
      title: "Contact",
      url: "/contact",
    },
  ];

  const QuickLinks = [
    {
      id: 1,
      title: "About Us",
      url: "/about",
    },
    {
      id: 1,
      title: "FAQ",
      url: "/faq",
    },
    {
      id: 1,
      title: "Shop",
      url: "/about",
    },
    {
      id: 1,
      title: "Log-In",
      url: "/Log-in",
    },
    {
      id: 1,
      title: "Licensing",
      url: "/license",
    },
  ];

  return (
    <div>
      <div className="w-[100%] min-h-[50rem] lg:w-[100%] lg:min-h-[15rem] py-2 lg:py-0 bg-[gray] mt-[70px] flex justify-center items-center">
        <div className="w-[95%] min-h-[50rem]  lg:gap-0 sm:gap-0 xl:gap-0 gap-4 lg:min-h-[10rem] lg:w-[95%] grid-cols-1 grid lg:grid-cols-5 bg-[red]">
          <div className="lg:col-span-2 flex justify-center items-center">
            <div className="w-[90%] h-[350px] lg:h-[90%]  lg:w-[90%] bg-[blue] ">
              <div className=" w-[70%] h-[40px]  lg:w-[70%] lg:h-[50px] bg-[gray]">
                <img
                  className=" w-[200px] h-[30px] lg:w-[250px] lg:h-[40px]"
                  src={pix}
                  alt=""
                />
              </div>
              <div className="w-[100%] h-[150px] mt-[50px] lg:mt-[30px] bg-[brown]">
                <p className="text-[15px] lg:text-[20px]  text-white">
                  At Ecommerce TNC, we curate diverse, quality products ensuring
                  a stress-free shopping experience. Our dedicated team provides
                  prompt support. Join our community.
                </p>

                <div></div>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <div className="w-[90%] h-[300px] bg-[yellow]">
              <div className="w-[100%] text-[20px] h-[3opx] bg-[gray]  ">
                <p>Useful Links</p>
              </div>

              <div className="w-[50%] h-[60%] bg-[green] mt-[40px] text-[18px] ml-[10px] ">
                {Navs1.map((el: any) => (
                  <div>{el.title}</div>
                ))}
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <div className="w-[90%] h-[300px] bg-[#1c88cb]">
              <div className="w-[100%] text-[20px] h-[3opx] bg-[gray]  ">
                <p>Quick Links</p>
              </div>
              <div className="w-[50%] h-[60%] bg-[green] mt-[40px] flex flex-col gap-[10px] text-[18px] ml-[10px] ">
                {QuickLinks.map((el: any) => (
                  <div>{el.title}</div>
                ))}
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <div className="w-[90%] h-[300px] bg-[#17f0b9]">
              <div className="w-[100%] text-[20px] h-[3opx] bg-[gray]  ">
                <p>Contact Address</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-[100%] h-[5rem] bg-[#1ecff3] border border-t-[gray]"></div>
    </div>
  );
};

export default Footer;
