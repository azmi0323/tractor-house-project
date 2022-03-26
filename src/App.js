import './App.css';
import Header from './components/header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Shop from './components/shop/Shop';

function App() {
  return (
    <div className='container'>
      <Header></Header>
      <Shop></Shop>
    </div>
  );
}

export default App;
