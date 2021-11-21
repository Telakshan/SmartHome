import React from "react";
import ProductPreview from "../ProductPreview/ProductPreview";

import "./CollectionOfProducts.scss";

interface CollectionOfProductsProps{
  title: string;
  items: object[]
}

const CollectionOfProducts: React.FC<CollectionOfProductsProps> = ({ title, items }) => {
  return (
    <div className="collection-container">
      <h1 className='title'>{title}</h1>
      <div className="products">
        {items.map((item: any) => (
          <ProductPreview
            key={item.id}
            item={item}
          />
        ))}
      </div>
    </div>
  );
};

export default CollectionOfProducts;
