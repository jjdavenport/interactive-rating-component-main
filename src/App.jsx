import data from "./components/assets/data.json";
import Ratings from "./components/ratings";
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
      <div className="flex h-full min-h-screen flex-col justify-between bg-veryDarkBlue font-overpass text-custom font-normal">
        <div className="flex flex-1 items-center justify-center p-4">
          {submitted ? (
            <Selected selected={button} data={data} />
          ) : (
            <Ratings
              data={data}
              button={button}
              select={select}
              submit={submit}
            />
          )}
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
