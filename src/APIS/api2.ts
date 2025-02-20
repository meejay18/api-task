const URL = "https://fakestoreapi.com";

export const getAllProducts2 = async (products: any) => {
  try {
    const response = await fetch(`${URL}/${products}`, {
      method: "GET",
      headers: {
        "Content-type": "application.json",
      },
    });

    const data = response.json();
    return data;
  } catch (error) {
    console.error();
    return error;
  }
};
