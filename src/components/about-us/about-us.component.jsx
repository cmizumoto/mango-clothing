import { AboutUsContainer, HalfImage, Description } from "./about-us.styles";
import { Title } from "../directory/directory.styles";
import { Fragment } from "react";

const AboutUs = () => {
  return (
    <Fragment>
      <Title>ABOUT US</Title>
      <AboutUsContainer>
        <HalfImage
          src="https://images.unsplash.com/photo-1630695669474-2abc5258a8d9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
          alt="forest man with water bottle"
        />
        <Description>
          <h3>What the Mango?</h3>
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
