//App.js
import { useEffect, useState } from 'react';
import { Routes, Route, useLocation } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Nav from './Components/Navbar';
import Footer from './Components/Footer';
import Home from './Components/Home';
import About from './Components/About';
import Project from './Components/Projects';
import Contact from './Components/Contact';
import MoveToTop from './Components/MoveToTop';
import CircleLoader from 'react-spinners/CircleLoader';
import './App.css';

function App() {
  const [loading, setloading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    setloading(true);
    setTimeout(() => {
      setloading(false);
    }, 1900);
  }, []);

  return (
    <div>
      {loading ? (
        <div className='loader'>
          <CircleLoader color={"#011c38"}
                        loading={true}
                        size={100}
                        aria-label="Loading Spinner"
                        data-testid="loader"
          />
        </div>
      ):(
        <>
          <Nav />
          <MoveToTop location={location}/>
          <TransitionGroup>
            <CSSTransition key={location.key} className="fade" timeout={500}>
              <Routes location={location}>
                <Route path="/" element={<Home />} />
                <Route path="/About" element={<About />} />
                <Route path="/Project" element={<Project />} />
                <Route path="/Contact" element={<Contact />} />
              </Routes>
            </CSSTransition>
          </TransitionGroup>
          <Footer />
        </>
      )}
    </div>
  );
};

export default App;
