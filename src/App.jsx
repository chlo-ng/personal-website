import Home from './components/home/Home';
import Navbar from './components/navbar/Navbar';
import About from './components/about/About';
import Projects from './components/projects/Projects';
import Misc from './components/miscellaneous/Misc';
import Footer from './components/footer/Footer';
import './index.css';

function App() {
  return (
    
    <div>
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Misc />
      <Footer />

      {/* <Router>
        <NavigationBar />
        <Routes>
          <Route path="/" element={<App />}>
            <Route path="/home" element={<Home />} />
          </Route>
        </Routes>
      </Router> */}
    </div>
  );
}

export default App;
