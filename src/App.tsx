import React from "react";
import Container from "./components/Container/Container";
import Button from "./components/Button/Button";
import Typography from "./components/Typography/Typography";

function App() {
  return (
    <Container>
      <Typography label={"titolo"} variant={"paragraph"} />
      <div style={{ height: 300 }}>
        <Button type={"primary"} label={"ciao un bottone lunghissimo"} />
      </div>
    </Container>
  );
}

export default App;
