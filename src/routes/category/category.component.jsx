import { useState, useEffect, Fragment } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  selectCategoriesMap,
  selectCategoriesIsLoading,
} from "../../store/categories/category.selector";

import ProductCard from "../../components/product-card/product-card.component";
import Spinner from "../../components/spinner/spinner.component";
import { CategoryTitle, CategoryContainer } from "./category.styles";
import Footer from "../../components/footer/footer.component";

const Category = () => {
  const { category } = useParams();
  const categoriesMap = useSelector(selectCategoriesMap);
  const isLoading = useSelector(selectCategoriesIsLoading);
  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <Fragment>
      <CategoryTitle>{category}</CategoryTitle>
      {isLoading ? (
        <Spinner></Spinner>
      ) : (
        <CategoryContainer>
          {/* Since we are trying to get the products Async, the code breaks and says we cannot loop
      through and empty array. To avoid this, we use a safe guard that only render the products and
    map it, if it is not undefined. */}
          {products &&
            products.map((product) => {
              return <ProductCard key={product.id} product={product} />;
            })}
        </CategoryContainer>
      )}
      <Footer></Footer>
    </Fragment>
  );
};

export default Category;
