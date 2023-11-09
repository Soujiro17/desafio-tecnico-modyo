export function MainLayout({ children }) {
  return (
    <main className="bg-gray-200 h-screen flex items-center justify-center flex-col">
      {children}
    </main>
  );
}
