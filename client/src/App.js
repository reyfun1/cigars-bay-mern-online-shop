import './index.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import AnnouncementBar from './components/AnnouncementBar';
import Footer from './components/Footer'
import SearchResults from './pages/SearchResults';

function App() {
  return (
    <>
    <AnnouncementBar/>
    <Navbar/>
      {/* <Home/> */}
      <SearchResults/>
    <Footer/>
    </>
  );
}

export default App;
