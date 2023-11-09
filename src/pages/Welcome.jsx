import { Link } from "../components/Link";
import { ArrowRightCircle } from "../components/icons/ArrowRightCircle";
import { MainLayout } from "../components/layouts/MainLayout";
import { useLanguage } from "../hooks/useLanguage";

export function Welcome() {
  const { language } = useLanguage();

  return (
    <MainLayout>
      {/* Add button to change language from spanish to english */}
      <img src="/modyo.png" alt="modyo" />
      <h1 className="text-5xl	max-w-3xl text-gray-900 text-center uppercase font-bold">
        {language.messages.WELCOME_MESSAGE}{" "}
        <span className="text-green-400">Modyo</span>!
      </h1>
      <Link
        className="mt-5 w-48 uppercase"
        href="/start"
        title="Comenzar - Start"
      >
        {language.messages.WELCOME_BUTTON_MESSAGE}{" "}
        <ArrowRightCircle className="inline m-auto -translate-y-0.5" />
      </Link>
    </MainLayout>
  );
}
