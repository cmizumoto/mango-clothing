import { NewsletterContainer, NewsletterContent } from "./newsletter.styles";

const Newsletter = () => {
  return (
    <NewsletterContainer>
      <NewsletterContent>
        <h4>Subscribe to our Newsletter</h4>
        <p>Get news about our newest products, promotions, events, and more!</p>
        <input type="email" />
      </NewsletterContent>
    </NewsletterContainer>
  );
};

export default Newsletter;
