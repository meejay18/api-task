import data from "../JSON/Categories.json";

const catComp = ({ catComp }: any) => {
  return (
    <div>
      {data.map((el: any) => (
        <div className="w-[full] h-[30px]  flex items-center gap-2 mt-4 ">
          <div className="w-[10%] h-[50%]"></div>
          <div className="w-[60%] h-[60%] text-[15px]">{el.title}</div>
        </div>
      ))}
    </div>
  );
};

export default catComp;
