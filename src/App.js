import React from 'react';
import './App.css';
import Home from './Home/Home';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SearchPage from './SearchPage/SearchPage';

function App() {
  return (
    <div className="app">
      <Router>

        <Header></Header>

        <Switch>

          <Route exact path="/">
            <Home />
          </Route>
          <Route path="search">
            <SearchPage></SearchPage>
          </Route>

        </Switch>


        <Footer></Footer>

      </Router>



    </div>
  );
}

export default App;
