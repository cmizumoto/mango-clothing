import { AboutUsContainer, Description } from "./about-us.styles";
import { Title } from "../directory/directory.styles";
import { Fragment } from "react";

const AboutUs = () => {
  return (
    <Fragment>
      <Title>ABOUT US</Title>
      <AboutUsContainer>
        <Description>
          <h3 className="desc-title">What the Mango?</h3>
          <p>
            Here in Mango we value nature first in our resources, planting new trees for every piece
            of clothing we sell. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt eaque
            autem, qui in animi omnis eveniet cumque optio perferendis eligendi? Lorem, ipsum dolor
            sit amet consectetur adipisicing elit. Ad est suscipit aperiam ipsa, perferendis fugit
            deleniti nihil libero totam consequuntur. Sequi, sit? Sunt ad obcaecati vel placeat,
            reiciendis nam aut ab amet nisi doloribus nihil, animi earum, quod facere at! Officia,
            quibusdam corrupti nam quas perspiciatis explicabo commodi facere vero.
          </p>
        </Description>
      </AboutUsContainer>
    </Fragment>
  );
};

export default AboutUs;
