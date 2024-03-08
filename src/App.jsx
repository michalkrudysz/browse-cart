import "./App.scss";
import Header from "./components/Header";
import Shop from "./components/Shop";

function App() {
  return (
    <>
      <Header />
      <Shop />
      <footer className="footer">&copy; Michał Krudysz 2024</footer>
    </>
  );
}

export default App;
