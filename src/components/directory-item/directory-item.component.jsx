import {
  DirectoryItemContainer,
  DirectoryBackgroundImage,
  DirectoryBody,
} from "./directory-item.style";

const DirectoryItem = ({ category }) => {
  const { imageUrl, title } = category;
  return (
    <DirectoryItemContainer>
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
