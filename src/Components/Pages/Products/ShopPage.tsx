import { useEffect, useState } from "react";
import { getAllProducts2 } from "../../../APIS/api2";
import pic from "../../../assets/react.svg";

const ShopPage = () => {
  const [products, setProducts] = useState<any>([]);
  const [search, setSearch] = useState<string>("");
  const newProduct = "products";

  const handlegetAllProducts2 = () => {
    getAllProducts2(newProduct).then((res: any) => {
      setProducts(res || []);
      console.log("reading res", res);
    });
  };

  const filteredProducts = products.filter((product: any) => {
    const lowerCase = search.toLowerCase();
    return (
      product.title.toLowerCase().includes(lowerCase) ||
      product.category.toLowerCase().includes(lowerCase) ||
      product.description.toLowerCase().includes(lowerCase) ||
      product.price.toString().includes(lowerCase)
    );
  });

  useEffect(() => {
    handlegetAllProducts2();
  }, []);

  return (
    <div className="w-full min-h-[100vh] bg-gray-100 flex justify-center items-center">
      <div className="w-[90%] py-[30px] flex justify-center flex-col items-center ">
        <div className="w-[400px] h-[50px]  mb-[20px] flex justify-center items-center">
          <input
            placeholder="Search by name, category, etc"
            className=" border w-[80%] h-[80%] rounded-md outline-none text-[15px] pl-2"
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="grid grid-cols-1 gap-[100px]  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((el: any) => {
              console.log("reading products", el.data);

              return (
                <div
                  key={el.id}
                  className="min-h-[500px] bg-white p-2  rounded-[20px] shadow-sm outline-none"
                >
                  <div className="w-[full] h-[40%]  outline-none flex justify-center items-center ">
                    <img
                      className="w-[200px] h-[100px]  object-contain"
                      src={el.image || pic}
                      alt="picture"
                    />
                  </div>
                  <div className="w-[full] h-[30px] flex gap-1">
                    <span className="text-[15px] font-medium">Name:</span>
                    <p className="text-[13px]">{el.title.slice(0, 50)}</p>
                  </div>

                  <div className="w-[full] h-[25px] flex items-center gap-1">
                    <span className="text-[15px] font-medium">Category:</span>{" "}
                    <p className="text-[13px]">{el.category}</p>
                  </div>
                  <div className="w-[full] h-[25px] flex items-center gap-1">
                    <span className="text-[15px] font-medium">Price:</span>{" "}
                    <p className="text-[13px] text-[red]">${el.price}</p>
                  </div>
                  <div className="w-[full] h-[25px] flex items-center gap-1">
                    <span className="text-[15px] font-medium">Rating:</span>{" "}
                    <p className="text-[13px]">{el.rating.rate}</p>
                  </div>
                  <div className="w-[full] h-[70px]  items-center gap-1">
                    <span className="text-[15px] font-medium">
                      Description:
                    </span>{" "}
                    <p className="text-[13px]">
                      {el.description.slice(0, 200)}
                    </p>
                  </div>
                  <div className="w-full h-[40px] mt-[60px] flex justify-center items-center ">
                    <button className="py-2 text-[15px] text-[white] px-2 bg-blue-700 hover:bg-blue-500 cursor-pointer rounded-[10px]">
                      Add to cart
                    </button>
                  </div>
                </div>
              );
            })
          ) : (
            <div>No Current Products Available</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ShopPage;
