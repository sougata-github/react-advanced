export interface Product {
  title: string;
  description: string;
  price: string;
  image: string;
}

const ProductInfo = ({ title, description, price, image }: Product) => {
  return (
    <div>
      <div className="flex items-center w-[30rem] m-[2rem] bg-white shadow rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300 px-5 border border-black/10 py-4 max-w-xl gap-8 cursor-pointer">
        <img
          src={image}
          alt={title}
          className="size-28 object-cover rounded-t-lg"
        />

        <div className="flex flex-col">
          <h2 className="text-xl font-semibold text-gray-800 mt-4 px-4">
            {title}
          </h2>
          <p className="text-xs text-gray-600 mt-2 px-4">{description}</p>
          <p className="text-lg font-bold text-gray-900 mt-3 px-4">${price}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
