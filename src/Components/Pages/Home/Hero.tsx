import categories from "../../JSON/Categories.json";
import AllCatComp from "../../AllCategoriesComp/AllcategoriesComp";

const Hero = () => {
  return (
    <div>
      <div className="min-h-[100vh] bg-[#F8F9FF] flex justify-center items-center">
        <section className="h-[35rem] w-[95%] mt-[2rem] bg-[#F8F9FF] flex justify-between">
          <div className="w-[27%] h-[100%] bg-white rounded-md shadow-[20px] flex justify-center items-center">
            <div className="w-[90%] h-[90%] bg-[green]">
              {categories.map((el: any) => (
                <AllCatComp catObj={el} key={el.id} />
              ))}
            </div>
          </div>
          <div className="w-[70%] h-[100%] bg-white rounded-md shadow-[20px]"></div>
        </section>
      </div>
    </div>
  );
};

export default Hero;
