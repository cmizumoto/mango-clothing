import { useContext, Fragment } from "react";

import { CategoriesContext } from "../../contexts/categories.context";
import CategoryPreview from "../../components/category-preview/category-preview.component";

const CategoriesPreview = () => {
  const { categoriesMap } = useContext(CategoriesContext);
  return (
    <Fragment>
      {/* Object keys allow us to convert the object keys into an array, therefore use map and get everything that we need. Also possible to get entries and values, but in this case titles is more than enough */}
      {Object.keys(categoriesMap).map((title) => {
        // loop through the categories map title and pass the props to the CategoryPreview Component
        const products = categoriesMap[title];
        return <CategoryPreview key={title} title={title} products={products} />;
      })}
    </Fragment>
  );
};

export default CategoriesPreview;
