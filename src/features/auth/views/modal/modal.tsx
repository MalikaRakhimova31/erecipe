export default function Modal(): React.ReactElement {
  return (
    <>
      <Header />
      <Main />
      <br />
      <Footer />
    </>
  );
}

// in real case, we would be importing these components from other modules

function Header(): React.ReactElement {
  return <header>Header</header>;
}

function Main(): React.ReactElement {
  return <main>Main</main>;
}

function Footer(): React.ReactElement {
  return <footer>Spa starter</footer>;
}
