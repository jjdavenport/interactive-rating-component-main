import data from "./components/assets/data.json";
import Card from "./components/card";
import Footer from "./components/footer";
import Selected from "./components/selected";

function App() {
  return (
    <>
      <Card data={data} />
      <Selected data={data} />
      <Footer />
    </>
  );
}

export default App;
