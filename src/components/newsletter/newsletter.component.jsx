import { NewsletterContainer, NewsletterContent } from "./newsletter.styles";
import Button from "../button/button.component";
import { BUTTON_TYPE_CLASSES } from "../button/button.component";

const Newsletter = () => {
  return (
    <NewsletterContainer>
      <h4>NEWS</h4>
      <NewsletterContent>
        <h5>Subscribe to our Newsletter</h5>
        <p>
          Enter your email and stay up to date about our newest products, promotions, events, and
          more!
        </p>
        <input type="email" placeholder="Please enter your email here" />
        <Button buttonType={BUTTON_TYPE_CLASSES.inverted}>Submit</Button>
      </NewsletterContent>
    </NewsletterContainer>
  );
};

export default Newsletter;
