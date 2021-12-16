import "./App.css";
import Header from "./components/Header";
import Home from "./pages/Home";

function App() {
  return (
    <div className="main-container">
      <div className="page-container">
        <Header />
        <Home />
      </div>
    </div>
  );
}

export default App;
