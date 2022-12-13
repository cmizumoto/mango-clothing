/* 
    3 types of buttons
    - default
    - invert
    - google sign
*/
import { BaseButton, GoogleSignInButton, InvertedButton, ButtonSpinner } from "./button.styles.jsx";

// After we refactored the SASS style into styped components
import "./button.styles.jsx";

/* 
  Now we can export this object and use it in other files.
  Since we are exporting this object, VSCode will give information of the objects stored, avoiding errors and keeping track of the styles already added
*/
export const BUTTON_TYPE_CLASSES = {
  base: "base",
  google: "google-sign-in",
  inverted: "inverted",
};

/* 
  This function will give which style will be displayed, default being the BaseButton component
*/
const getButton = (buttonType = BUTTON_TYPE_CLASSES.base) => {
  return {
    [BUTTON_TYPE_CLASSES.base]: BaseButton,
    [BUTTON_TYPE_CLASSES.google]: GoogleSignInButton,
    [BUTTON_TYPE_CLASSES.inverted]: InvertedButton,
  }[buttonType];
};

/* 
  Finally we use the getButton function to define which button was selected and forward the props and children like any other component
*/
const Button = ({ children, buttonType, isLoading, ...otherProps }) => {
  const CustomButton = getButton(buttonType);
  return (
    <CustomButton disabled={isLoading} {...otherProps}>
      {isLoading ? <ButtonSpinner /> : children}
    </CustomButton>
  );
};

export default Button;
