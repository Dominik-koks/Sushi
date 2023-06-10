import './App.scss';
import Category from './components/category';
import Header from './components/header';

function App() {
  return <div className="body">
    <div className="body-container">
      <Header />
      <Category />
    </div>
  </div>;
}

export default App;
