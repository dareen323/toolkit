import logo from "./logo.svg";
import "./App.css";
import Home from "./Home";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="App">
      <Header />

    
       <Home/>
     
      <Footer />
    </div>
  );
}

export default App;
