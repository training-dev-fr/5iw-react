import './App.css'
import List from './Component/List/List'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import store from './store/store';
import Counter from './Component/Counter/Counter';
import { Provider } from 'react-redux';

function App() {

  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/user" element={<List type="user" />} />
            <Route path="/product" element={<List type="product" />} />
            <Route path="/counter" element={<Counter />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  )
}

export default App
