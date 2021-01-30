import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import Navbar from "./components/Navbar/Navbar";
import Contact from "./containers/Contact/Contact";
import Home from "./containers/Home/Home";
import Portfolio from "./containers/Portfolio/Portfolio";
import "tailwindcss/tailwind.css";
import Footer from "./components/Footer/Footer";


function App() {
  return (
    <div className="App">
     <Router>
       <Navbar/>
       <Switch>
         <Route path="/Contact" component={Contact}/>
         <Route path="/Portfolio" component={Portfolio}/>
         <Route path="/" component={Home}/>
       </Switch>
       <Footer/>
     </Router>
    </div>
  );
}

export default App;
