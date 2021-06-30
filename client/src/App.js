import './index.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import AnnouncementBar from './components/AnnouncementBar';
import Footer from './components/Footer'

function App() {
  return (
    <>
    <AnnouncementBar/>
    <Navbar/>
      <Home/>
    <Footer/>
    </>
  );
}

export default App;
