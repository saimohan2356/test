import Login from "../src/components/login";
import Register from "./components/register";
import Pricing from "./components/pricingpage";
import './App.css';

function App() {
  return (
    <div className="App">
      <Login/>
      <Register/>
      <Pricing/>
    </div>
  );
}

export default App;
