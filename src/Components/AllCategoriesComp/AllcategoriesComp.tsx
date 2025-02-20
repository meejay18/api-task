const AllCatComp = function ({ props }: any) {
  return (
    <div>
      <div className="w-[100%] h-[5px] bg-[#80003a]">
        {props?.catObj?.title}
      </div>
    </div>
  );
};

export default AllCatComp;
