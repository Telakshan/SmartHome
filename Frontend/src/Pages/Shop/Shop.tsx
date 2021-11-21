import { ProductsContext } from "../../Hooks/Products";
import { useContext } from "react";
import CollectionOfProducts from "../../Components/CollectionOfProducts/CollectionOfProducts";

import "./Shop.scss";

const Shop: React.FC = () => {
  const { items } = useContext(ProductsContext);

  return (
    <div className="shop-container">
      <CollectionOfProducts
        title={"All products"}
        items={items.sort(() => Math.random() - 0.5)}
      />
    </div>
  );
};

export default Shop;
