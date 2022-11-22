import { Link } from "react-router-dom";

import ProductCard from "../product-card/product-card.component";

import { CategoryPreviewContainer, Preview } from "./category-preview.styles";

const CategoryPreview = ({ title, products }) => {
  return (
    <CategoryPreviewContainer>
      <h2>
        <Link to={title}>
          <span>{title.toUpperCase()}</span>
        </Link>
      </h2>
      <Preview>
        {products
          .filter((_, index) => index < 4)
          .map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
      </Preview>
    </CategoryPreviewContainer>
  );
};

export default CategoryPreview;
