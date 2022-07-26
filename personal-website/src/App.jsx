import Header from './components/Header';
import Navbar from './components/Navbar';
import About from './components/About';
import './index.css';

function App() {
  return (
    
    <div>
      <Header />
      <Navbar />

      {/* <About /> */}

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
