import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Link, Switch } from 'react-router-dom';
import { Apple, Checkout, Ipad, Iphone, Mac, Music, Search, Support, Tv, Watch } from './Components/index';

class App extends Component {
  render() {

  const NoMatch = () => (
      <h3>This page does not exist - Sorry!</h3>
  )

    return (
      <div>
        <nav className="navigation">
          <Link to="/"><Apple /></Link>
          <Link to="/mac"><Mac /></Link>
          <Link to="/ipad"><Ipad /></Link>
          <Link to="/iphone"><Iphone /></Link>
          <Link to="/watch"><Watch /></Link>
          <Link to="/tv"><Tv /></Link>
          <Link to="/music"><Music /></Link>
          <Link to="/support"><Support /></Link>
          <Link to="/search"><Search /></Link>
          <Link to="/checkout"><Checkout /></Link>
          </nav>
        
          <Switch>
            <Route exact path="/" component={Apple}></Route>
            <Route path="/mac" component={Mac}></Route>
            <Route path="/ipad" component={Ipad}></Route>
            <Route path="/iphone" component={Iphone}></Route>
            <Route path="/watch" component={Watch}></Route>
            <Route path="/tv" component={Tv}></Route>
            <Route path="/music" component={Music}></Route>
            <Route path="/support" component={Support}></Route>
            <Route path="/search" component={Search}></Route>
            <Route path="/checkout" component={Checkout}></Route>
            <Route component={NoMatch}></Route>
          </Switch>
        </div>
    );
  }
}

export default App;
