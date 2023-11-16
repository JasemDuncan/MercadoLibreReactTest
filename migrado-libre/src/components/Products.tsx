// import { getProducts } from "@/services";
import {type Product} from "@/types";

export function Products({products} :{products: Product[]}) {
  return (
    <ul className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))]">
      {
        products.map(({ id,thumbnail, title, currency_id, price}) => (
          <li key={id}>
            <img src={thumbnail} alt={title} />
            <h3>{title}</h3>
            <strong>{price.toLocaleString('es-AR',{
             currency: "ARS",
             style: "currency",
             })}</strong>
          </li>
        )
        )
      }
    )
    </ul>
  )
}