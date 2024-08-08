import LoginPage from './pages/LoginPage';
import ErrorPage from './pages/ErrorPage';
import Order from './pages/Order';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='*' element={<ErrorPage />} />
          <Route path='/' element={<LoginPage />} />
          <Route path='/order/:name' element={<Order />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
