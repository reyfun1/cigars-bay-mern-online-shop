import React from 'react'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import './index.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import AnnouncementBar from './components/AnnouncementBar';
import Footer from './components/Footer'
import SearchResults from './pages/SearchResults';
import NotFound from './pages/NotFound';
import ProductPage from './pages/ProductPage';
import Cart from './pages/Cart';

function App() {
  return (
    <>
      <Router>
        <AnnouncementBar/>
        <Navbar/>
          <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/cart' component={Cart} />
          <Route exact path='/product/:id' component={ProductPage} />
          <Route exact path='/search/:keyword' component={SearchResults} />
          <Route component={NotFound}/>

          </Switch>
      </Router>
    <Footer/>
    </>
  );
}

export default App;
