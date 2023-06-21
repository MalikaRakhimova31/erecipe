import Button from "@/components/button/button";
import useModalState from "./modal-state";

export default function Modal(): React.ReactElement {
  const { count, increment, decrement } = useModalState();

  return (
    <>
      <Header />
      <Main />
      <Button text="decrement" onClick={decrement} />
      {`\t${count}\t`}
      <Button text="increment" onClick={increment} />
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
