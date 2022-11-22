import { useNavigate } from "react-router-dom";

import {
  DirectoryItemContainer,
  DirectoryBackgroundImage,
  DirectoryBody,
} from "./directory-item.style";

const DirectoryItem = ({ category }) => {
  const { imageUrl, title, route } = category;
  const navigate = useNavigate();

  const onNavigateHandler = () => navigate(route);

  return (
    <DirectoryItemContainer onClick={onNavigateHandler}>
      <DirectoryBackgroundImage
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></DirectoryBackgroundImage>
      {/* Commented in the directory-item.style */}
      {/* <DirectoryBackgroundImage imageUrl={imageUrl} ></DirectoryBackgroundImage> */}
      <DirectoryBody>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </DirectoryBody>
    </DirectoryItemContainer>
  );
};

export default DirectoryItem;
