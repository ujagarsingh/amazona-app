import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import PageNotFound from './screens/PageNotFound';

function App() {
  return (
    <Router>
      <div className="grid-container">
        <header>
          <div className="row">
            <a className="brand" href="/">amazona</a>
          <div>
            <a href="/cart">Cart</a>
            <a href="/signin">Sign In</a>
          </div>
          </div>
        </header>
        <main>
          {/* <HomeScreen></HomeScreen> */}
          <Routes>
            <Route exact path='/' component={HomeScreen} ></Route>
            <Route path='/product/:id' component={ProductScreen} ></Route>
            <Route path='*' component={PageNotFound} ></Route>
          </Routes>
        </main>
        <footer className="row center">
          All right Reserved. @2021 (18-Nov.)
        </footer>
      </div>
    </Router>
  );
}

export default App;
