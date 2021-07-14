import './index.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import AnnouncementBar from './components/AnnouncementBar';
import Footer from './components/Footer'
import SearchResults from './pages/SearchResults';
import NotFound from './pages/NotFound';
import ProductPage from './pages/ProductPage';

function App() {
  return (
    <>
    <AnnouncementBar/>
    <Navbar/>
      {/* <Home/> */}
      {/* <SearchResults/> */}
      {/* <NotFound/> */}
      <ProductPage/>
    <Footer/>
    </>
  );
}

export default App;
