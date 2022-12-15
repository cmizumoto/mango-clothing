import "./hero.styles";
import { BUTTON_TYPE_CLASSES } from "../button/button.component";
import Button from "../button/button.component";
import { HeroContainer, HeroBackgroundImage, HeroText } from "./hero.styles";

const Hero = () => {
  return (
    <HeroContainer>
      <HeroBackgroundImage>
        <HeroText>
          <h1>Mango Clothing</h1>
          <p>Giving your life a new look</p>
          <Button buttonType={BUTTON_TYPE_CLASSES.inverted} to="/shop">
            Shop Now
          </Button>
        </HeroText>
      </HeroBackgroundImage>
    </HeroContainer>
  );
};

export default Hero;
