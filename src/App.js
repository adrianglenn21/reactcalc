import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import About from './pages/About';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import "./App.css";

export class App extends Component {
  render() {
    return (
      <React.Fragment>
        <div>
          <BrowserRouter>
            <Routes>
              <Route index element={<Home />} />
              <Route path='/home' element={<Home />} />
              <Route path='/about' element={<About />} />
              <Route path='*' element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </div>
      </React.Fragment>
    )
  }
}

export default App