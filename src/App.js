import { BrowserRouter as Router,Switch,Route } from "react-router-dom";
import Home from "./pages/Home/Home/Home";
import Footer from "./pages/Shared/Footer/Footer";
import Header from "./pages/Shared/Footer/Header/Header";
import Contact from './pages/Home/Home/Contact/Contact';
import Portfolios from "./pages/Portfolios/Portfolios";
import Resume from "./pages/Resume/Resume";
import Blog from "./pages/Blog/Blog";
import About from "./pages/About/About";
import Skills from "./pages/Skills/Skills";
import PortfolioDetails from './pages/PortfolioDetails/PortfolioDetails';


function App() {
  return (
    <div className="App">
      <Router>
       <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/contact">
            <Contact></Contact>
          </Route>
          <Route path="/portfolio">
            <Portfolios/>
          </Route>
          <Route path="/resume">
            <Resume/>
          </Route>
          <Route path="/blog">
            <Blog/>
          </Route>
          <Route exact path="/details/:id">
            <PortfolioDetails/>
          </Route>
          <Route path="/about">
            <About/>
            <Skills/>
          </Route>
          <Route path="*">
            
          </Route>
          
        </Switch>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
