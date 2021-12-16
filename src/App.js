import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";

function App() {
  return (
    <div className="main-container">
      <div className="page-container">
        <Header />
        <Home />
      </div>
      <Footer />
    </div>
  );
}

export default App;
