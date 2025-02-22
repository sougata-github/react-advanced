import ProductInfo, { Product } from "./ProductInfo";

interface Props {
  products?: Product[];
}

const ProductList = ({ products }: Props) => {
  if (!products) return <p>Loading...</p>;

  return (
    <div className="px-4">
      {products.map((product: Product) => (
        <ul key={product.title}>
          <ProductInfo {...product} />
        </ul>
      ))}
    </div>
  );
};

export default ProductList;
