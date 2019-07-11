import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Provider } from 'react-redux';
import store from './redux';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

function App() {
 

  return (
    <Provider store={store}>
      <div className="container">
        <TodoInput />
        <TodoList />
      </div>
    </Provider>
  );
}

export default App;
