import { useEffect, useState } from "react";
import { getAllProducts } from "../../../APIS/api1";
import pic from "../../../assets/react.svg";

const ProductsPage = () => {
  const [products, setProducts] = useState<any>([]);

  const endpoint = "products";

  const handleGetAllProducts = () => {
    getAllProducts(endpoint).then((res) => {
      setProducts(res || []);
      console.log(".... ", res);

      return res.data;
    });
  };

  useEffect(() => {
    handleGetAllProducts();
  }, []);

  return (
    <div className="w-full min-h-[100vh] text-gray-700 bg-gray-50 flex justify-center items-center">
      <div className="w-[95%] py-[100px] bg-[red] flex justify-center items-center">
        <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[10px] w-[90%]">
          {products?.length > 0 ? (
            products?.map((props: any) => (
              <div
                key={props.id}
                className="min-h-[320px] bg-white border shadow-sm rounded-md"
              >
                <div className="w-full mb-3 border rounded-[8px] h-[40%]">
                  <img
                    src={props.image || pic}
                    alt="product_name"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="flex justify-start items-center gap-4">
                  <h1 className="text-[25px]">Title: </h1>
                  <h1 className="font-semibold text-[15px]">{props.title}</h1>
                </div>
                <div>
                  <h1 className="text-[15px]">
                    <span className="text-[25px]"> Price: </span>${props.price}
                  </h1>
                  <h1 className="text-[15px]">
                    <span className="text-[25px]"> Category: </span>
                    {props.category}
                  </h1>
                  <h1 className="text-[15x]">
                    <span className="text-[25px]"> Description: </span>Lorem
                    {props.description}
                  </h1>
                  <h1 className="text-[15px]">
                    <span className="text-[25px]"> Rating: </span>

                    <div>
                      <p>{props.rating.rate}</p>
                      <p>{props.rating.count}</p>
                    </div>
                  </h1>
                </div>
              </div>
            ))
          ) : (
            <div>No Current Products Available</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
