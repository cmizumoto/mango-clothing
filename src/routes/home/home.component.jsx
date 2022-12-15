import { Fragment } from "react";
import Hero from "../../components/hero/hero.component";
import Directory from "../../components/directory/directory.component";
import AboutUs from "../../components/about-us/about-us.component";

const Home = () => {
  return (
    <Fragment>
      <Hero />
      <Directory />
      <AboutUs />
    </Fragment>
  );
};

export default Home;
