


import {Products} from "@/components/Products"
import {getProducts} from "../services"

export default async function HomePage() {
  const products = await getProducts();

  return <Products products={products} />;
}

