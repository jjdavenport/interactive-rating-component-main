import data from "./components/assets/data.json";
import Card from "./components/card";
import Footer from "./components/footer";
import Selected from "./components/selected";
import { useState } from "react";

function App() {
  const [button, setButton] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    if (button !== null) {
      setSubmitted(true);
    }
  };

  const select = (i) => {
    setButton(i);
  };

  return (
    <>
      {submitted ? (
        <Selected data={data} />
      ) : (
        <Card data={data} button={button} select={select} submit={submit} />
      )}
      <Footer />
    </>
  );
}

export default App;
