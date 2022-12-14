import { Fragment } from "react";
import { useSelector } from "react-redux";

import {
  selectCategoriesMap,
  selectCategoriesIsLoading,
} from "../../store/categories/category.selector";

import CategoryPreview from "../../components/category-preview/category-preview.component";
import Spinner from "../../components/spinner/spinner.component";
import Footer from "../../components/footer/footer.component";

const CategoriesPreview = () => {
  const categoriesMap = useSelector(selectCategoriesMap);
  const isLoading = useSelector(selectCategoriesIsLoading);
  /* Object keys allow us to convert the object keys into an array, therefore use map and get everything that we need. Also possible to get entries and values, but in this case titles is more than enough */
  return (
    <Fragment>
      {isLoading ? (
        <Spinner />
      ) : (
        Object.keys(categoriesMap).map((title) => {
          // loop through the categories map title and pass the props to the CategoryPreview Component
          const products = categoriesMap[title];
          return <CategoryPreview key={title} title={title} products={products} />;
        })
      )}
      <Footer></Footer>
    </Fragment>
  );
};

export default CategoriesPreview;
