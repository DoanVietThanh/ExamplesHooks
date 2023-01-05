import BaiTap from './components/BaiTap';
import TestComponent from './components/TestComponent/TestComponent';
import { useStore, actions } from './store';
import { useEffect, useRef } from 'react';
import './App.scss';
import VideoHook from './components/useImperativeHandle';
import { Routes, Route, Link, NavLink } from 'react-router-dom';
import HomePage from './pages/Home';
import NewsPage from './pages/News';
import ContactPage from './pages/Contact';
import NotFound from './pages/NotFound';
import productApi from './api/productApi';

function App() {
  // render data from Axios
  useEffect(() => {
    const fetchProducts = async () => {
      const params = {
        _limit: 10,
      };
      const productList = await productApi.getAll(params);
      console.log(productList);
    };
    fetchProducts();
  }, []);

  return (
    <>
      <BaiTap />
      <TestComponent />
      <VideoHook />
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <NavLink to="/news">News</NavLink>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/news" element={<NewsPage />}></Route>
        <Route path="/contact" element={<ContactPage />}></Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
