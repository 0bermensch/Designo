import react from "react";
import { Link, Switch, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Link to="/" component={Home} />
      </Switch>

      <Footer />
    </div>
  );
}

export default App;
