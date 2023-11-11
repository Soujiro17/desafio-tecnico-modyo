export function BoardLayout({ children }) {
  return (
    <section className={`grid card-grid gap-4 overflow-auto`}>
      {children}
    </section>
  );
}
