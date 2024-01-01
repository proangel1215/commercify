/* eslint-disable react/prop-types */
// import { useParams } from "react-router-dom";

import Similarproducts from "./similarproducts";
import ProductDetails from "./productDetails";
import ProductDetailPlaceholder from "./productDetailPlaceholder";
import TrendingProductsPlaceholder from "../HomePage/Placeholders/trendingProductsPlaceholder";
import { useParams } from "react-router";

export default function ProductDetail({ loading, products, addToCart }) {
  let { id } = useParams();

  let product = products.find((product) => {
    return +product.id === +id;
  });

  return (
    <div>
      {loading ? (
        <div>
          <ProductDetailPlaceholder />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mx-auto p-4">
            <TrendingProductsPlaceholder />
          </div>
        </div>
      ) : (
        <>
          <ProductDetails
            productImg={product.image}
            title={product.title}
            price={product.price}
            description={product.description}
            category={product.category}
            productId={id}
            addToCart={addToCart}
          />
          <Similarproducts
            category={product.category}
            currentProductId={product.id}
          />
        </>
      )}
    </div>
  );
}