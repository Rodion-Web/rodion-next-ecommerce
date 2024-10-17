"use client";

import CategoryList from "@/components/CategoryList";
import ProductList from "@/components/ProductList";
import { WixClientContext } from "@/context/wixContext";
import { useContext, useEffect } from "react";

const HomePage = () => {
  const wixClient = useContext(WixClientContext);

  useEffect(() => {
    const getProducts = async () => {
      const res = await wixClient.products.queryProducts().find();

      console.log(res);
    };

    getProducts();
  }, [wixClient]);

  return (
    <div className="">
      <div className="mt-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
        <h1 className="text-2xl">Featured Products</h1>
        <ProductList />
      </div>
      <div className="mt-24">
        <h1 className="text-2xl px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 mb-12">
          Categories
        </h1>
        <CategoryList />
      </div>
      <div className="mt-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
        <h1 className="text-2xl">New Products</h1>
      </div>
    </div>
  );
};

export default HomePage;
