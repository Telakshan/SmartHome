import Categories from "../../Components/Categories/Categories";
import CATEGORIES_DUMMY from "./Assets/CATEGORIES_DUMMY";
import "./Landing.scss";

const Landing: React.FC = () => {
  return (
    <div className="landing">
      <div className="categories">
        {CATEGORIES_DUMMY.map(({ id, name, imageUrl, linkUrl }) => (
          <Categories
            key={id}
            name={name}
            imageUrl={imageUrl}
            linkUrl={linkUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default Landing;
