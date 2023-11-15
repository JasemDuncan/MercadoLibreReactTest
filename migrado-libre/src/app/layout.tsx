import type {Metadata} from "next";
import { getProducts } from "./services";
import "./globals.css";

export const metadata: Metadata = {
  title: "Migrado Libre",
  description: "La tienda de Don Miguel, libre de amarillos",
};

const Products = (products) => {
  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(2\50px,1fr))]"></div>
  )
}

export default async function RootLayout({children}: {children: React.ReactNode}) {
  const products = await getProducts()
  console.log(products)
  return (
    <html lang="en">
      <body className="container m-auto grid min-h-screen grid-rows-[auto,1fr,auto] px-4">
        <header className="text-xl font-bold leading-[3rem]">Migrado Libre</header>
        <main className="py-8">
          {children}
        </main>
        <footer className="text-center leading-[3rem] opacity-70">
          © {new Date().getFullYear()} Don Miguel
        </footer>
      </body>
    </html>
  )