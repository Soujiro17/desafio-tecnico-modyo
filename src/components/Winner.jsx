/* eslint-disable react/display-name */
import ReactDOM from "react-dom";
import { Card } from "./Card";
import { useLanguage } from "../hooks/useLanguage";
import { useUser } from "../hooks/useUser";
import { forwardRef } from "react";
import { Button } from "./Button";

export const Winner = forwardRef(({ goodAttempts, badAttempts }, ref) => {
  const { language } = useLanguage();
  const { username } = useUser();

  const closeModal = () => {
    document.startViewTransition(() => {
      ref.current.style.display = "none";
    });
  };

  return ReactDOM.createPortal(
    <div
      ref={ref}
      className="hidden py-5 modal w-screen h-screen top-0 left-0 items-center justify-center fixed z-10 overflow-hidden after:absolute after:h-full after:w-full after:top-0 after:left-0 after:-z-10 after:opacity-70 after:bg-gray-200"
    >
      <Card className="p-12 text-center relative">
        <Button
          onClick={closeModal}
          className="bg-red-600 border-red-700 absolute right-0 top-0 rounded-full w-10 h-10 translate-x-3 -translate-y-3 hover:opacity-100 hover:bg-red-400 hover:border-red-500"
        >
          X
        </Button>
        <h2 className="text-3xl font-bold">
          ¡{language.messages.GAME_CONGRATULATIONS_MESSAGE_1} {username},{" "}
          {language.messages.GAME_CONGRATULATIONS_MESSAGE_2}! 🎉
        </h2>
        <p className="text-xl">{language.messages.GAME_YOUR_STATS_MESSAGE}</p>
        <hr className="my-5" />
        <section className="">
          <img
            className="w-full bg-gray-200"
            src="https://cataas.com/cat/gif?type=medium"
            alt="cat-winner"
          />
          <div className="flex justify-center gap-3 mt-5">
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
        </section>
      </Card>
    </div>,
    document.getElementById("Modal")
  );
});
