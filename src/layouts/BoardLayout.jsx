export function BoardLayout({ children }) {
  return (
    <section className={`grid board__grid gap-4 overflow-auto`}>
      {children}
    </section>
  );
}
