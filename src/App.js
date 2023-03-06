
import Home from "./components/home";
import React from 'react'
import { Provider } from 'react-redux'

import 'antd/dist/reset.css';
import store from './storageBox/main.jsx'
import "./App.css"

function App() {
  return (
    <Provider store={store}>
      <Home />
  </Provider>
  );
}

export default App;
