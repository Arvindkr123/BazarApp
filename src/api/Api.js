import axios from "axios";

export async function productsData() {
  const products = await axios(
    "https://fakestoreapiserver.reactbd.com/products"
  );
  return products.data;
}
