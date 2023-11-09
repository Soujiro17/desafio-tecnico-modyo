import { Button } from "../components/Button";
import { FormGroup } from "../components/FormGroup";
import { ArrowRightCircle } from "../components/icons/ArrowRightCircle";
import { MainLayout } from "../components/layouts/MainLayout";
import { useLanguage } from "../hooks/useLanguage";
import { useLocalStorage } from "../hooks/useLocalStorage";

export function Welcome() {
  const [username, setUsername] = useLocalStorage("username", "");

  const handleUsername = (e) => setUsername(e.target.value);

  const onSubmit = (e) => {
    e.preventDefault();
    alert("test");
  };

  const { language } = useLanguage();

  return (
    <MainLayout>
      <form
        className="flex flex-col items-center justify-center"
        onSubmit={onSubmit}
      >
        {/* Add button to change language from spanish to english */}
        <img src="/modyo.png" alt="modyo" />
        <h1 className="text-5xl	max-w-3xl text-gray-900 text-center uppercase font-bold">
          {language.messages.WELCOME_MESSAGE}{" "}
          <span className="text-green-400">Modyo</span>!
        </h1>
        <hr className="bg-gray-600 h-0.5 w-1/2 mt-4 mb-4" />
        <FormGroup
          label={language.messages.SET_USERNAME_BUTTON}
          onChange={handleUsername}
          value={username}
        />
        <Button
          type="submit"
          className="mt-5 w-48 uppercase"
          title="Comenzar - Start"
        >
          {language.messages.WELCOME_BUTTON_MESSAGE}{" "}
          <ArrowRightCircle className="inline m-auto -translate-y-0.5" />
        </Button>
      </form>
    </MainLayout>
  );
}
