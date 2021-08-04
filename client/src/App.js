import React, { useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch, useLocation} from 'react-router-dom'

import './index.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import AnnouncementBar from './components/AnnouncementBar';
import Footer from './components/Footer'
import SearchResults from './pages/SearchResults';
import NotFound from './pages/NotFound';
import ProductPage from './pages/ProductPage';
import Cart from './pages/Cart';
import CheckoutPage from './pages/CheckoutPage'
import SignUpPage from './pages/SignUpPage';
import LoginPage from './pages/LoginPage';
import ContactUsPage from './pages/ContactUsPage';
import AboutPage from './pages/AboutPage';
import AccountPage from './pages/AccountPage';
import AdminPage from './pages/AdminPage';

function App() {
  
  return (
    <>
      <Router>
        {/* <AnnouncementBar/> */}
        <Navbar/>
          <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/cart' component={Cart} />
          <Route exact path='/signup' component={SignUpPage} />
          <Route exact path='/login' component={LoginPage} />
          <Route exact path='/myaccount' component={AccountPage} />
          <Route exact path='/checkout' component={CheckoutPage} />
          <Route exact path='/contactus' component={ContactUsPage} />
          <Route exact path='/about' component={AboutPage} />
          <Route exact path='/admin' component={AdminPage} />
          <Route exact path='/product/:id' component={ProductPage} />
          <Route exact path='/search/:keyword' component={SearchResults} />
          <Route component={NotFound}/>
          </Switch>
          <Footer/>
      </Router>
      
    
    </>
  );
}

export default App;
