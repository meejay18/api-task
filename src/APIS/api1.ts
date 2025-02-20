const URL = "https://fakestoreapi.com";

export const getAllProducts = async (products: any) => {
  try {
    const response = await fetch(`${URL}/${products}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = response.json();
    return data;
  } catch (error) {
    console.error();
    return error;
  }
};
