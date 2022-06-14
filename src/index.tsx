import * as React from 'react'
import { HashRouter as Router, Route, Routes } from 'react-router-dom'
import { render } from 'react-dom';
import RestaurantList from './restaurant_list'
import RestaurantDetail from './restaurant_detail';
import './index.css'

class App extends React.Component {
  render() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<RestaurantList />} />
          <Route path="/restaurant/:id" element={<RestaurantDetail />} />
        </Routes>
      </Router>
    );
  }
}

render(<App />, document.getElementById('root'));
