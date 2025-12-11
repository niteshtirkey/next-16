
export default function RootLayout({ children }) {
  return (
    <>
        <header style={{ backgroundColor: "blue" }}>Main Header</header>
        {children}
        <footer style={{ backgroundColor: "yellow" }}>Main Footer</footer>
  </>
  );
}
