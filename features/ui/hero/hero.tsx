import { color } from "@styles/theme";
import styled from "styled-components";

const HeroContainer = styled.main`
  background-color: ${color("gray", 50)};
  display: flex;

  justify-content: center;
  flex-direction: column;
  text-align: center;
`;

const HeroText = styled.div`
  font-weight: 600;
  font-size: 60px;
  text-align: center;
  line-height: 72px;
  color: ${color("gray", 900)};
  margin: 90px 0px 24px 0px;
`;

const HeroSubtext = styled.div`
  font-weight: 400px;
  font-size: 20px;
  line-height: 30px;
  text-align: center;
  color: ${color("gray", 500)};
  margin-bottom: 70px;
  max-width: 650px;
  align-self: center;
`;
const HeroImageContainer = styled.div`
  align-self: center;
  max-width: 755px;
`;

const HeroImage = styled.img`
  max-width: 750px;
  align-self: center;
`;

interface HeroProps {
  title: string;
  description: string;
  image: string;
}

export const Hero = ({ title, description, image }: HeroProps) => {
  return (
    <HeroContainer>
      <HeroText>{title}</HeroText>
      <HeroSubtext>{description}</HeroSubtext>
      <HeroImage src={image} />
    </HeroContainer>
  );
};
