import { LogoModyo } from "../LogoModyo";

export function MainLayout({ children, logoHeight, logoWidth }) {
  return (
    <main className="bg-gray-200 min-h-screen pt-20 pb-10 px-3 overflow-auto gap-3 flex items-center justify-center flex-col">
      <LogoModyo width={logoWidth} height={logoHeight} />
      {children}
    </main>
  );
}
