import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Home from './pages/home';
import Delivery from './pages/delivery';
import We from './pages/we';
import Header from './components/header';
import Footer from './components/footer';
import FoolItem from './components/foolItem';

function App() {
  return (
    <div className="body">
      <div className="body-container">
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/delivery/' element={<Delivery />} />
          <Route path='/we/' element={<We />} />
          <Route path='/foolItem/:id' element={<FoolItem />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;
