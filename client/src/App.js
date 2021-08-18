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

import styled from 'styled-components'
import NewAdminPage from './pages/NewAdminPage';
import AdminEditProduct from './adminPages/AdminEditProduct';

function App() {
  
  return (
    <AppStyled>
      <Router>
        {/* <AnnouncementBar/> */}
        <Navbar/>
          <Switch>
          <Route exact path='/cart' component={Cart} />
          <Route exact path='/signup' component={SignUpPage} />
          <Route exact path='/login' component={LoginPage} />
          <Route exact path='/myaccount' component={AccountPage} />
          <Route exact path='/checkout' component={CheckoutPage} />
          <Route exact path='/contactus' component={ContactUsPage} />
          <Route exact path='/about' component={AboutPage} />
          <Route exact path='/oldadmin' component={AdminPage} />
          <Route exact path='/admin' component={NewAdminPage} />
          <Route exact path='/product/:id' component={ProductPage} />
          <Route exact path='/admin/product/view/:id' component={AdminEditProduct} />
          <Route exact path='/admin/product/new/' component={AdminEditProduct} />
          <Route exact path='/search/:keyword' component={SearchResults} />
          <Route exact path='/' component={Home} />
          <Route component={NotFound}/>
          </Switch>
          <Footer/>
      </Router>
    </AppStyled>
  );
}

export default App;

const AppStyled = styled.div`
button{
  i{
    pointer-events: none
  }
}

.bi{
  vertical-align: .225em;
}
`
