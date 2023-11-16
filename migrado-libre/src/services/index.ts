import {type Product } from "../types"
import { SELLER_ID, API_URL } from "@/config"

export const getProducts = (category?: string) => {
    const url = new URL(`${API_URL}/sites/MLA/search`);
    
    if(!SELLER_ID) throw new Error("No seller id found")

    url.searchParams.append("seller_id", SELLER_ID)

    if(category) url.searchParams.append("category", category);

    return fetch(url)
        .then(res => res.json() as Promise<{ results: Product[]}>)
        .then(res => {
            console.log(res.results)
            return res.results
        })
}