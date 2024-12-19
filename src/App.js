import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Layout from './components/Layout';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Give_tesimon from './pages/Give_tesimon';

function App() {
  useEffect(() => {
    Aos.init({
      once: true,
    });
  }, []);
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} /> 
        {/* <Route path='givetest/' element = {<Give_tesimon/>}/> */}
      </Route>
    </Routes>
  );
}

export default App;
