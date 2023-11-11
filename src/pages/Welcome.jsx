import { useNavigate } from "react-router-dom";
import { Button } from "../components/Button";
import { FormGroup } from "../components/FormGroup";
import { ArrowRightCircleIcon } from "../components/icons/ArrowRightCircle";
import { MainLayout } from "../layouts/MainLayout";
import { useLanguage } from "../hooks/useLanguage";
import { useUser } from "../hooks/useUser";
import { Line } from "../components/Line";

function Welcome() {
  const { language } = useLanguage();
  const { username, setUsername } = useUser();

  const navigate = useNavigate();

  const handleUsername = (e) => setUsername(e.target.value);

  const onSubmit = (e) => {
    e.preventDefault();

    if (!username) return alert(language.messages.ERROR_NOT_USERNAME);

    navigate("/game");
  };

  return (
    <MainLayout logoWidth={300} logoHeight={200}>
      <form
        className="flex flex-col items-center justify-center w-full"
        onSubmit={onSubmit}
      >
        {/* Add button to change language from spanish to english */}
        <h1 className="text-5xl	max-w-3xl text-gray-900 text-center uppercase font-bold">
          {language.messages.WELCOME_MESSAGE}{" "}
          <span className="text-green-400">Modyo</span>!
        </h1>
        <Line width="1/2" />
        <FormGroup
          label={language.messages.SET_USERNAME_BUTTON}
          onChange={handleUsername}
          value={username}
          required
        />
        <Button
          type="submit"
          className="mt-5 w-48 uppercase"
          aria-label={language.messages.WELCOME_BUTTON_MESSAGE}
          title={language.messages.WELCOME_BUTTON_MESSAGE}
        >
          {language.messages.WELCOME_BUTTON_MESSAGE}{" "}
          <ArrowRightCircleIcon className="inline m-auto -translate-y-0.5" />
        </Button>
      </form>
    </MainLayout>
  );
}

export default Welcome;
