import { History } from "history";
import { useContext, useEffect } from "react";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { ApplicationContext } from "../../Hooks/ApplicationContext";
import "./Categories.scss";

interface CategoriesProps {
  name: string;
  imageUrl: string;
  linkUrl: string;
  history: History;
}

const Categories: React.FC<CategoriesProps & RouteComponentProps> = ({
  name,
  imageUrl,
  linkUrl,
  history,
}) => {
  const { isShowing, dropDownActive } = useContext(ApplicationContext);

  useEffect(() => {}, [isShowing]);

  const goToLink = () => {
    if (!isShowing && !dropDownActive) {
      history.push(`shop/${linkUrl}`);
    }
  };

  return (
    <>
      <div
        className={`${
          isShowing ? "category-item-inactive" : "category-item"
        }`}
        style={{ backgroundImage: `url(${imageUrl})` }}
        onClick={() => goToLink()}
      >
        <div className="category-item-inner">
          <div>{name}</div>
        </div>
      </div>
    </>
  );
};

export default withRouter(Categories);
