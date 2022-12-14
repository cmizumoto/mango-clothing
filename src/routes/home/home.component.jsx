import { Fragment } from "react";
import Hero from "../../components/hero/hero.component";
import Directory from "../../components/directory/directory.component";
import AboutUs from "../../components/about-us/about-us.component";
import Footer from "../../components/footer/footer.component";
import Newsletter from "../../components/newsletter/newsletter.component";

const Home = () => {
  return (
    <Fragment>
      <Hero />
      <Directory />
      <AboutUs />
      <Newsletter />
      <Footer />
    </Fragment>
  );
};

export default Home;
