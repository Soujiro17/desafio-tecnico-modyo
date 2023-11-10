import { useState, useCallback, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { useLanguage } from "../hooks/useLanguage";
import { FormGroup } from "./FormGroup";
import { getCards } from "../lib/cards";
import { shuffle } from "../lib/shuffle";
import { Line } from "./Line";
import { BoardCard } from "./BoardCard";

export function Board() {
  const [cardsOnBoard, setCardsOnBoard] = useState(5);
  const [firstClicked, setFirstClicked] = useState(null);
  const [secondClicked, setSecondClicked] = useState(null);
  const [badAttempts, setBadAttemps] = useState(0);
  const [goodAttempts, setGoodAttemps] = useState(0);
  const [board, setBoard] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const { language } = useLanguage();

  const { data: cards, isLoading: isQueryLoading } = useQuery({
    queryFn: getCards,
    queryKey: ["cards"],
  });

  const handleCardsOnBoard = (e) => setCardsOnBoard(e.target.value);

  const handleClicked = (value) => {
    if (firstClicked) {
      setSecondClicked(value);
    } else {
      setFirstClicked(value);
    }
  };

  const checkCards = () => {
    if (firstClicked.value === secondClicked.value) {
      setGoodAttemps((prev) => prev + 1);
      turnCard(firstClicked.id);
      turnCard(secondClicked.id);
    } else {
      setBadAttemps((prev) => prev + 1);
    }

    clearCards();
  };

  const generateBoard = useCallback(() => {
    const subCards = cards.entries.slice(0, cardsOnBoard);

    const boardArray = subCards.map((card) => {
      const baseCards = {
        id: card.meta.uuid,
        image: card.fields.image.url,
        value: card.meta.name,
        hidden: true,
        completed: false,
      };
      return [baseCards, { ...baseCards, id: `${baseCards.id}2` }];
    });

    setGoodAttemps(0);
    setBadAttemps(0);
    setBoard(shuffle(boardArray.flat()));
  }, [cards, cardsOnBoard]);

  const turnCard = (id) => {
    setBoard((cards) =>
      cards.map((card) =>
        card.id === id ? { ...card, hidden: false, completed: true } : card
      )
    );
  };

  const clearCards = () => {
    setFirstClicked(null);
    setSecondClicked(null);
  };

  useEffect(() => {
    if (isQueryLoading) {
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
    }

    // When the component is dismounted and this code is uncommented,
    // the "isLoading" var will be always true, because setIsLoading
    // will not be executed.
    // return () => {
    //   console.log("cleaning");
    //   clearTimeout(timeout);
    // };
  }, [isQueryLoading]);

  useEffect(() => {
    if (cards) {
      generateBoard();
    }
  }, [cards, generateBoard]);

  useEffect(() => {
    if (firstClicked && secondClicked) {
      setTimeout(() => {
        checkCards();
      }, 500);
    }
  }, [firstClicked, secondClicked]);

  if (isLoading) return <p>Loading...</p>;

  return (
    <div className="px-2">
      <FormGroup
        inputBorderColor="blue"
        type="number"
        min={3}
        onChange={handleCardsOnBoard}
        value={cardsOnBoard}
        label={language.messages.BOARD_CARD_LIMIT_MESSAGE}
      />
      <Line />
      <div className="flex items-center justify-center w-full gap-4 mb-6">
        <p className="text-xl">
          <span className="text-red-600">
            {language.messages.BOARD_BAD_TRIES}:
          </span>{" "}
          {badAttempts}
        </p>
        <p className="text-xl">
          <span className="text-green-600 text-xl">
            {language.messages.BOARD_GOOD_TRIES}:
          </span>{" "}
          {goodAttempts}
        </p>
      </div>
      <section className={`grid card-grid justify-center gap-4 overflow-auto`}>
        {board.map((card) => {
          const isActive =
            firstClicked === card || secondClicked === card || !card.hidden;

          return (
            <BoardCard
              key={card.id}
              id={card.id}
              image={card.image}
              isActive={isActive}
              onClick={card.completed ? () => {} : () => handleClicked(card)}
            />
          );
        })}
      </section>
    </div>
  );
}
