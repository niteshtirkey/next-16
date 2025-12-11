
export default function RootLayout({ children }) {
  return (
    <>
        <header style={{ backgroundColor: "red" }}>Main Header</header>
        {children}
        <footer style={{ backgroundColor: "brown" }}>Main Footer</footer>
  </> 
  );
}
