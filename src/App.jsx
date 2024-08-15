import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Error from './pages/Error';
import Login from './pages/Login';
import Order from './pages/Order';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='*' element={<Error />} />
          <Route path='/order/:name' element={<Order />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
