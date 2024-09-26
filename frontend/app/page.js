import Category from "@/component/category";
import Product from "@/component/product";
import SubCategory from "@/component/subcategory";
import Image from "next/image";

export default async  function Home() {

  return (
    <>
    <h1 className="bg-slate-100 text-blue-800">Category</h1>
    <Category/>
    <h1 className="bg-slate-100 text-blue-800">Sub Category</h1>
    <SubCategory/>
    <h1 className="bg-slate-100 text-blue-800">Product</h1>
    <Product/>
    </>
  );
}
