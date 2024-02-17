import { useState } from "react";
import { cardList, generatedCardList } from "./cardData";
import Card from "./Card";
import { Container, ButtonContainer, DrawButton } from "./style";

const MainLayout = () => {
  const [cards, setCards] = useState(generatedCardList || cardList || []);
  const [selectedCards, setSelectedCards] = useState([]);
  const handleDraw = () => {
    if (!cards.length) {
      alert("No cards left to draw, please reload to draw again.");
    }
    const list = getRandomDrawnCards();
    setSelectedCards([...list, ...selectedCards]);
  };

  const getRandomDrawnCards = () => {
    const randomList = [];
    let i = 5;
    while (i) {
      if (cards.length) {
        const randomNumber = Math.floor(Math.random() * cards.length);
        randomList.push(cards[randomNumber]);
        cards.splice(randomNumber, 1);
        setCards(cards);
        i--;
      } else {
        i = 0;
      }
    }
    return randomList;
  };

  const removeCardOnClick = (cardId) => {
    selectedCards.splice(
      selectedCards.findIndex((card) => card.id === cardId),
      1
    );
    setSelectedCards([...selectedCards]);
  };

  return (
    <>
      <ButtonContainer>
        <DrawButton onClick={handleDraw}>Draw</DrawButton>
      </ButtonContainer>
      <Container>
        {selectedCards.map((card) => (
          <Card key={card.id} cardInfo={card} handleClick={removeCardOnClick} />
        ))}
      </Container>
    </>
  );
};

export default MainLayout;
