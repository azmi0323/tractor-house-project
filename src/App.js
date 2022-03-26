import './App.css';
import Header from './components/header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Shop from './components/shop/Shop';
import Answer from './components/answerPart/Answer';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div>
      <div className='container'>
      <Header></Header>
      <Shop></Shop>
      <Answer></Answer>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
