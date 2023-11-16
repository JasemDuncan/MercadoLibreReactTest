import {getProducts} from "@/services"
import {Products} from "@/components/Products"

export default async function ProductsPage( 
    {params: {category}}:
    {params: {category: string}}
) {
    const products  = await getProducts(category);
    return <Products products={products} />
}