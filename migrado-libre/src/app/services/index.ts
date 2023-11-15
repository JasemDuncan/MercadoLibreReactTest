import {type Product } from "../types"

export const getProducts = () => {
    return fetch(`https://api.mercadolibre.com/sites/MLA/search?seller_id=179571326`)
        .then(res => res.json() as Promise<{ results: Product[]}>)
        .then(res => {
            console.log(res.results)
            return res.results
        })
}