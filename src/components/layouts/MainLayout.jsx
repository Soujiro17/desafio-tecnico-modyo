export function MainLayout({ children }) {
  return (
    <main className="bg-gray-200 min-h-screen pt-20 pb-10 flex items-center justify-center flex-col">
      {children}
    </main>
  );
}
