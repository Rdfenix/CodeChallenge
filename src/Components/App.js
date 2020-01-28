import React from 'react';
import './App.css';
import Footer from './footer';
import Header from './header';
import Main from './main';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducer';
import thunk from 'redux-thunk';

const store = applyMiddleware(thunk)(createStore)(rootReducer);

function App() {
  return (
    <Provider store={store}>
      <div className='App'>
        <Header />
        <Main />
        <Footer />
      </div>
    </Provider>
  );
}

export default App;
