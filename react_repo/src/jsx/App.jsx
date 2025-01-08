import { BrowserRouter as Router, Routes, Route, Navigate, Link, Redirect } from "react-router-dom"
import Portfolio from "./pages/Portfolio";
import About from "./pages/About";
import ContactUs from "./pages/ContactUs";
import Header from './components/header';
import Home from './pages/Home';
import NoPage from './pages/NoPage';


function App() {
  return (
    <div className="App">
    <Router>
      <Routes>
          <Route path="/" element={<Header/>}>
            <Route index element={<Home/>}/>
            <Route exact path="portfolio" element={<Portfolio/>}/>
            <Route exact path="about" element={<About/>}/>
            <Route exact path="contactus" element={<ContactUs/>}/>
            <Route exact path="*" element={<NoPage/>}/>
          </Route>

        {/* <Route exact path="/"></Route>
        <Route exact path="/portfolio" element={<Portfolio />}>Portfolio</Route>
        <Route exact path="/about" element={<About />}>About</Route>
        <Route exact path="/contactus" element={<ContactUs />}>Contact Us</Route>
        <Route exact path="*" element={<Navigate to="/"/>}></Route> */}
      </Routes>
    </Router> 
    </div>
  );
}

export default App;
