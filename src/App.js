import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './pages/Nav';
import Home from './pages/Home';
import Recipe from './pages/Recipe';
import RecipeDetails from './pages/RecipeDetails';
import About from './pages/About';
import Footer from './components/Footer';
import PageNotFound from './pages/PageNotFound'

const App = () => {
  return (
    <div>
      <Router>
        <Nav />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/recipe' component={Recipe} />
          <Route path='/details:name' component={RecipeDetails} />
          <Route path='/about' component={About} />
          <Route component={PageNotFound} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
