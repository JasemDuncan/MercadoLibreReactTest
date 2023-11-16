import {getProducts} from "@/services"
import {Products} from "@/components/Products"

export default async function ProductsPage({
    params: {
        segments,
    },
    }:
    {
        params: {segments?: string[]};
    }){
    const category = segments?.[0];
    const products  = await getProducts(category);
    return <Products products={products} />
}