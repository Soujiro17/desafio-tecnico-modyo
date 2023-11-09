import { Link } from "../components/Link";
import { ArrowRightCircle } from "../components/icons/ArrowRightCircle";

export function Start() {
  return (
    <main className="bg-gray-200 h-screen flex items-center justify-center flex-col">
      <img src="/modyo.png" alt="modyo" />
      <h1 className="text-5xl	max-w-3xl text-gray-900 text-center uppercase font-bold">
        Bienvenido al desafío técnico de{" "}
        <span className="text-green-400">Modyo</span>!
      </h1>
      <Link
        className="mt-5 w-48 uppercase"
        href="/start"
        title="Comenzar - Start"
      >
        Comenzar <ArrowRightCircle className="inline m-auto -translate-y-0.5" />
      </Link>
    </main>
  );
}
