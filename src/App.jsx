import {Component} from 'react';
import {BrowserRouter as Router,Route,Routes,Link} from "react-router-dom";
import Home  from './components/home';
import About from './components/about';
import Product from './components/products';
import Contact from './components/contact';

class App extends Component{
    render(){
      return (
        <Router>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path ="/about" element={<About/>} />
            <Route path="/product" element={<Product/>} />
            <Route path="/contact" element={<Contact/>} />
            {/* <Route path="/detail" element={<Detail/>} /> */}
          </Routes>
        </Router>
      );
    }
};

export default App;