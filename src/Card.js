import { ImageSection, NameSection, CardContainer } from "./style";
//to test git functioality
const Card = ({ cardInfo, handleClick }) => {
  const { id, name, image, colorFamily } = cardInfo;
  return (
    <CardContainer onClick={() => handleClick(id)}>
      <NameSection color={colorFamily}>{name}</NameSection>
      <ImageSection color={colorFamily}>{image}</ImageSection>
    </CardContainer>
  );
};

//to test git functioality
export default Card;
