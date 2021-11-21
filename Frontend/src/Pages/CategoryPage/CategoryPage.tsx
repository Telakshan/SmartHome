import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CollectionOfProducts from "../../Components/CollectionOfProducts/CollectionOfProducts";
import Loading from "../../Components/Loading/Loading";
import { Product } from "../../Models/Product";
import { productUrl } from "../../api/constants";
import "./CategoryPage.scss";

const CategoryPage: React.FC = () => {
  const { categoryId } = useParams<{ categoryId?: string }>();
  const [isLoading, setIsLoading] = useState(true);
  const [categoryProducts, setCategoryProducts] = useState<Product[]>([]);

  let id: number;
  let categoryName: string;

  switch (categoryId) {
    case "security":
      id = 4;
      categoryName = "Security cameras and Surveillance";
      break;

    case "lighting":
      id = 2;
      categoryName = "Lighting";
      break;

    case "kitchen":
      id = 3;
      categoryName = "Kitchen and Laundry";
      break;

    case "speakers":
      id = 1;
      categoryName = "Speakers and Displays";
      break;

    default:
      id = 1;
      categoryName = "Speakers and Displays";
  }

  useEffect(() => {
    axios.get(`${productUrl}/search/findByCategoryId?id=${id}`).then((res) => {
      setCategoryProducts(res.data._embedded.products);
      setIsLoading(false);
    });
  }, [id]);

  return (
    <div className="category-page">
      {isLoading && <Loading />}
      <CollectionOfProducts title={categoryName} items={categoryProducts} />
    </div>
  );
};

export default CategoryPage;
