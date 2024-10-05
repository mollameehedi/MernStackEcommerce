import Banner from "@/component/banner"
import Categorylist from "@/component/categorylist"
import Product from "@/component/product"


async function getData() {
  const res = await fetch('http://localhost:8000/api/v1/product/allproducts')
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
 
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}

export default async function Home() {
  const data = await getData()
  console.log(data)
  return (
    <>
    <Banner/>
    <Categorylist/>
    <Product item={data}/>
       
    </>
  );
}